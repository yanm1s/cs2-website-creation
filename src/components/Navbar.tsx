import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur-sm border-b border-border">
      <div className="container flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold text-primary">CS2</Link>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/news" className="text-sm font-medium hover:text-primary transition-colors">
            Новости
          </Link>
          <Link to="/weapons" className="text-sm font-medium hover:text-primary transition-colors">
            Оружие
          </Link>
          <Link to="/maps" className="text-sm font-medium hover:text-primary transition-colors">
            Карты
          </Link>
          <Link to="/tournaments" className="text-sm font-medium hover:text-primary transition-colors">
            Турниры
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            Войти
          </Button>
          <Button size="sm">
            Скачать CS2
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;