

import { ErrorMessagesAPI } from '../ErrorHandler/ErrorMessages'
const { error400, error500, errorFetch } = ErrorMessagesAPI

export const OmdbApiFetch = async <T>(url: string): Promise<T | string | undefined> => {
    try {
        const response: Response = await fetch(url)

        if (!response.ok) {
            if (response.status === 400) throw new Error(error400)
            else if (response.status === 500) throw new Error(error500)
            else {
                throw new Error(errorFetch)
            }
        }

        const data = await response.json()

        return data;

    } catch (err: unknown) {
        let message: string = "unknown error";
        if (err instanceof Error) message = err.message;
        return message;
    }

}
