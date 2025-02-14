import axios from "axios";
import { ReportReason } from "../interfaces";
import { LibraryParams } from "../config/config";

export async function reportQuestion(token: string, question_id: number, reason: ReportReason): Promise<void> {
  await axios.post(`${LibraryParams.hostname}/api/content/reports`, {
    question_id: question_id,
    reason: reason,
  }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}