import mesaVegetal from '../assets/images/mesa-vegetal.jpg';
import boloCenoura from '../assets/images/bolo-cenoura.jpg';

export const contact = {
  whatsappDisplay: '(61) 98385-2016',
  whatsappNumber: '5561983852016',
  whatsappUrl: 'https://wa.me/5561983852016?text=Oi%2C%20Vers%C3%A3o%20Vegana!%20Quero%20fazer%20um%20pedido.',
  email: 'restauranteversao.vegana@gmail.com',
  city: 'Sobradinho e região, Distrito Federal',
  instagramHandle: '@versao.vegana',
  instagramUrl: 'https://www.instagram.com/versao.vegana/',
  systemUrl: '/sistema',
};

export const products = [
  {
    id: 'baguete',
    name: 'Baguete recheada',
    category: 'Salgados e lanches',
    description: 'Pão crocante, recheio vegetal bem temperado e aquele jeito de comida feita para compartilhar.',
    highlight: 'Encomendas e eventos',
    unit: 'unidade',
    price: 30,
    minQuantity: 1,
    maxQuantity: 80,
    available: true,
    image: mesaVegetal,
    imagePosition: '30% center',
  },
  {
    id: 'baiao',
    name: 'Baião de dois vegano',
    category: 'Pratos brasileiros',
    description: 'Arroz, feijão e temperos brasileiros em uma receita vegetal, generosa e cheia de memória.',
    highlight: 'Comida afetiva',
    unit: 'porção',
    price: 28,
    minQuantity: 1,
    maxQuantity: 150,
    available: true,
    image: mesaVegetal,
    imagePosition: '68% center',
  },
  {
    id: 'almondegas',
    name: 'Almôndegas vegetais',
    category: 'Pratos e congelados',
    description: 'Proteína vegetal, molho marcante e preparo artesanal para servir na hora ou ter no congelador.',
    highlight: 'Praticidade para a semana',
    unit: 'porção',
    price: 30,
    minQuantity: 1,
    maxQuantity: 120,
    available: true,
    image: mesaVegetal,
    imagePosition: '48% 65%',
  },
  {
    id: 'bolo-cenoura',
    name: 'Bolo de cenoura vegano',
    category: 'Bolos e doces',
    description: 'Massa macia e sabor de casa para cafés, festas, presentes e datas especiais.',
    highlight: 'Sobremesa inclusiva',
    unit: 'unidade',
    price: 12,
    minQuantity: 1,
    maxQuantity: 80,
    available: true,
    image: boloCenoura,
    imagePosition: 'center',
  },
  {
    id: 'doces',
    name: 'Doces veganos variados',
    category: 'Bolos e doces',
    description: 'Seleção de docinhos vegetais para completar a mesa de eventos e comemorações.',
    highlight: 'Consulte sabores',
    unit: 'unidade',
    price: 8,
    minQuantity: 6,
    maxQuantity: 300,
    available: true,
    image: boloCenoura,
    imagePosition: 'center 72%',
  },
];

export const orderPaths = [
  {
    title: 'Quero pedir hoje',
    text: 'Consulte os pratos disponíveis, escolha retirada ou entrega e confirme pelo WhatsApp.',
    href: contact.whatsappUrl,
    label: 'Ver disponibilidade',
  },
  {
    title: 'Quero congelados',
    text: 'Monte uma seleção prática para ter comida vegetal pronta durante a semana.',
    href: contact.whatsappUrl,
    label: 'Consultar congelados',
  },
  {
    title: 'Quero um evento',
    text: 'Planeje buffet, encomenda ou feira com uma prévia de valores e atendimento personalizado.',
    href: '/orcamento',
    label: 'Montar pré-orçamento',
  },
];

export const brandValues = [
  {
    title: 'Culinária inclusiva',
    text: 'Pratos pensados para acolher diferentes escolhas e necessidades alimentares, sempre com conversa clara sobre cada preparo.',
  },
  {
    title: 'Brasil no prato',
    text: 'Receitas conhecidas ganham novas versões sem perder o tempero, a generosidade e a memória afetiva.',
  },
  {
    title: 'Cerrado vivo',
    text: 'Ingredientes nativos, produtores locais e escolhas que ajudam a manter cultura, renda e biodiversidade.',
  },
];

export const trustSignals = [
  'Atendimento em Sobradinho e região',
  'Retirada e entrega sob consulta',
  'Encomendas e eventos planejados',
  'Confirmação direta pelo WhatsApp',
];

export const eventFormats = [
  {
    title: 'Encomendas',
    text: 'Para almoços especiais, aniversários, reuniões e mesas compartilhadas.',
  },
  {
    title: 'Buffet',
    text: 'Cardápio pensado para incluir diferentes públicos em encontros pessoais e corporativos.',
  },
  {
    title: 'Feiras e ações',
    text: 'Produção organizada para feiras, eventos culturais e experiências gastronômicas.',
  },
];

export const faq = [
  {
    question: 'A comida é totalmente vegetal?',
    answer: 'A proposta da Versão Vegana é trabalhar com preparos sem ingredientes de origem animal. Necessidades específicas devem ser informadas no atendimento para confirmação do processo e dos ingredientes.',
  },
  {
    question: 'Vocês fazem entrega?',
    answer: 'Retirada e entrega são combinadas de acordo com a região, o tamanho do pedido e a disponibilidade da data.',
  },
  {
    question: 'Com quanto tempo devo fazer uma encomenda?',
    answer: 'Quanto antes melhor, especialmente para eventos. O prazo final é confirmado pelo WhatsApp conforme o cardápio e a capacidade de produção.',
  },
  {
    question: 'O valor do simulador já é o preço final?',
    answer: 'Não. Ele é uma prévia válida por cinco dias e precisa ser confirmada pela equipe, considerando disponibilidade, entrega e particularidades do pedido.',
  },
];

export const budgetProducts = products.map(
  ({ image, imagePosition, description, highlight, category, ...product }) => product,
);
