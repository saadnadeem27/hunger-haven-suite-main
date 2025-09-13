import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Star, Plus, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import cheeseburgerImage from "@/assets/menu/cheeseburger.jpg";
import margheritaPizzaImage from "@/assets/menu/margherita-pizza.jpg";
import salmonSashimiImage from "@/assets/menu/salmon-sashimi.jpg";
import caesarSaladImage from "@/assets/menu/caesar-salad.jpg";
import chocolateLavaCakeImage from "@/assets/menu/chocolate-lava-cake.jpg";
import freshLemonadeImage from "@/assets/menu/fresh-lemonade.jpg";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Burgers",
    "Pizza", 
    "Sushi",
    "Desserts",
    "Drinks",
    "Salads"
  ];

  const menuItems = [
    {
      id: 1,
      name: "Classic Cheeseburger",
      description: "Juicy beef patty with cheese, lettuce, tomato, and our special sauce",
      price: 12.99,
      rating: 4.8,
      image: cheeseburgerImage,
      category: "Burgers",
      restaurant: "Burger Palace"
    },
    {
      id: 2, 
      name: "Margherita Pizza",
      description: "Fresh mozzarella, tomato sauce, and basil on crispy crust",
      price: 15.99,
      rating: 4.7,
      image: margheritaPizzaImage,
      category: "Pizza",
      restaurant: "Italian Corner"
    },
    {
      id: 3,
      name: "Salmon Sashimi",
      description: "Fresh Atlantic salmon, expertly sliced and served with wasabi",
      price: 18.99,
      rating: 4.9,
      image: salmonSashimiImage,
      category: "Sushi",
      restaurant: "Sushi Master"
    },
    {
      id: 4,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce, parmesan, croutons, and Caesar dressing",
      price: 10.99,
      rating: 4.5,
      image: caesarSaladImage,
      category: "Salads", 
      restaurant: "Green Garden"
    },
    {
      id: 5,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center, served with vanilla ice cream",
      price: 8.99,
      rating: 4.9,
      image: chocolateLavaCakeImage,
      category: "Desserts",
      restaurant: "Sweet Dreams"
    },
    {
      id: 6,
      name: "Fresh Lemonade",
      description: "Freshly squeezed lemons with a hint of mint",
      price: 4.99,
      rating: 4.6,
      image: freshLemonadeImage,
      category: "Drinks",
      restaurant: "Refresh Bar"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Menu</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover delicious meals from the best restaurants in your area
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search for dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-muted/50"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="All" className="mb-8">
          <TabsList className="grid grid-cols-4 md:grid-cols-7 h-auto p-1">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-xs md:text-sm">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems
                  .filter(item => category === "All" || item.category === category)
                  .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((item) => (
                    <Card key={item.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <CardHeader className="p-0">
                        <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <Badge className="absolute top-2 right-2 bg-background/90 text-foreground">
                            <Star className="h-3 w-3 fill-primary text-primary mr-1" />
                            {item.rating}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <h3 className="font-semibold text-lg text-foreground">{item.name}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                          <p className="text-xs text-muted-foreground">from {item.restaurant}</p>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex items-center justify-between">
                        <span className="text-xl font-bold text-primary">${item.price}</span>
                        <Button size="sm" className="bg-gradient-primary hover:bg-primary-dark">
                          <Plus className="h-4 w-4 mr-1" />
                          Add to Cart
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Menu;