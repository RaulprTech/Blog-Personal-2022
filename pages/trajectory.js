import React from 'react'
import Timeline from '@/components/Profile/Timeline'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import LayoutWrapper from '@/components/LayoutWrapper'
import jobsData from '@/data/jobsData'
import eduData from '@/data/eduData'
import workshopsData from '@/data/workshopsData'
import mvpData from '@/data/mvpData'

export default function trajectory() {
  return (
    <LayoutWrapper>
      <PageSEO
        title={`Trayectoria - ${siteMetadata.author} - ${siteMetadata.nickname}`}
        description={`Conoce la trayectoria profesional y escolar, de ${siteMetadata.author}`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-primary-500 dark:text-secondary-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Trayectoria
          </h1>
          <p className="text-lg leading-7 text-gray-800 dark:text-gray-400">
            Aquí encuentras información sobre lo que he hecho los ultímos años. Trabajos, Educación,
            Emprendimientos y los Talleres que he impartido.
          </p>
        </div>
        <article className="items-start space-y-2 xl:grid xl:grid-cols-4 xl:gap-x-8 xl:space-y-0">
          <div className="max-w-none pt-8 pb-8 xl:col-span-2">
            <Timeline title="Estudios" jobs={eduData} />
          </div>
          <div className="max-w-none pt-8 pb-8 xl:col-span-2">
            <Timeline title="Trabajos" jobs={jobsData} />
          </div>
        </article>
        <article className="items-start space-y-2 xl:grid xl:grid-cols-4 xl:gap-x-8 xl:space-y-0">
          <div className="max-w-none pt-8 pb-8 xl:col-span-2">
            <Timeline title="Workshops" jobs={workshopsData} />
          </div>
          <div className="max-w-none pt-8 pb-8 xl:col-span-2">
            <Timeline title="Emprendimientos" jobs={mvpData} />
          </div>
        </article>
      </div>
    </LayoutWrapper>
  )
}
