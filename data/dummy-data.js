import Tag from '../models/tag';
import ReferenceItem from '../models/referenceItem';

export const IDCOUNTERTAGS = 14;
export const IDCOUNTERREFERENCES = 67;

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
    new ReferenceItem('m1', ['t2', 't3', 't9'], 'Lost in Strawberry Garden', false, false, 'Stylized Art for Editorial', 'https://www.instagram.com/ayceesky/', require('../data/artworks/ayceesky/lostInStrawberryGarden.jpg')),
    new ReferenceItem('m2', ['t2','t9'], 'Meany Madame Rain', false, false, 'Practice Style', 'https://www.instagram.com/ayceesky/', require('../data/artworks/ayceesky/meanyMadameRain.jpg')),
    new ReferenceItem('m3', ['t1', 't9'], 'Over The Garden Wall', false, false, 'Theme Inspo', 'https://www.instagram.com/ayceesky/', require('../data/artworks/ayceesky/overTheGardenWall.jpg')),
    new ReferenceItem('m4', ['t2', 't9'], 'Overthinking', false, true, '', 'https://www.instagram.com/ayceesky/', require('../data/artworks/ayceesky/overthinking.jpg')),
    new ReferenceItem('m5', ['t1', 't8', 't9'], 'Red Riding Hood And The Wolf', false, false, 'Theme Inspo', 'https://www.instagram.com/ayceesky/', require('../data/artworks/ayceesky/redHood.jpg')),
    new ReferenceItem('m6', ['t1', 't3', 't2', 't9'], 'The Painted Lady', false, false, 'Katara as the painted Lady in Avatar the last Airbender', 'https://www.instagram.com/ayceesky/', require('../data/artworks/ayceesky/thePaintedLady.jpg')),
    new ReferenceItem('m7', ['t1', 't4', 't8'], 'Felix (FE)', false, false, 'Felix from Fire Emblem', 'https://www.instagram.com/blueberry_jia/', require('../data/artworks/blueberry_jia/felix.jpg')),
    new ReferenceItem('m8', ['t4', 't8', 't10'], 'Noctis (FF)', false, false, 'Noctis from Final Fantasy', 'https://www.instagram.com/blueberry_jia/', require('../data/artworks/blueberry_jia/noctis.jpg')),
    new ReferenceItem('m9', ['t3', 't8'], 'Shamir (FE)', false, true, 'Shamir from FireEmblem, Archer Pose', 'https://www.instagram.com/blueberry_jia/', require('../data/artworks/blueberry_jia/shamir.jpg')),
    new ReferenceItem('m10', ['t7', 't9'], 'Tears', false, false, 'Monochrome Angel', 'https://www.instagram.com/blueberry_jia/', require('../data/artworks/blueberry_jia/tears.jpg')),
    new ReferenceItem('m11', ['t2', 't4', 't10'], '48 Stylised Yoongi', false, false, 'Style Inspo', 'https://www.instagram.com/for__infinity/', require('../data/artworks/for__infinity/48stylised.jpg')),
    new ReferenceItem('m12', ['t2', 't4', 't5', 't8', 't10'], '48 Stylised', false, false, 'Style Inspo, Pose Inspo', 'https://www.instagram.com/for__infinity/', require('../data/artworks/for__infinity/48stylised2.jpg')),
    new ReferenceItem('m13', ['t1', 't9'], 'Jimin Watercolor', false, false, 'Jimin from BTS Watercolor Practice', 'https://www.instagram.com/for__infinity/', require('../data/artworks/for__infinity/48watercolor.jpg')),
    new ReferenceItem('m14', ['t1', 't9'], 'Tae Watercolor', true, false, 'Taehyung from BTS', 'https://www.instagram.com/for__infinity/', require('../data/artworks/for__infinity/48watercolor2.jpg')),
    new ReferenceItem('m15', ['t9'], 'BTS Headshot', false, false, 'Pencil Practice', 'https://www.instagram.com/for__infinity/', require('../data/artworks/for__infinity/bts.jpg')),
    new ReferenceItem('m16', ['t5', 't10'], 'Butterfly Jimin', false, false, 'Jimin Digital Sticker Artwork', 'https://www.instagram.com/for__infinity/', require('../data/artworks/for__infinity/butterflyJimin.jpg')),
    new ReferenceItem('m17', ['t7', 't9'], 'Demons', false, false, 'BTS Jungkook Pencil Artwork', 'https://www.instagram.com/for__infinity/', require('../data/artworks/for__infinity/demons.jpg')),
    new ReferenceItem('m18', ['t2', 't8', 't10'], 'Stylised Tae Dynamite', true, false, 'Use Pose as Ref', 'https://www.instagram.com/for__infinity/', require('../data/artworks/for__infinity/dynamite.jpg')),
    new ReferenceItem('m19', ['t7', 't10'], 'Monochrome Tae', false, false, 'Vampire-ish Tae', 'https://www.instagram.com/for__infinity/', require('../data/artworks/for__infinity/monochromeTae.jpg')),
    new ReferenceItem('m20', ['t5', 't7', 't9'], 'Reality', true, false, 'Jimin Theme Inspo', 'https://www.instagram.com/for__infinity/', require('../data/artworks/for__infinity/reality.jpg')),
    new ReferenceItem('m21', ['t5', 't9'], 'Reflection', false, false, 'Mirror Artwork of Jimin from BTS', 'https://www.instagram.com/for__infinity/', require('../data/artworks/for__infinity/reflection.jpg')),
    new ReferenceItem('m22', ['t1', 't9'], 'Roses and Tae', false, false, 'Watercolor iInspo', 'https://www.instagram.com/for__infinity/', require('../data/artworks/for__infinity/rosesAndTae.jpg')),
    new ReferenceItem('m23', ['t5', 't7', 't9', 't14'], 'Shadows', false, false, 'Darkness/ Shadow Inspo', 'https://www.instagram.com/for__infinity/', require('../data/artworks/for__infinity/shadows.jpg')),
    new ReferenceItem('m24', ['t2', 't5', 't10'], 'Tae Sideview Stylised', false, false, 'stylised Tae', 'https://www.instagram.com/for__infinity/', require('../data/artworks/for__infinity/taeSide.jpg')),
    new ReferenceItem('m25', ['t7', 't9', 't12'], 'Dangerous Love', false ,false, 'Fineliner Artwork with Humanoid Animals', 'https://www.instagram.com/han_xiii/', require('../data/artworks/han_xiii/dangerousLove.jpg')),
    new ReferenceItem('m26', ['t1', 't4', 't9'], 'King JK', false ,false, 'Unfinished JK as King', 'https://www.instagram.com/han_xiii/', require('../data/artworks/han_xiii/kingJK.jpg')),
    new ReferenceItem('m27', ['t1', 't3', 't6', 't9'], 'Lisa with Flowers', true ,false, 'Blackpink Lisa with Peonies', 'https://www.instagram.com/han_xiii/', require('../data/artworks/han_xiii/lisa.jpg')),
    new ReferenceItem('m28', ['t9'], 'Taemin', false ,false, 'Pencil Practice Taemin from Shinee', 'https://www.instagram.com/han_xiii/', require('../data/artworks/han_xiii/taemin.jpg')),
    new ReferenceItem('m29', ['t2', 't3', 't6', 't9'], 'Wolf Girl', false ,false, 'Acrylic Artwork with flowers', 'https://www.instagram.com/han_xiii/', require('../data/artworks/han_xiii/wolfGirl.jpg')),
    new ReferenceItem('m30', ['t1', 't9'], 'Yoongi x Zodiac', false ,false, 'Yoongi x Zodiac Gemini', 'https://www.instagram.com/han_xiii/', require('../data/artworks/han_xiii/zodiaccyoongi.jpg')),
    new ReferenceItem('m31', ['t1', 't9'], 'Taehyung x Zodiac', false ,false, 'Taehyung x Zodiac Capricorn', 'https://www.instagram.com/han_xiii/', require('../data/artworks/han_xiii/zodiacxtae.jpg')),
    new ReferenceItem('m32', ['t2', 't3', 't10'], 'Sunset', false, false, 'Dark skinned Girl with Sunset', 'https://www.instagram.com/hiba_tan/', require('../data/artworks/hiba_tan/california.jpg')),
    new ReferenceItem('m33', ['t2', 't3', 't10'], 'Cherry Blossom', false, false, 'Cherry Blossom Themed digital Artwork', 'https://www.instagram.com/hiba_tan/', require('../data/artworks/hiba_tan/cherryBlossom.jpg')),
    new ReferenceItem('m34', ['t10', 't12'], 'Ma City', true, false, 'Artwork with City Lights', 'https://www.instagram.com/hiba_tan/', require('../data/artworks/hiba_tan/city.jpg')),
    new ReferenceItem('m35', ['t3', 't10'], 'Girl with Kitten', false, false, 'Girl with Kitty on her Shoulder, cute af', 'https://www.instagram.com/hiba_tan/', require('../data/artworks/hiba_tan/diversity.jpg')),
    new ReferenceItem('m36', ['t8'], 'Editorial', false, false, 'cute girl, use pose for ffk', 'https://www.instagram.com/hiba_tan/', require('../data/artworks/hiba_tan/editorial.jpg')),
    new ReferenceItem('m37', ['t8'], 'Fashion Magazine', false, false, 'Fashion Poses', 'https://www.instagram.com/hiba_tan/', require('../data/artworks/hiba_tan/fashionMagazine.jpg')),
    new ReferenceItem('m38', ['t10', 't12'], 'Purple Lights', false, true, 'Purple Themed with Light/Shadow Ref', 'https://www.instagram.com/hiba_tan/', require('../data/artworks/hiba_tan/hibaLights.jpg')),
    new ReferenceItem('m39', ['t8', 't12'], 'Lights and Shadows', false, false, 'Light/Shadow Ref', 'https://www.instagram.com/hiba_tan/', require('../data/artworks/hiba_tan/hibaLights2.jpg')),
    new ReferenceItem('m40', ['t12'], 'Lights and Shadows 2', false, false, 'Light/Shadow Ref', 'https://www.instagram.com/hiba_tan/', require('../data/artworks/hiba_tan/hibaShadows.jpg')),
    new ReferenceItem('m41', ['t5'], 'Sideview', false, false, 'Sideview Girl with Bun', 'https://www.instagram.com/hiba_tan/', require('../data/artworks/hiba_tan/hibaSide.jpg')),
    new ReferenceItem('m42', ['t5'], 'Sideview 2', false, false, 'Sideview Girl', 'https://www.instagram.com/hiba_tan/', require('../data/artworks/hiba_tan/hibaSide2.jpg')),
    new ReferenceItem('m43', ['t5'], 'Sideview 3', false, false, 'Sideview Girl', 'https://www.instagram.com/hiba_tan/', require('../data/artworks/hiba_tan/hibaSide3.jpg')),
    new ReferenceItem('m44', ['t3', 't10'], 'Sun Glasses', false, false, 'Girl with Hijab and cool Sunglasses ', 'https://www.instagram.com/hiba_tan/', require('../data/artworks/hiba_tan/hibaSunGlasses.jpg')),
    new ReferenceItem('m45', ['t3', 't8'], 'Influencer', true, false, 'Girl with textured Hair', 'https://www.instagram.com/hiba_tan/', require('../data/artworks/hiba_tan/influencer.jpg')),
    new ReferenceItem('m46', ['t2', 't10'], 'Hawks Practice', false, false, 'BNHA Hawks sketch', 'https://www.instagram.com/kirokochii/', require('../data/artworks/kirokochii/bnhaHawks.jpg')),
    new ReferenceItem('m47', ['t11'], 'Dabi', false, false, 'BNHA Dabi with Lipbite Expression', 'https://www.instagram.com/kirokochii/', require('../data/artworks/kirokochii/dabi.jpg')),
    new ReferenceItem('m48', ['t11'], 'BNHA Expression Practice', false, false, 'BNHA expression sketch', 'https://www.instagram.com/kirokochii/', require('../data/artworks/kirokochii/expressions.png')),
    new ReferenceItem('m49', ['t10', 't12'], 'Hawks', false, false, 'BNHA Hawks Artwork', 'https://www.instagram.com/kirokochii/', require('../data/artworks/kirokochii/hawks.jpg')),
    new ReferenceItem('m50', ['t2', 't10'], 'Boyyy', false, false, 'Digital Sketch', 'https://www.instagram.com/kirokochii/', require('../data/artworks/kirokochii/kirokochiiBoy.jpg')),
    new ReferenceItem('m51', ['t2', 't10'], 'Girl', false, false, 'Digital Sketch', 'https://www.instagram.com/kirokochii/', require('../data/artworks/kirokochii/kirokochiiGirl.jpg')),
    new ReferenceItem('m52', ['t13'], 'Alive', false, false, 'Tattoo Inspo', 'https://instagram.com/lumil.ink/', require('../data/artworks/lumil.ink/alive.jpg')),
    new ReferenceItem('m53', ['t13'], 'Creativity & Strength', false, false, 'Tattoo Inspo', 'https://instagram.com/lumil.ink/', require('../data/artworks/lumil.ink/creativityAndStrength.jpg')),
    new ReferenceItem('m54', ['t2', 't3', 't10'], 'Lumilyuu', false, false, 'Elven Girl', 'https://instagram.com/lumil.ink/', require('../data/artworks/lumil.ink/lumil.jpg')),
    new ReferenceItem('m55', ['t9'], 'Sir Snail', false, false, 'Snail Gentleman', 'https://instagram.com/lumil.ink/', require('../data/artworks/lumil.ink/sirSnail.jpg')),
    new ReferenceItem('m56', ['t6', 't13'], 'Tat Inspo', false, false, 'Different Tattoo Inspo', 'https://instagram.com/lumil.ink/', require('../data/artworks/lumil.ink/tatInspo.jpg')),
    new ReferenceItem('m57', ['t6', 't13'], 'Tat Inspo 2', false, false, 'Different Tattoo Inspo', 'https://instagram.com/lumil.ink/', require('../data/artworks/lumil.ink/tatInspo2.jpg')),
    new ReferenceItem('m58', ['t13'], 'Time And Stars', false, false, 'Time Inspired Tattoo', 'https://instagram.com/lumil.ink/', require('../data/artworks/lumil.ink/timeAndStars.jpg')),
    new ReferenceItem('m59', ['t13'], 'Wet', false, false, 'Tattoo Inspo', 'https://instagram.com/lumil.ink/', require('../data/artworks/lumil.ink/wet.jpg')),
    new ReferenceItem('m60', ['t9', 't14'], 'Yggdrasil', false, false, 'wood like Structures', 'https://instagram.com/lumil.ink/', require('../data/artworks/lumil.ink/yggdrasil.jpg')),
    new ReferenceItem('m61', ['t9'], 'Sun4Now', false, false, 'Some KPOP Idol', 'https://www.instagram.com/sun4now/', require('../data/artworks/sun4now/sun4now.jpg')),
    new ReferenceItem('m62', ['t10'], 'Fushi', false, false, 'Fushi from Jujutsu Kaisen', 'https://www.instagram.com/zelyame/', require('../data/artworks/zelyame/fushiii.png')),
    new ReferenceItem('m63', ['t10', 't12'], 'Hua Cheng', false, false, 'Hua Cheng with Light', 'https://www.instagram.com/zelyame/', require('../data/artworks/zelyame/huaCheng.jpg')),
    new ReferenceItem('m64', ['t10'], 'Inumaki', false, false, 'Inumaki from Jujutsu Kaisen', 'https://www.instagram.com/zelyame/', require('../data/artworks/zelyame/inumaki.jpg')),
    new ReferenceItem('m65', ['t5', 't10', 't12'], 'Izumi Miyamura', false, false, 'Miyamura from Horimiya', 'https://www.instagram.com/zelyame/', require('../data/artworks/zelyame/miyamura.jpg')),
    new ReferenceItem('m66', ['t5', 't10'], 'Tadashi', false, false, 'Tadashi from Some anime', 'https://www.instagram.com/zelyame/', require('../data/artworks/zelyame/tadashi.jpg')),
    new ReferenceItem('m67', ['t2', 't10'], 'Naoya Zenin', false, false, 'Naoya Zenin from Jujutsu Kaisen', 'https://www.instagram.com/zelyame/', require('../data/artworks/zelyame/zenin.jpg'))
];