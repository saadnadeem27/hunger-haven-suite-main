import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Plus, Heart } from "lucide-react";
import { useState } from "react";

const foodItems = [
  {
    id: 1,
    name: "Truffle Mushroom Pizza",
    restaurant: "Bella Italia",
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.8,
    reviews: 127,
    time: "25-30 min",
    image: "🍕",
    category: "Pizza",
    description: "Wood-fired pizza with truffle oil, wild mushrooms, and fresh mozzarella",
    isPopular: true,
    discount: "17% off"
  },
  {
    id: 2,
    name: "Wagyu Beef Burger",
    restaurant: "Prime Grill",
    price: 32.99,
    rating: 4.9,
    reviews: 89,
    time: "20-25 min",
    image: "🍔",
    category: "Burgers",
    description: "Premium wagyu beef with caramelized onions, aged cheddar, and truffle mayo",
    isPopular: true
  },
  {
    id: 3,
    name: "Dragon Roll Sushi",
    restaurant: "Sakura House",
    price: 28.50,
    rating: 4.7,
    reviews: 156,
    time: "30-35 min",
    image: "🍣",
    category: "Sushi",
    description: "Fresh eel, cucumber, avocado topped with shrimp and spicy mayo"
  },
  {
    id: 4,
    name: "Mediterranean Bowl",
    restaurant: "Garden Fresh",
    price: 18.99,
    originalPrice: 22.99,
    rating: 4.6,
    reviews: 203,
    time: "15-20 min",
    image: "🥗",
    category: "Healthy",
    description: "Quinoa, grilled chicken, feta, olives, and lemon herb dressing",
    discount: "18% off"
  },
  {
    id: 5,
    name: "Chocolate Lava Cake",
    restaurant: "Sweet Dreams",
    price: 12.99,
    rating: 4.9,
    reviews: 312,
    time: "10-15 min",
    image: "🍰",
    category: "Desserts",
    description: "Warm chocolate cake with molten center, vanilla ice cream"
  },
  {
    id: 6,
    name: "Craft Coffee Blend",
    restaurant: "Roast & Co",
    price: 6.50,
    rating: 4.5,
    reviews: 89,
    time: "5-10 min",
    image: "☕",
    category: "Beverages",
    description: "Artisan roasted single-origin beans with notes of chocolate and caramel"
  }
];

const FoodCards = () => {
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const toggleLike = (itemId: number) => {
    setLikedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <section className="py-16 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Dishes
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked favorites from our top-rated restaurants
          </p>
        </div>

        {/* Food Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden border-0 shadow-md hover:shadow-premium bg-gradient-card transition-smooth hover-lift">
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <div className="text-6xl">{item.image}</div>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {item.isPopular && (
                      <Badge className="bg-primary text-primary-foreground shadow-sm">
                        Popular
                      </Badge>
                    )}
                    {item.discount && (
                      <Badge className="bg-success text-success-foreground shadow-sm">
                        {item.discount}
                      </Badge>
                    )}
                  </div>

                  {/* Like Button */}
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 hover:bg-white transition-smooth"
                    onClick={() => toggleLike(item.id)}
                  >
                    <Heart 
                      className={`h-4 w-4 ${
                        likedItems.includes(item.id) 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-600'
                      }`} 
                    />
                  </Button>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  {/* Restaurant & Category */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{item.restaurant}</span>
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-smooth">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Rating & Time */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="font-medium">{item.rating}</span>
                      <span className="text-muted-foreground">({item.reviews})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{item.time}</span>
                    </div>
                  </div>

                  {/* Price & Add Button */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-foreground">
                          ${item.price}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${item.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground shadow-sm hover-lift"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 hover:bg-primary hover:text-primary-foreground transition-smooth border-primary/20 hover:border-primary"
          >
            View More Dishes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FoodCards;