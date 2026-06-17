import { ArrowRight, CalendarDays, ChefHat, Leaf, Mail, MapPin, MessageCircle, ShieldCheck, Sparkles, Utensils } from 'lucide-react';
import logoHorizontal from '../../assets/brand/logo-horizontal-wine.png';
import iconPan from '../../assets/brand/icon-wine.png';
import { contact, galleryItems, services, specialties, values } from '../../content/siteContent';

function Header() {
  return (
    <header className="site-header">
      <a className="brand-link" href="#inicio" aria-label="Ir para o início">
        <img src={logoHorizontal} alt="Versão Vegana" />
      </a>
      <nav className="site-nav" aria-label="Navegação principal">
        <a href="#cardapio">Cardapio</a>
        <a href="#eventos">Eventos</a>
        <a href="#cerrado">Cerrado</a>
        <a href="#contato">Contato</a>
      </nav>
      <a className="nav-cta" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
        <MessageCircle size={18} /> Pedir agora
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Culinária inclusiva em Brasília</p>
        <h1>Versão Vegana</h1>
        <p className="hero-lead">
          Pratos brasileiros em versões veganas, afetivas e cheias de sabor. Uma cozinha feita para acolher,
          surpreender e aproximar mais pessoas da comida consciente.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={20} /> Fazer pedido
          </a>
          <a className="secondary-button" href="#eventos">
            Encomendas e eventos <ArrowRight size={18} />
          </a>
        </div>
        <div className="hero-proof" aria-label="Diferenciais da Versão Vegana">
          <span><Leaf size={16} /> 100% vegetal</span>
          <span><ShieldCheck size={16} /> Inclusiva</span>
          <span><Sparkles size={16} /> Brasileira</span>
        </div>
      </div>
      <div className="hero-visual" aria-label="Identidade visual Versão Vegana">
        <img className="hero-pan" src={iconPan} alt="Panela da marca Versão Vegana" />
        <div className="ingredient-orbit ingredient-one">Cerrado</div>
        <div className="ingredient-orbit ingredient-two">Afeto</div>
        <div className="ingredient-orbit ingredient-three">Sabor</div>
      </div>
    </section>
  );
}

function BrazilianSection() {
  return (
    <section className="split-section" aria-labelledby="brasileira-title">
      <div>
        <p className="eyebrow">Comida brasileira, nova possibilidade</p>
        <h2 id="brasileira-title">Culinária brasileira em versão vegana</h2>
      </div>
      <div className="story-copy">
        <p>
          A Versão Vegana nasceu para mostrar que comida vegetal também pode ser familiar, generosa e cheia de memória.
          A ideia não é apagar a tradição, é criar novas formas de viver os mesmos sabores com mais cuidado.
        </p>
        <p>
          Da refeição do dia a dia ao buffet de eventos, cada preparo busca equilíbrio entre saúde, sustentabilidade e
          aquele tempero que faz a comida chegar com cara de casa.
        </p>
      </div>
    </section>
  );
}

function Specialties() {
  return (
    <section id="cardapio" className="content-section">
      <div className="section-heading">
        <p className="eyebrow">Mais pedidos</p>
        <h2>Especialidades para pedir, congelar ou servir</h2>
      </div>
      <div className="specialty-grid">
        {specialties.map((item) => (
          <article className="specialty-card" key={item.name}>
            <div className="dish-illustration" aria-hidden="true">
              <span />
            </div>
            <h3>{item.name}</h3>
            <p>{item.detail}</p>
            <small>{item.accent}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

function Events() {
  return (
    <section id="eventos" className="event-section">
      <div className="event-card main-event-card">
        <CalendarDays size={28} />
        <h2>Encomendas, eventos e feiras</h2>
        <p>
          Para aniversários, encontros de empresa, feiras, almoços especiais e momentos em que a mesa precisa incluir todo mundo.
        </p>
        <a className="primary-button compact" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
          Falar sobre evento
        </a>
      </div>
      <div className="service-list">
        {services.map((service) => (
          <div className="service-item" key={service}>
            <Utensils size={18} />
            <span>{service}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Cerrado() {
  return (
    <section id="cerrado" className="content-section cerrado-section">
      <div className="section-heading narrow">
        <p className="eyebrow">Cerrado, cuidado e futuro</p>
        <h2>Uma cozinha que olha para o território</h2>
        <p>
          Ingredientes do Cerrado, produtores locais e escolhas mais conscientes ajudam a transformar cada prato em uma
          decisão pequena, mas importante, sobre o tipo de comida que queremos apoiar.
        </p>
      </div>
      <div className="value-grid">
        {values.map((value) => (
          <article className="value-card" key={value.title}>
            <ChefHat size={22} />
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="gallery-section" aria-labelledby="gallery-title">
      <div className="section-heading">
        <p className="eyebrow">Galeria</p>
        <h2 id="gallery-title">Pronta para receber as fotos reais da cozinha</h2>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div className={`gallery-tile tile-${index + 1}`} key={item}>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section">
      <img src={iconPan} alt="Símbolo da Versão Vegana" />
      <div>
        <p className="eyebrow">Sobre a Versão Vegana</p>
        <h2>Comida inclusiva com personalidade</h2>
        <p>
          A marca combina criatividade, qualidade e acolhimento para adaptar pratos tradicionais brasileiros a uma cozinha
          100% vegetal. O resultado e uma experiência pensada para quem busca sabor, restrições respeitadas e uma mesa mais diversa.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="site-footer">
      <div>
        <img src={logoHorizontal} alt="Versão Vegana" />
        <p>Culinária inclusiva, brasileira e vegetal.</p>
      </div>
      <address>
        <a href={contact.whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> {contact.whatsappDisplay}</a>
        <a href={`mailto:${contact.email}`}><Mail size={18} /> {contact.email}</a>
        <span><MapPin size={18} /> {contact.city}</span>
      </address>
      <a className="system-link" href={contact.systemUrl}>Acesso ao sistema</a>
    </footer>
  );
}

export function SiteApp() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrazilianSection />
        <Specialties />
        <Events />
        <Cerrado />
        <Gallery />
        <About />
      </main>
      <Footer />
    </>
  );
}



