// src/pages/[slug].js

// Install remark and remark-html
import remark from 'remark'
import html from 'remark-html'
import Error from 'next/error'

import { getPostBySlug, getAllPosts } from '../lib/api'

export default function Content({ locale, content, errorCode, ...rest }: any) {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export async function getStaticProps({ params, locale }: any) {
  const post = getPostBySlug(params.slug, locale);

  if (!post.content) {
    return {
      props: { errorCode: 404 }
    }
  }
  const markdown = await remark()
    .use(html)
    .process(post.content || '')
  const content = markdown.toString()
  return {
    props: { ...post, content, locale }, // will be passed to the page component as props
  }
}

export async function getStaticPaths({ locales }: { locales: string[] }) {
  const posts = getAllPosts(locales);

  const slugs = {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.substring(3),
        },
        locale: post.substr(0, 2),
      }
    }),
    fallback: false,
  }
  return slugs;

}