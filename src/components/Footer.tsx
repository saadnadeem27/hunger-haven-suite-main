import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-secondary-light/20">
        <div className="container py-12">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-bold">Stay Updated</h3>
            <p className="text-secondary-foreground/80">
              Get the latest deals, new restaurant partnerships, and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                placeholder="Enter your email address"
                className="bg-secondary-light/10 border-secondary-light/20 text-secondary-foreground placeholder:text-secondary-foreground/60"
              />
              <Button className="bg-gradient-primary hover:bg-primary-dark text-primary-foreground shadow-glow">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary">
                <span className="text-lg font-bold text-primary-foreground">FD</span>
              </div>
              <span className="text-2xl font-bold">FoodDash</span>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Premium food delivery service connecting you with the finest restaurants in your area. 
              Fast, reliable, and delicious - that's our promise.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="h-9 w-9 p-0 hover:bg-secondary-light/20">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="h-9 w-9 p-0 hover:bg-secondary-light/20">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost" className="h-9 w-9 p-0 hover:bg-secondary-light/20">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                About Us
              </a>
              <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Our Services
              </a>
              <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Restaurant Partners
              </a>
              <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Delivery Areas
              </a>
              <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Careers
              </a>
              <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Help Center
              </a>
            </nav>
          </div>

          {/* Customer Support */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Customer Support</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Track Your Order
              </a>
              <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                FAQs
              </a>
              <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Terms & Conditions
              </a>
              <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Refund Policy
              </a>
              <a href="#" className="text-sm text-secondary-foreground/80 hover:text-primary transition-smooth">
                Contact Support
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-secondary-foreground/80">
                  <p>123 Food Street</p>
                  <p>Culinary District, CD 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">+1 (555) 123-FOOD</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80">hello@fooddash.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-secondary-foreground/80">
                  <p>24/7 Delivery Service</p>
                  <p>Customer Support: 9 AM - 11 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-light/20">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/60">
              © 2024 FoodDash. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-smooth">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;