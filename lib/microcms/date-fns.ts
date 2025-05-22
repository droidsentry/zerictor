import { format } from "date-fns";
import { ja } from "date-fns/locale";

export const formatToJapaneseDateTime = (
  timestamp: string | number = Date.now()
) => {
  const formattedData = format(timestamp, "yyyy/MM/dd (E)", {
    locale: ja,
  });
  return formattedData;
};
