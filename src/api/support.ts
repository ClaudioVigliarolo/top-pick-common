import axios from "axios";
import { SupportSubject } from "../interfaces";
import { LibraryParams } from "../config/config";

export async function contactSupport(token: string, subject: SupportSubject, description: string): Promise<void> {
    await axios.post(`${LibraryParams.hostname}/api/support/contact-support`, {
        subject,
        description,
    }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
}