import Image from 'next/image'
import "@/styles/Navbar.css"

export default function Navbar() {
  return (
    <div className="flex w-4/5 mx-auto items-center justify-between p-4 rounded-2xl">
      <Image
        id='image'
        src="/images.png"
        alt="fortnite"
        width={75}
        height={75}
      />
      <nav id="navbar" className="flex gap-4">
        <a className="nav-text" href='#about'>
          Sobre mi
        </a>
        <a className="nav-text" href='#about'>
          Tech stack
        </a>
        <a className="nav-text" href='#about'>
          Proyectos
        </a>
        <a className="nav-text" href='#about'>
          Contacto
        </a>
      </nav>
    </div>
  )
}
