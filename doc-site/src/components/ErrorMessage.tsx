export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
      <h1 className="text-lg font-semibold text-red-700">Error Loading Content</h1>
      <p className="text-red-600">{message}</p>
    </div>
  )
} 