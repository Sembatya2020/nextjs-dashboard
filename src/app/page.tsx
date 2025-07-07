
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Acme Dashboard</h1>
        <p className="text-lg text-gray-600">This is your starting point for building a modern dashboard app with Next.js and React.</p>
      </main>
      <Footer />
    </div>
  );
}
