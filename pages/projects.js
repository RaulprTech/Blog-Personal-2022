import { useRef } from 'react'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import LayoutWrapper from '@/components/LayoutWrapper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default function Projects() {
  const progressCircle = useRef(null)
  const progressContent = useRef(null)
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress)
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }
  return (
    <LayoutWrapper>
      <PageSEO
        title={`Proyectos - ${siteMetadata.author} - ${siteMetadata.nickname}`}
        description={`Proyectos de Desarrollo Web de ${siteMetadata.author} - React, Next, Gatasby, Javascript, html, css y python`}
      />
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {projectsData.map((d) => (
          <SwiperSlide key={d.title}>
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
              tags={d.tags}
            />
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper> */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-primary-500 dark:text-secondary-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Proyectos
          </h1>
          <p className="text-lg leading-7 text-gray-800 dark:text-gray-400">
            Aquí encuentras algunos de mis proyectos
          </p>
        </div>
        <div className="container py-12">
          <div className="grid grid-cols-2 gap-x-14 gap-y-4">
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                tags={d.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
