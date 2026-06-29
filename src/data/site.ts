import productCappuccino from "@/assets/product-cappuccino-aurora.jpg";
import productCake from "@/assets/product-brownie-cacau.jpg";
import productDessert from "@/assets/product-torta-doce-leite.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";

export type Product = {
  slug: string;
  name: string;
  tag: string;
  price: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  category: string; // category slug
  ingredients?: string[];
};

export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export type Bean = {
  slug: string;
  name: string;
  origin: string;
  intensity: 1 | 2 | 3 | 4 | 5;
  notes: string[];
  shortDesc: string;
  longDesc: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "cappuccinos",
    name: "Cappuccinos",
    description:
      "Receitas autorais de café com leite vaporizado, preparadas no balcão por nossos baristas.",
    image: productCappuccino,
  },
  {
    slug: "sobremesas",
    name: "Sobremesas",
    description:
      "Doces exclusivos, feitos diariamente com ingredientes selecionados e muito carinho.",
    image: productDessert,
  },
  {
    slug: "bolos",
    name: "Bolos",
    description: "Bolos do dia, fatias generosas e receitas que lembram a casa da avó.",
    image: productCake,
  },
  {
    slug: "presentes",
    name: "Presentes",
    description: "Caixas e kits artesanais para presentear quem você ama, montados sob encomenda.",
    image: gallery5,
  },
];

export const products: Product[] = [
  // Cappuccinos
  {
    slug: "cappuccino-aurora",
    name: "Cappuccino Aurora",
    tag: "Assinatura",
    price: "R$ 18",
    category: "cappuccinos",
    image: productCappuccino,
    shortDesc: "Espresso encorpado, leite vaporizado e nossa cobertura secreta de canela em pau.",
    longDesc:
      "O carro-chefe da casa. Combina um espresso encorpado de torra média-escura com leite vaporizado na temperatura exata e finalizado com nossa cobertura secreta de canela em pau ralada na hora. Um abraço em forma de xícara.",
    ingredients: ["Espresso duplo", "Leite integral", "Canela em pau", "Açúcar mascavo (opcional)"],
  },
  {
    slug: "cappuccino-avela",
    name: "Cappuccino de Avelã",
    tag: "Clássico",
    price: "R$ 19",
    category: "cappuccinos",
    image: gallery2,
    shortDesc: "Pasta de avelã artesanal, espresso suave e creme de leite aerado.",
    longDesc:
      "Para quem busca um café mais doce e aveludado. Levamos pasta de avelã torrada na casa, espresso de torra média e um creme de leite aerado que derrete na boca.",
    ingredients: ["Espresso", "Leite", "Pasta de avelã", "Creme aerado"],
  },
  {
    slug: "mocha-da-casa",
    name: "Mocha da Casa",
    tag: "Indulgente",
    price: "R$ 21",
    category: "cappuccinos",
    image: gallery3,
    shortDesc: "Chocolate 70% derretido, espresso intenso e chantilly em ponto firme.",
    longDesc:
      "Um cappuccino para os apaixonados por chocolate. Usamos chocolate 70% derretido na hora, espresso de torra escura e finalizamos com chantilly em ponto firme polvilhado com cacau puro.",
    ingredients: ["Espresso", "Leite", "Chocolate 70%", "Chantilly", "Cacau em pó"],
  },
  // Sobremesas
  {
    slug: "torta-doce-de-leite",
    name: "Torta de Doce de Leite",
    tag: "Da casa",
    price: "R$ 24",
    category: "sobremesas",
    image: productDessert,
    shortDesc: "Receita de família, base crocante e leve toque cítrico.",
    longDesc:
      "Cozida lentamente em fogo brando, segue a receita original da família desde a abertura da cafeteria. Base de biscoito amanteigado, recheio cremoso de doce de leite argentino e raspas finas de limão siciliano.",
    ingredients: ["Doce de leite", "Biscoito amanteigado", "Manteiga", "Limão siciliano"],
  },
  {
    slug: "cheesecake-frutas-vermelhas",
    name: "Cheesecake de Frutas Vermelhas",
    tag: "Estação",
    price: "R$ 26",
    category: "sobremesas",
    image: gallery11,
    shortDesc: "Cream cheese aveludado e calda quente de frutas vermelhas frescas.",
    longDesc:
      "Cream cheese aveludado em base de biscoito integral, finalizado com calda quente de frutas vermelhas frescas da estação. Equilíbrio perfeito entre o doce e o ácido.",
    ingredients: ["Cream cheese", "Frutas vermelhas", "Biscoito integral", "Açúcar de baunilha"],
  },
  {
    slug: "pudim-artesanal",
    name: "Pudim Artesanal",
    tag: "Clássico da Casa",
    price: "18,90",
    category: "sobremesas",
    image: gallery12,
    shortDesc: "Pudim de leite condensado com calda de caramelo preparada artesanalmente.",
    longDesc:
      "Nosso pudim artesanal é preparado diariamente com leite condensado, leite fresco e ovos selecionados, assado lentamente em banho-maria para alcançar uma textura extremamente cremosa. Finalizado com uma generosa calda de caramelo dourado, é uma sobremesa clássica que desperta memórias e combina perfeitamente com um café espresso ou cappuccino.",
    ingredients: ["Leite condensado", "Leite integral", "Ovos", "Açúcar caramelizado", "Baunilha"],
  },
  // Bolos
  {
    slug: "brownie-cacau-70",
    name: "Brownie de Cacau 70%",
    tag: "Confeitaria",
    price: "R$ 22",
    category: "bolos",
    image: productCake,
    shortDesc: "Massa úmida de chocolate intenso, frutas vermelhas frescas e flor de sal.",
    longDesc:
      "Brownie denso e úmido feito com chocolate 70% de cacau, finalizado com frutas vermelhas frescas e uma pitada de flor de sal que realça o sabor do chocolate.",
    ingredients: ["Chocolate 70%", "Manteiga", "Ovos", "Frutas vermelhas", "Flor de sal"],
  },
  {
    slug: "bolo-de-fubá-cremoso",
    name: "Bolo de Fubá Cremoso",
    tag: "Regional",
    price: "R$ 16",
    category: "bolos",
    image: gallery1,
    shortDesc: "Receita regional, casca dourada e miolo cremoso de queijo minas.",
    longDesc:
      "Tradição em forma de bolo. Fubá fino, leite de coco e queijo minas frescal formam um miolo cremoso por baixo de uma casca dourada e levemente crocante. Perfeito com café preto.",
    ingredients: ["Fubá", "Leite de coco", "Queijo minas", "Ovos", "Manteiga"],
  },
  {
    slug: "fatia-de-morango-da-casa",
    name: "Fatia de Morango da Casa",
    tag: "Receita Artesanal",
    price: "24,90",
    category: "bolos",
    image: gallery13,
    shortDesc: "Fatia de bolo artesanal recheada com creme e morangos frescos.",
    longDesc:
      "Uma combinação clássica de massa leve e fofinha, creme aveludado e morangos frescos cuidadosamente selecionados. Finalizado com chantilly delicado e um toque de açúcar de confeiteiro, é uma sobremesa preparada diariamente para proporcionar uma experiência leve, elegante e perfeita para harmonizar com nossos cafés especiais.",
    ingredients: [
      "Pão de ló",
      "Creme artesanal",
      "Chantilly",
      "Morangos frescos",
      "Geleia de morango",
      "Açúcar de confeiteiro",
    ],
  },
  // Presentes
  {
    slug: "kit-café-da-manha-especial",
    name: "Kit Café da Manhã Especial",
    tag: "Sob encomenda",
    price: "R$ 148",
    category: "presentes",
    image: gallery5,
    shortDesc:
      "Uma seleção especial com café, doces artesanais e itens exclusivos para presentear.",
    longDesc:
      "Criado para transformar qualquer manhã em uma ocasião especial, este kit reúne café especial, acompanhamentos artesanais e uma apresentação elegante. Perfeito para celebrar aniversários, datas comemorativas ou simplesmente demonstrar carinho com um presente repleto de sabor e aconchego.",
    ingredients: [
      "Café especial 250 g",
      "Caneca exclusiva",
      "Croissant artesanal",
      "Cookies amanteigados",
      "Geleia artesanal",
      "Cartão personalizado",
    ],
  },
  {
    slug: "kit-cappuccino-gourmet",
    name: "Kit Cappuccino Gourmet",
    tag: "Sob encomenda",
    price: "R$ 248",
    category: "presentes",
    image: gallery4,
    shortDesc:
      "Uma experiência completa de cappuccino com ingredientes premium e acessórios exclusivos.",
    longDesc:
      "Perfeito para quem aprecia um cappuccino cremoso e cheio de personalidade, este kit reúne ingredientes selecionados e acessórios exclusivos para transformar cada preparo em um momento especial. Uma combinação elegante de sabores e apresentação refinada, ideal para presentear ou desfrutar em casa.",
    ingredients: [
      "Cappuccino premium",
      "Mini marshmallows",
      "Chocolate belga",
      "Xícara de porcelana",
      "Colher dourada",
    ],
  },
  {
    slug: "kit-coffee-lover",
    name: "Kit Coffee Lover",
    tag: "Edição Especial",
    price: "R$ 189",
    category: "presentes",
    image: gallery6,
    shortDesc:
      "Uma seleção de cafés especiais e acessórios para uma experiência completa de degustação.",
    longDesc:
      "Criado para os apaixonados por café, o Kit Coffee Lover reúne grãos de diferentes origens, acessórios selecionados e uma apresentação sofisticada. Ideal para explorar novos aromas, descobrir notas sensoriais e transformar cada preparo em um momento especial.",
    ingredients: [
      "3 cafés especiais de diferentes origens",
      "Cartão com notas sensoriais",
      "Drip Coffee",
      "Caneca exclusiva",
    ],
  },
];

export const beans: Bean[] = [
  {
    slug: "serra-da-mantiqueira",
    name: "Serra da Mantiqueira",
    origin: "Sul de Minas Gerais, Brasil",
    intensity: 3,
    notes: ["Chocolate ao leite", "Castanha", "Caramelo"],
    shortDesc:
      "Doçura natural e corpo médio. O grão que serve de base aos nossos cappuccinos assinatura.",
    longDesc:
      "Cultivado entre 1.200 e 1.450 metros de altitude por uma cooperativa familiar com quem trabalhamos há mais de oito anos. Pós-colheita natural, secagem em terreiro suspenso e torra média desenvolvida na casa. Resulta em uma bebida limpa, doce e com retrogosto longo de cacau.",
    image: gallery7,
  },
  {
    slug: "chapada-diamantina",
    name: "Chapada Diamantina",
    origin: "Bahia, Brasil",
    intensity: 4,
    notes: ["Frutas amarelas", "Mel silvestre", "Cacau"],
    shortDesc: "Notas frutadas e acidez vibrante. Brilha em métodos coados como V60 e Chemex.",
    longDesc:
      "Grãos arábica de variedade Catuaí Amarelo, processo cereja descascado. A altitude e o clima seco da Chapada favorecem uma maturação lenta dos frutos, traduzida em uma xícara complexa, frutada e com acidez cítrica equilibrada por notas de mel.",
    image: gallery8,
  },
  {
    slug: "huila-colombia",
    name: "Huila",
    origin: "Huila, Colômbia",
    intensity: 4,
    notes: ["Frutas vermelhas", "Floral", "Açúcar mascavo"],
    shortDesc: "Acidez delicada e perfume floral. Um clássico colombiano para apreciar puro.",
    longDesc:
      "Microlote da região de Pitalito, cultivado a mais de 1.700m. Processo lavado tradicional, secagem ao sol em camas africanas. Resulta em uma xícara doce, floral e com final limpo de frutas vermelhas frescas.",
    image: gallery9,
  },
  {
    slug: "sidamo-etiopia",
    name: "Sidamo",
    origin: "Sidamo, Etiópia",
    intensity: 2,
    notes: ["Jasmim", "Bergamota", "Pêssego branco"],
    shortDesc: "Leve, aromático e elegante. Para quem aprecia cafés delicados e perfumados.",
    longDesc:
      "Da terra natal do café, este grão de altitude elevada (acima de 1.900m) e processo natural revela toda a complexidade aromática típica da Etiópia. Corpo leve, acidez brilhante e final longo perfumado.",
    image: gallery10,
  },
];

export const navLinks = [
  { to: "/", label: "Início" },
  { to: "/cardapio", label: "Cardápio" },
  { to: "/categorias", label: "Categorias" },
  { to: "/graos", label: "Grãos" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;
