import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, User, Menu, X, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems] = useState(3); // Mock cart items

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary">
            <span className="text-sm font-bold text-primary-foreground">FD</span>
          </div>
          <span className="text-xl font-bold text-foreground">FoodDash</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-smooth">
            Home
          </Link>
          <Link to="/menu" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
            Menu
          </Link>
          <Link to="/restaurants" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
            Restaurants
          </Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
            Contact
          </Link>
        </nav>

        {/* Search Bar - Desktop */}
        <div className="hidden lg:flex items-center max-w-sm w-full">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search for food, restaurants..."
              className="pl-10 pr-4 bg-muted/50 border-none focus:bg-background transition-smooth"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Mobile Search */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Search className="h-4 w-4" />
          </Button>

          {/* Cart */}
          <Link to="/cart">
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              {cartItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-primary">
                  {cartItems}
                </Badge>
              )}
            </Button>
          </Link>

          {/* User Account */}
          <Link to="/account">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
              <span className="hidden sm:ml-2 sm:inline">Account</span>
            </Button>
          </Link>

          {/* Sign In Button */}
          <Link to="/signin">
            <Button size="sm" className="hidden sm:inline-flex bg-gradient-primary hover:bg-primary-dark transition-smooth">
              Sign In
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <div className="container py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for food, restaurants..."
                className="pl-10 pr-4 bg-muted/50 border-none"
              />
            </div>
            
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="py-2 text-sm font-medium text-foreground">Home</Link>
              <Link to="/menu" className="py-2 text-sm font-medium text-muted-foreground">Menu</Link>
              <Link to="/restaurants" className="py-2 text-sm font-medium text-muted-foreground">Restaurants</Link>
              <Link to="/about" className="py-2 text-sm font-medium text-muted-foreground">About</Link>
              <Link to="/contact" className="py-2 text-sm font-medium text-muted-foreground">Contact</Link>
            </nav>
            
            <Link to="/signin">
              <Button className="w-full bg-gradient-primary hover:bg-primary-dark transition-smooth">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;