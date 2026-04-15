import mercuryImage from '../assets/planets/Mercurio.png'
import venusImage from '../assets/planets/Venus.png'
import earthImage from '../assets/planets/Terra.png'
import marsImage from '../assets/planets/Marte.png'
import jupiterImage from '../assets/planets/Jupiter.png'
import saturnImage from '../assets/planets/Saturno.png'
import uranusImage from '../assets/planets/Urano.png'
import neptuneImage from '../assets/planets/Netuno.png'
import type { Planet } from '../types/planet'

export const planets: Planet[] = [
  {
    id: 'mercury',
    orbitIndex: 1,
    name: 'Mercúrio',
    subtitle: 'Relevo metálico sob brilho solar intenso e sombras abruptas.',
    description:
      'O planeta mais interno surge como uma esfera densa e esculpida, com crateras polidas, contraste forte e uma atmosfera visual cinza-metálica e contida.',
    image: mercuryImage,
    rotationDuration: 22,
    relativeSize: 0.82,
    stats: [
      { label: 'Ciclo orbital', value: '88 dias' },
      { label: 'Tom da superfície', value: 'Cinza metálico' },
      { label: 'Gravidade', value: '0.38 g' },
    ],
    theme: {
      accent: '#c4ccd9',
      accentSoft: 'rgba(196, 204, 217, 0.18)',
      accentAlt: '#7f8b9c',
      accentGlow: 'rgba(223, 232, 245, 0.42)',
      shadow: 'rgba(109, 118, 133, 0.35)',
      panel: 'rgba(11, 16, 24, 0.72)',
    },
  },
  {
    id: 'venus',
    orbitIndex: 2,
    name: 'Vênus',
    subtitle: 'Atmosfera âmbar envolvida por camadas luminosas de tempestade.',
    description:
      'Vênus traz uma identidade visual quente e densa, com nuvens em camadas, tons vulcânicos e um brilho dourado que aquece toda a interface.',
    image: venusImage,
    rotationDuration: 26,
    relativeSize: 0.95,
    stats: [
      { label: 'Camada de nuvens', value: 'Névoa sulfúrica' },
      { label: 'Brilho visual', value: 'Âmbar denso' },
      { label: 'Temperatura', value: '464 C' },
    ],
    theme: {
      accent: '#f0aa69',
      accentSoft: 'rgba(240, 170, 105, 0.18)',
      accentAlt: '#f6d19f',
      accentGlow: 'rgba(255, 206, 150, 0.4)',
      shadow: 'rgba(155, 102, 54, 0.36)',
      panel: 'rgba(18, 13, 10, 0.72)',
    },
  },
  {
    id: 'earth',
    orbitIndex: 3,
    name: 'Terra',
    subtitle: 'Oceanos azuis, traços verdes e equilíbrio atmosférico.',
    description:
      'A Terra introduz um clima mais nítido e respirável, com azuis aquáticos, verdes vivos e um contraste limpo que transmite precisão e calma.',
    image: earthImage,
    rotationDuration: 18,
    relativeSize: 0.98,
    stats: [
      { label: 'Cobertura de água', value: '71%' },
      { label: 'Atmosfera', value: 'Rica em nitrogênio' },
      { label: 'Luas', value: '1 satélite' },
    ],
    theme: {
      accent: '#5db8ff',
      accentSoft: 'rgba(93, 184, 255, 0.18)',
      accentAlt: '#6fd9a8',
      accentGlow: 'rgba(124, 223, 255, 0.38)',
      shadow: 'rgba(52, 98, 143, 0.34)',
      panel: 'rgba(8, 17, 24, 0.74)',
    },
  },
  {
    id: 'mars',
    orbitIndex: 4,
    name: 'Marte',
    subtitle: 'Vales cobertos de poeira sob um horizonte ferruginoso.',
    description:
      'Marte desloca a cena para vermelhos cinematográficos e reflexos terracota, criando uma atmosfera seca, elegante e com energia de expedição.',
    image: marsImage,
    rotationDuration: 20,
    relativeSize: 0.9,
    stats: [
      { label: 'Terreno', value: 'Poeira basáltica' },
      { label: 'Temperatura média', value: '-63 C' },
      { label: 'Luas', value: '2 satélites' },
    ],
    theme: {
      accent: '#f56d4d',
      accentSoft: 'rgba(245, 109, 77, 0.18)',
      accentAlt: '#ffb17e',
      accentGlow: 'rgba(255, 135, 107, 0.38)',
      shadow: 'rgba(144, 58, 39, 0.36)',
      panel: 'rgba(19, 11, 10, 0.72)',
    },
  },
  {
    id: 'jupiter',
    orbitIndex: 5,
    name: 'Júpiter',
    subtitle: 'Faixas atmosféricas grandiosas e campos de pressão colossais.',
    description:
      'Júpiter amplia a composição com névoa dourada, correntes em marfim e um brilho dominante que preenche a cena sem perder elegância.',
    image: jupiterImage,
    rotationDuration: 16,
    relativeSize: 1.18,
    stats: [
      { label: 'Sistemas de tempestade', value: 'Camadas gigantes' },
      { label: 'Luas', value: '95 conhecidas' },
      { label: 'Classe', value: 'Titã gasoso' },
    ],
    theme: {
      accent: '#ddb37a',
      accentSoft: 'rgba(221, 179, 122, 0.18)',
      accentAlt: '#fff0cf',
      accentGlow: 'rgba(247, 224, 176, 0.38)',
      shadow: 'rgba(128, 92, 52, 0.35)',
      panel: 'rgba(20, 15, 11, 0.72)',
    },
  },
  {
    id: 'saturn',
    orbitIndex: 6,
    name: 'Saturno',
    subtitle: 'Atmosfera dourada suave moldada por anéis icônicos.',
    description:
      'Saturno entrega a silhueta mais escultural do sistema, combinando luz dourada pálida e anéis elegantes para um resultado editorial e luxuoso.',
    image: saturnImage,
    rotationDuration: 24,
    relativeSize: 1.22,
    stats: [
      { label: 'Extensão dos anéis', value: 'Sete grupos principais' },
      { label: 'Densidade', value: '0.69 g/cm3' },
      { label: 'Luas', value: '146 conhecidas' },
    ],
    theme: {
      accent: '#f1c987',
      accentSoft: 'rgba(241, 201, 135, 0.18)',
      accentAlt: '#fff3cb',
      accentGlow: 'rgba(255, 228, 168, 0.4)',
      shadow: 'rgba(142, 111, 54, 0.35)',
      panel: 'rgba(21, 17, 11, 0.72)',
    },
  },
  {
    id: 'uranus',
    orbitIndex: 7,
    name: 'Urano',
    subtitle: 'Gradientes cianos frios com um mistério axial silencioso.',
    description:
      'Urano resfria a paleta do observatório com luz ciano gelada, névoa suave e um ritmo visual distante, calmo e refinado.',
    image: uranusImage,
    rotationDuration: 21,
    relativeSize: 1.04,
    stats: [
      { label: 'Inclinação axial', value: '97.8 graus' },
      { label: 'Tonalidade', value: 'Ciano glacial' },
      { label: 'Temperatura', value: '-224 C' },
    ],
    theme: {
      accent: '#8be4f5',
      accentSoft: 'rgba(139, 228, 245, 0.18)',
      accentAlt: '#d7fbff',
      accentGlow: 'rgba(166, 243, 255, 0.4)',
      shadow: 'rgba(68, 130, 143, 0.34)',
      panel: 'rgba(9, 17, 21, 0.74)',
    },
  },
  {
    id: 'neptune',
    orbitIndex: 8,
    name: 'Netuno',
    subtitle: 'Presença em azul-cobalto moldada por ventos violentos.',
    description:
      'Netuno leva a interface para um espectro mais profundo e dramático, equilibrando azuis oceânicos intensos com bordas luminosas e muita profundidade.',
    image: neptuneImage,
    rotationDuration: 19,
    relativeSize: 1.03,
    stats: [
      { label: 'Campos de vento', value: '2,100 km/h' },
      { label: 'Atmosfera', value: 'Azul de metano' },
      { label: 'Luas', value: '14 conhecidas' },
    ],
    theme: {
      accent: '#4a84ff',
      accentSoft: 'rgba(74, 132, 255, 0.18)',
      accentAlt: '#9bc3ff',
      accentGlow: 'rgba(123, 163, 255, 0.4)',
      shadow: 'rgba(49, 77, 138, 0.35)',
      panel: 'rgba(8, 12, 24, 0.74)',
    },
  },
]

export const defaultPlanetId = 'saturn'
