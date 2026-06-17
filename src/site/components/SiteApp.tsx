import { ArrowRight, CalendarDays, ChefHat, ClipboardList, Leaf, Mail, MapPin, MessageCircle, Minus, Plus, ShieldCheck, Sparkles, Utensils } from 'lucide-react';
import { useMemo, useState } from 'react';
import logoHorizontal from '../../assets/brand/logo-horizontal-wine.png';
import iconPan from '../../assets/brand/icon-wine.png';
import { budgetProducts, contact, galleryItems, services, specialties, trustSignals, values } from '../../content/siteContent';

const formatCurrency = (value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const quoteValidity = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR');

function pagePath() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/cardapio' || path === '/eventos' || path === '/orcamento' || path === '/sobre') return path;
  return '/';
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand-link" href="/" aria-label="Ir para o início">
        <img src={logoHorizontal} alt="Versão Vegana" />
      </a>
      <nav className="site-nav" aria-label="Navegação principal">
        <a href="/cardapio">Cardápio</a>
        <a href="/eventos">Eventos</a>
        <a href="/#cerrado">Cerrado</a>
        <a href="/orcamento">Orçamento</a>
        <a href="/#contato">Contato</a>
      </nav>
      <div className="header-actions">
        <a className="internal-link" href={contact.systemUrl}>Área interna</a>
        <a className="nav-cta" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle size={18} /> Pedir agora
        </a>
      </div>
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
          <a className="secondary-button" href="/orcamento">
            Montar orçamento <ArrowRight size={18} />
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

function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Informações de confiança">
      {trustSignals.map((item) => <span key={item}>{item}</span>)}
    </section>
  );
}

function Specialties() {
  return (
    <section id="cardapio" className="content-section">
      <div className="section-heading with-action">
        <div>
          <p className="eyebrow">Mais pedidos</p>
          <h2>Especialidades para pedir, congelar ou servir</h2>
        </div>
        <a className="secondary-button" href="/orcamento">Orçar evento</a>
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
            <div className="card-actions">
              <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">Quero pedir</a>
              <a href="/orcamento">Quero encomendar</a>
              <a href="/eventos">Quero buffet</a>
            </div>
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
        <div className="event-actions">
          <a className="primary-button compact" href="/orcamento">
            Montar orçamento
          </a>
          <a className="secondary-button compact-light" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </div>
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
        <h2 id="gallery-title">Sabores que já saíram da nossa panela</h2>
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
          100% vegetal. O resultado é uma experiência pensada para quem busca sabor, restrições respeitadas e uma mesa mais diversa.
        </p>
      </div>
    </section>
  );
}

function QuotePage() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [eventType, setEventType] = useState('Evento ou encomenda');
  const [notes, setNotes] = useState('');

  const selectedItems = useMemo(() => budgetProducts
    .map((product) => ({ ...product, quantity: quantities[product.id] || 0 }))
    .filter((product) => product.quantity > 0), [quantities]);

  const total = selectedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const whatsappMessage = encodeURIComponent([
    'Oi, Versão Vegana! Gostaria de confirmar este orçamento:',
    `Tipo: ${eventType}`,
    `Validade exibida: ${quoteValidity}`,
    '',
    ...selectedItems.map((item) => `- ${item.quantity}x ${item.name}: ${formatCurrency(item.price * item.quantity)}`),
    '',
    `Total estimado: ${formatCurrency(total)}`,
    notes ? `Observações: ${notes}` : '',
  ].filter(Boolean).join('\n'));

  const updateQuantity = (id: string, value: number) => {
    setQuantities((current) => ({ ...current, [id]: Math.max(0, value) }));
  };

  return (
    <main className="page-main quote-page">
      <section className="page-hero compact-hero">
        <p className="eyebrow">Orçamento de encomenda</p>
        <h1>Monte uma prévia para seu evento</h1>
        <p>
          Escolha os itens, veja uma estimativa e envie tudo pronto pelo WhatsApp. O orçamento vale por 5 dias e fica sujeito à confirmação de disponibilidade.
        </p>
      </section>

      <section className="quote-layout">
        <div className="quote-builder">
          <label className="field-label">
            Tipo de pedido
            <select value={eventType} onChange={(event) => setEventType(event.target.value)}>
              <option>Evento ou encomenda</option>
              <option>Buffet</option>
              <option>Feira</option>
              <option>Congelados</option>
              <option>Retirada na loja</option>
            </select>
          </label>

          <div className="quote-products">
            {budgetProducts.map((product) => {
              const quantity = quantities[product.id] || 0;
              return (
                <article className="quote-product" key={product.id}>
                  <div>
                    <h3>{product.name}</h3>
                    <p>{formatCurrency(product.price)} por {product.unit}</p>
                  </div>
                  <div className="quantity-control">
                    <button type="button" onClick={() => updateQuantity(product.id, quantity - 1)}><Minus size={16} /></button>
                    <input
                      value={quantity}
                      inputMode="numeric"
                      aria-label={`Quantidade de ${product.name}`}
                      onChange={(event) => updateQuantity(product.id, Number(event.target.value.replace(/\D/g, '')) || 0)}
                    />
                    <button type="button" onClick={() => updateQuantity(product.id, quantity + 1)}><Plus size={16} /></button>
                  </div>
                </article>
              );
            })}
          </div>

          <label className="field-label">
            Observações
            <textarea value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Ex.: data, horário, quantidade de pessoas, restrições alimentares" maxLength={260} />
          </label>
        </div>

        <aside className="quote-summary">
          <ClipboardList size={28} />
          <h2>Resumo do orçamento</h2>
          <p className="validity">Válido até {quoteValidity}</p>
          {selectedItems.length === 0 ? (
            <p>Adicione itens para montar a prévia do pedido.</p>
          ) : (
            <ul>
              {selectedItems.map((item) => (
                <li key={item.id}><span>{item.quantity}x {item.name}</span><strong>{formatCurrency(item.price * item.quantity)}</strong></li>
              ))}
            </ul>
          )}
          <div className="quote-total"><span>Total estimado</span><strong>{formatCurrency(total)}</strong></div>
          <p className="quote-note">Orçamento sujeito à confirmação de disponibilidade, prazo e ajustes de produção.</p>
          <a className={`primary-button ${selectedItems.length === 0 ? 'disabled-link' : ''}`} href={`https://wa.me/5561983852016?text=${whatsappMessage}`} target="_blank" rel="noreferrer">
            Enviar pelo WhatsApp
          </a>
        </aside>
      </section>
    </main>
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
      <a className="system-link" href={contact.systemUrl}>Área interna</a>
    </footer>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <BrazilianSection />
      <Specialties />
      <Events />
      <Cerrado />
      <Gallery />
      <About />
    </main>
  );
}

function SectionPage({ kind }: { kind: 'cardapio' | 'eventos' | 'sobre' }) {
  return (
    <main className="page-main">
      {kind === 'cardapio' && <><Specialties /><TrustBar /></>}
      {kind === 'eventos' && <><Events /><Specialties /><TrustBar /></>}
      {kind === 'sobre' && <><About /><Cerrado /><Gallery /></>}
    </main>
  );
}

export function SiteApp() {
  const path = pagePath();
  return (
    <>
      <Header />
      {path === '/orcamento' ? <QuotePage /> : path === '/cardapio' ? <SectionPage kind="cardapio" /> : path === '/eventos' ? <SectionPage kind="eventos" /> : path === '/sobre' ? <SectionPage kind="sobre" /> : <HomePage />}
      <Footer />
    </>
  );
}

