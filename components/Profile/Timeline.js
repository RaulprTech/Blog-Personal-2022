import { FaGraduationCap, FaBlackTie } from 'react-icons/fa'
import { AiOutlineCode } from 'react-icons/ai'
import { SiLeetcode } from 'react-icons/si'
// import { Disclosure, Transition } from '@headlessui/react'
import { HiChevronDown, HiOutlineDatabase } from 'react-icons/hi'
import { FaBaby } from 'react-icons/fa'
import { BsBuilding } from 'react-icons/bs'
import { RiDoorClosedLine } from 'react-icons/ri'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'
import TimeElement from './TimeElement'

export default function Timeline({ title, jobs }) {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100">{title}</h1>
      <ol className="relative mt-6 ml-6 border-l border-zinc-400 dark:border-gray-800 ">
        {jobs.map((job) => (
          <TimeElement
            current={job.current}
            jobTitle={job.title}
            place={job.place}
            date={job.date}
            jobDescription={job.description}
            key={job.title}
          >
            {job.type == 'professional' ? (
              <FaBlackTie className="animate-none" />
            ) : (
              <FaGraduationCap />
            )}
          </TimeElement>
        ))}
      </ol>
    </div>
  )
}
