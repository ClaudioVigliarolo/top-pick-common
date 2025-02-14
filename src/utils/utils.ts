import { AxiosError } from "axios";
import { convert } from "html-to-text";
import { FirebaseError } from "@firebase/util";

export function getErrorMessage(error: Error): string {
    if (error instanceof FirebaseError) {
        return "Oops! Something went wrong!";
    }
    if (error instanceof AxiosError) {
        const axiosError = error as AxiosError;
        if (!axiosError.response || axiosError.response.status === 500) {
            return "Oops! Something went wrong!";
        }
        if (error.response && error.response.data) {
            return error.response.data;
        }
    }

    return error.message;
}

export function parseText(input: string): string {
    if (!input) return "";
    const content = convert(input);
    return content;
}