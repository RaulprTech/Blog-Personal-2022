import React from 'react'
import kebabCase from '@/lib/utils/kebabCase'
import SkillIcon from './SkillIcon'

export default function index({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <section className="my-8 flex max-w-screen-lg flex-col justify-center">
      <h1 className="mb-6 text-3xl font-extrabold leading-9 tracking-tight text-primary-500 dark:text-primary-600 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        Skills
      </h1>
      <div className="flex flex-wrap">
        {sortedTags.map((t) => {
          return (
            <div key={tags[t]}>
              <SkillIcon kind={t} href={`/tags/${kebabCase(t)}`} size="16" />
            </div>
          )
        })}
      </div>
    </section>
  )
}
