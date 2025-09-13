import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Clock, Shield, Star, Users, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const features = [
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Fast Delivery",
      description: "Get your favorite food delivered in 30 minutes or less"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "24/7 Service", 
      description: "We're here whenever you're hungry, day or night"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safe & Secure",
      description: "Your orders and payments are protected with bank-level security"
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Quality Guaranteed",
      description: "Only the best restaurants and highest quality ingredients"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Customer Support",
      description: "Friendly support team ready to help with any questions"
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Wide Coverage",
      description: "Serving multiple cities with expanding delivery zones"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "500+", label: "Partner Restaurants" },
    { number: "100K+", label: "Orders Delivered" },
    { number: "15", label: "Cities Covered" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">About FoodDash</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate about connecting you with the best local restaurants and delivering 
            delicious meals right to your doorstep. Founded in 2020, FoodDash has grown to become 
            the most trusted food delivery service in the region.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 bg-gradient-subtle border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To revolutionize the way people experience food delivery by providing fast, 
              reliable service while supporting local restaurants and creating opportunities 
              for our delivery partners. We believe great food should be accessible to everyone, 
              whenever they need it.
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Why Choose FoodDash?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Values</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Quality First</h3>
                <p className="text-muted-foreground">
                  We partner only with restaurants that meet our high standards for food quality and service.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Community Focus</h3>
                <p className="text-muted-foreground">
                  Supporting local businesses and creating jobs in the communities we serve.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously improving our technology to make food ordering faster and easier.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                FoodDash was born from a simple idea: great food should be just a few clicks away. 
                Our founders, passionate food lovers themselves, noticed the gap between hungry customers 
                and amazing local restaurants.
              </p>
              <p>
                Starting with just 5 partner restaurants, we've grown into a platform that connects 
                thousands of customers with hundreds of restaurants daily. Our success comes from 
                our commitment to excellence in every order.
              </p>
              <p>
                Today, we're proud to support local businesses while making it easier than ever 
                for people to enjoy their favorite meals at home.
              </p>
            </div>
          </div>
        </div>

        {/* Awards and Recognition */}
        <Card className="text-center bg-muted/30">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Awards & Recognition</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Best Food Delivery App 2023
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Customer Choice Award
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Fastest Growing Startup
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                Top Employer 2023
              </Badge>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default About;