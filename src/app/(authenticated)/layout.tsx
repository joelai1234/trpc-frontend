import { Header } from "@/components/Header";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 px-4 sm:px-6 md:px-8">
        {children}
      </main>
    </div>
  );
} 