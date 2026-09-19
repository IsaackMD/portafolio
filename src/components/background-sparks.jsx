const sparkPaths = [
  { left: '8%', top: '12%', baseDuration: 19, delay: '-4s', x1: '32px', y1: '18px', x2: '-14px', y2: '58px', x3: '44px', y3: '82px' },
  { left: '22%', top: '28%', baseDuration: 23, delay: '-15s', x1: '-38px', y1: '22px', x2: '18px', y2: '64px', x3: '-28px', y3: '92px' },
  { left: '36%', top: '8%', baseDuration: 17, delay: '-9s', x1: '48px', y1: '-14px', x2: '26px', y2: '46px', x3: '-22px', y3: '72px' },
  { left: '49%', top: '34%', baseDuration: 21, delay: '-7s', x1: '-24px', y1: '36px', x2: '42px', y2: '16px', x3: '22px', y3: '76px' },
  { left: '63%', top: '16%', baseDuration: 25, delay: '-18s', x1: '-46px', y1: '-18px', x2: '-20px', y2: '42px', x3: '-58px', y3: '78px' },
  { left: '78%', top: '31%', baseDuration: 18, delay: '-12s', x1: '36px', y1: '28px', x2: '-30px', y2: '52px', x3: '14px', y3: '86px' },
  { left: '91%', top: '11%', baseDuration: 22, delay: '-16s', x1: '-42px', y1: '-24px', x2: '-16px', y2: '34px', x3: '-54px', y3: '64px' },
  { left: '13%', top: '63%', baseDuration: 20, delay: '-8s', x1: '46px', y1: '-28px', x2: '18px', y2: '38px', x3: '58px', y3: '68px' },
  { left: '29%', top: '82%', baseDuration: 19, delay: '-13s', x1: '-28px', y1: '-32px', x2: '34px', y2: '-54px', x3: '-18px', y3: '28px' },
  { left: '46%', top: '68%', baseDuration: 23, delay: '-5s', x1: '38px', y1: '-22px', x2: '-24px', y2: '32px', x3: '48px', y3: '58px' },
  { left: '60%', top: '89%', baseDuration: 17, delay: '-10s', x1: '-34px', y1: '-36px', x2: '24px', y2: '-62px', x3: '-12px', y3: '18px' },
  { left: '74%', top: '61%', baseDuration: 21, delay: '-17s', x1: '28px', y1: '34px', x2: '-36px', y2: '58px', x3: '18px', y3: '82px' },
  { left: '87%', top: '78%', baseDuration: 25, delay: '-20s', x1: '-44px', y1: '-30px', x2: '-18px', y2: '26px', x3: '-52px', y3: '56px' },
  { left: '53%', top: '4%', baseDuration: 18, delay: '-6s', x1: '30px', y1: '24px', x2: '-28px', y2: '44px', x3: '12px', y3: '74px' },
]

function getSparkStyle(spark, index) {
  return {
    left: spark.left,
    top: spark.top,
    '--spark-size': `${3 + (index % 3)}px`,
    '--spark-duration': `${spark.baseDuration * 0.85}s`,
    '--spark-delay': spark.delay,
    '--spark-twinkle-delay': `${-(index % 5) * 0.43}s`,
    '--spark-x-1': spark.x1,
    '--spark-y-1': spark.y1,
    '--spark-x-2': spark.x2,
    '--spark-y-2': spark.y2,
    '--spark-x-3': spark.x3,
    '--spark-y-3': spark.y3,
  }
}

export function BackgroundSparks() {
  return (
    <div className="background-sparks">
      {sparkPaths.map((spark, index) => (
        <span className="background-sparks__dot" style={getSparkStyle(spark, index)} key={`${spark.left}-${spark.top}`} />
      ))}
    </div>
  )
}
