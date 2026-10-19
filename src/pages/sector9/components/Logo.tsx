/** Nine disk sectors, one lit: the Sector9 mark (same geometry as the app). */
export function Logo({ size = 22 }: { size?: number }) {
  const r = 10
  const sectors = Array.from({ length: 9 }, (_, i) => {
    const a0 = (i / 9) * Math.PI * 2 - Math.PI / 2
    const a1 = ((i + 1) / 9) * Math.PI * 2 - Math.PI / 2 - 0.12
    const p = (a: number, rad: number) => `${12 + rad * Math.cos(a)} ${12 + rad * Math.sin(a)}`
    return `M ${p(a0, 4)} L ${p(a0, r)} A ${r} ${r} 0 0 1 ${p(a1, r)} L ${p(a1, 4)} A 4 4 0 0 0 ${p(a0, 4)} Z`
  })
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {sectors.map((d, i) => (
        <path key={i} d={d} fill={i === 8 ? 'var(--brand)' : 'rgba(255,255,255,0.22)'} />
      ))}
    </svg>
  )
}
