import Tag from '../models/tag';
import ReferenceItem from '../models/referenceItem';

export const TAGS = [
    new Tag('t1', 'Watercolor'),
    new Tag('t2', 'Styles'),
    new Tag('t3', 'Girls'),
    new Tag('t4', 'Boys'),
    new Tag('t5', 'Sideview'),
    new Tag('t6', 'Flowers'),
    new Tag('t7', 'Monochrome'),
    new Tag('t8', 'Poses'),
    new Tag('t9', 'Traditional'),
    new Tag('t10', 'Digital'),
    new Tag('t11', 'Expressions'),
    new Tag('t12', 'Light And Shadow'),
    new Tag('t13','Tattoo Inspo'),
    new Tag('t14', 'Wood')
];

export const REFERENCEITEMS = [
    new ReferenceItem('m1', ['t2', 't3', 't9'], 'Lost in Strawberry Garden', false, false, 'Stylized Art for Editorial', 'https://www.instagram.com/ayceesky/', './data/artworks/ayceesky/lostInStrawberryGarden.jpg'),
    new ReferenceItem('m2', ['t2','t9'], 'Meany Madame Rain', false, false, 'Practice Style', 'https://www.instagram.com/ayceesky/', './data/artworks/ayceesky/meanyMadameRain.jpg'),
    new ReferenceItem('m3', ['t1', 't9'], 'Over The Garden Wall', false, false, 'Theme Inspo', 'https://www.instagram.com/ayceesky/', './data/artworks/ayceesky/overTheGardenWall.jpg'),
    new ReferenceItem('m4', ['t2', 't9'], 'Overthinking', false, false, '', 'https://www.instagram.com/ayceesky/', './data/artworks/ayceesky/overthinking.jpg'),
    new ReferenceItem('m5', ['t1', 't8', 't9'], 'Red Riding Hood And The Wolf', false, false, 'Theme Inspo', 'https://www.instagram.com/ayceesky/', './data/artworks/ayceesky/redHood.jpg'),
    new ReferenceItem('m6', ['t1', 't3', 't2', 't9'], 'The Painted Lady', false, false, 'Katara as the painted Lady in Avatar the last Airbender', 'https://www.instagram.com/ayceesky/', './data/artworks/ayceesky/thePaintedLady.jpg'),
    new ReferenceItem('m7', ['t1', 't4', 't8'], 'Felix (FE)', false, false, 'Felix from Fire Emblem', 'https://www.instagram.com/blueberry_jia/', './data/artworks/blueberry_jia/felix.jpg'),
    new ReferenceItem('m8', ['t4', 't8', 't10'], 'Noctis (FF)', false, false, 'Noctis from Final Fantasy', 'https://www.instagram.com/blueberry_jia/', './data/artworks/blueberry_jia/noctis.jpg'),
    new ReferenceItem('m9', ['t3', 't8'], 'Shamir (FE)', false, false, 'Shamir from FireEmblem, Archer Pose', 'https://www.instagram.com/blueberry_jia/', './data/artworks/blueberry_jia/shamir.jpg'),
    new ReferenceItem('m10', ['t7', 't9'], 'Tears', false, false, 'Monochrome Angel', 'https://www.instagram.com/blueberry_jia/', './data/artworks/blueberry_jia/tears.jpg'),
];