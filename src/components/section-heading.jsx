export function SectionHeading({ title, description, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start"

  return (
    <div className={`section-heading flex max-w-3xl flex-col gap-3 ${alignment}`}>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}
