import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Clock, Star, Search } from "lucide-react";
import heroImage from "@/assets/hero-food-delivery.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium food delivery"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm border border-white/20">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span>Premium Food Delivery Service</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Delicious Food,
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}Delivered Fast
              </span>
            </h1>
            <p className="text-lg text-white/90 md:text-xl max-w-lg">
              Experience premium dining at home with our curated selection of restaurants 
              and lightning-fast delivery service.
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70" />
              <Input
                placeholder="Enter your delivery address"
                className="pl-10 bg-transparent border-none text-white placeholder:text-white/70 focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button size="lg" className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground font-semibold px-8 shadow-glow">
              <Search className="mr-2 h-4 w-4" />
              Find Food
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 text-white">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">30 min delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-accent fill-accent" />
              <span className="text-sm font-medium">4.8+ rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">500+ restaurants</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 hidden lg:block">
        <div className="glass rounded-2xl p-4 shadow-premium animate-bounce">
          <div className="text-2xl">🍕</div>
        </div>
      </div>
      <div className="absolute bottom-32 right-32 hidden lg:block">
        <div className="glass rounded-2xl p-4 shadow-premium animate-bounce" style={{ animationDelay: "1s" }}>
          <div className="text-2xl">🍔</div>
        </div>
      </div>
      <div className="absolute top-1/3 right-20 hidden lg:block">
        <div className="glass rounded-2xl p-4 shadow-premium animate-bounce" style={{ animationDelay: "2s" }}>
          <div className="text-2xl">🥗</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;