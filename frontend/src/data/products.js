import blanco1 from '../assets/images/blanco1.jpg';
import blanco2 from '../assets/images/blanco2.jpg';
import blanco3 from '../assets/images/blanco3.jpg';
import blanco4 from '../assets/images/blanco4.jpg';
import blancoVideo from '../assets/videos/blancoVideo.mp4';

import dictator1 from '../assets/images/dictator1.jpg';

import azul1 from '../assets/images/azul1.jpg';
import azul2 from '../assets/images/azul2.jpg';
import azul3 from '../assets/images/azul3.jpg';
import azul4 from '../assets/images/azul4.jpg';

import belugaPear1 from '../assets/images/belugaPear1.jpeg';
import belugaPear2 from '../assets/images/belugaPear2.jpeg';

import abuleo1 from '../assets/images/abuleo1.jpeg';
import abuleo2 from '../assets/images/abuleo2.jpeg';
import abuleo3 from '../assets/images/abuleo3.jpeg';

import unicumOrange1 from '../assets/images/unicumOrange1.jpeg';
import unicumOrange2 from '../assets/images/unicumOrange2.jpeg';

import tequilaBlanco1 from '../assets/images/tequilaBlanco1.jpeg';
import tequilaBlanco2 from '../assets/images/tequilaBlanco2.jpeg';
import tequilaBlanco3 from '../assets/images/tequilaBlanco3.jpeg';

export const products = [
    {
        id: 'blanco',
        name: 'Don Julio Blanco',
        meskaUrl: 'https://www.meska.hu/p5662754-don-julio-blanco-kep',
        media: [
            { type: 'image', src: blanco1 },
            { type: 'image', src: blanco2 },
            { type: 'image', src: blanco3 },
            { type: 'image', src: blanco4 },
            { type: 'video', src: blancoVideo },
        ],
        i18nLinkKey: 'product.productBlancoLink',
    },
    {
        id: 'dictator',
        name: 'Dictador 12',
        meskaUrl: 'https://www.meska.hu/p5662759-dictador-12-kep',
        media: [
            { type: 'image', src: dictator1 },
        ],
        i18nLinkKey: 'product.productDictatorLink',
    },
    {
        id: 'azul',
        name: 'Kaa Tequila',
        meskaUrl: 'https://www.meska.hu/p5662763-kaa-tequila-kep',
        media: [
            { type: 'image', src: azul1 },
            { type: 'image', src: azul2 },
            { type: 'image', src: azul3 },
            { type: 'image', src: azul4 },
        ],
        i18nLinkKey: 'product.productAzulLink',
    },
    {
        id: 'belugaPear',
        name: 'Beluga Pear',
        meskaUrl: 'https://www.meska.hu/p5662792-beluga-pear-kep',
        media: [
            { type: 'image', src: belugaPear1 },
            { type: 'image', src: belugaPear2 }
        ],
        i18nLinkKey: 'product.productBelugaPearLink',
    },
    {
        id: 'abuleo',
        name: 'Abuleo',
        meskaUrl: 'https://www.meska.hu/p5662794-torott-abuelo-uveg-diszbozban',
        media: [
            { type: 'image', src: abuleo1 },
            { type: 'image', src: abuleo2 },
            { type: 'image', src: abuleo3 }
        ],
        i18nLinkKey: 'product.productAbuleoLink',
    },
    {
        id: 'unicumOrange',
        name: 'Unicum Orange',
        meskaUrl: 'https://www.meska.hu/p5662789-unicum-orange-kep',
        media: [
            { type: 'image', src: unicumOrange1 },
            { type: 'image', src: unicumOrange2 }
        ],
        i18nLinkKey: 'product.productUnicumOrangeLink',
    },
    {
        id: 'tequilaBlanco',
        name: 'KAH Tequila Blanco',
        meskaUrl: 'https://www.meska.hu/p5662763-kaa-tequila-kep',
        media: [
            { type: 'image', src: tequilaBlanco1 },
            { type: 'image', src: tequilaBlanco2 },
            { type: 'image', src: tequilaBlanco3 }
        ],
        i18nLinkKey: 'product.productTequilaBlancoLink',
    }
];
