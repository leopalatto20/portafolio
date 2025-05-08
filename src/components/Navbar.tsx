import Image from "next/image";
import "@/styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-xs bg-pizarra/80 ">
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
          <a className="nav-text text-miel hover:text-azul-sec" href="#about">
            Sobre mi
          </a>
          <a className="nav-text text-miel hover:text-azul-sec" href="#stack">
            Tech stack
          </a>
          <a
            className="nav-text text-miel hover:text-azul-sec"
            href="#proyectos"
          >
            Proyectos
          </a>
          <a className="nav-text text-miel hover:text-azul-sec" href="#about">
            Contacto
          </a>
        </nav>
      </div>
    </div>
  );
}
