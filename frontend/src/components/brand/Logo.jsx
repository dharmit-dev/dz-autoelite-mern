export default function Logo({ compact = false }) {
  return (
    <span className="flex items-center gap-3">
      <img className={compact ? 'h-11 w-11' : 'h-12 w-12'} src="/brand/dz-autoelite-logo.svg" alt="DZ AutoElite logo" />
      {!compact && (
        <span>
          <span className="block text-sm font-bold uppercase tracking-[0.18em] text-platinum">DZ AutoElite</span>
          <span className="block text-xs text-muted">Premium pre-owned. Built on trust.</span>
        </span>
      )}
    </span>
  )
}
