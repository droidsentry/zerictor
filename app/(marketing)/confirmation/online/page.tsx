import { Metadata } from "next";
import ConfirmationScreen from "../confirmation-screen";
import { getBaseURL } from "@/lib/base-url";

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: "オンライン相談",
  description: "オンライン相談の予約確認ページです。",
};

export default function Page() {
  return (
    <div className="flex h-dvh flex-col items-center p-4 pt-33 backdrop-blur-sm">
      <ConfirmationScreen type="online" />
    </div>
  );
}
