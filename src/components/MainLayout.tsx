
import { MDXProvider } from '@mdx-js/react'

import PropTypes from 'prop-types'
import React from 'react'
import Head from 'next/head';

import customComponents from './CustomMdxComponents'
import * as Flag from '../icons/Flags';
import Footer from './Footer'
import Navigation from './Navigation'

const sectionsIt = [
  { label: 'Home', page: '/', locale: 'it' },
  { label: 'Prodotti', page: '/tranciati-in-legno', locale: 'it' },
  { label: 'Mobili agriturismo', page: '/mobili-per-agriturismo', locale: 'it' },
  { label: 'Metodo', page: '/metodo', locale: 'it' },
  { label: 'Dove siamo', page: '/dove-siamo', locale: 'it' },
  { label: 'Contatti', page: '/contatti', locale: 'it' },
  { label: <Flag.UK className="w-6" title="Switch to English" />, page: '/en', locale: false},
  // { label: 'EN', page: '/', locale: 'en' },
]

const sectionsEn = [
  { label: 'Home', page: '/', locale: 'en' },
  { label: 'Products', page: '/products', locale: 'en' },
  { label: 'Country furnitures', page: '/country-furnitures', locale: 'en' },
  { label: 'Our method', page: '/our-method', locale: 'en' },
  { label: 'Where we are', page: '/where-we-are', locale: 'en' },
  { label: 'Contacts', page: '/contacts', locale: 'en' },
  // { label: 'IT', page: '/', locale: 'it' },
  { label: <Flag.Italy className="w-6" title="Switch to Italian" />, page: '/it', locale: false }
]


const DEFAULT_HERO_URL = '/images/hero-home.jpg'

export default function MainLayout({ pageContext, children }: any) {
  const pageTitle = pageContext.frontmatter && pageContext.frontmatter.title
    ? pageContext.frontmatter.title
    : 'Eredi Monticelli'

  const heroBgUrl = pageContext.frontmatter && pageContext.frontmatter.heroBg
    ? pageContext.frontmatter.heroBg
    : DEFAULT_HERO_URL

  const heroStyle = {
    backgroundImage: `url(${heroBgUrl})`
  }

  const sections = pageContext.locale === 'en'
    ? sectionsEn
    : sectionsIt

  return (
    <MDXProvider components={{ ...customComponents }}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageContext.frontmatter?.description} />
        <meta name="keywords" content={pageContext.frontmatter?.keywords} />
        <meta name="author" content="Christian Sarnataro" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"></meta>
        <style type="text/css">{`
            body {
              background-image: url(/images/bg.jpg);
            }
        `}</style>
      </Head>
      <div className="max-w-screen-lg container mx-auto  bg-white">

        <div className="hidden sm:block bg-black"> {/* hide for < xs*/}

          <div style={heroStyle} className="p-24 bg-no-repeat bg-cover relative px-8">
            <div className="overlay bg-black w-full absolute inset-0 bg-opacity-30"></div>
            <div className="relative">
              <h1 className="text-5xl text-white shadow tracking-wide">
                Eredi Monticelli
              </h1>
              <h2 className="text-2xl text-white tracking-wide">
                Tranciati in legno di qualità
              </h2>
            </div>
          </div>
        </div>
        <Navigation menuItems={sections} headline="Eredi Monticelli" />
        <main className="bg-white p-8 sm:px-1 md:px-4">{children}</main>
        <Footer />
      </div>
    </MDXProvider>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.object.isRequired
}
