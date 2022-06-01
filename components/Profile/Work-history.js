const history = [
  {
    company: 'Atomic Studio',
    period: 'January 2017 - present',
    position: 'Web Developer',
    url: 'https://atomic.studio',
  },
  {
    company: 'Atomic Studio',
    period: 'January 2017 - present',
    position: 'Web Developer',
    url: 'https://atomic.studio',
  },
  {
    company: 'Atomic Studio',
    period: 'January 2017 - present',
    position: 'Web Developer',
    url: 'https://atomic.studio',
  },
]

export default function WorkHistory() {
  return (
    <>
      <h5 className="text-front font-header mt-12 mb-3 text-center text-sm font-semibold uppercase">
        Work history
      </h5>
      <div className="history relative flex flex-col py-6">
        {history.map(({ company, period, position, url }, i) => (
          <div className="history-entry relative w-1/2 py-4" key={`${company}_${i}`}>
            <span className="dot-bg absolute inline-flex h-14 w-14 items-center justify-center rounded-full bg-gray-300">
              <span className="dot h-5 w-5 rounded-full bg-gray-100" />
            </span>
            {url ? (
              <h4 className="subpixel-antialiased">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity duration-150 hover:opacity-75"
                >
                  {company}
                </a>
              </h4>
            ) : (
              <h4 className="subpixel-antialiased">{company}</h4>
            )}

            {position && <h5 className="mb-1 text-sm font-normal">{position}</h5>}
            {period && <span className="text-sm font-medium opacity-50">{period}</span>}
          </div>
        ))}
      </div>
    </>
  )
}
