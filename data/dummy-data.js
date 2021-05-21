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
];