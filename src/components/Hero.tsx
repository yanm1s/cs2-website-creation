import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')", 
          filter: "brightness(0.5)" 
        }}
      />
      
      <div className="relative z-10 container h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white">
            Counter-Strike 2
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Легендарный шутер возвращается с новым движком, улучшенными картами и современной графикой
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Играть бесплатно
            </Button>
            <Button size="lg" variant="outline">
              Смотреть трейлер
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;