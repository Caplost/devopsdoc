import fs from 'fs'
import path from 'path'

export default async function Home() {
  try {
    const filePath = path.join(process.cwd(), 'docs', 'main.md')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    
    return (
      <main>
        <pre>{fileContent}</pre>
      </main>
    )
  } catch (error) {
    console.error('File reading error:', error)
    return (
      <main>
        <h1>Error Loading Content</h1>
        <p>Unable to load the documentation content.</p>
      </main>
    )
  }
}