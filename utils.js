export const lang = 'es';
export const store = 'ar';

export const getXboxURL = (list, skipitems = 0) => `https://api.xstoregames.com/api/games?list=${list}&skipitems=${skipitems}&lang=${lang}&store=${store}`;
export const searchXboxURL = (query) => `https://api.xstoregames.com/api/search?q=${query}&lang=${lang}&store=${store}`;
export const gameXboxURL = (id) => `https://api.xstoregames.com/api/games?id=${id}&lang=${lang}&store=${store}`;
export const getXboxNewsURL = () => `https://api.xstoregames.com/api/news`;
export const getGamePassURL = (list) => `https://api.xstoregames.com/api/gamepass?list=${list}&lang=${lang}&store=${store}`;
export const getVideoURL = (slug) => `https://api.xstoregames.com/api/videos?game=${slug}`;

const mlId = { ar: 'MLA', mx: 'MLM', };
export const getMarketplaceItemsURL = (limit = 20) => `https://api.mercadolibre.com/sites/${mlId[store]}/search?category=${mlId[store]}455245&limit=${limit}`;

export function getPageFromURL(url) {
  const { pathname, searchParams } = new URL(url);
  let pathSplit = pathname.split('/');
  pathSplit = pathSplit.filter(p => !['', '-store'].includes(p));

  const lang = 'es';
  let store = pathname.split('/').filter(p => p.includes('-store'));
  store = store.length ? store[0].split('-store')[0] : 'ar';

  const page = pathSplit[0] || 'home';
  const id = pathSplit[1];
  const gameId = pathSplit[1] ? pathSplit[1].split('_')[1] : null;

  return { id, gameId, page, searchParams, lang, store };
}

export function slugify(str) {
  return str
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

const IVA = 0.21;
const IIBB = 0.02;
const AFIP = 0.45;
const PAISA = 0.08;

export function convertDollar(price) {
  if (store !== 'ar') {
    return price.toFixed(2)
  }

  const final = toFixed(price) + toFixed(price * IVA) + toFixed(price * IIBB) + toFixed(price * AFIP) + toFixed(price * PAISA);
  return final.toFixed(2);
}

function toFixed(num) {
  const rounded = Math.round(num * 100) / 100;
  return Number.parseFloat(rounded.toFixed(2));
}

export const titles = {
  new : 'Salidos del horno',
  deals: 'Ahorrate unos pesos',
  coming: '¡Mirá lo que se viene!',
  best: 'Deberías jugarlos',
  most: 'Los más jugados',
  free: 'Gratarola',
  'gamepass-new': 'Recién agregados a Game Pass',
  'gamepass-coming': 'Se están por sumar a Game Pass',
  'leaving': 'Se van pronto de Game Pass',
  'gamepass-all': 'Todos los juegos de Game Pass',
  'gold-new': 'Disponibles con Gold',
  'gold-deals': 'Ofertas con Gold',
  'gold-free': 'Días gratis con Gold',
  meli: 'Accesorios destacados',
};

import { signal } from '@preact/signals';
export const videosSignal = signal(null);
