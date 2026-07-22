export default function TextureOverlay() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9999] h-full w-full">
      <div 
        className="absolute inset-0 h-full w-full bg-repeat opacity-25 mix-blend-multiply"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1600&q=80')`,
          backgroundSize: '860px 860px',
        }}
      />
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(circle_at_center,transparent_28%,rgba(70,35,10,0.18)_70%,rgba(26,26,26,0.36)_125%)] mix-blend-multiply" />
    </div>
  )
}
