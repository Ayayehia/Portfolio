'use client'

import Image from 'next/image'
import { Card } from '../../components/Card'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import RealEstateimage from '../../images/logos/Villa Agency project.png'
import AudioStore from '../../images/logos/AudioStore.png'
import Wickks from '../../images/logos/Wickkslive.png'
import SingleStop from '../../images/logos/SingleStop.png'

const projects = [
  {
    name: 'Wickks Platform',
    description:
      'Collaborated with Observer Agency on an under-development project for Wickks startup. Live preview available.',
    link: { href: 'https://wickkks.vercel.app/', label: 'Live Preview' },
    logo: Wickks,
    tags: [
      'Next.js',
      'TypeScript',
      'Tailwind',
      'modelviewer 3D',
      'firebase',
      'google authentification',
    ],
  },
  {
    name: 'Single Stop Project',
    description:
      'Collaborated on the development of a user-friendly platform designed to provide access to public benefits and community resources in USA.',
    link: {
      href: 'https://dev.apps.singlestop.org/',
      label: 'Live Preview',
    },
    logo: SingleStop,
    tags: ['React', 'ruby', 'graphql', 'typescript', 'eslint', 'storybook'],
  },
  {
    name: 'Real Estate Agency',
    description:
      'Developed a real estate website using React, Tailwind and integrated Google Maps API.',
    link: {
      href: 'https://villa-agency-three.vercel.app/',
      label: 'Live Preview',
    },
    logo: RealEstateimage,
    tags: ['React', 'Tailwind', 'Google Maps'],
  },
  {
    name: 'Audio Store',
    description: 'Working with Real-time database Firebase.',
    link: {
      href: 'https://audio-phile-store.vercel.app/',
      label: 'Live Preview',
    },
    logo: AudioStore,
    tags: ['React', 'Firebase', 'Styled Components'],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Projects() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="max-w-3xl">
          <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-6xl">
            Featured Projects
          </h1>
          <p className="text-muted-foreground mt-6 text-lg leading-8">
            A collection of projects that showcase my expertise in web
            development. Each project represents a unique challenge and
            demonstrates different aspects of my technical skills.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.name} variants={item}>
              <Card className="group relative flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    unoptimized
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-foreground font-semibold leading-7">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground mt-3 text-sm leading-6">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-secondary text-secondary-foreground inline-flex items-center rounded-full px-2 py-1 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <a
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary inline-flex items-center gap-2 text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Preview
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
