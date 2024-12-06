import TimelineItem from "./components/TimeLine";
import SocialButton from "./components/SocialButton";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 text-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 animate-fade-in">
            Joaquín Bastías
          </h1>
          <p className="text-xl animate-fade-in-delay">
            Desarrollador Web Full Stack
          </p>
          <div className="mb-12 text-center animate-fade-in-delay-2">
            <p className="text-lg text-gray-300">
              Apasionado por crear experiencias web innovadoras y eficientes.
              Especializado en React, Next.js y Node.js.
            </p>
          </div>
        </header>

        <main className="space-y-8">
          <TimelineItem
            year="2020 - Presente"
            title="Desarrollador Frontend Senior"
            company="Empresa Innovadora"
            description="Liderando el desarrollo de aplicaciones web de última generación utilizando React y Next.js. Implementación de diseños responsivos y accesibles."
          />
          <TimelineItem
            year="2018 - 2020"
            title="Desarrollador Web Full Stack"
            company="Startup Tecnológica"
            description="Desarrollo full stack de aplicaciones web utilizando Node.js en el backend y React en el frontend. Implementación de APIs RESTful y bases de datos NoSQL."
          />
          <TimelineItem
            year="2017 - 2018"
            title="Diseñador UX/UI Junior"
            company="Agencia de Diseño Digital"
            description="Creación de wireframes, prototipos y diseños de interfaz de usuario para aplicaciones web y móviles. Colaboración estrecha con equipos de desarrollo."
          />
          <TimelineItem
            year="2016"
            title="Proyecto Personal Destacado"
            company="Portfolio Interactivo"
            description="Desarrollo de un portfolio personal utilizando tecnologías web modernas. Implementación de animaciones avanzadas y diseño responsivo."
          />
        </main>

        <footer className="mt-12 flex justify-center space-x-4">
          <SocialButton icon="github" href="https://github.com/tuusuario" />
          <SocialButton
            icon="linkedin"
            href="https://linkedin.com/in/tuusuario"
          />
          <SocialButton icon="mail" href="mailto:tu@email.com" />
        </footer>
      </div>
    </div>
  );
}
