import Image from 'next/image'

export default function Navbar() {
  const textProps = 'text-gray-500 transition-all duration-300 hover:scale-105 hover:text-black hover:ease-in-out'
  return (
    <div className="flex w-4/5 mx-auto items-center justify-between">
      <Image
        src="/images.png"
        alt="fortnite"
        width={50}
        height={50}
      />
      <nav id="navbar" className="bg-white">
        <a className={textProps} href='#about'>
          Sobre mi
        </a>
        <a className={textProps} href='#about'>
          Tech stack
        </a>
        <a className={textProps} href='#about'>
          Proyectos
        </a>
        <a className={textProps} href='#about'>
          Contacto
        </a>
      </nav>
    </div>
  )
}
