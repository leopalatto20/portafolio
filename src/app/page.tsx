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
          className="h-screen text-center grid md:grid-cols-2 grid-cols-1 items-center w-3/4 "
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
          <div className="flex flex-col items-end">
            <div className="w-3/4 h-80 relative">
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
          className="relative flex min-w-full flex-col items-center gap-4 h-screen scroll-mt-36"
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
          className="relative flex min-w-full flex-col items-center gap-4 h-screen scroll-mt-36"
        >
          <div className="text-center">
            <p className="text-4xl text-bold text-white">Mis proyectos</p>
            <p className="p-3 text-3xl text-white">
              Algunos de mis proyectos favoritos en los que he trabajado.
            </p>
          </div>
          <div className="w-3/5 grid md:grid-cols-2 grid-cols-1 gap-10 p-4 mx-10">
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
      </main>
    </div>
  );
}
