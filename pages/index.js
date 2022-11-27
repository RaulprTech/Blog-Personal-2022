import Link from 'next/link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Hero from '@/components/Hero'
import Script from 'next/script'
// import Skills from '@/components/Skills'
import { getAllTags } from '@/lib/tags'
import LayoutWrapper from '@/components/LayoutWrapper'
import Banner from '@/components/Banner'
import mainBanner from '@/data/mainBanner'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 4

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const tags = await getAllTags('blog')

  return { props: { posts, tags } }
}

export default function Home({ posts, tags }) {
  return (
    <>
      <Banner
        title={mainBanner.title}
        link={mainBanner.link}
        bgColor={mainBanner.bgColor}
        image={mainBanner.image}
        emoji={mainBanner.emoji}
      />
      <LayoutWrapper>
        <PageSEO
          title={`${siteMetadata.title} - ${siteMetadata.author} - ${siteMetadata.nickname}`}
          description={`${siteMetadata.description}`}
        />
        <Hero />
        {/* <Skills tags={tags} /> */}
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h2 className="text-2xl font-extrabold leading-6 tracking-tight text-primary-500 dark:text-secondary-400 sm:text-3xl sm:leading-8 md:text-4xl md:leading-10">
              Últimos Artículos
            </h2>
            <p className="text-lg leading-7 text-gray-800 dark:text-gray-400">
              Encuentra aquí los artículos mas recientes. ¿Sobre que quieres aprender hoy? 😉
            </p>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!posts.length && 'No se encontraron Articulos.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, tags } = frontMatter
              return (
                <li key={slug} className="py-12">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Fecha de Publicacion</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h3>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Leer "${title}"`}
                          >
                            Leer mas &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="Todos los Posts"
            >
              Ver todo &rarr;
            </Link>
          </div>
        )}
        {/* {siteMetadata.newsletter.provider !== '' && ( // set mailchimp keys for function
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
      </LayoutWrapper>
    </>
  )
}
