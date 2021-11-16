const touristPlace= [
    {id:1, name:'Illusion Cap Sleeve Lace Appliqued Wedding Dress', description:'Regular fit, round neckline, short sleeves. Made of extra long staple pima cotton.', size:'S, L, M, XL', rating:5, price:19.12,img:'https://brideyleotheme.b-cdn.net/80-large_default/hummingbird-printed-t-shirt.jpg',class:'Wedding Dress' },

    {id:2, name:'Floral Tall Plus Wedding Dress with Metallic Tulle', description:'Printed on rigid matt finish and smooth surface  short sleeves.', size:' L, S, M, XL', rating:5, price:29.00,img:'https://brideyleotheme.b-cdn.net/91-large_default/the-adventure-begins-framed-poster.jpg', class:'Mermaid/Trumpet'},

    {id:3, name:'Short Sleeve Low Back Stretch Lace Wedding Dress', description:'Printed on rigid paper with matt finish and smooth surface.', size:'S, L, M, XL', rating:5, price:19.12,img:'https://brideyleotheme.b-cdn.net/93-large_default/today-is-a-good-day-framed-poster.jpg',class:'Dresses' },

    {id:4, name:'Strapless Sweetheart Tulle Wedding Dress', description:'Printed on rigid matt paper and smooth surface.', size:'S, L, M, XL', rating:5, price:11.90,img:'https://brideyleotheme.b-cdn.net/97-large_default/mug-the-adventure-begins.jpg',class:'Home Accessories' },

    {id:5, name:'Beaded Bodice with Tiered Skirt Wedding Dress', description:'To wear with a chino or jeans. The sublimation textile printing process provide.', size:'S, L, M, XL', rating:5, price:15.97,img:'https://dy9ihb9itgy3g.cloudfront.net/products/4018/221151/221151_diamond_white.740.jpg',class:'Dresses' },

    {id:6, name:'Floral Applique Sheer Bodice Crepe Wedding Dress', description:'an exceptional color rendering and a color, guaranteed overtime s.', size:'S, L, M, XL', rating:5, price:17.00,img:'https://388707-1222130-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/07/top-slider-2_jul20.jpg',class:'Wedding Dress' },

    {id:7, name:'Beaded Bodice with Tiered Skirt Wedding Dress', description:'Regular fit, round neckline, short sleeves. Made of extra long staple pima cotton.', size:'S, L, M, XL', rating:5, price:17.00,img:'https://brideyleotheme.b-cdn.net/81-large_default/hummingbird-printed-t-shirt.jpg',class:'Wedding Dress' },

    {id:8, name:'The Silky Cotton Relaxed Shirt Wedding Dress', description:'An exceptional color rendering and a color, guaranteed overtime s.', size:'S, L, M, XL', rating:4.5, price:17.00,img:'https://cdn.makehappymemories.com/live/wp-content/uploads/2017/11/21022433/rosa-clara-pique-wedding-dress-2017-819x1024.jpg',class:'Wedding Dress' },

    {id:9, name:'Ball gown Cotton Relaxed Shirt Wedding Dress ', description:'The Desi Bride is a one-stop for couples South Asian-inspired.', size:'S, L, M, XL', rating:5, price:19.00,img:'https://i.pinimg.com/originals/8a/99/c0/8a99c0e4f2e576b28a2652bb1f9bc1b5.png',class:'Wedding Dress' },

    {id:10, name:'Mermaid Wedding Dress', description:'Weddings in Texas to find quality vendors wedding through honest reviews. ', size:'S, L, M, XL', rating:5, price:16.00,img:'https://www.brides.com/thmb/K_J7d22WdFb5D_q7kcYrFxynTyA=/1066x1067/filters:fill(auto,1)/gina-and-luke-wedding-31-53ade13c9ead429582f4cbbfc8d48700-e5910b32a95e414fb3e5702b08721edf.jpg',class:'Wedding Dress' },

    {id:11, name:'Trumpet Wedding Dress', description:'Marriage therapist DeMaria and co-writer Harrar present a short guide to event.', size:'S, L, M, XL', rating:5, price:17.80,img:'https://m.media-amazon.com/images/I/61O7IVo1q0L._AC_UX679_.jpg',class:'Wedding Dress' },

    {id:12, name:'Sheath Wedding Dress', description:' Signify a life-long commitment. to provide security for children. to make a public.', size:'S, L, M, XL', rating:5, price:15.60,img:'https://www.modernwedding.com.au/wp-content/uploads/2018/09/21/6282.1464814334.0.jpg',class:'Wedding Dress' },

    {id:13, name:'A-line Wedding Dress', description:'DeMaria and co-writer  rendering and a color, guaranteed the  maria and co-writer .', size:'S, L, M, XL', rating:5, price:19.00,img:'https://www.zahrahrose.com/wp-content/uploads/2020/01/PicsArt_01-23-06.49.31-830x1024.png',class:'Mermaid/Trumpet' },

    {id:14, name:'Tea-length Wedding Dress', description:'The acts that are traditionally done in connection with a marriage.', size:'S, L, M, XL', rating:5, price:18.00,img:'https://www.weddinginspirasi.com/wp-content/uploads/2021/04/sareh-nouri-spring-2022-bridal-long-sleeve-high-collar-v-neckline-fully-embellished-lace-a-line-ball-gown-wedding-dress-chapel-train-veil-1-fv-.jpg',class:'Wedding Dress' },

    {id:15, name:'Fit-and-flare Wedding Dress', description:'White is considered to be the most auspicious color among Religion.', size:'S, L, M, XL', rating:5, price:16.10,img:'https://img.cdncloud.top/uploader/d974af06cc8a5182cedc2a7774eac5c77e673ece.jpg',class:'Wedding Dress' },

    {id:16, name:'Column Wedding Dress', description:'The bride wears a wedding sari or lehenga according to the region.', size:'S, L, M, XL', rating:5, price:16.90,img:'https://i.pinimg.com/736x/e8/96/42/e89642ed005c3f7052f3b47295b0da01.jpg',class:'Wedding Dress' },

    {id:17, name:'Ceremony Lehenga Wedding Dress', description:'A lehenga is traditional Indian attire worn for wedding celebrations.', size:'S, L, M, XL', rating:4.7, price:17.50,img:'https://ae01.alicdn.com/kf/H8746b336418a42cd850a053b5833582fc.jpg',class:'Mermaid/Trumpet' },

    {id:18, name:'Lace Muslim Wedding Dress long Sleeve Applice', description:'Unlike western wedding ceremonies, brides avoid wearing white.', size:'S, L, M, XL', rating:5, price:20.30,img:'https://image.made-in-china.com/2f0j00yhorwFscpbqi/Lace-Muslim-Wedding-Dress-Long-Sleeve-Saudi-Arabic-Bridal-Gown-Long-Hijab-Veil-Z9010.jpg',class:'Wedding Dress' },
]