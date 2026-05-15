export function CarCardSkeleton() {
  return (
    <div className="premium-ring animate-pulse overflow-hidden rounded-lg bg-panel">
      <div className="h-56 bg-white/8" />
      <div className="space-y-4 p-5">
        <div className="h-4 w-2/3 rounded bg-white/10" />
        <div className="h-7 w-1/2 rounded bg-white/10" />
        <div className="grid grid-cols-3 gap-3">
          <div className="h-10 rounded bg-white/8" />
          <div className="h-10 rounded bg-white/8" />
          <div className="h-10 rounded bg-white/8" />
        </div>
        <div className="h-11 rounded bg-white/10" />
      </div>
    </div>
  )
}
