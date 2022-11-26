import React from 'react'
import Timeline from '@/components/Profile/Timeline'
import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import { getAllTags } from '@/lib/tags'
import LayoutWrapper from '@/components/LayoutWrapper'
import jobsData from '@/data/jobsData'
import eduData from '@/data/eduData'
import workshopsData from '@/data/workshopsData'
import mvpData from '@/data/mvpData'

export async function getStaticProps() {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

export default function trajectory() {
  return (
    <LayoutWrapper>
      <PageSEO
        title={`Trayectoria - ${siteMetadata.author} - ${siteMetadata.nickname}`}
        description={`Conoce la trayectoria Profesional, Escolar, de ${siteMetadata.author}`}
      />
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
    </LayoutWrapper>
  )
}
