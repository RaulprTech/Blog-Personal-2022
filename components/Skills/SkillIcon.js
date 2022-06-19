import React from 'react'
import Link from '@/components/Link'

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

export default function SkillIcon({ kind, href, size = 8 }) {
  const SkillSvg = components[kind]

  return (
    <>
      {components[kind] && (
        <div
          className="m-4 h-20 w-20 cursor-pointer rounded-lg border-2 border-transparent bg-white p-2 shadow-lg hover:border-primary-500 dark:bg-gray-900 dark:hover:border-primary-600"
          key={kind}
        >
          <Link href={href}>
            <div className="flex flex-col items-center justify-around text-secondary-400 transition dark:text-secondary-400">
              <span className="sr-only">{kind}</span>
              <SkillSvg
                className={`fill-current text-secondary-400 dark:text-gray-100 h-${size} w-${size}`}
              />
              <p className="mt-2 text-xs uppercase text-secondary-400 dark:text-gray-100">{kind}</p>
            </div>
          </Link>
        </div>
      )}
    </>
  )
}
