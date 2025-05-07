import Image from "next/image";
import "@/styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 w-full backdrop-blur-md bg-pizarra/80 bg-linear-to-b from-black/20 to-pizarra">
      <div className="flex w-4/5 mx-auto items-center justify-between p-4 rounded-2xl ">
        <Image
          id="image"
          src="/gato.jpeg"
          alt="fortnite"
          width={75}
          height={75}
          className="rounded-full"
        />
        <nav id="navbar" className="flex gap-5">
          <a className="nav-text" href="#about">
            Sobre mi
          </a>
          <a className="nav-text" href="#about">
            Tech stack
          </a>
          <a className="nav-text" href="#about">
            Proyectos
          </a>
          <a className="nav-text" href="#about">
            Contacto
          </a>
        </nav>
      </div>
    </div>
  );
}
