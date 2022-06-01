import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import WorkHistory from './Work-history'

export default function Me() {
  const router = useRouter()

  return (
    <section className="overflow-hidden pt-8 pb-12 lg:pt-[80px] lg:pb-[60px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center justify-between">
          <div className="w-full px-4 lg:w-6/12">
            <div className="-mx-3 flex items-center sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <Image
                    src="https://cdn.tailgrids.com/1.0/assets/images/services/image-1.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="py-3 sm:py-4">
                  <Image
                    src="https://cdn.tailgrids.com/1.0/assets/images/services/image-2.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <Image
                    src="https://cdn.tailgrids.com/1.0/assets/images/services/image-3.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="mb-2 block text-lg font-semibold text-blue-400">Why Choose Us</span>
              <h2 className="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                Make your customers happy by giving services.
              </h2>
              <p className="text-body-color mb-8 text-base">
                Soy un desarrollador al que le encantan los retos y aprender como funciona todo.
                Siempre busco maneras de mejorar mis conocimientos y su aplicacion.
              </p>
              <p className="text-body-color mb-12 text-base">
                Me gusta compartir lo que se y aprender muchas cosas mas.
              </p>
              <p className="text-body-color mb-12 text-base">
                Algo que me gusta mucho a la hora de desarrollar sitios web es buscar un equilibrio
                entre la funcionalidad y una vista agradable. Creo que ambas partes son muy
                importantes a tener en cuenta cuando se desarrolla.
              </p>
              <Link href="https://1drv.ms/b/s!AhahwdXAigv6gYEYJz_0fH3Jn2JlNQ">
                <a
                  className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-lg
                  bg-blue-400
                  py-4
                  px-10
                  text-center text-base font-normal
                  text-white
                  hover:bg-opacity-90
                  lg:px-8
                  xl:px-10
                  "
                >
                  <button className="flex items-center justify-between">
                    {/* <img
                      src={Web}
                      alt="Planeta de lineas, representando a internet"
                      className="mr-2 h-4 w-4 rounded-full"
                    /> */}
                    Descargar Curriculum
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <WorkHistory />
    </section>
  )
}

const Timeline = () => {
  return (
    <div className="my-6 rounded bg-blue-100 py-4 shadow">
      <h2 className="p-4 text-center text-3xl font-bold">Talleres y Ponencias</h2>
      <section className="container mx-auto">
        <ul className="m-4 px-4">
          <li className="m-3 p-3">
            <header className="flex">
              <h3 className="text-xl font-bold">Introduccion a Processing</h3>
              <span className="text-normal ml-12 rounded-full bg-blue-200 px-4 font-bold">
                Junio 2016
              </span>
            </header>
            <p>Taller introductorio de programacion orientada a objetos con Processing</p>
          </li>
          <li className="m-3 p-3">
            <div className="flex">
              <h3 className="text-xl font-bold">Programacion Basica con Arduino</h3>
              <span className="text-normal ml-12 rounded-full bg-blue-200 px-4 font-bold">
                Diciembre 2016
              </span>
            </div>
            <p>Taller de principios basicos de la programacion de placas Arduino UNO</p>
          </li>
          <li className="m-3 p-3">
            <div className="flex">
              <h3 className="text-xl font-bold">Programacion de Arduino con Javascript</h3>
              <span className="text-normal ml-12 rounded-full bg-blue-200 px-4 font-bold">
                Diciembre 2019
              </span>
            </div>
            <p>Taller sobre el uso de Node y Johnny Five para programar Arduinos con Javascript</p>
          </li>
        </ul>
      </section>
    </div>
  )
}
