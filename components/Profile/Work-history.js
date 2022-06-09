const works = [
  {
    title: 'Trabajo 1',
    date: '4 February, 2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    link: '/',
  },
]

const Work = ({ title, date, description, link }) => {
  return (
    <li>
      <div className="flex-start flex items-center">
        <div className="-ml-2 mr-3 -mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary-600" />
        <h4 className="-mt-2 text-xl font-semibold text-gray-300">{title}</h4>
      </div>
      <div className="ml-6 mb-6 pb-6">
        <a
          href="#!"
          className="text-sm text-primary-600 transition duration-300 ease-in-out hover:text-blue-700 focus:text-blue-800"
        >
          {date}
        </a>
        <p className="mt-2 mb-4 text-gray-300">{description}</p>
        <a
          href={link}
          className="inline-block rounded bg-blue-600 px-4 py-1.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
        >
          Ver mas
        </a>
      </div>
    </li>
  )
}

export default function WorkHistory() {
  return (
    <>
      <ol className="mt-6 border-l-2 border-primary-600">
        {works.map((work) => (
          <Work
            title={work.title}
            date={work.date}
            description={work.description}
            link={work.link}
            key={work.title}
          />
        ))}
      </ol>
    </>
  )
}
