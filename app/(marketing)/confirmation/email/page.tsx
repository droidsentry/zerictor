import { Metadata } from "next";
import ConfirmationScreen from "../confirmation-screen";
import { getBaseURL } from "@/lib/base-url";

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: "メール相談の完了",
  description: "メール相談の完了ページです。",
};

export default function Page() {
  return (
    <div className="flex h-dvh flex-col items-center p-4 pt-33 backdrop-blur-sm">
      <ConfirmationScreen type="email" />
    </div>
  );
}
