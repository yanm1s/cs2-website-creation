import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">CS2</h3>
            <p className="text-muted-foreground text-sm">
              Сайт с информацией о Counter-Strike 2, создан фанатами для фанатов.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Новости
                </Link>
              </li>
              <li>
                <Link to="/weapons" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Оружие
                </Link>
              </li>
              <li>
                <Link to="/maps" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Карты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Полезные ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.counter-strike.net/" target="_blank" rel="noopener noreferrer" 
                   className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Официальный сайт
                </a>
              </li>
              <li>
                <a href="https://steamcommunity.com/app/730" target="_blank" rel="noopener noreferrer"
                   className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Сообщество Steam
                </a>
              </li>
              <li>
                <a href="https://www.hltv.org/" target="_blank" rel="noopener noreferrer"
                   className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  HLTV
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Соцсети</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitch"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"/></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-discord"><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M7.5 7.2a11.36 11.36 0 0 1 9 0"/><path d="M7.5 16.8a11.36 11.36 0 0 0 9 0"/><path d="M15.5 17 17 20l2-1-1.5-4 1.5.5c1 .2 2 .3 3 .3V7.2c-1 0-2 .1-3 .3L17.5 8 19 4l-2-1-1.5 3"/><path d="M8.5 17 7 20l-2-1 1.5-4-1.5.5c-1 .2-2 .3-3 .3V7.2c1 0 2 .1 3 .3L6.5 8 5 4l2-1 1.5 3"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CS2 Фан-сайт. Все названия и изображения принадлежат их владельцам.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;