import Sidebar from "../Sidebar";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <aside className="w-60 bg-blue-600 text-white p-4 min-h-screen flex flex-col gap-8">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="bg-blue-600 rounded-xl w-48 h-32 flex flex-col items-center justify-center mb-2">
            <Image src="/icons/globe.svg" alt="Acme Logo" width={48} height={48} className="inline-block mb-2" />
            <span className="text-3xl font-bold text-white align-middle" style={{fontFamily: 'serif'}}>Acme</span>
          </div>
        </div>
        <Sidebar />
      </aside>
      <main className="flex-1 p-6 min-h-screen flex flex-col">
        {children}
      </main>
    </div>
  );
}
