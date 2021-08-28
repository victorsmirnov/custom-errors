# JavaScript error classes

Simple TypeScript exception for backend NodeJs applications following RFC 7807.

## Motivation

* Reference implementation to reuse in my project or to share with colleagues.
* Experiment with [RFC 7807](https://datatracker.ietf.org/doc/html/rfc7807).

## Requirements

Custom error class should behave like standard NodeJs [Error class](https://nodejs.org/api/errors.html#errors_class_error).
Thus it should inherit from the `Error` class and correctly populate `code`, `message` and `stack` properties.
