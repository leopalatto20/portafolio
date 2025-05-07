import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default function Home() {
  return (
    <div className="bg-pizarra h-full pt-28">
      <Navbar /> {/*Ignorar esto*/}
      <Sidebar />
      <main className="flex min-h-screen min-w-full flex-col items-center justify-center">
        <section id="about" className="flex justify-center w-3/4 gap-16">
          <div>fortnite</div>
          <div>forntite2</div>
        </section>
      </main>
    </div>
  );
}
