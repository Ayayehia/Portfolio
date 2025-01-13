import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Resume } from '@/app/page'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
// import portraitImage from '@/images/portrait.jpg'
import portraitImage from '../../images/logos/imgAya.JPG'
function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-pink-600 dark:text-zinc-200 dark:hover:text-pink-600"
        target="_blank"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-pink-600" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description: 'Im Aya Yehia and I am a Front End Developer.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
            I’m Aya Nader Yehia.
            <br /> (React Front-End Developer).
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I have a deep passion for coding, and the process of creating
              something meaningful is incredibly fulfilling to me. My enthusiasm
              for programming drives me to continuously enhance my skills, with
              the ultimate goal of becoming a proficient web developer. I draw
              inspiration from various websites, and my GitHub showcases
              projects that are either reproductions or influenced by those
              discoveries. My aspiration is to contribute to the development of
              impactful projects, no matter the scale. I dedicate my efforts to
              my GitHub, where you can explore most of my work. If you have
              questions about
              <span className="p-1 font-bold text-pink-600">
                HTML, CSS, JavaScript,typeScript, React or any other Technology
              </span>
              , feel free to ask—I’ll do my best to provide helpful answers.
            </p>
          </div>
          <div className="mt-20 space-y-10 ">
            <Resume />
          </div>
        </div>
        <div className="hover:text-pink-600 lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://twitter.com/aya203684745003"
              icon={TwitterIcon}
            >
              Follow on Twitter
            </SocialLink>

            <SocialLink
              href="https://github.com/Ayayehia"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/aya-yehia-aa2b28267/"
              icon={LinkedInIcon}
              className="mt-4 hover:text-pink-600"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:ayanader8@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 hover:text-pink-600 dark:border-zinc-700/40"
            >
              ayanader8@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
