import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PlaceCard from "./components/PlaceCard";
import HotelCard from "./components/HotelCard";
import ChatWidget from "./components/ChatWidget";
import Footer from "./components/Footer";
import { popularPlaces, hotels } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-off-white">
      <Navbar />
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-deep-blue mb-4 font-serif">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Size özel ayrıcalıklı hizmetlerle tatilinizi mükemmelleştirin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tours Card */}
          <Link href="/tours" className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-xl">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10" />
            <img
              src="/tour-thumbnail.jpg"
              alt="Tekne Turları"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
              <h3 className="text-3xl font-bold text-white mb-2 font-serif">Tekne Turları</h3>
              <p className="text-white/90 font-light transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                Eşsiz koyları keşfedin
              </p>
            </div>
          </Link>

          {/* Transfers Card */}
          <Link href="/transfers" className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-xl">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10" />
            <img
              src="/transfer-thumbnail.jpg"
              alt="VIP Transfer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
              <h3 className="text-3xl font-bold text-white mb-2 font-serif">VIP Transfer</h3>
              <p className="text-white/90 font-light transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                Konforlu ve güvenli ulaşım
              </p>
            </div>
          </Link>

          {/* Real Estate Card */}
          <Link href="/real-estate" className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-xl">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10" />
            <img
              src="/villa-thumbnail.jpg"
              alt="Emlak & Villa"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
              <h3 className="text-3xl font-bold text-white mb-2 font-serif">Emlak & Villa</h3>
              <p className="text-white/90 font-light transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                Hayalinizdeki tatil evi
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Popular Places Section */}
      <section id="kesfet" className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-deep-blue mb-4 font-serif">
            Popüler Rotalar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Fethiye'nin en çok ziyaret edilen ve beğenilen lokasyonlarını inceleyin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularPlaces.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </section>

      {/* Hotels Section */}
      <section id="oteller" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-deep-blue mb-4 font-serif">
              Konaklama
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Her bütçeye ve zevke uygun, özenle seçilmiş oteller.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </main>
  );
}
