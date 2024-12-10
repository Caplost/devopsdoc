import fs from 'fs'
import path from 'path'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { MDXRemote } from 'next-mdx-remote'
import { compileMDX } from 'next-mdx-remote/rsc'

export default async function Home() {
  try {
    const filePath = path.join(process.cwd(), 'docs', 'main.md')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    
    const { content } = await compileMDX({
      source: fileContent,
      options: { 
        parseFrontmatter: true,
        // Add MDX parsing options to handle HTML-like syntax
        mdxOptions: {
          development: process.env.NODE_ENV === 'development'
        }
      }
    })

    return (
      <main className="max-w-4xl mx-auto py-10 px-4">
        <article className="prose dark:prose-invert">
          {content}
        </article>
      </main>
    )
  } catch (error) {
    console.error('MDX compilation error:', error)
    // Return a fallback UI for production
    return (
      <main className="max-w-4xl mx-auto py-10 px-4">
        <article className="prose dark:prose-invert">
          <h1>Error Loading Content</h1>
          <p>Unable to load the documentation content.</p>
        </article>
      </main>
    )
  }
}