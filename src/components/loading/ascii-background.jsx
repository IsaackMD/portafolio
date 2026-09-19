import { halloweenAsciiArt } from '../../data/halloween-ascii'
import { BackgroundSparks } from '../background-sparks'

const shapes = [
  { shape: "ghost", art: 0, className: "one" },
  { shape: "pumpkin", art: 0, className: "two" },
  { shape: "ghost", art: 1, className: "three" },
  { shape: "ghost", art: 0, className: "four" },
  { shape: "pumpkin", art: 1, className: "five" },
  { shape: "pumpkin", art: 0, className: "six" },
  { shape: "ghost", art: 1, className: "seven" },
  { shape: "pumpkin", art: 1, className: "eight" },
  { shape: "ghost", art: 0, className: "nine" },
]

export function AsciiFigure({ text }) {
  return text.split("\n").map((line, lineIndex) => (
    <span className="ascii-background__line" key={`${line}-${lineIndex}`}>
      {line.split("").map((character, characterIndex) => (
        <span
          className={character === "+" && characterIndex % 3 === 0 ? "ascii-background__flicker" : undefined}
          key={`${character}-${characterIndex}`}
        >
          {character}
        </span>
      ))}
    </span>
  ))
}

export function AsciiBackground() {
  return (
    <div className="ascii-background" aria-hidden="true">
      <BackgroundSparks />
      {shapes.map(({ shape, art, className }) => (
        <pre className={`ascii-background__shape ascii-background__shape--${shape} ascii-background__shape--${className}`} key={className}>
          <AsciiFigure text={halloweenAsciiArt[shape][art]} />
        </pre>
      ))}
    </div>
  )
}
