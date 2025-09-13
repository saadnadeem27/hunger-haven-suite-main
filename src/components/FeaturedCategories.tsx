import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: 1,
    name: "Pizza",
    icon: "🍕",
    description: "Crispy, cheesy perfection",
    itemCount: "120+ items",
    gradient: "from-orange-400 to-red-500"
  },
  {
    id: 2,
    name: "Burgers",
    icon: "🍔",
    description: "Juicy and satisfying",
    itemCount: "85+ items",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    id: 3,
    name: "Sushi",
    icon: "🍣",
    description: "Fresh and authentic",
    itemCount: "95+ items",
    gradient: "from-green-400 to-blue-500"
  },
  {
    id: 4,
    name: "Salads",
    icon: "🥗",
    description: "Healthy and fresh",
    itemCount: "70+ items",
    gradient: "from-green-300 to-green-600"
  },
  {
    id: 5,
    name: "Desserts",
    icon: "🍰",
    description: "Sweet indulgence",
    itemCount: "60+ items",
    gradient: "from-pink-400 to-purple-500"
  },
  {
    id: 6,
    name: "Beverages",
    icon: "🥤",
    description: "Refreshing drinks",
    itemCount: "45+ items",
    gradient: "from-blue-400 to-cyan-500"
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Are You
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Craving Today?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse menu categories and discover your next favorite meal
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer food-card border-0 shadow-md hover:shadow-premium bg-gradient-card overflow-hidden"
            >
              <CardContent className="p-6 text-center space-y-3">
                {/* Icon with gradient background */}
                <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-smooth`}>
                  {category.icon}
                </div>
                
                {/* Category Info */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {category.description}
                  </p>
                  <p className="text-xs font-medium text-primary">
                    {category.itemCount}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold hover:bg-primary-dark transition-smooth shadow-glow hover-lift">
            View All Categories
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;