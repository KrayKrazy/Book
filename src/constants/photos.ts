export interface PhotoItem {
  id: string;
  src: string | string[];
  title: string;
  description: string;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  heroImage: string;
  features: string[];
  items: PhotoItem[];
}

const BASE = '/assets/photos/escolhidas/';

export const PACKAGES: Package[] = [
  {
    id: 'essencia',
    name: 'Essência Floresta',
    description: 'A pureza e elegância do básico refinado. Ideal para quem busca a beleza na simplicidade e na natureza.',
    heroImage: `${BASE}capa.jpeg`,
    features: [
        'Arranjos Minimalistas',
        'Escada Decorada em Pares',
        'Passarela Rústica Amadeirada',
        'Mobiliário de Ferro Clássico',
        'Caminho da Cerimônia em Pares'
    ],
    items: [
      { id: 'ess-1', src: `${BASE}minimalista.jpeg`, title: 'Arranjo Minimalista', description: 'Composição com design minimalista que privilegia a visibilidade e o toque orgânico.' },
      { id: 'ess-2', src: `${BASE}arranjo minimalista despojado.jpeg`, title: 'Conceito Despojado', description: 'Beleza natural sem excessos, integrando-se perfeitamente ao ambiente.' },
      { id: 'ess-3', src: `${BASE}passarela de madeira.jpeg`, title: 'Passarela Rústica', description: 'Caminho de madeira maciça que traz o calor e a textura da floresta.' },
      { id: 'ess-4', src: `${BASE}cadeira de ferro.jpeg`, title: 'Cadeira de Ferro', description: 'Mobiliário clássico e resistente, harmonizando com a estética natural do espaço.' }
    ]
  },
  {
    id: 'florescer',
    name: 'Florescer Premium',
    description: 'O equilíbrio perfeito entre volume e sofisticação. Ambientes preenchidos com vida e detalhes marcantes.',
    heroImage: `${BASE}capa 2.jpeg`,
    features: [
        'Arranjos Soft',
        'Escada Totalmente Cheia',
        'Passarela Mirror (Espelhada)',
        'Cadeiras Tiffany Premium',
        'Caminho da Cerimônia Completo',
        'Mesa do Bolo Personalizada'
    ],
    items: [
      { id: 'flo-1', src: `${BASE}arranjo medio.jpeg`, title: 'Arranjo Soft', description: 'Volume soft com flores selecionadas para um preenchimento harmonioso.' },
      { id: 'flo-2', src: `${BASE}escada cheia.jpeg`, title: 'Escada Majestic', description: 'Preenchimento total dos degraus, criando um cenário contínuo de flores.' },
      { id: 'flo-3', src: `${BASE}passarela espelhada.jpeg`, title: 'Passarela Crystal', description: 'Efeito infinito que duplica a beleza do teto e da decoração lateral.' },
      { id: 'flo-4', src: `${BASE}4 arranjos novo.jpeg`, title: 'Composição Premium', description: 'Volume e preenchimento estratégico para os principais pontos de recepção.' },
      { id: 'flo-5', src: `${BASE}cadeira tiffany novo.jpeg`, title: 'Tiffany Design', description: 'O clássico refinado para acomodar seus convidados com máximo estilo.' }
    ]
  },
  {
    id: 'majestic',
    name: 'Experiência Majestic',
    description: 'O ápice do luxo e da personalização. Cada detalhe é desenhado para criar um impacto inesquecível e exclusivo.',
    heroImage: `${BASE}Arranjo alto.jpeg`,
    features: [
        'Arranjos Exclusivos',
        'Portais Adicionais Personalizados',
        'Armário de Bem Casados de Luxo',
        'Mesa Majestic do Bolo',
        'Painel de Prova Social Integrado',
        'Mesa da Família'
    ],
    items: [
      { id: 'maj-1', src: `${BASE}Arranjo alto.jpeg`, title: 'Arranjo Exclusivo', description: 'Imponência e variedade floral, elevando o olhar e o status do evento.' },
      { id: 'maj-2', src: `${BASE}6 arranjos mesa.jpeg`, title: 'Festa Majestic', description: 'Máximo volume floral integrado à arquitetura do salão principal.' },
      { id: 'maj-3', src: `${BASE}lounge.jpeg`, title: 'Lounge de Luxo', description: 'Espaço de convivência decorado com sofisticação para o conforto dos convidados.' },
      { id: 'maj-4', src: `${BASE}escada cheia.jpeg`, title: 'Escada de Gala', description: 'O máximo preenchimento permitido pela arquitetura do espaço.' }
    ]
  }
];
