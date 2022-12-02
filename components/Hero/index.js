import siteMetadata from '@/data/siteMetadata'
// import SocialIcon from '@/components/social-icons'
import IconCard from '../IconCard'
import Button from '../Button'

export default function Presentation() {
  // const router = useRouter()

  return (
    <div>
      <div className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
        <div className="">
          <span className="text-center font-extrabold leading-9 tracking-tight sm:text-left sm:leading-10 md:mb-1 md:leading-14">
            {/* <span className="inline text-2xl text-gray-900 dark:text-gray-100 md:text-3xl">
              Hola 👋, soy{' '}
            </span> */}
          </span>
          <h1 className="flex-col text-center font-extrabold leading-9 tracking-tight sm:text-left sm:leading-10 md:mb-1 md:leading-14">
            <div className="block space-x-4 text-5xl text-gray-900 dark:text-secondary-400 sm:text-left lg:text-6xl">
              Raul Pacheco
            </div>
            <span className="inline-block text-lg text-primary-500 dark:text-blue-400 sm:text-xl md:text-2xl">
              Ingeniero Electrónico • Desarrollador Web
            </span>
            {/* <span className="inline-block">{`  •  `}</span>
            <span className="inline-block">Desarrollador Web</span> */}
          </h1>
          <h2 className="sm:text-md prose pt-2 text-center text-sm text-gray-600 dark:text-gray-300 sm:text-left md:text-lg">
            {`${siteMetadata.description}`}
          </h2>
        </div>
        <div className="flex items-end justify-end">
          <div className="grid grid-cols-2 grid-rows-1 gap-6 py-12 xl:grid-cols-1 xl:grid-rows-2">
            <Button text="Proyectos" link="projects">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 -rotate-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </Button>
            <Button text="Mas de mi" link="about">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 -rotate-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </Button>
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
