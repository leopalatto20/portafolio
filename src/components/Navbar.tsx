"use client";
import Image from "next/image";
import { useState } from "react";
import "@/styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-xs bg-pizarra/80">
      <div className="flex w-4/5 mx-auto items-center justify-between p-4 rounded-2xl">
        <Image
          id="image"
          src="/gato.jpeg"
          alt="fortnite"
          width={75}
          height={75}
          className="rounded-full"
        />

        <button
          className="md:hidden text-miel focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav id="navbar" className="hidden md:flex gap-5">
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

      {isOpen && (
        <div className="md:hidden w-full bg-pizarra/90 pb-4">
          <div className="flex flex-col items-center gap-4 pt-2">
            <a
              className="nav-text text-miel hover:text-azul-sec w-full text-center py-2"
              href="#about"
              onClick={() => setIsOpen(false)}
            >
              Sobre mi
            </a>
            <a
              className="nav-text text-miel hover:text-azul-sec w-full text-center py-2"
              href="#stack"
              onClick={() => setIsOpen(false)}
            >
              Tech stack
            </a>
            <a
              className="nav-text text-miel hover:text-azul-sec w-full text-center py-2"
              href="#proyectos"
              onClick={() => setIsOpen(false)}
            >
              Proyectos
            </a>
            <a
              className="nav-text text-miel hover:text-azul-sec w-full text-center py-2"
              href="#about"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
