import TimeElement from './TimeElement'

export default function Timeline({ title, jobs }) {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100">{title}</h1>
      <ol className="mt-8 border-l-2 border-blue-600">
        {jobs.map((job) => (
          <TimeElement
            current={job.current}
            jobTitle={job.title}
            place={job.place}
            date={job.date}
            jobDescription={job.description}
            key={job.title}
          />
        ))}
      </ol>
    </div>
  )
}
