import { RequestResponse } from 'types';

/**
 * Returns a HTTP Error Response based on params
 * @param statusCode Status code
 * @param message Server message
 * @param data Server Data
 * @returns HTTP Response
 */
export default function apiResponse(statusCode: number, mss?:string,  err?: unknown, data?: any) : RequestResponse {
    let message = mss;
    if(err) {
        if (err instanceof Error) {
            message = err.message;
        } else {
            message = 'Unknown error';
        }
    }

    return {
        message,
        statusCode,
        data
    };
}