import React, { useState } from 'react';
import { 
  Sparkles, 
  Heart, 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle2, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight,
  Flower2,
  Gem,
  Scissors
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phone = "0772177070";
  const whatsappUrl = (msg) => `https://wa.me/94772177070?text=${encodeURIComponent(msg)}`;

  // Default online fallbacks if local public/ files are absent
  const fallbacks = {
    hero: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1920&q=80",
    kandyan: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    western: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    bridesmaid: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    bouquets: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
    hair: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    spa: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    g1: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80",
    g2: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    g3: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    g4: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
    g5: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    g6: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
  };

  const services = [
    {
      title: "Signature Bridal Dressing (Kandyan & Western)",
      tag: "SIGNATURE",
      localImg: "/bridal.jpg",
      fallback: fallbacks.kandyan,
      desc: "Complete bridal dressing, custom jewelry placement, veil styling, and long-lasting HD flawless bridal makeup.",
      features: ["Traditional Kandyan & Western Styles", "High-Definition Long-Wear Makeup", "Custom Jewelry & Saree Draping"]
    },
    {
      title: "Retinue & Bridesmaids Dressing",
      tag: "WEDDING PARTY",
      localImg: "/bridesmaid.jpg",
      fallback: fallbacks.bridesmaid,
      desc: "Coordinated hair styling, matching makeup aesthetics, and saree draping for bridesmaids and flower girls.",
      features: ["Matching Theme Hairstyles", "Natural Radiant Makeup", "Flowergirl Dressing Assistance"]
    },
    {
      title: "Fresh Bridal Bouquets & Floral Structures",
      tag: "EXCLUSIVE",
      localImg: "/bouquets.jpg",
      fallback: fallbacks.bouquets,
      desc: "Artisan fresh-flower bouquets, hair flora crowns, and matching groom buttonholes crafted for your theme.",
      features: ["Imported & Local Fresh Blooms", "Custom Color Harmony", "Matching Bridesmaid Posies"]
    },
    {
      title: "Pre-Shoots, Engagements & Homecomings",
      tag: "OCCASION",
      localImg: "/western.jpg",
      fallback: fallbacks.western,
      desc: "Specialized look styling crafted specifically for studio lighting, outdoor golden hour pre-shoots, and receptions.",
      features: ["Camera-Ready Contour & Glow", "All-Day Humidity Resistance", "Outfit Draping & Fixes"]
    },
    {
      title: "Luxury Hair Treatments & Styling",
      tag: "HAIR SPA",
      localImg: "/hair.jpg",
      fallback: fallbacks.hair,
      desc: "Deep conditioning restorative hair treatments, bridal hair coloring, highlights, and specialized styling.",
      features: ["Bridal Hair Care Rituals", "Damage Repair Conditioning", "Expert Cut & Blowout"]
    },
    {
      title: "Bridal Glow Facials & Luxury Pedicures",
      tag: "GLOW CARE",
      localImg: "/spa.jpg",
      fallback: fallbacks.spa,
      desc: "Relaxing skin prep treatments, anti-tan facial brightening, soothing foot reflexology, and spa pedicures.",
      features: ["Deep Cleansing & Glow Facials", "Deluxe Spa Pedicure & Polish", "Relaxing Salon Ambience"]
    }
  ];

  const realReviews = [
    {
      name: "Lakshi Walisinghe",
      badge: "Verified Bride",
      text: "I did my bridal dressing and bridesmaid dressing at Madusha De Silva Bridals. Service is very good and Madusha akki is very talented. I love the bridal make up so much! And they provide amazing bridal and bridesmaid flower bouquets. The staff is very friendly and customer service is flexible.",
      event: "Bridal Dressing & Fresh Bouquets"
    },
    {
      name: "Sanjukktha Giridharan",
      badge: "Local Guide",
      text: "This is my go-to salon for over 3 years. The owner is very sweet and the staff are very friendly. I fully trust them with my hair and wouldn't go anywhere else in Colombo.",
      event: "Hair Styling & Salon Care"
    },
    {
      name: "Gayara Jayasinghe",
      badge: "Local Guide",
      text: "The best place to get your hair and makeup done. Very attentive staff with a cozy atmosphere. Love the pedicure and the facial too — truly top tier experience.",
      event: "Makeup, Facial & Pedicure"
    },
    {
      name: "Chandula Sathsarani",
      badge: "Verified Client",
      text: "This was my first time visiting this salon for my graduation makeup and dressing. Even though it was my first visit, they treated me in a very friendly and welcoming way.",
      event: "Graduation Makeup & Dressing"
    },
    {
      name: "PS",
      badge: "Verified Client",
      text: "Got a conditioner treatment done for my hair. Very much satisfied with the result. They are very professional and friendly. Loved the ambience of the salon. Salon owner is very knowledgeable!",
      event: "Hair Treatment & Ambience"
    },
    {
      name: "Dulini W",
      badge: "Local Guide",
      text: "I’ve been going to Madusha’s salon for my facials and pedicures. Amazing hospitality, very skilled staff, and peaceful environment.",
      event: "Skin Care & Pedicures"
    }
  ];

  const galleryList = [
    { localImg: "/gallery1.jpg", fallback: fallbacks.g1, title: "Kandyan Bride Artistry" },
    { localImg: "/gallery2.jpg", fallback: fallbacks.g2, title: "Western Bridal Glam" },
    { localImg: "/gallery3.jpg", fallback: fallbacks.g3, title: "Custom Saree Draping" },
    { localImg: "/gallery4.jpg", fallback: fallbacks.g4, title: "Fresh Bridal Bouquets" },
    { localImg: "/gallery5.jpg", fallback: fallbacks.g5, title: "Retinue & Bridesmaids" },
    { localImg: "/gallery6.jpg", fallback: fallbacks.g6, title: "Glow & Makeup Precision" }
  ];

  return (
    <div className="min-h-screen bg-[#fffcfc] text-[#2c2420] selection:bg-rose-500 selection:text-white">
      
      {/* Top Notification Bar */}
      <div className="bg-[#2a2220] text-rose-100 text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-rose-300 animate-pulse" />
        <span>Now Accepting Bridal Bookings • 363 High Level Road, Nugegoda</span>
      </div>

      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Madusha De Silva Logo" 
                className="h-11 w-auto object-contain rounded-md"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  const fallbackEl = document.getElementById('bridal-logo-fallback');
                  if (fallbackEl) fallbackEl.style.display = 'flex';
                }}
              />
              <div id="bridal-logo-fallback" style={{ display: 'none' }} className="w-10 h-10 rounded-full bg-rose-50 border border-rose-200 items-center justify-center text-rose-600 font-serif font-bold text-lg">
                M
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-serif font-black tracking-tight text-[#2a2220]">
                  MADUSHA <span className="text-rose-600 font-sans text-lg font-light tracking-widest">DE SILVA</span>
                </span>
                <span className="text-[10px] sm:text-[11px] text-rose-900/60 font-semibold tracking-widest uppercase">
                  The Bridal Salon • Nugegoda
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-zinc-700">
              <a href="#services" className="hover:text-rose-600 transition">Services</a>
              <a href="#reviews" className="hover:text-rose-600 transition">Bride Reviews (5.0★)</a>
              <a href="#gallery" className="hover:text-rose-600 transition">Portfolio</a>
              <a href="#contact" className="hover:text-rose-600 transition">Location</a>
              <a 
                href={whatsappUrl("Hi Madusha De Silva Bridal, I would like to inquire about wedding date availability.")} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-5 py-2.5 rounded-full font-bold transition shadow-md shadow-rose-500/20 active:scale-95 text-xs uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4" />
                Check Date on WhatsApp
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-700 hover:text-zinc-950"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-rose-100 px-6 py-5 flex flex-col gap-4 text-base font-semibold shadow-xl">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-zinc-800">Services</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-zinc-800">Reviews (5.0★)</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-zinc-800">Portfolio</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-zinc-800">Location</a>
            <a 
              href={whatsappUrl("Hi Madusha De Silva Bridal, I would like to check wedding date availability.")}
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-rose-600 text-white py-3 rounded-full font-bold text-sm"
            >
              <MessageCircle className="w-5 h-5" />
              Inquire on WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-rose-50/50 via-[#fffcfc] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-rose-200 mb-6 shadow-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-rose-900">
                5.0 Rated Luxury Bridal Salon in Nugegoda
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-[#2a2220] leading-tight">
              Timeless Elegance. <br />
              <span className="text-rose-600 font-sans italic font-normal">
                Your Dream Bridal Look.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-600 max-w-2xl leading-relaxed">
              Celebrate your special day with bespoke Kandyan & Western bridal dressing, precision artistry makeup, tailored bridesmaid styling, and handmade fresh floral bouquets.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a 
                href={whatsappUrl("Hi Madusha De Silva Bridal, I would like to book a bridal consultation.")}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-rose-600 hover:bg-rose-700 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-rose-600/25 transition active:scale-95 text-sm uppercase tracking-wider"
              >
                <MessageCircle className="w-5 h-5" />
                Book Consultation on WhatsApp
              </a>
              <a 
                href={`tel:${phone}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-rose-50 text-zinc-800 border border-rose-200 px-8 py-4 rounded-full font-bold transition text-sm shadow-xs"
              >
                <Phone className="w-4 h-4 text-rose-600" />
                Call Salon: {phone}
              </a>
            </div>

            {/* Quick Badges */}
            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 border-t border-rose-100 pt-8 w-full max-w-xl">
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-black text-[#2a2220]">25K+</p>
                <p className="text-xs text-zinc-500 font-medium mt-1">Community</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-black text-rose-600">5.0 ★</p>
                <p className="text-xs text-zinc-500 font-medium mt-1">Google Reviews</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-serif font-black text-[#2a2220]">100%</p>
                <p className="text-xs text-zinc-500 font-medium mt-1">Custom Styling</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white border-t border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Tailored Artistry</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#2a2220] mt-2">
              Bridal & Salon Services
            </h2>
            <p className="text-zinc-600 mt-3 text-sm sm:text-base">
              Every bride receives attentive personal care, premium international cosmetics, and dedicated styling support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#fffdfd] border border-rose-100 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-rose-300 hover:shadow-xl transition group"
              >
                <div className="h-56 w-full overflow-hidden relative bg-rose-50">
                  <img 
                    src={item.localImg} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => { e.target.onerror = null; e.target.src = item.fallback; }}
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-rose-700 border border-rose-200 shadow-xs">
                    {item.tag}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#2a2220] group-hover:text-rose-600 transition">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="mt-5 space-y-2 border-t border-rose-50 pt-4">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={whatsappUrl(`Hi Madusha De Silva Bridal, I am interested in inquiring about the ${item.title} package.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 w-full flex items-center justify-center gap-2 bg-[#2a2220] hover:bg-rose-600 text-white py-3 rounded-full font-bold text-xs transition active:scale-95 shadow-xs uppercase tracking-wider"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Inquire Package
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Reviews */}
      <section id="reviews" className="py-20 bg-[#fff9f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              Verified Bride & Client Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#2a2220]">
              Loved by Our Brides
            </h2>
            <p className="text-zinc-600 mt-2 text-sm">
              Read direct testimonials from brides and salon clients in Nugegoda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realReviews.map((rev, i) => (
              <div 
                key={i}
                className="bg-white border border-rose-100 p-7 rounded-3xl flex flex-col justify-between relative shadow-xs hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] bg-rose-50 text-rose-700 px-2.5 py-1 rounded-full font-semibold">
                      {rev.badge}
                    </span>
                  </div>

                  <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-rose-50 flex items-center justify-between">
                  <h4 className="text-sm font-bold text-[#2a2220]">{rev.name}</h4>
                  <p className="text-[11px] text-rose-600 font-semibold">{rev.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="gallery" className="py-20 bg-white border-t border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Visual Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#2a2220] mt-2">
              Inside Our Bridal Studio
            </h2>
            <p className="text-zinc-600 mt-2 text-sm">
              Glimpse the craftsmanship, saree draping, and flawless makeup looks created at 363 High Level Road.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryList.map((item, idx) => (
              <div key={idx} className="group relative rounded-3xl overflow-hidden h-72 border border-rose-100 bg-rose-50 shadow-xs">
                <img 
                  src={item.localImg} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => { e.target.onerror = null; e.target.src = item.fallback; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a2220]/80 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-xs font-bold text-white tracking-wide">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contacts */}
      <section id="contact" className="py-20 bg-[#fff9f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-rose-100 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row justify-between gap-10 items-center shadow-sm">
            
            <div className="space-y-6 max-w-lg">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Visit The Salon</span>
              <h2 className="text-3xl font-serif font-black text-[#2a2220]">Located in Nugegoda</h2>
              
              <div className="space-y-4 text-sm text-zinc-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <span>363 High Level Road, Nugegoda, Colombo, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>Salon Hours: 8:30 AM – 6:30 PM (Consultations by Appointment)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-rose-600 shrink-0" />
                  <span>Hotline: {phone}</span>
                </div>
              </div>

              <div className="pt-2">
                <a 
                  href="https://maps.google.com/?q=363+High+Level+Rd,+Nugegoda"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold px-6 py-3.5 rounded-full border border-rose-200 transition"
                >
                  <MapPin className="w-4 h-4 text-rose-600" />
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Direct Booking Card */}
            <div className="w-full md:w-80 bg-[#2a2220] text-white rounded-3xl p-8 text-center space-y-4 shadow-xl">
              <p className="text-xs uppercase tracking-widest text-rose-300 font-bold">Bridal Inquiries</p>
              <h4 className="text-xl font-serif font-bold text-white">Reserve Your Date</h4>
              <p className="text-xs text-rose-100/70 leading-relaxed">
                Connect directly with Madusha and the bridal team to check wedding date availability and packages.
              </p>
              <a 
                href={whatsappUrl("Hi Madusha De Silva Bridal, I want to check wedding date availability.")}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-bold py-3.5 rounded-full shadow-lg shadow-rose-600/30 transition active:scale-95 text-xs uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4" />
                Inquire on WhatsApp
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Sticky Mobile Floating Button */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <a 
          href={whatsappUrl("Hi Madusha De Silva Bridal, I'd like to check wedding date availability.")}
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-3 bg-rose-600 text-white font-bold py-3.5 px-6 rounded-full shadow-2xl border border-rose-400/30 active:scale-95 text-sm"
        >
          <MessageCircle className="w-5 h-5 fill-white text-rose-600" />
          Check Wedding Date on WhatsApp
        </a>
      </div>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-rose-100 text-center text-xs text-zinc-500 font-medium">
        <p>© {new Date().getFullYear()} MADUSHA DE SILVA THE BRIDAL SALON. All rights reserved.</p>
        <p className="mt-1">363 High Level Road, Nugegoda | Hotline: {phone}</p>
      </footer>

    </div>
  );
}