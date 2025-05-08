import Image from "next/image";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Project from "@/components/Project";
import Tech from "@/components/Tech";
export default function Home() {
  return (
    <div className="bg-pizarra h-full ">
      <Navbar /> {/*Ignorar esto*/}
      <Sidebar />
      <main className="flex min-h-screen min-w-full flex-col items-center justify-center">
        <section
          id="about"
          className="min-h-screen gap-4 py-32 lg:py-0 md:py-20 text-center grid md:grid-cols-2 grid-cols-1 items-center w-full md:w-3/4 px-4 "
        >
          <div className="flex flex-col items-start">
            <h1 className="text-3xl">Hola, soy</h1>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-miel to-yellow-400">
              Leonardo Palatto
            </h1>
            <h1 className="text-3xl">Desarrollador fullstack</h1>
            <p className="text-justify text-lg">
              Soy Leonardo Pérez Palatto, desarrollador fullstack con un interés
              especial en DevOps. Actualmente curso el cuarto semestre de
              Ingeniería en Tecnologías Computacionales en el Tecnológico de
              Monterrey. Comencé a programar en la preparatoria, donde aprendí a
              crear páginas web con HTML, JavaScript y CSS. Más adelante, me
              adentré en Python para profundizar en el desarrollo web. He
              participado en diversos hackatones, en los cuales siempre he
              obtenido buenos resultados. En estos eventos no solo participo
              como desarrollador web, sino que también implemento modelos de
              lenguaje (LLMs) y técnicas de visión por computadora para crear
              soluciones con aplicaciones reales.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="md:w-3/4 w-0 md:h-80 sm:h-0 relative">
              <Image
                src="/images.png"
                alt="mifoto"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <button className="mt-4 relative border-2 border-miel bg-transparent text-miel text-2xl rounded-2xl p-5 hover:bg-miel hover:text-black hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-lg overflow-hidden w-3/4">
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
        <section
          id="stack"
          className="relative flex min-h-screen w-full flex-col items-center gap-4 py-20 md:py-0 scroll-mt-36 px-4"
        >
          <div className="text-center">
            <p className="text-4xl text-bold text-white">Mi tech stack</p>
            <p className="p-3 text-3xl text-white">
              Tecnologias con las que trabajo normalmente.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mx-auto justify-center">
            <Tech
              image="/typescript.png"
              text="Typescript"
              textColor="#197ABF"
            />
            <Tech
              image="/javascript.png"
              text="Javascript"
              textColor="#E2C209"
            />
            <Tech image="/python.png" text="Python" textColor="#0076BC" />
            <Tech image="/go.png" text="Go" textColor="#73CEDD" />
            <Tech image="/next.svg" text="Next" />
            <Tech image="/docker.png" text="Docker" textColor="#28B8EB" />
            <Tech
              image="/kubernetes.png"
              text="Kubernetes"
              textColor="#2E6DE7"
            />
            <Tech image="/aws.png" text="Aws" textColor="#F90" />
            <Tech image="/vercel.png" text="Vercel" textColor="#FFFFFF" />
            <Tech
              image="/googlecloud.png"
              text="Google Cloud"
              textColor="#ED422D"
            />
          </div>
        </section>
        <section
          id="proyectos"
          className="relative flex min-h-screen w-full flex-col items-center gap-4 py-20 md:py-0 scroll-mt-36 px-4 pb-24"
        >
          <div className="text-center">
            <p className="text-4xl text-bold text-white">Mis proyectos</p>
            <p className="p-3 text-3xl text-white">
              Algunos de mis proyectos favoritos en los que he trabajado.
            </p>
          </div>
          <div className="md:w-3/5 w-full grid md:grid-cols-2 grid-cols-1 gap-10 p-4 mx-auto justify-items-center ">
            <Project
              image="/evergreen.jpg"
              title="Evergreen"
              link="https://devpost.com/software/ever-green-qt89uf"
              text="Evergreen fue el proyecto con el que gané el primer hackaton al 
              que fui. Este proyecto tiene como objetivo facilitar el proceso de plantar un arbol para cualquier persona."
            />
            <Project
              image="/identifeye.jpg"
              title="Identifeye"
              link="https://github.com/han-lovers/IdentifEye"
              text="Identifeye es el proyecto con el cual gané mi segundo hackaton. 
              Se implementó una busqueda mediante embeddings en un catalogo con más de 
              70,000 imagenes, permitiendonos encontrar el producto buscado con una imagen 
              y generando recomendaciones mediante ese resultado. "
            />
            <Project
              image="/operacion.png"
              title="Operacion escape"
              link="https://github.com/leopalatto20/OperacionEscape.git"
              text="Operacion escape es un sistema de informacion desarrollado para una escuela local,
              el cual tiene un videojuego educativo para reforzar conocimientos de matematicas en los alumnos
              , el cual envia los resultados a un dashboard para que el el maestro pueda ver el progreso de sus alumnos
              y tomar decisiones a partir de los datos mostrados."
            />
            <Project
              image="/dand.png"
              title="Dungeons & Dragons"
              link="https://github.com/leopalatto20/Dungeons_And_Dragons.git"
              text="Este juego es mi proyecto de estructuras de datos y algoritmos fundamentales, es un juego
              de Dungeons & Dragons basado en texto, completamente funcional y jugable, usando principios como
              lectura de archivos y programacion orientada a objetos para tener un codigo escalable y mantenible."
            />
          </div>
        </section>
        <section
          id="contacto"
          className="relative w-full flex flex-col items-center justify-center py-20 scroll-mt-36 px-4 min-h-[80vh]"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Contáctame</h2>
          </div>
          <div className="w-full max-w-4xl grid md:grid-cols-2 grid-cols-1 gap-12">
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-miel/10 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-miel"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Correo electrónico
                  </h3>
                  <a
                    href="mailto:leopalatto20@gmail.com"
                    className="text-gray-300 hover:text-miel transition-colors"
                  >
                    leopalatto20@gmail.com
                  </a>
                  <a
                    href="mailto:A01665462@tec.mx"
                    className="block text-gray-300 hover:text-miel transition-colors"
                  >
                    A01665462@tec.mx
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-miel/10 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-miel"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Teléfono</h3>
                  <a
                    href="tel:+525627452472"
                    className="text-gray-300 hover:text-miel transition-colors"
                  >
                    +52 56 2745 2472
                  </a>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="flex flex-col items-center space-y-8">
              <h3 className="text-xl font-semibold text-white text-center md:text-left">
                Mis redes sociales
              </h3>
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/leonardo-p%C3%A9rez-palatto-05b86030b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 transition-all duration-300 p-4 rounded-lg flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <img
                    className="w-8 h-8 object-contain"
                    src="/linkedin.png"
                    alt="LinkedIn"
                  />
                  <span className="ml-2 text-white hidden md:inline">
                    LinkedIn
                  </span>
                </a>

                <a
                  href="https://github.com/leopalatto20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 p-4 rounded-lg flex items-center justify-center"
                  aria-label="GitHub"
                >
                  <img
                    className="w-8 h-8 object-contain"
                    src="/github.png"
                    alt="GitHub"
                  />
                  <span className="ml-2 text-white hidden md:inline">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
