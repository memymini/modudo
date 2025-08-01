export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="bg-surface-2 flex h-auto w-642 items-center justify-center px-100 py-68">
        <div className="h-full w-full">{children}</div>
      </div>
    </div>
  );
}
