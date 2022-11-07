import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import IconCard from '@/components/IconCard'
import Skills from '@/components/Skills'
import Quote from '@/components/Quotes/quote'
import { useRouter } from 'next/router'
import Timeline from '@/components/Profile/Timeline'

// import WorkHistory from '@/components/Profile/Work-history'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter
  const router = useRouter()

  const skills = {
    html: 1,
    css: 1,
    js: 1,
    react: 1,
    next: 1,
    tailwind: 1,
    node: 1,
    python: 1,
  }

  const jobs = [
    {
      title: 'Aplicando a trabajos',
      place: 'Independence',
      type: 'professional',
      date: '20 de Octubre de 2022',
      description: 'Escuchando ofertas, disponible para codear',
      current: true,
    },
    {
      title: 'Taller: Programación de Microcontroladores con C',
      place: 'Instituto Tecnologico de Lerma',
      type: 'professional',
      date: 'Diciembre de 2021',
      description: 'Taller introductorio de programacion orientada a objetos con Processing',
      current: false,
    },
    {
      title: 'Web Developer',
      place: 'TMaker',
      type: 'professional',
      date: 'Noviembre de 2020',
      description: 'Desarrollo de Sitio promocional para evento online organizado por Game Center',
      current: false,
    },
    {
      title: 'Web Developer',
      place: 'TMaker',
      type: 'professional',
      date: 'Junio de 2020',
      description:
        'Diseño y Desarrollo de sitio web MVP para negocio inmobiliario con Next, React y Tailwind',
      current: false,
    },
    {
      title: 'Full Stack Developer Junior',
      place: 'Flexxo',
      type: 'professional',
      date: 'Enero de 2020',
      description:
        'Diseño y Desarrollo de sitio web de reservas, responsive design conectado a Base de Datos No-SQL de Firebase',
      current: false,
    },
    {
      title: 'Taller: Programación de Arduino con Javascript',
      place: 'Instituto Tecnologico de Lerma',
      type: 'professional',
      date: 'Diciembre de 2019',
      description:
        'Taller sobre el uso de Node y Johnny Five para programar Arduinos con Javascript',
      current: false,
    },
    {
      title: 'Aprendiendo de robotica con Iron-Man',
      place: 'CreativeFest',
      type: 'professional',
      date: 'Mayo de 2019',
      description:
        'Taller sobre el uso de Node y Johnny Five para programar Arduinos con Javascript',
      current: false,
    },
    {
      title: 'Desarrollador Android',
      place: 'Hackathon Campeche',
      type: 'professional',
      date: 'Agosto de 2017',
      description:
        'Colabore en el desarrollo de una aplicación para la participacion ciudadana en situaciones de desastres naturales.',
      current: false,
    },
    {
      title: 'Cofundador y Desarrollador Movil en Kaxbi App',
      place: 'Campeche',
      type: 'professional',
      date: 'Enero de 2017',
      description: 'Emprendimiento de Aplicacion de Realidad Virtual con Geolocalizacion',
      current: false,
    },
    {
      title: 'Taller: Programación Básica con Arduino',
      place: 'Instituto Tecnologico de Lerma',
      type: 'professional',
      date: 'Diciembre de 2016',
      description: 'Taller de principios basicos de la programacion de placas Arduino UNO',
      current: false,
    },
    {
      title: 'Taller: Introducción a Processing',
      place: 'Instituto Tecnologico de Lerma',
      type: 'professional',
      date: 'Junio de 2016',
      description: 'Taller introductorio de programacion orientada a objetos con Processing',
      current: false,
    },
  ]

  const edu = [
    {
      title: 'Msc Ingenieria Electrica en Diseño Electronico',
      place: 'CINVESTAV Gdl',
      type: 'educational',
      date: 'Agosto de 2023',
      description:
        'Diseñando un acelerador de Hardware para Swin Transformer con aplicacion en el diagnostico temprano de Retinopatia Diabetica',
      current: false,
    },
    {
      title: 'Ingeniería Electrónica',
      place: 'Instituto Tecnologico de Lerma',
      type: 'educational',
      date: 'Diciembre de 2018',
      description: 'Licenciatura en Ingenieria Electrónica con especialidad en Telematica',
      current: false,
    },
    {
      title: 'Tecnico en Mecatronica',
      place: 'CECYTEC',
      type: 'educational',
      date: 'Julio de 2013',
      description:
        'Graduacion de preparatoria tecnica con la especialidad de Tecnico en Mecatronica',
      current: false,
    },
  ]

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <section className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-primary-500 dark:text-secondary-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Sobre mi
          </h1>
        </div>
        <article className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
            <div className="grid grid-cols-1 grid-rows-2 gap-3 py-12">
              <IconCard message="Descargar CV" link={`${router.basePath}/static/CV/CV.pdf`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 -rotate-6 dark:text-gray-100 dark:group-hover:text-green-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </IconCard>
              <IconCard message="Perfil de Platzi" link="https://platzi.com/p/RaulprTech/">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-6 w-6 -rotate-6 dark:text-gray-100 dark:group-hover:text-green-300"
                >
                  <title>Platzi</title>
                  <path d="M10.6392 1.127L2.486 9.282a3.842 3.842 0 000 5.4361l8.1552 8.1552a3.842 3.842 0 005.4361 0l2.719-2.718-2.719-2.7181-2.718 2.718-8.1562-8.1551 8.1552-8.1552 5.437 5.4371-5.437 5.4361 2.718 2.719 5.4371-5.437a3.842 3.842 0 000-5.4372l-5.448-5.436a3.828 3.828 0 00-5.4252 0z" />
                </svg>
              </IconCard>
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-1">
            <Skills tags={skills} />
            <Timeline title="Trayectoria Escolar" jobs={edu} />
            <Quote />
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <Timeline title="Trayectoria Profesional" jobs={jobs} />
          </div>
        </article>
      </section>
    </>
  )
}
