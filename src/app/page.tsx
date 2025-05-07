import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default function Home() {
  return (
    <div className="bg-pizarra h-full ">
      <Navbar /> {/*Ignorar esto*/}
      <Sidebar />
      <main className="flex min-h-screen min-w-full flex-col items-center justify-center">
        <section
          id="about"
          className="text-center grid md:grid-cols-2 grid-cols-1 items-center w-3/4 "
        >
          <div className="flex flex-col items-start">
            <h1 className="text-3xl">Hola, soy</h1>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-miel to-yellow-400">
              Leonardo Palatto
            </h1>
          </div>
          <div>
            <button className="relative border-2 border-miel bg-transparent text-miel text-2xl rounded-2xl p-5 hover:bg-miel hover:text-black hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-lg overflow-hidden ">
              <a
                href="https://drive.google.com/file/d/1AO4ORIn8ag3t5IfbKIehQ3z2S5q6sO4l/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Curriculum Vitae
              </a>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
