import React from 'react'
import Timeline from '@/components/Profile/Timeline'
import Skills from '@/components/Skills'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { getAllTags } from '@/lib/tags'

export async function getStaticProps() {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

const skills = {
  html: 0,
  css: 0,
  react: 0,
  next: 0,
  tailwind: 0,
  python: 0,
}

const jobs = [
  {
    title: 'Web Developer',
    place: 'TMaker',
    type: 'professional',
    date: 'Junio de 2020',
    description:
      'Diseño y Desarrollo de sitio web MVP para negocio inmobiliario con Next, React y Tailwind y sitio promocional para evento online organizado por Game Center',
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
]

const edu = [
  {
    title: 'Msc Ingenieria Electrica en Diseño Electronico',
    place: 'CINVESTAV Gdl',
    type: 'educational',
    date: 'Agosto de 2023',
    description:
      'Diseñando un acelerador de Hardware para Swin Transformer con aplicacion en el diagnostico temprano de Retinopatia Diabetica',
    current: true,
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
    description: 'Graduacion de preparatoria tecnica con la especialidad de Tecnico en Mecatronica',
    current: false,
  },
]

export default function trayectoria() {
  return (
    <>
      <PageSEO
        title={`Blog - ${siteMetadata.author}`}
        description={`Trayectoria Profesional y Escolar de ${siteMetadata.author}`}
      />
      <article className="items-start space-y-2 xl:grid xl:grid-cols-4 xl:gap-x-8 xl:space-y-0">
        <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
          <Timeline title="Estudios" jobs={edu} />
          <Skills tags={skills} />
        </div>
        <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
          <Timeline title="Trabajos" jobs={jobs} />
        </div>
      </article>
    </>
  )
}
