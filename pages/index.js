import Link from 'next/link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Hero from '@/components/Hero'
import { getAllTags } from '@/lib/tags'
import LayoutWrapper from '@/components/LayoutWrapper'
import Banner from '@/components/Banner'
import mainBanner from '@/data/mainBanner'
import Card from '@/components/Card'
import projectsData from '@/data/projectsData'
import NewsletterForm from '@/components/NewsletterForm'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from '@/components/Image'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'
const MAX_DISPLAY = 6

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const tags = await getAllTags('blog')

  return { props: { posts, tags } }
}

export default function Home({ posts }) {
  return (
    <>
      <Banner
        title={mainBanner.title}
        link={mainBanner.link}
        bgColor={mainBanner.bgColor}
        image={mainBanner.image}
        emoji={mainBanner.emoji}
      />
      <LayoutWrapper bgImage={''}>
        <PageSEO
          title={`${siteMetadata.title} - ${siteMetadata.author} - ${siteMetadata.nickname}`}
          description={`${siteMetadata.description}`}
        />
        <Hero />
        <section className="py-12">
          {/* ... */}
          <div className="container flex flex-wrap justify-center py-10">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {/* ... */}
              {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
                const { slug, date, title, summary, tags } = frontMatter
                const link = `blog/${slug}`
                return (
                  <SwiperSlide
                    key={title}
                    className="flex w-full justify-center px-40 md:w-1/3 lg:w-1/4 lg:px-0"
                  >
                    <div className="w-full">
                      <Card
                        key={title}
                        title={title}
                        description={summary}
                        href={link}
                        tags={tags}
                        date={date}
                      />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            {/* ... */}
          </div>
        </section>
        <section className="py-8">
          {/* ... */}
          <div className="container flex flex-wrap justify-center py-10">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {/* ... */}
              {projectsData.slice(0, MAX_DISPLAY).map((frontMatter) => {
                const { imgSrc, title, description, href, tags } = frontMatter
                return (
                  <SwiperSlide
                    key={title}
                    className="flex w-full justify-center px-40 md:w-1/3 lg:w-1/4 lg:px-0"
                  >
                    <div className="w-full">
                      <Card
                        key={title}
                        title={title}
                        description={description}
                        imgSrc={imgSrc}
                        href={href}
                        tags={tags}
                      />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            {/* ... */}
          </div>
        </section>

        {/* <section className="mt-12 text-gray-300">
          <div className="container mx-auto flex flex-col items-center px-4 py-16 md:flex-row lg:px-8">
            <div className="mb-16 flex flex-col items-start text-left md:mb-0 md:w-1/2 md:pr-16 lg:flex-grow lg:pr-24">
              <h2 className="title-font 100 mb-8 text-xs font-semibold uppercase tracking-widest text-gray-100">
                {' '}
                Servicios Freelance{' '}
              </h2>
              <h1 className="title-font mb-8 text-xl font-black tracking-tighter text-gray-100 md:text-5xl">
                {' '}
                ¿Necesitas un sitio web?{' '}
              </h1>
              <p className="text-blueGray-600 mb-8 text-left text-base leading-relaxed ">
                {' '}
                ¿Tienes una idea que quieres llevar a la acción? No dejes que los clientes se te
                escapen. Solicita una cotización de tu MVP para que comiences tu negocio ya.{' '}
              </p>
              <div className="flex flex-col justify-center lg:flex-row">
                <button className="focus:shadow-outline mt-auto flex transform items-center rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white ring-offset-2 ring-offset-current transition duration-500 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2">
                  {' '}
                  Contactar{' '}
                </button>
                <p className="text-blueGray-600 mt-2 text-left text-sm md:ml-6 md:mt-0">
                  {' '}
                  It will take you to candy shop. <br className="hidden lg:block" />
                  <Link
                    href="/services"
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label="Todos los Proyectos"
                  >
                    Ver servicios &rarr;
                  </Link>
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 lg:max-w-lg">
              <Image
                src="/static/images/internet.png"
                alt="Raul Alberto Pacheco Rodriguez"
                width="720"
                height="600"
                className="h-120 w-240 rounded-lg object-cover object-center "
              />
            </div>
          </div>
        </section> */}

        {siteMetadata.newsletter.provider !== '' && ( // set mailchimp keys for function
          <div className="flex items-center justify-center pt-4">{/* <NewsletterForm /> */}</div>
        )}
      </LayoutWrapper>
    </>
  )
}
