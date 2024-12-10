import fs from 'fs'
import path from 'path'
import ErrorMessage from '@/components/ErrorMessage'

export default async function Home() {
  try {
    const filePath = path.join(process.cwd(), 'docs', 'main.md')
    const fileContent = fs.readFileSync(filePath, 'utf8')
    
    return (
      <main className="min-h-screen">
        <pre>{fileContent}</pre>
      </main>
    )
  } catch (error) {
    console.error('File reading error:', error)
    return <ErrorMessage message="Unable to load the documentation content." />
  }
}