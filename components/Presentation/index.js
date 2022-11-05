import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Presentation() {
  const router = useRouter()

  return (
    <section className="my-4 max-w-6xl items-center justify-around px-2 md:px-0">
      <div className="container mx-auto max-w-4xl items-center xl:px-5">
        <div className="flex flex-wrap items-center justify-center sm:-mx-3">
          <div className="w-screen sm:mx-0 md:w-1/2 lg:mb-4">
            <Image
              // src={`${router.basePath}/static/images/dev.svg`}
              src="https://res.cloudinary.com/raulprtech/image/upload/v1667624658/Profile/avatar_bg_blue_jwczfe.png"
              alt="person with gray shirt looking in front"
              width={300}
              height={300}
              layout={'fixed'}
              className="rounded-lg bg-gray-100 shadow-2xl dark:bg-gray-800 md:m-2"
              priority={'true'}
            />
          </div>
          <div className="m-2 w-full sm:m-0 md:w-1/2">
            <div className="w-full pb-4 md:pb-0">
              <span className="text-left font-extrabold leading-9 tracking-tight sm:leading-10 md:mb-1 md:leading-14">
                {/* <span className="block text-2xl text-gray-900 dark:text-gray-100 xl:inline">
                  Hola, Soy{' '}
                </span> */}
                <h1 className="block text-4xl text-gray-900 dark:text-secondary-400 md:text-6xl xl:block">
                  Raul Pacheco
                </h1>
              </span>
              {/* <h2 className="flex space-x-2 text-center text-lg font-bold text-primary-500 dark:text-blue-400 md:text-2xl xl:inline">
                <span className="inline-block">Electronic Engineer</span>
                <span className="inline-block">{`  •  `}</span>
                <span className="inline-block">Web Developer</span>
              </h2> */}
              {/* <p className="pb-4 text-justify text-lg font-normal text-gray-900 dark:text-gray-100">
                Te invito a aprender junto conmigo a crear la tecnologia que el mundo necesita.
                Electronica, Desarrollo Web, Programacion, SoC, FPGA y mas.
              </p> */}
              <p className="pb-4 pt-4 text-justify text-lg font-normal text-gray-900 dark:text-gray-100">
                Electronic Engineer | React Developer | Javascript | Python | Deep Learning | C/C++
                | FPGA
              </p>
              <div className="mx-4 mb-3 flex justify-around px-4">
                <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="8" />
                <SocialIcon kind="instagram" href={siteMetadata.instagram} size="8" />
                <SocialIcon kind="twitter" href={siteMetadata.twitter} size="8" />
                <SocialIcon kind="github" href={siteMetadata.github} size="8" />
              </div>
              {/* <div className="relative flex flex-col sm:flex-row sm:space-x-4">
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
                  <a className="flex cursor-pointer items-center justify-center rounded-md bg-gray-300 px-6 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-800">
                    Mas sobre mi
                  </a>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
