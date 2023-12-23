'use client'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import React, { useState } from 'react'
function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

// export const metadata = {
//   title: 'Contact Me',
//   description: 'Contact Me.',
// }

export default function Speaking() {
  const [fullName, setFullName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  console.log(fullName)
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, subject, message }),
      })

      const data = await response.json()

      if (response.ok) {
        console.log('Message sent successfully')
        // Handle success, e.g., show a success message
      } else {
        console.error('Failed to send message:', data.error)
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error('Unexpected error:', error)
      // Handle unexpected error, e.g., show an error message
    }
  }
  return (
    <SimpleLayout
      title="Contact Me."
      intro="Feel Free to Reach out if you have any further questions."
    >
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Profile
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Ex:Aya Nader"
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/* new input */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Subject
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="Subject"
                      id="Subject"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Subject"
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/* new input */}
              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="Message"
                    name="Message"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  "Share your story, aspirations, or any specific details you'd
                  like me to know. This message will reach my inbox, and I look
                  forward to connecting with you!"
                </p>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  hover:bg-pink-600 hover:text-white"
          >
            Send Message
          </button>
        </div>
      </form>
    </SimpleLayout>
  )
}

// mgit ekmd kfec fdjj
