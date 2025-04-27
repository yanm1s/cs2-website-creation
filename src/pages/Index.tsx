import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import WeaponsSection from "@/components/WeaponsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <NewsSection />
        <WeaponsSection />
        
        {/* Maps Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Популярные карты</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Dust 2 */}
              <div className="relative rounded-lg overflow-hidden h-64 group">
                <img 
                  src="https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop" 
                  alt="Dust 2" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Dust 2</h3>
                  <p className="text-gray-300">Классическая карта CS</p>
                </div>
              </div>
              
              {/* Mirage */}
              <div className="relative rounded-lg overflow-hidden h-64 group">
                <img 
                  src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&auto=format&fit=crop" 
                  alt="Mirage" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Mirage</h3>
                  <p className="text-gray-300">Ближневосточный город</p>
                </div>
              </div>
              
              {/* Inferno */}
              <div className="relative rounded-lg overflow-hidden h-64 group">
                <img 
                  src="https://images.unsplash.com/photo-1533658280853-e4a10c25a30d?w=500&auto=format&fit=crop" 
                  alt="Inferno" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white">Inferno</h3>
                  <p className="text-gray-300">Итальянская деревня</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;