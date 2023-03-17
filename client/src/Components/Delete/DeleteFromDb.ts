
import { ErrorMessagesAPI } from '../ErrorHandler/ErrorMessages'
const { error400, error500, errorFetch } = ErrorMessagesAPI

export const DeleteFromDb = async (url: string, imdbID: string) => {

    const postRequestOptions: RequestInit = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: imdbID }),
    };

    try {
        const response: Response = await fetch(url, postRequestOptions)

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
