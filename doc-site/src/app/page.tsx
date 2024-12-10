import fs from 'fs'
import path from 'path'
import ErrorMessage from '@/components/ErrorMessage'

export default async function Home() {
  try {
    const filePath = path.join(process.cwd(), 'docs', 'main.md')
    console.log('Attempting to read file from:', filePath)
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error('File does not exist:', filePath)
      throw new Error(`File not found at path: ${filePath}`)
    }

    const fileContent = fs.readFileSync(filePath, 'utf8')
    console.log('File content length:', fileContent.length)
    
    return (
      <main className="min-h-screen">
        <pre>{fileContent}</pre>
      </main>
    )
  } catch (error) {
    console.error('File reading error111:', error)
    return <ErrorMessage message={`Unable to load the documentation content. Path: ${path.join(process.cwd(), 'docs', 'main.md')}`} />
  }
}