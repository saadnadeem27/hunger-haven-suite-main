import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Star, Clock, MapPin, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import burgerPalaceImage from "@/assets/restaurants/burger-palace.jpg";
import italianCornerImage from "@/assets/restaurants/italian-corner.jpg";
import sushiMasterImage from "@/assets/restaurants/sushi-master.jpg";
import greenGardenImage from "@/assets/restaurants/green-garden.jpg";
import spiceRouteImage from "@/assets/restaurants/spice-route.jpg";
import tacoFiestaImage from "@/assets/restaurants/taco-fiesta.jpg";

const Restaurants = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const restaurants = [
    {
      id: 1,
      name: "Burger Palace",
      cuisine: "American",
      rating: 4.8,
      deliveryTime: "20-30 min",
      deliveryFee: 2.99,
      distance: "0.8 km",
      image: burgerPalaceImage,
      tags: ["Popular", "Fast Delivery"],
      description: "Home of the best burgers in town with premium ingredients"
    },
    {
      id: 2,
      name: "Italian Corner",
      cuisine: "Italian", 
      rating: 4.7,
      deliveryTime: "25-35 min",
      deliveryFee: 3.49,
      distance: "1.2 km",
      image: italianCornerImage,
      tags: ["Authentic", "Family Recipe"],
      description: "Traditional Italian cuisine with modern touches"
    },
    {
      id: 3,
      name: "Sushi Master",
      cuisine: "Japanese",
      rating: 4.9,
      deliveryTime: "30-40 min", 
      deliveryFee: 4.99,
      distance: "2.1 km",
      image: sushiMasterImage,
      tags: ["Premium", "Fresh Fish"],
      description: "Fresh sushi and authentic Japanese dishes"
    },
    {
      id: 4,
      name: "Green Garden",
      cuisine: "Healthy",
      rating: 4.6,
      deliveryTime: "15-25 min",
      deliveryFee: 1.99,
      distance: "0.5 km", 
      image: greenGardenImage,
      tags: ["Vegan Options", "Organic"],
      description: "Fresh, healthy meals made with organic ingredients"
    },
    {
      id: 5,
      name: "Spice Route",
      cuisine: "Indian",
      rating: 4.5,
      deliveryTime: "25-35 min",
      deliveryFee: 3.99,
      distance: "1.8 km",
      image: spiceRouteImage,
      tags: ["Spicy", "Authentic"],
      description: "Authentic Indian flavors with traditional spices"
    },
    {
      id: 6,
      name: "Taco Fiesta",
      cuisine: "Mexican",
      rating: 4.4,
      deliveryTime: "20-30 min",
      deliveryFee: 2.49,
      distance: "1.0 km",
      image: tacoFiestaImage,
      tags: ["Casual Dining", "Large Portions"],
      description: "Fresh Mexican food with bold flavors"
    }
  ];

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Restaurants Near You</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from hundreds of restaurants delivering to your location
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search restaurants or cuisine..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-muted/50"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter & Sort
          </Button>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <Card key={restaurant.id} className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
              <CardHeader className="p-0">
                <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 space-y-1">
                    {restaurant.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} className="bg-background/90 text-foreground text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Badge className="absolute top-2 right-2 bg-background/90 text-foreground">
                    <Star className="h-3 w-3 fill-primary text-primary mr-1" />
                    {restaurant.rating}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-xl text-foreground">{restaurant.name}</h3>
                    <p className="text-sm text-muted-foreground">{restaurant.cuisine} • {restaurant.description}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{restaurant.deliveryTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{restaurant.distance}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">
                      Delivery: ${restaurant.deliveryFee}
                    </span>
                    <Button size="sm" className="bg-gradient-primary hover:bg-primary-dark">
                      Order Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No restaurants found matching your search.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setSearchTerm("")}
            >
              Clear Search
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Restaurants;