import ConfirmationScreen from "../confirmation-screen";

export default function Page() {
  return (
    <div className="flex h-dvh flex-col items-center p-4 pt-33">
      <ConfirmationScreen type="online" />
    </div>
  );
}
