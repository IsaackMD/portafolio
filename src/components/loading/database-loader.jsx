import { Database } from "lucide-react"

export function DatabaseLoader({ progress }) {
  return (
    <div
      className="portfolio-loader__database"
      role="progressbar"
      aria-label="Progreso de inicialización"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={progress}
      style={{ "--loader-progress": `${progress}%` }}
    >
      <Database aria-hidden="true" className="portfolio-loader__database-icon portfolio-loader__database-icon--empty" />
      <Database aria-hidden="true" className="portfolio-loader__database-icon portfolio-loader__database-icon--filled" />
    </div>
  )
}
