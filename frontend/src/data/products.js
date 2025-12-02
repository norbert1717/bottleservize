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
];
