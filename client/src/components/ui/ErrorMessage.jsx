export default function ErrorMessage({ message = "Something went wrong." }) {
  return (
    <div className="rounded-2xl border border-adech-danger/30 bg-adech-danger/10 p-6 text-sm text-adech-danger">
      {message}
    </div>
  );
}
