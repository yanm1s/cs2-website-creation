
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Обновление CS2 от 25.04.2025",
      date: "25.04.2025",
      content: "Valve выпустила новое обновление, включающее изменения баланса оружия, исправления ошибок и улучшения производительности.",
      image: "https://images.unsplash.com/photo-1567376774230-5a753c3d6661?w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Анонс турнира CS2 Major 2025",
      date: "20.04.2025",
      content: "Анонсирован крупнейший турнир года с призовым фондом $2,000,000. Квалификации начнутся через месяц.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Новый кейс с оружием 'Neon Dreams'",
      date: "15.04.2025",
      content: "В игру добавлен новый кейс с неоновыми скинами для популярного оружия. Игроки уже начали открывать их и делиться находками.",
      image: "https://images.unsplash.com/photo-1585184394271-4c6a2add2ae6?w=600&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Изменения в рейтинговой системе CS2",
      date: "10.04.2025",
      content: "Valve вносит изменения в рейтинговую систему для более справедливого подбора соперников и распределения рангов.",
      image: "https://images.unsplash.com/photo-1583118442940-a1c9027afa25?w=600&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-4xl font-bold mb-8">Новости CS2</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </CardHeader>
                <CardContent>
                  <p>{item.content}</p>
                  <a href="#" className="text-primary hover:underline mt-4 inline-block">
                    Читать дальше →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default News;
