// src/components/SnapshotButton/index.tsx

export default function SnapshotButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return <button className="bg-red-500">{children}</button>;
}
