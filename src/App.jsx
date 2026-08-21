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
  Scissors,
  Crown
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phone = "0772177070";
  const whatsappUrl = (msg) => `https://wa.me/94772177070?text=${encodeURIComponent(msg)}`;

  const fallbacks = {
    hero: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=80",
    kandyan: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    western: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    bridesmaid: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    bouquets: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
    hair: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    spa: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    g1: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    g2: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    g3: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80",
    g4: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=80",
    g5: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    g6: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
  };

  const services = [
    {
      title: "Royal Kandyan & Traditional Bridal Dressing",
      tag: "SIGNATURE",
      localImg: "/bridal.jpg",
      fallback: fallbacks.kandyan,
      desc: "Authentic 7-piece Kandyan jewelry placement, Nalalpatiya precision, handcrafted embroidery, and radiant HD bridal makeup.",
      features: ["Traditional Kandyan & Indian Dressing", "Flawless Sweat-Proof HD Makeup", "Custom Jewelry & Headdress Fitting"]
    },
    {
      title: "Contemporary Western & Homecoming Looks",
      tag: "HAUTE COUTURE",
      localImg: "/western.jpg",
      fallback: fallbacks.western,
      desc: "Delicate lace veil draping, soft-glam luminous skin finishes, European romantic updos, and effortless homecoming styling.",
      features: ["European Veil & Hair Artistry", "Luminous Glass-Skin Finish", "Pre-Shoot & Reception Ready"]
    },
    {
      title: "Bridal Retinue & Bridesmaids Dressing",
      tag: "WEDDING PARTY",
      localImg: "/bridesmaid.jpg",
      fallback: fallbacks.bridesmaid,
      desc: "Cohesive aesthetic coordination for maid of honors, bridesmaids, and flower girls matching the bride’s signature color palette.",
      features: ["Coordinated Theme Styling", "Long-Wear Photo-Ready Makeup", "Flower Girl Dressing Care"]
    },
    {
      title: "Handcrafted Fresh Floral Bouquets",
      tag: "BESPOKE FLORALS",
      localImg: "/bouquets.jpg",
      fallback: fallbacks.bouquets,
      desc: "Artisanal cascading and posy bouquets, fresh floral hair crowns, and matching groom boutonnieres crafted from luxury blooms.",
      features: ["Imported & Exotic Fresh Flowers", "Custom Color Harmony", "Matching Retinue Posies"]
    },
    {
      title: "Pre-Bridal Glow Facials & Skin Therapy",
      tag: "SKIN RITUAL",
      localImg: "/spa.jpg",
      fallback: fallbacks.spa,
      desc: "Targeted skin-brightening treatments, botanical hydration facials, anti-stress massages, and luxury bridal spa pedicures.",
      features: ["Deep Cleansing & Radiance Boost", "Deluxe Spa Pedicure & Nail Care", "Calming Sanctuary Atmosphere"]
    },
    {
      title: "Luxury Hair Treatments & Styling",
      tag: "HAIR ATELIER",
      localImg: "/hair.jpg",
      fallback: fallbacks.hair,
      desc: "Keratin infusions, deep nourishment conditioning, balayage hair coloring, and damage-repair rituals for lustrous bridal locks.",
      features: ["Intensive Keratin & Silk Spa", "Bridal Color & Highlights", "Precision Cut & Silk Blowout"]
    }
  ];

  const realReviews = [
    {
      name: "Lakshi Walisinghe",
      badge: "Verified Bride",
      text: "I did my bridal dressing and bridesmaid dressing at Madusha De Silva Bridals. Service is very good and Madusha akki is very talented. I love the bridal make up so much! And they provide amazing bridal and bridesmaid flower bouquets. The staff is very friendly and customer service is flexible.",
      event: "Full Bridal & Bridesmaid Dressing"
    },
    {
      name: "Sanjukktha Giridharan",
      badge: "Loyal Client • 3+ Years",
      text: "This is my go-to salon for over 3 years. The owner is very sweet and the staff are very friendly. I fully trust them with my hair and wouldn't go anywhere else in Colombo.",
      event: "Hair Couture & Salon Care"
    },
    {
      name: "Gayara Jayasinghe",
      badge: "Verified Client",
      text: "The best place to get your hair and makeup done. Very attentive staff with a cozy atmosphere. Love the pedicure and the facial too — truly top tier experience.",
      event: "Glow Facials & Spa Rituals"
    },
    {
      name: "Chandula Sathsarani",
      badge: "Verified Client",
      text: "This was my first time visiting this salon for my graduation makeup and dressing. Even though it was my first visit, they treated me in a very friendly and welcoming way.",
      event: "Special Occasion Dressing"
    },
    {
      name: "Dulini W",
      badge: "Local Guide",
      text: "I’ve been going to Madusha’s salon for my facials and pedicures. Amazing hospitality, very skilled staff, and peaceful environment.",
      event: "Bridal Skin & Pedicures"
    },
    {
      name: "PS",
      badge: "Verified Client",
      text: "Got a conditioner treatment done for my hair. Very much satisfied with the result. They are very professional and friendly. Loved the ambience of the salon.",
      event: "Hair Spa Rituals"
    }
  ];

  const galleryList = [
    { localImg: "/gallery1.jpg", fallback: fallbacks.g1, title: "Royal Kandyan Heritage", cat: "Traditional Bride" },
    { localImg: "/gallery2.jpg", fallback: fallbacks.g2, title: "Romantic Western Lace", cat: "Western Bride" },
    { localImg: "/gallery3.jpg", fallback: fallbacks.g3, title: "Golden Hour Homecoming", cat: "Reception" },
    { localImg: "/gallery4.jpg", fallback: fallbacks.g4, title: "Handcrafted Bridal Florals", cat: "Bouquets" },
    { localImg: "/gallery5.jpg", fallback: fallbacks.g5, title: "Elegantly Styled Retinue", cat: "Bridesmaids" },
    { localImg: "/gallery6.jpg", fallback: fallbacks.g6, title: "HD Glass-Skin Glow", cat: "Bridal Makeup" }
  ];

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#2b231d] selection:bg-[#c59d5f] selection:text-white">
      
      {/* Luxury Gold Announcement Bar */}
      <div className="bg-[#1f1915] text-[#e8d5b5] text-[11px] sm:text-xs py-2.5 px-4 text-center tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-2 border-b border-[#c59d5f]/20">
        <Sparkles className="w-3.5 h-3.5 text-[#c59d5f] animate-pulse" />
        <span>Accepting 2026 & 2027 Wedding Bookings • 363 High Level Road, Nugegoda</span>
      </div>

      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#e8dfd5] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            
            {/* Logo from public/logo.png */}
            <a href="#" className="flex items-center gap-3.5 group">
              <img 
                src="/logo.png" 
                alt="Madusha De Silva The Bridal Salon" 
                className="h-16 w-auto object-contain transition group-hover:scale-105 duration-300 drop-shadow-xs"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  const fallback = document.getElementById('luxury-logo-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div id="luxury-logo-fallback" style={{ display: 'none' }} className="flex flex-col">
                <span className="font-serif-luxury text-2xl font-bold tracking-wider text-[#2b231d]">
                  MADUSHA <span className="text-[#a67c41] font-light">DE SILVA</span>
                </span>
                <span className="text-[9px] text-[#8c735d] font-semibold tracking-[0.3em] uppercase">
                  The Bridal Salon • Nugegoda
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8 text-[13px] tracking-widest uppercase font-medium text-[#4a3f35]">
              <a href="#services" className="hover:text-[#a67c41] transition">Services</a>
              <a href="#reviews" className="hover:text-[#a67c41] transition">Bride Stories (5.0★)</a>
              <a href="#gallery" className="hover:text-[#a67c41] transition">Atelier Portfolio</a>
              <a href="#contact" className="hover:text-[#a67c41] transition">Salon & Location</a>
              <a 
                href={whatsappUrl("Hello Madusha De Silva Bridal Salon, I would like to inquire about wedding date availability and bridal packages.")} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2.5 bg-gradient-to-r from-[#b38b4d] to-[#966f33] hover:from-[#966f33] hover:to-[#7a5924] text-white px-6 py-3 rounded-full font-semibold transition shadow-md shadow-[#a67c41]/25 active:scale-95 text-[11px] tracking-[0.15em] uppercase"
              >
                <MessageCircle className="w-4 h-4" />
                Check Date on WhatsApp
              </a>
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#2b231d] hover:text-[#a67c41]"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#faf7f2] border-b border-[#e8dfd5] px-6 py-6 flex flex-col gap-4 text-sm uppercase tracking-widest font-semibold shadow-2xl">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-[#2b231d] py-1">Services</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-[#2b231d] py-1">Bride Stories (5.0★)</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-[#2b231d] py-1">Portfolio</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-[#2b231d] py-1">Location & Contact</a>
            <a 
              href={whatsappUrl("Hello Madusha De Silva Bridal Salon, I would like to check wedding date availability.")} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-[#a67c41] text-white py-3.5 rounded-full font-bold text-xs uppercase tracking-widest mt-2"
            >
              <MessageCircle className="w-4 h-4" />
              Check Date on WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#edd6b6]/40 via-[#f7e8d5]/30 to-[#fceee9]/50 blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/90 border border-[#e5d5c0] mb-8 shadow-xs backdrop-blur-sm">
              <div className="flex text-[#d4a038]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#d4a038]" />
                ))}
              </div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#5a483a]">
                5.0 Rated Luxury Bridal Atelier • Nugegoda
              </span>
            </div>

            <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#241c17] leading-[1.12]">
              Timeless Elegance. <br />
              <span className="font-editorial italic font-normal text-[#a67c41] block mt-1 sm:mt-2">
                Your Dream Bridal Artistry.
              </span>
            </h1>

            <p className="mt-8 text-base sm:text-lg text-[#5e4e42] max-w-2xl leading-relaxed font-light">
              Crafting Sri Lanka's most radiant brides through bespoke Kandyan dressing, European romantic aesthetics, flawless long-wear HD makeup, and artisan fresh floral creations.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a 
                href={whatsappUrl("Hello Madusha De Silva Bridal, I'd like to book a one-on-one bridal consultation for my wedding.")}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-[#b38b4d] to-[#966f33] hover:from-[#966f33] hover:to-[#7a5924] text-white font-semibold px-9 py-4 rounded-full shadow-xl shadow-[#a67c41]/30 transition active:scale-95 text-xs uppercase tracking-[0.18em]"
              >
                <MessageCircle className="w-4 h-4" />
                Reserve Bridal Consultation
              </a>
              <a 
                href={`tel:${phone}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-white/90 hover:bg-white text-[#3d3128] border border-[#d6c3ad] px-8 py-4 rounded-full font-semibold transition text-xs uppercase tracking-[0.15em] shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#a67c41]" />
                Call Salon: {phone}
              </a>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-6 sm:gap-12 border-t border-[#e8ddcf] pt-10 w-full max-w-xl">
              <div>
                <p className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#241c17]">25K+</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#857161] font-semibold mt-1">Devoted Brides</p>
              </div>
              <div>
                <p className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#a67c41]">5.0 ★</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#857161] font-semibold mt-1">Google Rating</p>
              </div>
              <div>
                <p className="font-serif-luxury text-2xl sm:text-4xl font-bold text-[#241c17]">100%</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#857161] font-semibold mt-1">Bespoke Art</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white border-t border-b border-[#ece2d6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#a67c41]">Haute Couture & Salon</span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#241c17] mt-3">
              Signature Bridal Services
            </h2>
            <div className="w-16 h-0.5 bg-[#a67c41]/50 mx-auto my-4" />
            <p className="text-[#69584b] text-sm sm:text-base font-light leading-relaxed">
              Every bride is given individual attention, personalized look mockups, and premium international cosmetic formulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#faf7f2] border border-[#e8dfd5] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#a67c41]/60 hover:shadow-2xl transition duration-300 group"
              >
                <div className="h-64 w-full overflow-hidden relative bg-[#eee6db]">
                  <img 
                    src={item.localImg} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                    onError={(e) => { e.target.onerror = null; e.target.src = item.fallback; }}
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase text-[#8a632b] border border-[#e0cfba] shadow-xs">
                    {item.tag}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1 justify-between bg-[#faf7f2]">
                  <div>
                    <h3 className="font-serif-luxury text-xl font-bold text-[#241c17] group-hover:text-[#a67c41] transition leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[#6e5d50] text-xs sm:text-[13px] mt-3 leading-relaxed font-light">
                      {item.desc}
                    </p>

                    <div className="mt-6 space-y-2.5 border-t border-[#e8ded3] pt-5">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs text-[#4d4036] font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#a67c41] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={whatsappUrl(`Hello Madusha De Silva Bridal, I am interested in inquiring about the ${item.title} package.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 w-full flex items-center justify-center gap-2 bg-[#2b231d] hover:bg-[#a67c41] text-white py-3.5 rounded-full font-semibold text-[11px] uppercase tracking-[0.18em] transition active:scale-95 shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Inquire Package
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Reviews */}
      <section id="reviews" className="py-24 bg-[#f5efe6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#decbb4] text-[#805f2b] text-[11px] font-bold uppercase tracking-[0.2em] mb-4">
              <Star className="w-3.5 h-3.5 fill-[#d4a038] text-[#d4a038]" />
              Verified Bride Testimonials
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#241c17]">
              Loved by Sri Lankan Brides
            </h2>
            <div className="w-16 h-0.5 bg-[#a67c41]/50 mx-auto my-4" />
            <p className="text-[#69584b] text-sm font-light">
              Real feedback from brides and clients who trusted Madusha De Silva with their most memorable day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realReviews.map((rev, i) => (
              <div 
                key={i}
                className="bg-white border border-[#e5dcce] p-8 rounded-3xl flex flex-col justify-between relative shadow-sm hover:shadow-xl transition duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="flex text-[#d4a038]">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className="w-4 h-4 fill-[#d4a038]" />
                      ))}
                    </div>
                    <span className="text-[9px] uppercase tracking-widest bg-[#f7efe4] text-[#8a632b] px-3 py-1 rounded-full font-bold">
                      {rev.badge}
                    </span>
                  </div>

                  <p className="text-[#4f4137] text-xs sm:text-[13px] leading-relaxed italic font-light">
                    "{rev.text}"
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-[#f0e7dc] flex items-center justify-between">
                  <div>
                    <h4 className="font-serif-luxury text-sm font-bold text-[#241c17]">{rev.name}</h4>
                    <p className="text-[11px] text-[#a67c41] font-medium tracking-wide">{rev.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Portfolio Showcase */}
      <section id="gallery" className="py-24 bg-white border-t border-b border-[#ece2d6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#a67c41]">Portfolio & Craft</span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#241c17] mt-3">
              The Bridal Atelier
            </h2>
            <div className="w-16 h-0.5 bg-[#a67c41]/50 mx-auto my-4" />
            <p className="text-[#69584b] text-sm font-light">
              Glimpse into the craftsmanship, headdress fitting, and flawless looks curated inside our Nugegoda salon.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryList.map((item, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden h-80 border border-[#e8dfd5] bg-[#eee6db] shadow-xs">
                <img 
                  src={item.localImg} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700 ease-out"
                  onError={(e) => { e.target.onerror = null; e.target.src = item.fallback; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1814]/85 via-[#1f1814]/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#e8d5b5] block mb-1">
                    {item.cat}
                  </span>
                  <p className="font-serif-luxury text-base font-bold text-white tracking-wide">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Salon Information */}
      <section id="contact" className="py-24 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#e8ded3] rounded-3xl p-8 sm:p-14 flex flex-col lg:flex-row justify-between gap-12 items-center shadow-lg">
            
            <div className="space-y-6 max-w-xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#a67c41]">Visit The Atelier</span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#241c17]">Conveniently Located on High Level Road</h2>
              
              <div className="space-y-4 text-sm text-[#57483e]">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#a67c41] shrink-0 mt-0.5" />
                  <span>363 High Level Road, Nugegoda, Colombo, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <Clock className="w-5 h-5 text-[#a67c41] shrink-0" />
                  <span>Salon Hours: 8:30 AM – 6:30 PM (Bridal Consultations by Appointment)</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <Phone className="w-5 h-5 text-[#a67c41] shrink-0" />
                  <span>Bridal Hotline: {phone} / 011 280 4884</span>
                </div>
              </div>

              <div className="pt-2">
                <a 
                  href="https://maps.google.com/?q=363+High+Level+Rd,+Nugegoda"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#faf7f2] hover:bg-[#f2eae0] text-[#423329] text-xs font-bold tracking-widest uppercase px-7 py-4 rounded-full border border-[#d6c7b6] transition"
                >
                  <MapPin className="w-4 h-4 text-[#a67c41]" />
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Direct Booking VIP Card */}
            <div className="w-full lg:w-96 bg-[#1f1915] text-[#faf7f2] rounded-3xl p-9 text-center space-y-5 shadow-2xl border border-[#a67c41]/30">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#c59d5f] font-bold">Bridal Inquiries</p>
              <h4 className="font-serif-luxury text-2xl font-bold text-white">Reserve Your Wedding Date</h4>
              <p className="text-xs text-[#d6c7b6] leading-relaxed font-light">
                Connect directly with Madusha and our senior stylists on WhatsApp to lock in your date or schedule a mock trial.
              </p>
              <a 
                href={whatsappUrl("Hello Madusha De Silva Bridal Salon, I'd like to check wedding date availability.")}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#b38b4d] to-[#966f33] hover:from-[#966f33] hover:to-[#7a5924] text-white font-bold py-4 rounded-full shadow-xl shadow-[#a67c41]/25 transition active:scale-95 text-xs uppercase tracking-[0.18em]"
              >
                <MessageCircle className="w-4 h-4" />
                Check Date on WhatsApp
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Sticky Mobile Floating Button */}
      <div className="fixed bottom-4 left-4 right-4 z-50 lg:hidden">
        <a 
          href={whatsappUrl("Hello Madusha De Silva Bridal, I'd like to check wedding date availability.")}
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#b38b4d] to-[#966f33] text-white font-bold py-4 px-6 rounded-full shadow-2xl border border-[#e5c99e]/40 active:scale-95 text-xs uppercase tracking-widest"
        >
          <MessageCircle className="w-4 h-4 fill-white text-[#966f33]" />
          Check Wedding Date on WhatsApp
        </a>
      </div>

      {/* Footer */}
      <footer className="py-10 bg-white border-t border-[#e8ded3] text-center text-xs text-[#8c7a6e] font-light">
        <p className="tracking-wide">© {new Date().getFullYear()} MADUSHA DE SILVA THE BRIDAL SALON. All rights reserved.</p>
        <p className="mt-1.5 text-[11px]">363 High Level Road, Nugegoda | Hotline: {phone} / 011 280 4884</p>
      </footer>

    </div>
  );
}