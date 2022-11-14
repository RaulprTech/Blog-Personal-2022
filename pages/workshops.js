import React from 'react'
import Timeline from '@/components/Profile/Timeline'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

const talleres = [
  {
    title: 'Taller: Programación de Microcontroladores con C',
    place: 'Instituto Tecnologico de Lerma',
    type: 'professional',
    date: 'Diciembre de 2021',
    description: 'Taller introductorio de programacion orientada a objetos con Processing',
    current: false,
  },
  {
    title: 'Taller: Programación de Arduino con Javascript',
    place: 'Instituto Tecnologico de Lerma',
    type: 'professional',
    date: 'Diciembre de 2019',
    description: 'Taller sobre el uso de Node y Johnny Five para programar Arduinos con Javascript',
    current: false,
  },
  {
    title: 'Aprendiendo de robotica con Iron-Man',
    place: 'CreativeFest',
    type: 'professional',
    date: 'Mayo de 2019',
    description: 'Taller sobre el uso de Node y Johnny Five para programar Arduinos con Javascript',
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

export default function workshops() {
  return (
    <>
      <PageSEO
        title={`Blog - ${siteMetadata.author}`}
        description={`Trayectoria Profesional y Escolar de ${siteMetadata.author}`}
      />
      <article className="items-start space-y-2 xl:grid xl:grid-cols-4 xl:gap-x-8 xl:space-y-0">
        <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-4">
          <Timeline title="Talleres" jobs={talleres} />
        </div>
      </article>
    </>
  )
}
