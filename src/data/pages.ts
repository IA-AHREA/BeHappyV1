import type { ComponentType } from 'react';

import Balance from '../illustrations/Balance';
import Balloons from '../illustrations/Balloons';
import BirthdayCake from '../illustrations/BirthdayCake';
import Bread from '../illustrations/Bread';
import Butterfly from '../illustrations/Butterfly';
import CarSinging from '../illustrations/CarSinging';
import Castle from '../illustrations/Castle';
import Dog from '../illustrations/Dog';
import Flowers from '../illustrations/Flowers';
import Fruits from '../illustrations/Fruits';
import HairDryer from '../illustrations/HairDryer';
import HelpingHand from '../illustrations/HelpingHand';
import Hug from '../illustrations/Hug';
import Journal from '../illustrations/Journal';
import Juggling from '../illustrations/Juggling';
import KitchenDance from '../illustrations/KitchenDance';
import Kite from '../illustrations/Kite';
import Meditation from '../illustrations/Meditation';
import Mirror from '../illustrations/Mirror';
import PhoneCall from '../illustrations/PhoneCall';
import Planting from '../illustrations/Planting';
import Ramen from '../illustrations/Ramen';
import Reading from '../illustrations/Reading';
import Sleep from '../illustrations/Sleep';
import Sunbathing from '../illustrations/Sunbathing';
import Sunrise from '../illustrations/Sunrise';
import Telescope from '../illustrations/Telescope';
import ThankYouCard from '../illustrations/ThankYouCard';
import TreeRest from '../illustrations/TreeRest';
import Umbrella from '../illustrations/Umbrella';
import Walking from '../illustrations/Walking';

export interface BookPage {
  id: string;
  phrase: string;
  Illustration: ComponentType;
}

export const pages: BookPage[] = [
  { id: 'lee', phrase: 'Lee', Illustration: Reading },
  { id: 'flores', phrase: 'Compra\nflores', Illustration: Flowers },
  { id: 'llegar', phrase: 'Trata\nde llegar', Illustration: Castle },
  { id: 'plan', phrase: 'Programa un\nplan realista', Illustration: HairDryer },
  { id: 'compares', phrase: 'No te compares\ncon los demás', Illustration: Fruits },
  { id: 'momento', phrase: 'Vive\nel momento', Illustration: Balance },
  { id: 'sol', phrase: 'Toma\nel sol', Illustration: Sunbathing },
  { id: 'baila', phrase: 'Baila\nen la cocina', Illustration: KitchenDance },
  { id: 'llama', phrase: 'Llama a quien\nextrañas', Illustration: PhoneCall },
  { id: 'perro', phrase: 'Acaricia\na un perro', Illustration: Dog },
  { id: 'lluvia', phrase: 'Escucha\nla lluvia', Illustration: Umbrella },
  { id: 'planta', phrase: 'Planta\nalgo', Illustration: Planting },
  { id: 'camina', phrase: 'Camina\nsin rumbo', Illustration: Walking },
  { id: 'riete', phrase: 'Ríete\nde ti', Illustration: Mirror },
  { id: 'diario', phrase: 'Anota lo bueno\nde hoy', Illustration: Journal },
  { id: 'estrellas', phrase: 'Mira\nlas estrellas', Illustration: Telescope },
  { id: 'pan', phrase: 'Comparte\ntu pan', Illustration: Bread },
  { id: 'duerme', phrase: 'Duerme\nlo suficiente', Illustration: Sleep },
  { id: 'coche', phrase: 'Canta\nen el coche', Illustration: CarSinging },
  { id: 'aprende', phrase: 'Aprende\nalgo inútil', Illustration: Juggling },
  { id: 'abraza', phrase: 'Abraza\nfuerte', Illustration: Hug },
  { id: 'cometa', phrase: 'Vuelve\na intentarlo', Illustration: Kite },
  { id: 'gracias', phrase: 'Da\nlas gracias', Illustration: ThankYouCard },
  { id: 'ramen', phrase: 'Come\ndespacio', Illustration: Ramen },
  { id: 'silencio', phrase: 'Regálate\nsilencio', Illustration: Meditation },
  { id: 'celebra', phrase: 'Celebra\nlo pequeño', Illustration: BirthdayCake },
  { id: 'ayuda', phrase: 'Pide\nayuda', Illustration: HelpingHand },
  { id: 'suelta', phrase: 'Suelta\nlo que pesa', Illustration: Balloons },
  { id: 'pausa', phrase: 'Haz\nuna pausa', Illustration: TreeRest },
  { id: 'proceso', phrase: 'Confía\nen el proceso', Illustration: Butterfly },
  { id: 'empieza', phrase: 'Empieza\nhoy', Illustration: Sunrise },
];
