import axios from "axios";
import { Lang } from "../interfaces/app";
import { LibraryParams } from "../config/config";

export const getMaintenanceStatus = async (lang: Lang, token: string): Promise<boolean> => {
  const response = await axios.get(`${LibraryParams.hostname}/api/db/maintenance/` + lang, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateMaintenance = async (value: boolean, lang: Lang, token: string): Promise<void> => {
  await axios.put(
    `${LibraryParams.hostname}/api/db/maintenance`,
    {
      value,
      lang,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};