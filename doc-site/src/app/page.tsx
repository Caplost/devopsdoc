import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { compileMDX } from 'next-mdx-remote/rsc'

export default async function Home() {
  const filePath = path.join(process.cwd(), 'docs', 'main.md')
  const fileContent = fs.readFileSync(filePath, 'utf8')
  
  const { content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true }
  })

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <article className="prose dark:prose-invert">
        {content}
      </article>
    </main>
  )
}