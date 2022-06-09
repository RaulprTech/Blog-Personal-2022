import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Presentation() {
  const router = useRouter()

  return (
    <section className="max-w-5xl items-center justify-around px-2 py-8 md:px-0">
      <div className="container mx-auto my-auto max-w-4xl items-center xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-screen sm:mx-0 md:w-1/2 lg:mb-4">
            <Image
              src={`${router.basePath}/static/images/avatar_sf.png`}
              alt="person with gray shirt looking in front"
              width={330}
              height={330}
              layout={'fixed'}
              className="rounded-full bg-gray-100 bg-opacity-70 shadow-lg dark:bg-gray-800 md:m-2"
              priority={'true'}
            />
          </div>
          <div className="m-2 w-full sm:m-0 md:w-1/2">
            <div className="w-full space-y-6 py-8 md:space-y-6 md:pb-0">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-primary-600 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                <span className="block text-2xl xl:inline">Hola, Soy </span>
                <span className="block text-center text-primary-500 dark:text-secondary-400 sm:text-left xl:block">
                  Raul Pacheco
                </span>
                <span className="block text-right text-3xl xl:inline">Web Developer</span>
              </h1>
              <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                <Link href="/projects">
                  <a className="mb-3 flex w-full cursor-pointer items-center justify-center rounded-md bg-primary-500 px-6 py-2 text-lg text-white hover:bg-primary-400 sm:mb-0 sm:w-auto">
                    Proyectos
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1={5} y1={12} x2={19} y2={12} />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </Link>
                <Link href="/about">
                  <a className="flex cursor-pointer items-center justify-center rounded-md bg-gray-200 px-6 py-2 text-gray-500 hover:bg-gray-400 hover:text-gray-800">
                    Mas sobre mi
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
