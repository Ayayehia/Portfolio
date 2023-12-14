import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import img from '../../images/logos/Api.jpg'
import Image from 'next/image'
import React from '../../images/logos/React.svg'
import Css from '../../images/logos/Html1.svg'
import Html from '../../images/logos/Html2.png'
import Js from '../../images/logos/JavaScript.png'
import Tailwind from '../../images/logos/Tailwind.png'
import MaterialUi from '../../images/logos/Material ui.png'
import styled from '../../images/logos/styled-components.png'
import Bootstrap from '../../images/logos/Bootstrap.png'
import Firebase from '../../images/logos/Firebase.png'
import Api from '../../images/logos/Api.jpg'
function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata = {
  title: 'Technologies',
  description:
    '**Note:** This is not an exhaustive list, and I am continuously learning and exploring new technologies to enhance my skill set.',
}

export default async function ArticlesIndex() {
  const sponsors = [
    { name: 'Html', logo: Html },
    { name: 'Css', logo: Css },
    { name: 'JavaScript', logo: Js },
    { name: 'React', logo: React },
    { name: 'Firebase', logo: Firebase },
    { name: 'Tailwind', logo: Tailwind },
    { name: 'Material Ui', logo: MaterialUi },
    { name: 'Styled Components', logo: styled },
    { name: 'Api', logo: Api },
    { name: 'Bootstrap', logo: Bootstrap },
  ]
  // let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Technologies."
      intro="**Note:** This is not an exhaustive list, and I am continuously learning and exploring new technologies to enhance my skill set."
    >
      <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
        {sponsors.map((sponsor) => (
          <div key={sponsor.name} className="flex items-center justify-center">
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              unoptimized
              className="h-[48px] w-[48px]"
            />
          </div>
        ))}
      </div>
      {/* <Image src={img} />
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div> */}
    </SimpleLayout>
  )
}
