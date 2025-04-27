import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const newsItems = [
  {
    id: 1,
    title: "Обновление CS2 от 26.04.2025",
    description: "Последний патч включает исправления для древнего и новые скины оружия",
    category: "Обновление",
    date: "26 апреля 2025",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "NAVI выигрывает IEM Katowice 2025",
    description: "Украинская команда доминировала на протяжении всего турнира",
    category: "Турнир",
    date: "24 апреля 2025",
    image: "https://images.unsplash.com/photo-1560253023-3ec5085cfb80?w=500&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Новая операция Riptide 2 анонсирована",
    description: "Valve объявила о новой операции, которая выйдет в мае",
    category: "Анонс",
    date: "22 апреля 2025",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&auto=format&fit=crop"
  }
];

const NewsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Последние новости</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow hover:border-primary/50">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="secondary">{item.category}</Badge>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <a href="#" className="text-primary font-medium hover:underline">
                  Читать дальше →
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;