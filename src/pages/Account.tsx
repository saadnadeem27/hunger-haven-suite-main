import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, MapPin, CreditCard, Clock, Bell, Shield, Heart, Gift } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Account = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    avatar: ""
  });

  const [addresses] = useState([
    {
      id: 1,
      type: "Home",
      address: "123 Main Street, Apt 4B",
      city: "New York, NY 10001",
      isDefault: true
    },
    {
      id: 2,
      type: "Work", 
      address: "456 Business Ave, Suite 200",
      city: "New York, NY 10005",
      isDefault: false
    }
  ]);

  const [orderHistory] = useState([
    {
      id: "#ORD-001",
      date: "2024-01-15",
      restaurant: "Burger Palace",
      items: "Classic Cheeseburger, Fries, Coke",
      total: 18.99,
      status: "Delivered"
    },
    {
      id: "#ORD-002", 
      date: "2024-01-12",
      restaurant: "Italian Corner",
      items: "Margherita Pizza, Garlic Bread",
      total: 24.99,
      status: "Delivered"
    },
    {
      id: "#ORD-003",
      date: "2024-01-10", 
      restaurant: "Sushi Master",
      items: "Salmon Sashimi, Miso Soup",
      total: 32.99,
      status: "Delivered"
    }
  ]);

  const handleSaveProfile = () => {
    toast.success("Profile updated successfully!");
  };

  const handleAddAddress = () => {
    toast.success("Address added successfully!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={userInfo.avatar} alt={userInfo.name} />
                  <AvatarFallback className="text-xl bg-primary text-primary-foreground">
                    {userInfo.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg text-foreground mb-1">{userInfo.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{userInfo.email}</p>
                <Badge className="bg-gradient-primary text-primary-foreground">
                  <Gift className="w-3 h-3 mr-1" />
                  Gold Member
                </Badge>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Account Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Orders</span>
                  <span className="font-semibold">47</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Rewards Points</span>
                  <span className="font-semibold text-primary">1,250</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Member Since</span>
                  <span className="font-semibold">Jan 2023</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid grid-cols-2 lg:grid-cols-4 h-auto p-1">
                <TabsTrigger value="profile" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">Profile</span>
                </TabsTrigger>
                <TabsTrigger value="addresses" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="hidden sm:inline">Addresses</span>
                </TabsTrigger>
                <TabsTrigger value="orders" className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="hidden sm:inline">Orders</span>
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span className="hidden sm:inline">Settings</span>
                </TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={userInfo.name}
                          onChange={(e) => setUserInfo(prev => ({...prev, name: e.target.value}))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={userInfo.email}
                          onChange={(e) => setUserInfo(prev => ({...prev, email: e.target.value}))}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={userInfo.phone}
                        onChange={(e) => setUserInfo(prev => ({...prev, phone: e.target.value}))}
                      />
                    </div>
                    <Button onClick={handleSaveProfile} className="bg-gradient-primary hover:bg-primary-dark">
                      Save Changes
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Addresses Tab */}
              <TabsContent value="addresses">
                <div className="space-y-4">
                  {addresses.map((address) => (
                    <Card key={address.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold text-foreground">{address.type}</h3>
                              {address.isDefault && (
                                <Badge variant="secondary">Default</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{address.address}</p>
                            <p className="text-sm text-muted-foreground">{address.city}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            {!address.isDefault && (
                              <Button variant="outline" size="sm">Delete</Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <Button onClick={handleAddAddress} className="w-full bg-gradient-primary hover:bg-primary-dark">
                    Add New Address
                  </Button>
                </div>
              </TabsContent>

              {/* Orders Tab */}
              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {orderHistory.map((order, index) => (
                        <div key={order.id}>
                          <div className="flex items-center justify-between py-4">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-foreground">{order.id}</span>
                                <Badge className="bg-green-100 text-green-800">{order.status}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{order.restaurant} • {order.date}</p>
                              <p className="text-sm text-muted-foreground">{order.items}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-primary">${order.total.toFixed(2)}</p>
                              <div className="flex gap-1 mt-1">
                                <Button variant="outline" size="sm">Reorder</Button>
                                <Button variant="outline" size="sm">
                                  <Heart className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                          {index < orderHistory.length - 1 && <Separator />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Bell className="w-5 h-5" />
                        Notifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Order Updates</p>
                          <p className="text-sm text-muted-foreground">Get notified about your order status</p>
                        </div>
                        <Button variant="outline" size="sm">On</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Promotions</p>
                          <p className="text-sm text-muted-foreground">Receive deals and offers</p>
                        </div>
                        <Button variant="outline" size="sm">On</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5" />
                        Payment Methods
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <p className="font-medium">•••• •••• •••• 4242</p>
                            <p className="text-sm text-muted-foreground">Visa ending in 4242</p>
                          </div>
                          <Badge variant="secondary">Default</Badge>
                        </div>
                        <Button variant="outline" className="w-full">Add Payment Method</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-destructive">
                        <Shield className="w-5 h-5" />
                        Account Actions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full">Change Password</Button>
                      <Button variant="outline" className="w-full text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                        Delete Account
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Account;