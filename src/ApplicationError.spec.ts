import {StatusCodes} from "http-status-codes";
import {isNativeError} from "util/types";
import {ApplicationError} from "./ApplicationError.js";
import "jest-extended";

test("ApplicationError has expected behaviour", () => {
    const errorDetail = "Unknown application error detail";
    const errorTitle = "Unknown application error title";
    const errorType = "about:blank";
    const httpStatus = StatusCodes.INTERNAL_SERVER_ERROR;
    try {
        // noinspection ExceptionCaughtLocallyJS
        throw new ApplicationError(errorDetail, errorTitle, errorType, httpStatus);
    } catch (error) {
        // Make sure that ApplicationError looks like a native Error.
        expect(isNativeError(error)).toBeTrue();

        // Check common Error properties.
        if (!(error instanceof Error)) {
            fail("Error should be thrown.");
        }
        expect(error.message).toStrictEqual(errorDetail);
        expect(error.name).toStrictEqual(ApplicationError.name);
        if (error.stack === undefined) {
            fail("Error stack should be set.");
        }
        expect(error.stack).toBeString();
        expect(error.stack.split("\n").shift()).toStrictEqual(`${ApplicationError.name}: ${errorDetail}`);
        expect(error.toString()).toStrictEqual(`${ApplicationError.name}: ${errorDetail}`);

        // Check ApplicationError properties.
        if (!(error instanceof ApplicationError)) {
            fail("ApplicationError should be thrown.");
        }
        expect(error.errorDetail).toStrictEqual(errorDetail);
        expect(error.errorTitle).toStrictEqual(errorTitle);
        expect(error.errorType).toStrictEqual(errorType);
        expect(error.httpStatus).toStrictEqual(httpStatus);
    }
});
