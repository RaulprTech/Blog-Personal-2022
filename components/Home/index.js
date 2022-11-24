import siteMetadata from '@/data/siteMetadata'
// import SocialIcon from '@/components/social-icons'
import IconCard from '../IconCard'

export default function Presentation() {
  // const router = useRouter()

  return (
    // <section className="my-4 max-w-6xl items-center justify-around px-2 md:px-0">
    //   <div className="container mx-auto max-w-4xl items-center xl:px-5">
    //     <div className="flex flex-wrap items-center justify-center sm:-mx-3">
    //       <div className="w-screen sm:mx-0 md:w-1/2 lg:mb-4">
    //         <Image
    //           // src={`${router.basePath}/static/images/dev.svg`}
    //           src="https://res.cloudinary.com/raulprtech/image/upload/v1667624658/Profile/avatar_bg_blue_jwczfe.png"
    //           alt="person with gray shirt looking in front"
    //           width={300}
    //           height={300}
    //           layout={'fixed'}
    //           className="rounded-lg bg-gray-100 shadow-2xl dark:bg-gray-800 md:m-2"
    //           priority={'true'}
    //         />
    //       </div>
    //       <div className="m-2 w-full sm:m-0 md:w-1/2">
    //         <div className="w-full pb-4 md:pb-0">
    //           <span className="text-left font-extrabold leading-9 tracking-tight sm:leading-10 md:mb-1 md:leading-14">
    //             {/* <span className="block text-2xl text-gray-900 dark:text-gray-100 xl:inline">
    //               Hola, Soy{' '}
    //             </span> */}
    //             <h1 className="block text-4xl text-gray-900 dark:text-secondary-400 md:text-6xl xl:block">
    //               Raul Pacheco
    //             </h1>
    //           </span>
    //           {/* <h2 className="flex space-x-2 text-center text-lg font-bold text-primary-500 dark:text-blue-400 md:text-2xl xl:inline">
    //             <span className="inline-block">Electronic Engineer</span>
    //             <span className="inline-block">{`  •  `}</span>
    //             <span className="inline-block">Web Developer</span>
    //           </h2> */}
    //           {/* <p className="pb-4 text-justify text-lg font-normal text-gray-900 dark:text-gray-100">
    //             Te invito a aprender junto conmigo a crear la tecnologia que el mundo necesita.
    //             Electronica, Desarrollo Web, Programacion, SoC, FPGA y mas.
    //           </p> */}
    //           <p className="pb-4 pt-4 text-justify text-lg font-normal text-gray-900 dark:text-gray-100">
    //             Electronic Engineer | React Developer | Javascript | Python | Deep Learning | C/C++
    //             | FPGA
    //           </p>
    //           <div className="mx-4 mb-3 flex justify-around px-4">
    //             <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="8" />
    //             <SocialIcon kind="instagram" href={siteMetadata.instagram} size="8" />
    //             <SocialIcon kind="twitter" href={siteMetadata.twitter} size="8" />
    //             <SocialIcon kind="github" href={siteMetadata.github} size="8" />
    //           </div>
    //           {/* <div className="relative flex flex-col sm:flex-row sm:space-x-4">
    //             <Link href="/projects">
    //               <a className="mb-3 flex w-full cursor-pointer items-center justify-center rounded-md bg-primary-500 px-6 py-2 text-lg text-white hover:bg-primary-400 sm:mb-0 sm:w-auto">
    //                 Proyectos
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   className="ml-1 h-5 w-5"
    //                   viewBox="0 0 24 24"
    //                   fill="none"
    //                   stroke="currentColor"
    //                   strokeWidth={2}
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                 >
    //                   <line x1={5} y1={12} x2={19} y2={12} />
    //                   <polyline points="12 5 19 12 12 19" />
    //                 </svg>
    //               </a>
    //             </Link>
    //             <Link href="/about">
    //               <a className="flex cursor-pointer items-center justify-center rounded-md bg-gray-300 px-6 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-800">
    //                 Mas sobre mi
    //               </a>
    //             </Link>
    //           </div> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div>
      <div className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
        <div className="">
          <span className="text-center font-extrabold leading-9 tracking-tight sm:text-left sm:leading-10 md:mb-1 md:leading-14">
            {/* <span className="inline text-2xl text-gray-900 dark:text-gray-100 md:text-3xl">
              Hola 👋, soy{' '}
            </span> */}
            <h1 className="block text-4xl text-gray-900 dark:text-secondary-400 md:text-6xl">
              Raul Pacheco
            </h1>
          </span>
          <h2 className="text-md flex space-x-4 text-center font-bold text-primary-500 dark:text-blue-400 sm:text-lg md:text-2xl xl:inline">
            <span className="inline-block">Electronic Engineer</span>
            <span className="inline-block">{`  •  `}</span>
            <span className="inline-block">Web Developer</span>
          </h2>
          <h3 className="sm:text-md prose pt-2 text-sm text-gray-600 dark:text-gray-300 md:text-lg">
            {`${siteMetadata.description}`}
          </h3>
        </div>
        <div className="flex items-end justify-center">
          <div className="grid grid-cols-2 grid-rows-1 gap-8 py-12 xl:grid-cols-1 xl:grid-rows-2">
            <IconCard message="Creaciones" link="projects">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 -rotate-6 dark:text-gray-100 dark:group-hover:text-green-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </IconCard>
            <IconCard message="Mas de mi" link="about">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 -rotate-6 dark:text-gray-100 dark:group-hover:text-primary-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </IconCard>
            {/* <IconCard message="Newsletter" link="projects">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 -rotate-6 text-secondary-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
            </IconCard> */}
          </div>
        </div>
      </div>
    </div>
  )
}
