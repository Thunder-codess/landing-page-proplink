import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Search, LayoutDashboard, Building2, Plus, Link2, Settings,
  MapPin, BedDouble, Bath, Ruler, Share2, Check, Menu, X,
  ArrowRight, ArrowUpRight, Copy, Eye, ImagePlus, Phone,
  ChevronRight, Globe, ShieldCheck, Zap, MessageCircle
} from 'lucide-react'

// ---------- helpers ----------
const ease = [0.16, 1, 0.3, 1]

function Reveal({ children, delay = 0, y = 20, className = '' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

const listings = [
  {
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80&auto=format&fit=crop',
    title: '1 Kanal Modern House',
    loc: 'DHA Phase 6, Lahore',
    type: 'House',
    price: 'PKR 8.5 Cr',
    status: 'Active',
    statusStyle: 'bg-neutral-950 text-white',
  },
  {
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80&auto=format&fit=crop',
    title: '10 Marla Residential Plot',
    loc: 'Bahria Town, Karachi',
    type: 'Plot',
    price: 'PKR 2.1 Cr',
    status: 'Active',
    statusStyle: 'bg-neutral-950 text-white',
  },
  {
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80&auto=format&fit=crop',
    title: '2 Bed Luxury Apartment',
    loc: 'Gulberg Greens, Islamabad',
    type: 'Apartment',
    price: 'PKR 1.85 Cr',
    status: 'Shared',
    statusStyle: 'bg-white text-neutral-950 border border-neutral-200',
  },
  {
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80&auto=format&fit=crop',
    title: 'Commercial Plaza Floor',
    loc: 'Main Blvd, Gulberg, Lahore',
    type: 'Commercial',
    price: 'PKR 12 Cr',
    status: 'Draft',
    statusStyle: 'bg-neutral-100 text-neutral-500 border border-neutral-200',
  },
]

// ---------- Navbar ----------
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-neutral-200/80'
          : 'bg-white/60 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <nav className="max-w-[1160px] mx-auto px-5 sm:px-8 h-[64px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="w-7 h-7 rounded-[8px] bg-neutral-950 text-white grid place-items-center text-[15px] font-bold tracking-tight group-hover:-translate-y-[1px] transition-transform">
            P
          </span>
          <span className="font-semibold tracking-tight text-[17px]">PropLink</span>
        </a>

        <div className="hidden md:flex items-center gap-1 text-[14px]">
          <a href="#product" className="px-3.5 py-2 rounded-lg text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 transition-colors">Product</a>
          <a href="#pricing" className="px-3.5 py-2 rounded-lg text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 transition-colors">Pricing</a>
          <a href="#" className="px-3.5 py-2 rounded-lg text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 transition-colors">Sign In</a>
          <a
            href="#pricing"
            className="ml-2 inline-flex items-center gap-1.5 bg-neutral-950 text-white text-[14px] font-medium px-4 py-2 rounded-lg hover:-translate-y-[1px] hover:shadow-soft hover:bg-black transition-all active:translate-y-0 active:scale-[0.98]"
          >
            Start for free
            <ArrowUpRight size={15} strokeWidth={2.2} />
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 grid place-items-center rounded-lg border border-neutral-200"
          aria-label="Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-neutral-200 bg-white/95 backdrop-blur-xl px-5 py-4 flex flex-col gap-1"
        >
          <a href="#product" onClick={() => setOpen(false)} className="px-3 py-3 rounded-lg text-[15px] hover:bg-neutral-100">Product</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="px-3 py-3 rounded-lg text-[15px] hover:bg-neutral-100">Pricing</a>
          <a href="#" onClick={() => setOpen(false)} className="px-3 py-3 rounded-lg text-[15px] hover:bg-neutral-100">Sign In</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center items-center gap-2 bg-neutral-950 text-white font-medium px-4 py-3 rounded-xl text-[15px]">
            Start for free <ArrowRight size={16} />
          </a>
        </motion.div>
      )}
    </header>
  )
}

// ---------- Dashboard Mockup ----------
function DashboardMockup() {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 48, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease }}
      className="relative mx-auto mt-14 sm:mt-20 max-w-[1060px]"
    >
      {/* glow / floor */}
      <div className="absolute -inset-x-8 top-8 -bottom-10 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(0,0,0,0.08),transparent)] pointer-events-none" />

      {/* floating toast */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.6, ease }}
        className="hidden sm:flex absolute -right-4 lg:-right-10 top-24 z-20 items-center gap-2.5 bg-neutral-950 text-white pl-3 pr-4 py-2.5 rounded-xl shadow-lift"
      >
        <span className="w-7 h-7 rounded-lg bg-white/10 grid place-items-center"><Link2 size={14} /></span>
        <div className="leading-tight">
          <p className="text-[12.5px] font-medium">Link copied to clipboard</p>
          <p className="text-[11px] text-white/60 font-mono">proplink.app/p/dha-6-house</p>
        </div>
        <Check size={15} className="ml-1 text-white/80" />
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.05, duration: 0.6, ease }}
        className="hidden sm:flex absolute -left-4 lg:-left-10 bottom-24 z-20 items-center gap-2.5 bg-white border border-neutral-200 pl-3 pr-4 py-2.5 rounded-xl shadow-lift"
      >
        <span className="w-7 h-7 rounded-lg bg-neutral-950 text-white grid place-items-center"><Eye size={14} /></span>
        <div className="leading-tight">
          <p className="text-[12.5px] font-medium text-neutral-950">Client viewed listing</p>
          <p className="text-[11px] text-neutral-500">2 min ago · WhatsApp</p>
        </div>
      </motion.div>

      {/* window */}
      <div className="relative rounded-2xl border border-neutral-200 bg-white shadow-lift overflow-hidden text-left">
        {/* browser bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-200 bg-neutral-50/80">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-1.5 bg-white border border-neutral-200 rounded-md px-3 py-1 text-[12px] text-neutral-500 font-mono">
              <Globe size={12} />
              proplink.app/dashboard
            </div>
          </div>
          <div className="hidden sm:flex w-7 h-7 rounded-full bg-neutral-950 text-white text-[11px] font-semibold items-center justify-center">AR</div>
        </div>

        <div className="flex">
          {/* sidebar */}
          <aside className="hidden md:flex w-[212px] shrink-0 flex-col border-r border-neutral-200 bg-white p-3 gap-1">
            <div className="flex items-center gap-2 px-2 py-2 mb-1">
              <span className="w-6 h-6 rounded-md bg-neutral-950 text-white grid place-items-center text-[13px] font-bold">P</span>
              <span className="text-[13.5px] font-semibold tracking-tight">PropLink</span>
            </div>
            {[
              { icon: LayoutDashboard, label: 'Overview', active: false },
              { icon: Building2, label: 'Listings', active: true, badge: '24' },
              { icon: Plus, label: 'Add Property', active: false },
              { icon: Link2, label: 'Shared Links', active: false, badge: '18' },
              { icon: Settings, label: 'Settings', active: false },
            ].map((n) => (
              <div key={n.label} className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] ${n.active ? 'bg-neutral-950 text-white font-medium' : 'text-neutral-600 hover:bg-neutral-100'}`}>
                <n.icon size={15} strokeWidth={2} />
                {n.label}
                {n.badge && (
                  <span className={`ml-auto text-[11px] font-mono px-1.5 py-0.5 rounded-md ${n.active ? 'bg-white/15 text-white' : 'bg-neutral-100 text-neutral-600'}`}>{n.badge}</span>
                )}
              </div>
            ))}
            <div className="mt-auto mx-1 mb-1 rounded-xl border border-neutral-200 p-3 bg-neutral-50">
              <p className="text-[12px] font-medium">Free plan · 8/10 used</p>
              <div className="h-1.5 rounded-full bg-neutral-200 mt-2 overflow-hidden">
                <div className="h-full w-[80%] bg-neutral-950 rounded-full" />
              </div>
              <button className="mt-2.5 w-full text-[12px] font-medium bg-neutral-950 text-white rounded-lg py-1.5">Upgrade to Pro</button>
            </div>
          </aside>

          {/* main */}
          <div className="flex-1 min-w-0 bg-white">
            {/* mobile tabs */}
            <div className="md:hidden flex gap-2 px-4 pt-4 overflow-x-auto thin-scroll">
              {['Overview', 'Listings', 'Add', 'Links'].map((t, i) => (
                <span key={t} className={`shrink-0 text-[12.5px] px-3 py-1.5 rounded-full border ${i === 1 ? 'bg-neutral-950 text-white border-neutral-950' : 'border-neutral-200 text-neutral-600'}`}>{t}</span>
              ))}
            </div>

            <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-5">
              <div className="flex flex-wrap items-center gap-3">
                <div>
                  <h3 className="text-[17px] sm:text-[19px] font-semibold tracking-tight">Property inventory</h3>
                  <p className="text-[12.5px] text-neutral-500 mt-0.5">24 listings · Updated just now</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <div className="hidden sm:flex items-center gap-2 border border-neutral-200 rounded-lg px-2.5 py-2 text-[13px] text-neutral-500 w-[200px]">
                    <Search size={14} />
                    <span className="truncate">Search location, type…</span>
                    <span className="ml-auto text-[11px] font-mono border border-neutral-200 rounded px-1">⌘K</span>
                  </div>
                  <button className="inline-flex items-center gap-1.5 bg-neutral-950 text-white text-[13px] font-medium px-3 sm:px-3.5 py-2 rounded-lg">
                    <Plus size={15} /> <span className="hidden sm:inline">Add Property</span><span className="sm:hidden">Add</span>
                  </button>
                </div>
              </div>

              {/* mini stats */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mt-4">
                {[
                  { k: 'Total listings', v: '24' },
                  { k: 'Active links', v: '18' },
                  { k: 'Views this week', v: '1,240' },
                ].map((s) => (
                  <div key={s.k} className="rounded-xl border border-neutral-200 px-3 py-2.5 sm:px-4 sm:py-3 bg-white">
                    <p className="text-[11px] sm:text-[12px] text-neutral-500">{s.k}</p>
                    <p className="text-[16px] sm:text-[20px] font-semibold tracking-tight font-mono">{s.v}</p>
                  </div>
                ))}
              </div>

              {/* list */}
              <div className="mt-3 rounded-xl border border-neutral-200 overflow-hidden divide-y divide-neutral-200">
                {/* head - desktop only */}
                <div className="hidden sm:grid grid-cols-[1fr_90px_110px_90px_44px] gap-3 px-4 py-2.5 bg-neutral-50 text-[11px] uppercase tracking-[0.08em] text-neutral-500 font-medium">
                  <span>Property</span><span>Type</span><span>Price</span><span>Status</span><span></span>
                </div>
                {listings.map((l) => (
                  <div key={l.title} className="group flex sm:grid sm:grid-cols-[1fr_90px_110px_90px_44px] items-center gap-3 px-3 sm:px-4 py-3 hover:bg-neutral-50/80 transition-colors">
                    <div className="flex items-center gap-3 min-w-0">
                      <img src={l.img} alt={l.title} className="w-[52px] h-[52px] sm:w-[44px] sm:h-[44px] rounded-lg object-cover border border-neutral-200 shrink-0" loading="lazy" />
                      <div className="min-w-0">
                        <p className="text-[13.5px] sm:text-[13px] font-medium truncate">{l.title}</p>
                        <p className="text-[12px] text-neutral-500 flex items-center gap-1 truncate"><MapPin size={11} />{l.loc}</p>
                        <p className="sm:hidden text-[12.5px] font-semibold font-mono mt-0.5">{l.price}</p>
                      </div>
                    </div>
                    <span className="hidden sm:inline text-[12.5px] text-neutral-600"><span className="inline-flex px-2 py-1 rounded-md bg-neutral-100 border border-neutral-200/70">{l.type}</span></span>
                    <span className="hidden sm:inline text-[13px] font-semibold font-mono">{l.price}</span>
                    <span className="hidden sm:inline"><span className={`text-[11px] font-medium px-2 py-1 rounded-full ${l.statusStyle}`}>{l.status}</span></span>
                    <span className="ml-auto sm:ml-0 flex items-center gap-1.5">
                      <span className={`sm:hidden text-[10.5px] font-medium px-2 py-0.5 rounded-full ${l.statusStyle}`}>{l.status}</span>
                      <button className="w-8 h-8 grid place-items-center rounded-lg border border-neutral-200 group-hover:bg-neutral-950 group-hover:text-white group-hover:border-neutral-950 transition-all" aria-label="Share">
                        <Share2 size={14} />
                      </button>
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between mt-3 px-1">
                <p className="text-[12px] text-neutral-500 font-mono">Showing 4 of 24</p>
                <p className="text-[12.5px] font-medium flex items-center gap-1">View all <ChevronRight size={14} /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ---------- Public page mockup ----------
function PublicPageMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease }}
      className="relative rounded-2xl border border-neutral-200 bg-white shadow-lift overflow-hidden"
    >
      <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-200 bg-neutral-50/80">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-1.5 bg-white border border-neutral-200 rounded-md px-3 py-1 text-[12px] text-neutral-600 font-mono max-w-full truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span className="truncate">proplink.app/p/dha-6-modern-house</span>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium border border-neutral-200 bg-white rounded-md px-2 py-1"><Copy size={11} /> Share</span>
      </div>

      <div className="p-4 sm:p-6">
        {/* gallery */}
        <div className="grid grid-cols-3 gap-2">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format&fit=crop" alt="House exterior" className="col-span-3 sm:col-span-2 h-[220px] sm:h-[300px] w-full object-cover rounded-xl border border-neutral-200" loading="lazy" />
          <div className="hidden sm:grid grid-rows-2 gap-2">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&auto=format&fit=crop" alt="Living room" className="h-[146px] w-full object-cover rounded-xl border border-neutral-200" loading="lazy" />
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80&auto=format&fit=crop" alt="Bedroom" className="h-[146px] w-full object-cover rounded-xl border border-neutral-200" loading="lazy" />
              <span className="absolute bottom-2 right-2 bg-neutral-950/90 backdrop-blur text-white text-[11px] font-medium px-2 py-1 rounded-md flex items-center gap-1"><ImagePlus size={11} /> +12 photos</span>
            </div>
          </div>
          <div className="col-span-3 sm:hidden grid grid-cols-2 gap-2">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&auto=format&fit=crop" alt="Living room" className="h-[110px] w-full object-cover rounded-lg border border-neutral-200" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80&auto=format&fit=crop" alt="Bedroom" className="h-[110px] w-full object-cover rounded-lg border border-neutral-200" loading="lazy" />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-start gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium px-2 py-1 rounded-full bg-neutral-950 text-white">For Sale</span>
              <span className="text-[11px] font-medium px-2 py-1 rounded-full border border-neutral-200 text-neutral-600">House</span>
            </div>
            <h3 className="mt-2 text-[20px] sm:text-[24px] font-semibold tracking-tight leading-tight">1 Kanal Modern Designer House</h3>
            <p className="mt-1 text-[13.5px] text-neutral-500 flex items-center gap-1.5"><MapPin size={14} /> Street 12, DHA Phase 6, Lahore</p>
            <div className="mt-3 flex flex-wrap gap-2 text-[12.5px]">
              <span className="inline-flex items-center gap-1.5 border border-neutral-200 rounded-lg px-2.5 py-1.5"><BedDouble size={14} /> 5 Beds</span>
              <span className="inline-flex items-center gap-1.5 border border-neutral-200 rounded-lg px-2.5 py-1.5"><Bath size={14} /> 6 Baths</span>
              <span className="inline-flex items-center gap-1.5 border border-neutral-200 rounded-lg px-2.5 py-1.5"><Ruler size={14} /> 1 Kanal · 4500 sq.ft</span>
            </div>
          </div>
          <div className="w-full sm:w-[210px] shrink-0 rounded-xl border border-neutral-200 p-4 bg-neutral-50/60">
            <p className="text-[11px] uppercase tracking-[0.08em] text-neutral-500 font-medium">Price</p>
            <p className="text-[22px] font-semibold tracking-tight font-mono mt-0.5">PKR 8.5 Cr</p>
            <p className="text-[12px] text-neutral-500">Negotiable · Updated today</p>
            <button className="mt-3 w-full inline-flex justify-center items-center gap-1.5 bg-neutral-950 text-white text-[13.5px] font-medium py-2.5 rounded-lg hover:-translate-y-[1px] transition-transform">
              <Phone size={14} /> Contact Agent
            </button>
            <button className="mt-2 w-full inline-flex justify-center items-center gap-1.5 bg-white border border-neutral-200 text-[13.5px] font-medium py-2.5 rounded-lg">
              <Share2 size={14} /> Share link
            </button>
          </div>
        </div>

        <div className="mt-5 pt-5 border-t border-neutral-200 grid sm:grid-cols-[1fr_240px] gap-5">
          <div>
            <p className="text-[13px] font-semibold">About this property</p>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-neutral-600">
              Solid-construction designer house with imported fittings, Spanish tile roofing, home theatre and lush lawn. 2-minute drive from DHA Raya Commercial. All documents clear.
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[12.5px]">
              {[['Type', 'House'], ['Area', '1 Kanal'], ['Possession', 'Immediate'], ['Documents', 'Clear']].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-neutral-100 py-1.5"><span className="text-neutral-500">{k}</span><span className="font-medium">{v}</span></div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-neutral-200 p-4 h-fit">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-neutral-950 text-white grid place-items-center text-[13px] font-semibold">AR</span>
              <div>
                <p className="text-[13.5px] font-semibold">Ahmed Raza</p>
                <p className="text-[12px] text-neutral-500 flex items-center gap-1"><ShieldCheck size={12} /> Verified agent</p>
              </div>
            </div>
            <p className="mt-3 text-[12px] text-neutral-500 font-mono">Typically replies in 1 hour</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ---------- Main App ----------
export default function App() {
  const reduce = useReducedMotion()
  return (
    <div id="top" className="min-h-screen bg-white text-neutral-950 overflow-x-clip">
      <Navbar />

      {/* ===== 1. HERO ===== */}
      <section className="relative pt-[64px]">
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(70%_50%_at_50%_0%,black,transparent)] pointer-events-none" />
        <div className="relative max-w-[1160px] mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-10 text-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 border border-neutral-200 bg-white rounded-full pl-1.5 pr-3.5 py-1.5 text-[12.5px] shadow-card"
          >
            <span className="inline-flex items-center gap-1 bg-neutral-950 text-white text-[11px] font-medium px-2 py-0.5 rounded-full"><Zap size={11} /> New</span>
            <span className="text-neutral-600 font-medium">Built for modern real estate agents</span>
            <ChevronRight size={14} className="text-neutral-400" />
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="mx-auto mt-6 max-w-[760px] text-[36px] leading-[1.05] sm:text-[56px] lg:text-[64px] font-semibold tracking-tightest text-balance"
          >
            Your property inventory.<br className="hidden sm:block" /> Organized and ready to share.
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
            className="mx-auto mt-5 max-w-[580px] text-[15.5px] sm:text-[18px] leading-relaxed text-neutral-600 text-balance"
          >
            Manage listings, keep property details organized and share professional property pages with clients using a single link.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a href="#pricing" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-neutral-950 text-white font-medium text-[15px] px-6 py-3.5 rounded-xl hover:-translate-y-[1px] hover:shadow-lift hover:bg-black transition-all active:translate-y-0 active:scale-[0.98]">
              Start for free <ArrowRight size={17} strokeWidth={2.2} />
            </a>
            <a href="#product" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white border border-neutral-200 font-medium text-[15px] px-6 py-3.5 rounded-xl hover:-translate-y-[1px] hover:border-neutral-300 hover:shadow-card hover:bg-neutral-50 transition-all active:translate-y-0 active:scale-[0.98]">
              <Eye size={17} /> See how it works
            </a>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-4 text-[12.5px] text-neutral-500 font-mono"
          >
            Free for up to 10 listings · No credit card required
          </motion.p>

          <DashboardMockup />

          <Reveal className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[12.5px] text-neutral-500">
            {['Houses', 'Plots', 'Apartments', 'Commercial'].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5"><Check size={13} className="text-neutral-950" /> {t}</span>
            ))}
            <span className="inline-flex items-center gap-1.5 font-mono">· One dashboard · One link</span>
          </Reveal>
        </div>
      </section>

      {/* divider */}
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8"><div className="h-px bg-neutral-200/80" /></div>

      {/* ===== 2. PRODUCT STORY ===== */}
      <section id="product" className="scroll-mt-20 max-w-[1160px] mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <Reveal className="max-w-[680px]">
          <h2 className="text-[30px] sm:text-[44px] font-semibold tracking-tightest leading-[1.08] text-balance">
            From property inventory to client-ready link in seconds.
          </h2>
          <p className="mt-4 text-[15.5px] sm:text-[17px] text-neutral-600 leading-relaxed">
            No more scattered WhatsApp forwards. Add once, organize everything, share one clean page your client actually trusts.
          </p>
        </Reveal>

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-14 items-start">
          {/* steps */}
          <div className="relative">
            <div className="absolute left-[19px] top-4 bottom-8 w-px bg-neutral-200" aria-hidden />
            <div className="flex flex-col gap-2">
              {[
                {
                  n: '01', icon: ImagePlus, title: 'Add your property',
                  body: 'Add images, location, price, size and all important property information.',
                  tag: '30 seconds per listing'
                },
                {
                  n: '02', icon: LayoutDashboard, title: 'Keep everything organized',
                  body: 'Your complete inventory stays inside one clean searchable dashboard.',
                  tag: 'Search, filter, update'
                },
                {
                  n: '03', icon: Link2, title: 'Share one link',
                  body: 'Generate a professional public page and send the link directly to your client.',
                  tag: 'proplink.app/p/…'
                },
              ].map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08}>
                  <div className="relative flex gap-4 sm:gap-5 rounded-2xl border border-transparent hover:border-neutral-200 hover:bg-neutral-50/60 hover:shadow-card p-4 -ml-4 transition-all group">
                    <div className="relative z-10 shrink-0 w-10 h-10 rounded-xl bg-neutral-950 text-white grid place-items-center shadow-card group-hover:-translate-y-[1px] transition-transform">
                      <s.icon size={17} strokeWidth={2} />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <p className="font-mono text-[11.5px] text-neutral-500 tracking-wide">{s.n}</p>
                      <h3 className="mt-0.5 text-[17px] font-semibold tracking-tight">{s.title}</h3>
                      <p className="mt-1.5 text-[14px] leading-relaxed text-neutral-600">{s.body}</p>
                      <p className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-mono bg-neutral-100 border border-neutral-200/70 rounded-md px-2 py-1 text-neutral-600">{s.tag}</p>
                    </div>
                  </div>
                  {i < 2 && (
                    <div className="pl-[15px] py-1 text-neutral-300">
                      <ChevronRight size={16} className="rotate-90" />
                    </div>
                  )}
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className="mt-6 ml-0 sm:ml-14 rounded-xl border border-neutral-200 bg-neutral-50 p-4 flex gap-3 items-start">
              <span className="shrink-0 w-8 h-8 rounded-lg bg-white border border-neutral-200 grid place-items-center"><MessageCircle size={15} /></span>
              <div className="text-[13px] leading-relaxed">
                <p className="text-neutral-400 line-through decoration-neutral-300">12 photos + price + location in 8 WhatsApp messages…</p>
                <p className="mt-1 font-medium flex items-center gap-1.5">One PropLink page. <span className="font-mono font-normal text-neutral-600 bg-white border border-neutral-200 rounded px-1.5 py-0.5 text-[12px]">proplink.app/p/…</span></p>
              </div>
            </Reveal>
          </div>

          {/* preview */}
          <div className="lg:sticky lg:top-24">
            <PublicPageMockup />
            <Reveal delay={0.15} className="mt-4 flex items-center justify-between px-1">
              <p className="text-[12.5px] text-neutral-500">This is what your client opens — no login needed.</p>
              <p className="hidden sm:inline-flex items-center gap-1 text-[12.5px] font-medium">Live example <ArrowUpRight size={14} /></p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="max-w-[1160px] mx-auto px-5 sm:px-8"><div className="h-px bg-neutral-200/80" /></div>

      {/* ===== 3. PRICING ===== */}
      <section id="pricing" className="scroll-mt-20 max-w-[1160px] mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <Reveal className="text-center max-w-[600px] mx-auto">
          <h2 className="text-[30px] sm:text-[44px] font-semibold tracking-tightest leading-[1.08]">Simple pricing. No unnecessary complexity.</h2>
          <p className="mt-4 text-[15.5px] sm:text-[17px] text-neutral-600">Start free. Upgrade when your inventory grows.</p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-[860px] mx-auto items-stretch">
          {/* Free */}
          <Reveal className="h-full">
            <div className="h-full rounded-2xl border border-neutral-200 bg-white p-7 sm:p-8 flex flex-col hover:shadow-card hover:-translate-y-[2px] transition-all">
              <p className="text-[13px] font-medium text-neutral-600">Free</p>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-[38px] leading-none font-semibold tracking-tight">Rs. 0</span>
                <span className="text-[13.5px] text-neutral-500 mb-1.5">/ month</span>
              </div>
              <p className="mt-2 text-[13.5px] text-neutral-500">For trying PropLink with your first listings.</p>
              <div className="my-6 h-px bg-neutral-200" />
              <ul className="flex flex-col gap-3 text-[14px]">
                {['Up to 10 active listings', 'Property management dashboard', 'Public listing pages', 'Shareable links', 'Image uploads'].map((f) => (
                  <li key={f} className="flex items-start gap-2.5"><span className="mt-0.5 w-5 h-5 rounded-full bg-neutral-100 border border-neutral-200 grid place-items-center shrink-0"><Check size={12} strokeWidth={2.5} /></span>{f}</li>
                ))}
              </ul>
              <a href="#top" className="mt-8 inline-flex justify-center items-center bg-white border border-neutral-300 font-medium text-[14.5px] py-3 rounded-xl hover:-translate-y-[1px] hover:border-neutral-950 hover:shadow-card transition-all active:translate-y-0">
                Start Free
              </a>
            </div>
          </Reveal>

          {/* Pro */}
          <Reveal delay={0.1} className="h-full">
            <div className="relative h-full rounded-2xl bg-neutral-950 text-white p-7 sm:p-8 flex flex-col shadow-lift hover:-translate-y-[2px] transition-all overflow-hidden">
              <div className="absolute inset-0 bg-dots opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)' }} />
              <div className="relative flex items-center justify-between">
                <p className="text-[13px] font-medium text-white/70">Pro</p>
                <span className="text-[11px] font-semibold tracking-wide uppercase bg-white text-neutral-950 px-2.5 py-1 rounded-full">Most popular</span>
              </div>
              <div className="relative mt-3 flex items-end gap-2">
                <span className="text-[38px] leading-none font-semibold tracking-tight">Rs. 1,499</span>
                <span className="text-[13.5px] text-white/60 mb-1.5">/ month</span>
              </div>
              <p className="relative mt-2 text-[13.5px] text-white/60">For agents running their full inventory on PropLink.</p>
              <div className="relative my-6 h-px bg-white/10" />
              <ul className="relative flex flex-col gap-3 text-[14px]">
                {['Unlimited listings', 'Unlimited shareable links', 'More property images', 'Advanced inventory search', 'Priority features', 'No PropLink branding on shared listings'].map((f) => (
                  <li key={f} className="flex items-start gap-2.5"><span className="mt-0.5 w-5 h-5 rounded-full bg-white/10 border border-white/15 grid place-items-center shrink-0"><Check size={12} strokeWidth={2.5} /></span>{f}</li>
                ))}
              </ul>
              <a href="#top" className="relative mt-8 inline-flex justify-center items-center gap-2 bg-white text-neutral-950 font-medium text-[14.5px] py-3 rounded-xl hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(255,255,255,0.2)] transition-all active:translate-y-0">
                Upgrade to Pro <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-6 text-center">
          <p className="text-[13px] text-neutral-500">No setup fees. Cancel anytime.</p>
        </Reveal>
      </section>

      {/* ===== 4. FINAL CTA + FOOTER ===== */}
      <section className="border-t border-neutral-200 bg-neutral-50/60">
        <div className="max-w-[1160px] mx-auto px-5 sm:px-8 py-20 sm:py-28 text-center">
          <Reveal>
            <div className="mx-auto w-11 h-11 rounded-2xl bg-neutral-950 text-white grid place-items-center text-[20px] font-bold shadow-card">P</div>
            <h2 className="mx-auto mt-6 max-w-[640px] text-[30px] sm:text-[48px] font-semibold tracking-tightest leading-[1.08] text-balance">
              Your inventory deserves better than scattered messages.
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-[15.5px] sm:text-[17px] text-neutral-600 leading-relaxed">
              Keep every property organized and give your clients one clean link to everything they need.
            </p>
            <div className="mt-8">
              <a href="#top" className="inline-flex justify-center items-center gap-2 bg-neutral-950 text-white font-medium text-[15px] px-7 py-3.5 rounded-xl hover:-translate-y-[1px] hover:shadow-lift hover:bg-black transition-all active:translate-y-0 active:scale-[0.98]">
                Start using PropLink <ArrowRight size={17} />
              </a>
              <p className="mt-3 text-[13px] text-neutral-500">Set up your inventory in minutes.</p>
            </div>
          </Reveal>
        </div>

        <footer className="border-t border-neutral-200 bg-white">
          <div className="max-w-[1160px] mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center gap-5">
            <a href="#top" className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-neutral-950 text-white grid place-items-center text-[12px] font-bold">P</span>
              <span className="font-semibold tracking-tight text-[15px]">PropLink</span>
              <span className="text-neutral-300 mx-1">·</span>
              <span className="text-[13px] text-neutral-500">© PropLink</span>
            </a>
            <div className="sm:ml-auto flex items-center gap-1 text-[13.5px] text-neutral-600">
              <a href="#product" className="px-3 py-2 rounded-lg hover:text-neutral-950 hover:bg-neutral-100 transition-colors">Product</a>
              <a href="#pricing" className="px-3 py-2 rounded-lg hover:text-neutral-950 hover:bg-neutral-100 transition-colors">Pricing</a>
              <a href="#" className="px-3 py-2 rounded-lg hover:text-neutral-950 hover:bg-neutral-100 transition-colors">Privacy</a>
              <a href="#" className="px-3 py-2 rounded-lg hover:text-neutral-950 hover:bg-neutral-100 transition-colors">Terms</a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  )
}
