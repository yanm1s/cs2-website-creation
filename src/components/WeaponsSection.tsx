import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const weapons = [
  {
    id: 1,
    name: "AK-47",
    type: "Штурмовая винтовка",
    price: "$2700",
    image: "https://images.unsplash.com/photo-1550850839-8dc894ed385a?w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "M4A4",
    type: "Штурмовая винтовка",
    price: "$3100",
    image: "https://images.unsplash.com/photo-1599407950360-8b8642d423dc?w=400&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "AWP",
    type: "Снайперская винтовка",
    price: "$4750",
    image: "https://images.unsplash.com/photo-1555436169-20c8e43a4fa1?w=400&auto=format&fit=crop"
  }
];

const WeaponsSection = () => {
  return (
    <section className="py-16 bg-card/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Популярное оружие</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {weapons.map((weapon) => (
            <Card key={weapon.id} className="overflow-hidden bg-card hover:border-primary/50 transition-colors">
              <div className="h-48 overflow-hidden bg-black/20">
                <img 
                  src={weapon.image} 
                  alt={weapon.name} 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{weapon.name}</span>
                  <Badge variant="outline">{weapon.price}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{weapon.type}</p>
              </CardContent>
              <CardFooter>
                <a href="#" className="text-primary hover:underline font-medium">
                  Подробности →
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeaponsSection;