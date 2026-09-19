const messages = [
  "Inicializando portfolio...",
  "Cargando proyectos...",
  "Montando experiencia...",
  "Conectando servicios...",
  "Todo listo.",
]

export function LoadingMessages({ index }) {
  return (
    <p className="portfolio-loader__message" aria-live="polite">
      <span key={messages[index]}>{messages[index]}</span>
    </p>
  )
}
