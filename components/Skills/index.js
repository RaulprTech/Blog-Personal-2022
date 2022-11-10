import React from 'react'
import kebabCase from '@/lib/utils/kebabCase'
import SkillIcon from './SkillIcon'
import IconCard from '../IconCard'

// Frontend Icons
import Html from './Frontend/html5.svg'
import Css from './Frontend/css3.svg'
import Js from './Frontend/js.svg'
import Next from './Frontend/nextdotjs.svg'
import Reactjs from './Frontend/react.svg'
import Gatsby from './Frontend/gatsby.svg'
import Redux from './Frontend/redux.svg'
import Jamstack from './Frontend/jamstack.svg'
import Sass from './Frontend/sass.svg'
import Bootstrap from './Frontend/bootstrap.svg'
import Tailwind from './Frontend/tailwindcss.svg'
import StyledComponents from './Frontend/styledcomponents.svg'
import Bulma from './Frontend/bulma.svg'
import Chakra from './Frontend/chakraui.svg'
import Mui from './Frontend/mui.svg'
import Jest from './Frontend/jest.svg'
import Cypress from './Frontend/cypress.svg'
import Webpack from './Frontend/webpack.svg'
import Algolia from './Frontend/algolia.svg'

// Backend Icons
import Node from './Backend/nodedotjs.svg'
import Express from './Backend/express.svg'
import Nest from './Backend/nestjs.svg'
import Python from './Backend/python.svg'
import Numpy from './Backend/numpy.svg'
import Jupyter from './Backend/jupyter.svg'
import FastAPI from './Backend/fastapi.svg'
import Flask from './Backend/flask.svg'
import Django from './Backend/django.svg'
import MongoDB from './Backend/mongodb.svg'
import MySQL from './Backend/mysql.svg'
import Sqlite from './Backend/sqlite.svg'
import Postgres from './Backend/postgresql.svg'
import Pytorch from './Backend/pytorch.svg'
import Anaconda from './Backend/anaconda.svg'

// Hardware Icons
import Arduino from './Hardware/arduino.svg'
import C from './Hardware/c.svg'

// Tools Icons
import Git from './Tools/git.svg'
import Firebase from './Tools/firebase.svg'
import Figma from './Tools/figma.svg'
import Netlify from './Tools/netlify.svg'
import Vercel from './Tools/vercel.svg'
import Paypal from './Tools/paypal.svg'
import Npm from './Tools/npm.svg'
import Graphql from './Tools/graphql.svg'
import Eslint from './Tools/eslint.svg'
import Prettier from './Tools/prettier.svg'
import Notion from './Tools/notion.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  html: Html,
  css: Css,
  js: Js,
  react: Reactjs,
  git: Git,
  next: Next,
  gatsby: Gatsby,
  bootstrap: Bootstrap,
  sass: Sass,
  redux: Redux,
  jamstack: Jamstack,
  tailwind: Tailwind,
  styledcomponents: StyledComponents,
  bulma: Bulma,
  chakra: Chakra,
  materialui: Mui,
  jest: Jest,
  cypress: Cypress,
  webpack: Webpack,
  algolia: Algolia,
  node: Node,
  express: Express,
  nest: Nest,
  python: Python,
  numpy: Numpy,
  jupyter: Jupyter,
  fastapi: FastAPI,
  flask: Flask,
  django: Django,
  mongodb: MongoDB,
  mysql: MySQL,
  sqlite: Sqlite,
  postgresql: Postgres,
  pytorch: Pytorch,
  anaconda: Anaconda,
  arduino: Arduino,
  c: C,
  firebase: Firebase,
  figma: Figma,
  netlify: Netlify,
  vercel: Vercel,
  paypal: Paypal,
  npm: Npm,
  graphql: Graphql,
  eslint: Eslint,
  prettier: Prettier,
  notion: Notion,
}

export default function index({ tags, title }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <section className="mb-6 flex max-w-screen-lg flex-col justify-center">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{title || 'Skills'}</h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-2 py-8 uppercase">
        {sortedTags.map((t) => {
          const SkillSvg = components[t]
          return (
            // <div key={`${tags[t]}${t}`}>
            //   <SkillIcon kind={t} href={`/tags/${kebabCase(t)}`} size="4" />
            // </div>
            <IconCard message={t} link={`/tags/${kebabCase(t)}`} key={`${tags[t]}${t}`}>
              <SkillSvg className="h-4 w-4 fill-current text-gray-900 dark:text-gray-100" />
            </IconCard>
          )
        })}
      </div>
    </section>
  )
}
