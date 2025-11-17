import { Bell, Camera, Wifi, Shield, Video, Clock, Users, Zap, Check, Star, ChevronRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Bell className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold tracking-tight text-foreground">PureEstCare</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Products</a>
            <a href="#technology" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Technology</a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
          </div>
          <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6">
            Get Started
          </Button>
        </nav>
      </header>

      <section className="pt-40 pb-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/30 rounded-full text-sm border border-accent/40">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-foreground/80 tracking-wide">Next-Generation Security</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-light text-balance leading-[1.1] text-foreground tracking-tight">
                Elegant protection for your home
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Experience premium smart doorbell technology with crystal-clear 4K video, intelligent AI detection, and seamless connectivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full text-base px-8 h-12">
                  Explore Collection
                </Button>
                <Button size="lg" variant="ghost" className="text-base rounded-full px-8 h-12 gap-2">
                  <Play className="h-4 w-4" />
                  Watch Video
                </Button>
              </div>
              <div className="flex items-center gap-12 pt-6 border-t border-border/50">
                <div>
                  <div className="text-3xl font-light text-foreground">500K+</div>
                  <div className="text-sm text-muted-foreground mt-1">Trusted Homes</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-foreground">4.9★</div>
                  <div className="text-sm text-muted-foreground mt-1">Customer Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-8 bg-accent/10 blur-3xl rounded-full" />
              <Image
                src="/modern-smart-doorbell-with-camera-on-white-door.jpg"
                alt="Smart Doorbell"
                width={700}
                height={700}
                className="relative z-10 rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light mb-6 text-foreground text-balance tracking-tight">Premium Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sophisticated technology designed for modern living
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Camera,
                title: '4K HDR Camera',
                description: 'Capture every detail with exceptional clarity, day or night'
              },
              {
                icon: Wifi,
                title: 'Instant Alerts',
                description: 'Real-time notifications delivered to your device instantly'
              },
              {
                icon: Shield,
                title: 'Bank-Level Security',
                description: 'Military-grade encryption protects your privacy'
              },
              {
                icon: Video,
                title: 'Two-Way Audio',
                description: 'Crystal-clear communication with HD audio quality'
              },
              {
                icon: Clock,
                title: 'Continuous Recording',
                description: 'Never miss a moment with 24/7 video recording'
              },
              {
                icon: Users,
                title: 'Smart Detection',
                description: 'AI distinguishes people, pets, and packages'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: How It Works */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light mb-6 text-foreground text-balance tracking-tight">Simple. Seamless. Secure.</h2>
            <p className="text-lg text-muted-foreground">Three steps to complete peace of mind</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '1',
                title: 'Install',
                description: 'Effortless setup in under 15 minutes with our intuitive installation guide.',
                image: 'installation tools and smart doorbell'
              },
              {
                step: '2',
                title: 'Connect',
                description: 'Download the app, scan the code, and sync with your Wi-Fi network.',
                image: 'smartphone with doorbell app interface'
              },
              {
                step: '3',
                title: 'Protect',
                description: 'Monitor your home from anywhere with instant alerts and live video.',
                image: 'person viewing doorbell footage on phone'
              }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="text-7xl font-light text-primary/20 mb-6">{item.step}</div>
                <div className="aspect-[4/3] mb-8 rounded-2xl overflow-hidden bg-secondary/50">
                  <Image
                    src={`/.jpg?key=lqx1p&height=300&width=400&query=${item.image}`}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <section id="technology" className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-light mb-8 text-foreground text-balance tracking-tight leading-tight">
                Powered by intelligent technology
              </h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                Our advanced AI analyzes video in real-time, reducing false alerts by 95% while ensuring you never miss what matters.
              </p>
              <div className="space-y-8">
                {[
                  {
                    icon: Zap,
                    title: 'Lightning Fast',
                    description: 'Edge computing delivers alerts in under 2 seconds'
                  },
                  {
                    icon: Shield,
                    title: 'Privacy First',
                    description: 'Military-grade encryption protects your data'
                  },
                  {
                    icon: Camera,
                    title: 'Smart Zones',
                    description: 'Customize detection areas for precise monitoring'
                  }
                ].map((tech, idx) => (
                  <div key={idx} className="flex gap-5">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <tech.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-foreground">{tech.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-8 bg-accent/10 blur-3xl rounded-full" />
              <Image
                src="/ai-technology-dashboard-with-smart-doorbell-analyt.jpg"
                alt="Technology"
                width={700}
                height={700}
                className="relative z-10 rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light mb-6 text-foreground text-balance tracking-tight">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground">Excellence in every detail</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '99.9%', label: 'Uptime', desc: 'Always connected' },
              { value: '<2s', label: 'Alert Time', desc: 'Industry fastest' },
              { value: '180°', label: 'View Angle', desc: 'Complete coverage' },
              { value: '24/7', label: 'Support', desc: 'Expert assistance' }
            ].map((benefit, idx) => (
              <Card key={idx} className="p-8 text-center border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <div className="text-5xl font-light text-primary mb-3">{benefit.value}</div>
                <div className="text-lg font-medium mb-2 text-foreground">{benefit.label}</div>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light mb-6 text-foreground text-balance tracking-tight">Compare Models</h2>
            <p className="text-lg text-muted-foreground">Find your perfect match</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-6 text-foreground font-medium">Feature</th>
                  <th className="text-center p-6 text-foreground font-medium">Essential</th>
                  <th className="text-center p-6 text-foreground font-medium bg-primary/5">Pro</th>
                  <th className="text-center p-6 text-foreground font-medium">Elite</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Video Quality', essential: '1080p HD', pro: '4K HDR', elite: '4K HDR+' },
                  { feature: 'Field of View', essential: '160°', pro: '180°', elite: '180°' },
                  { feature: 'Night Vision', essential: 'Standard', pro: 'Color', elite: 'Spotlight' },
                  { feature: 'AI Detection', essential: '—', pro: 'Person', elite: 'Full Suite' },
                  { feature: 'Cloud Storage', essential: '7 days', pro: '30 days', elite: 'Unlimited' },
                  { feature: 'Audio Quality', essential: 'Standard', pro: 'Premium', elite: 'Studio' },
                  { feature: 'Facial Recognition', essential: '—', pro: '—', elite: '✓' },
                  { feature: 'Monitoring', essential: '—', pro: '—', elite: '24/7' }
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-border/30 hover:bg-secondary/30 transition-colors">
                    <td className="p-6 text-muted-foreground font-medium">{row.feature}</td>
                    <td className="text-center p-6 text-foreground">{row.essential}</td>
                    <td className="text-center p-6 text-foreground bg-primary/5 font-medium">{row.pro}</td>
                    <td className="text-center p-6 text-foreground">{row.elite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 p-16 text-center border border-border/50">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.05),transparent_50%)]" />
            <div className="relative z-10">
              <h2 className="text-5xl lg:text-6xl font-light mb-6 text-balance leading-tight text-foreground tracking-tight">
                Transform your home security
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Join over 500,000 homeowners who trust PureEstCare for their security needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full text-base px-10 h-14">
                  Shop Collection
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-base px-10 h-14 border-foreground/20">
                  Schedule Consultation
                </Button>
              </div>
              <p className="text-sm mt-10 text-muted-foreground">Complimentary shipping · 30-day returns · Lifetime warranty</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                  <Bell className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-semibold text-foreground">PureEstCare</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Premium smart security designed for modern living.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-5 text-foreground text-sm tracking-wide">Products</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Essential</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Pro</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Elite</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-5 text-foreground text-sm tracking-wide">Support</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Installation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Warranty</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-5 text-foreground text-sm tracking-wide">Company</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>© 2025 PureEstCare. Crafted with care.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
