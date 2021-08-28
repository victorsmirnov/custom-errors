/**
 * This is a base class for all application errors. It creates an error which contains error description
 * following RFC 7807 standard. See https://datatracker.ietf.org/doc/html/rfc7807
 *
 * Extend this class and define details for real application errors.
 */
export class ApplicationError extends Error {
    /**
     * A human-readable description of the specific error.
     */
    public readonly errorDetail: string;

    /**
     * A short, human-readable title for the general error type; the title should not change for given types.
     */
    public readonly errorTitle: string;

    /**
     * A URL to a document in GitHub project repository describing the error condition.
     */
    public readonly errorType: string;

    /**
     * HTTP status code for the response.
     */
    public readonly httpStatus: number;

    /**
     * Additional information about the error.
     */
    public readonly payload?: any;

    /**
     * Create application error
     * @param errorDetail
     * @param errorTitle
     * @param errorType
     * @param httpStatus
     * @param payload
     */
    constructor(errorDetail: string, errorTitle: string, errorType: string, httpStatus: number, payload?: any) {
        super(errorDetail);
        this.errorDetail = errorDetail;
        this.errorTitle = errorTitle;
        this.errorType = errorType;
        this.httpStatus = httpStatus;
        this.payload = payload;
        this.name = this.constructor.name;
    }
}
