// Install gray-matter and date-fns
import matter from 'gray-matter'
// import { parseISO, format } from 'date-fns'
import fs from 'fs'
import { join } from 'path'

// Add markdown files in `src/content/blog`
const postsDirectory = join(process.cwd(), 'content')

export function getPostBySlug(slug: string, locale: string) {
  try {
    
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(postsDirectory, locale, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    // const date = format(parseISO(data.date), 'MMMM dd, yyyy')
    return { slug: realSlug, frontmatter: { ...data }, content }
  } catch (error) {
    return {};
  }

}

export function getAllPosts(locales: string[]) {
  const posts: string[] = [];
  locales.forEach(locale => {
    const localePath = join(postsDirectory, locale)
    const slugs = fs.readdirSync(localePath)
    slugs.forEach((slug) => posts.push(`${locale}/${getPostBySlug(slug, locale).slug}`))
  });
  return posts;
}