import { halloweenAsciiArt } from '../data/halloween-ascii'
import { BackgroundSparks } from './background-sparks'
import { AsciiFigure } from './loading/ascii-background'

const floatingFigures = [
  { type: 'ghost', art: 0, left: '4%', top: '9%', size: '.84rem', duration: '19s', delay: '-3s', x1: '58px', y1: '34px', x2: '-22px', y2: '96px', x3: '76px', y3: '142px' },
  { type: 'pumpkin', art: 1, left: '76%', top: '7%', size: '.32rem', duration: '23s', delay: '-14s', x1: '-74px', y1: '42px', x2: '28px', y2: '112px', x3: '-46px', y3: '158px' },
  { type: 'ghost', art: 1, left: '42%', top: '18%', size: '.7rem', duration: '17s', delay: '-9s', x1: '92px', y1: '-24px', x2: '54px', y2: '76px', x3: '-38px', y3: '118px' },
  { type: 'pumpkin', art: 0, left: '17%', top: '37%', size: '.31rem', duration: '21s', delay: '-6s', x1: '-42px', y1: '64px', x2: '72px', y2: '28px', x3: '36px', y3: '126px' },
  { type: 'ghost', art: 0, left: '86%', top: '42%', size: '.8rem', duration: '25s', delay: '-18s', x1: '-88px', y1: '-36px', x2: '-36px', y2: '74px', x3: '-112px', y3: '132px' },
  { type: 'pumpkin', art: 1, left: '54%', top: '52%', size: '.28rem', duration: '18s', delay: '-11s', x1: '66px', y1: '52px', x2: '-54px', y2: '88px', x3: '24px', y3: '146px' },
  { type: 'ghost', art: 1, left: '8%', top: '68%', size: '.74rem', duration: '22s', delay: '-16s', x1: '84px', y1: '-44px', x2: '28px', y2: '62px', x3: '108px', y3: '104px' },
  { type: 'pumpkin', art: 0, left: '69%', top: '76%', size: '.34rem', duration: '20s', delay: '-8s', x1: '-64px', y1: '-52px', x2: '42px', y2: '-92px', x3: '-32px', y3: '38px' },
]

function getFigureStyle(figure) {
  return {
    left: figure.left,
    top: figure.top,
    fontSize: figure.size,
    '--haunt-duration': figure.duration,
    '--haunt-delay': figure.delay,
    '--haunt-x-1': figure.x1,
    '--haunt-y-1': figure.y1,
    '--haunt-x-2': figure.x2,
    '--haunt-y-2': figure.y2,
    '--haunt-x-3': figure.x3,
    '--haunt-y-3': figure.y3,
  }
}

export function AnimatedBackground() {
  return (
    <div className="ambient-background" aria-hidden="true">
      <div className="ambient-background__glow ambient-background__glow--one" />
      <div className="ambient-background__glow ambient-background__glow--two" />
      <div className="ambient-background__texture" />
      <div className="ambient-background__figures">
        <BackgroundSparks />
        {floatingFigures.map((figure, index) => (
          <pre
            className={`ambient-background__figure ambient-background__figure--${figure.type}`}
            style={getFigureStyle(figure)}
            key={`${figure.type}-${index}`}
          >
            <AsciiFigure text={halloweenAsciiArt[figure.type][figure.art]} />
          </pre>
        ))}
      </div>
    </div>
  )
}
