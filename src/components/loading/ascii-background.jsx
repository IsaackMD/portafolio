const shapes = [
  { shape: "ghost", text: ".:+..++:..+.\n++:++++:+..\n+.+..+..+++.\n..++++++...\n...+..+....", className: "one" },
  { shape: "pumpkin", text: "..+++++..\n.+:+++:+.\n++++.++++\n.+:+++:+.\n..+++++..", className: "two" },
  { shape: "abstract", text: "+..:..+\n..++...\n+:..:+..\n...+...", className: "three" },
  { shape: "ghost", text: "..++++..\n.+..+.+.\n+++++++.\n+.+..++.\n..+..+..", className: "four" },
  { shape: "pumpkin", text: "..:+++:.\n.+.+++.+\n++++.+++\n.+.+++.+\n..:+++:." , className: "five" },
  { shape: "abstract", text: "++...++\n.:++:..\n..+...+\n+..:...", className: "six" },
  { shape: "ghost", text: ".+..++..\n++++..+.\n+.+..++.\n+++++++.\n..+..+..", className: "seven" },
  { shape: "abstract", text: "..+....\n+..:++..\n..++...\n.+...+.", className: "eight" },
  { shape: "pumpkin", text: "..++++..\n.+:++:+.\n++++.+++\n.+:++:+.\n..++++..", className: "nine" },
]

function DotArt({ text }) {
  return text.split("\n").map((line, lineIndex) => (
    <span className="ascii-background__line" key={`${line}-${lineIndex}`}>
      {line.split("").map((character, characterIndex) => (
        <span className={character === "+" && characterIndex % 3 === 0 ? "ascii-background__flicker" : undefined} key={`${character}-${characterIndex}`}>
          {character}
        </span>
      ))}
    </span>
  ))
}

export function AsciiBackground() {
  return (
    <div className="ascii-background" aria-hidden="true">
      {shapes.map(({ shape, text, className }) => (
        <pre className={`ascii-background__shape ascii-background__shape--${shape} ascii-background__shape--${className}`} key={className}>
          <DotArt text={text} />
        </pre>
      ))}
    </div>
  )
}
