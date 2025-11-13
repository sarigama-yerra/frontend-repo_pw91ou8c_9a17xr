import React from 'react'
import Spline from '@splinetool/react-spline'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Spline 3D Background (full cover) */}
        <div className="absolute inset-0 z-0">
          <Spline
            scene="https://prod.spline.design/Qe6dlWJktclXcUBS/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Subtle gradient and glass tint overlays to enhance readability */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
        <div className="pointer-events-none absolute inset-0 z-10 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-20">
          {/* Simple nav */}
          <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center">
                <span className="text-lg font-bold">⌁</span>
              </div>
              <span className="text-lg font-semibold tracking-tight">BlueSaaS</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 shadow-[0_8px_30px_rgb(2,6,23,0.15)] backdrop-blur-md transition hover:bg-white/10">
                Sign in
              </button>
              <button className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-semibold shadow-lg transition hover:shadow-xl">
                Get Started
              </button>
            </div>
          </nav>

          {/* Hero copy */}
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-8 sm:pt-16 md:pt-24 lg:pt-32">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live, modern, and fast
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Build and launch your SaaS faster with a beautiful head start
              </h1>
              <p className="mt-5 max-w-xl text-white/80 text-base sm:text-lg">
                A clean, modern toolkit for product teams. Styled with glassmorphism, powered by a 3D background, and optimized for clarity.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold shadow-lg transition hover:shadow-xl">
                  Start free trial
                </a>
                <a href="#" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/15">
                  Book a demo
                </a>
              </div>

              <div className="mt-10 flex items-center gap-6 text-white/60">
                <div className="flex -space-x-2">
                  <span className="h-8 w-8 rounded-full bg-white/20 border border-white/20 backdrop-blur" />
                  <span className="h-8 w-8 rounded-full bg-white/20 border border-white/20 backdrop-blur" />
                  <span className="h-8 w-8 rounded-full bg-white/20 border border-white/20 backdrop-blur" />
                </div>
                <p className="text-sm">Trusted by teams shipping modern products</p>
              </div>
            </div>

            {/* Glass metrics card */}
            <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { label: 'Deploys / day', value: '1.2k' },
                { label: 'Avg. response', value: '98ms' },
                { label: 'Uptime', value: '99.99%' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center shadow-[0_8px_30px_rgba(2,6,23,0.2)] backdrop-blur-xl"
                >
                  <div className="text-2xl font-bold">{item.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-white/70">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
