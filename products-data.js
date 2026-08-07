// ============================================================
// Zany'sCollection — Shared Product Catalog
// This is the SINGLE SOURCE OF TRUTH for product data.
// index.html, shop.html, and product.html all read from here.
// To add/edit a product, change it ONLY in this file.
// ============================================================

const catLabels = { jewelry:'Jewelry', suits:'Pakistani Suits', bags:'Handbags' };

const catalog = [
  { id:1, cat:'jewelry', name:'Meherun Gold Choker', price:152, was:186, rating:4.9, reviews:112, badge:'Best Seller', stock:true, added:1,
    desc:'A statement gold choker hand-finished by our goldsmith partners in Lahore. Layered detailing catches light from every angle — built for wedding season, comfortable enough for a full evening.' },
  { id:2, cat:'suits', name:'Zoya Embroidered Lawn 3PC', price:35, was:null, rating:4.7, reviews:64, badge:'New', stock:true, added:4,
    desc:'Hand-embroidered lawn three-piece with a matching dupatta. Breathable fabric cut for warm-weather wear, with embroidery detailing along the neckline and hem.', sizes:['S','M','L','XL'] },
  { id:3, cat:'bags', name:'Ambar Structured Tote', price:51, was:63, rating:4.6, reviews:81, badge:'Sale', stock:true, added:2,
    desc:'A structured everyday tote in vegan leather, sized to fit a laptop or A4 folder. Reinforced base keeps its shape even when only half full.' },
  { id:4, cat:'jewelry', name:'Naaz Kundan Earrings', price:68, was:null, rating:4.8, reviews:47, badge:null, stock:true, added:2,
    desc:'Traditional kundan-set earrings with a secure screw-back fitting. Lightweight enough for all-day wear despite the statement size.' },
  { id:5, cat:'suits', name:'Rania Chiffon Formal 3PC', price:55, was:null, rating:4.5, reviews:33, badge:'New', stock:false, added:5,
    desc:'Formal chiffon three-piece with delicate thread work, designed for evening events. Fully lined for opacity and comfort.', sizes:['XS','S','M','L','XL'] },
  { id:6, cat:'bags', name:'Sana Quilted Sling', price:31, was:39, rating:4.4, reviews:58, badge:'Sale', stock:true, added:3,
    desc:'A quilted sling bag with an adjustable gold-tone chain strap. Compact enough for evenings, roomy enough for the essentials.' },
  { id:7, cat:'jewelry', name:'Layla Pearl Drop Set', price:80, was:null, rating:4.9, reviews:97, badge:null, stock:true, added:1,
    desc:'A necklace-and-earring set featuring freshwater pearl drops on a fine gold-plated chain. Understated enough for daily wear.' },
  { id:8, cat:'suits', name:'Amal Organza Bridal 3PC', price:121, was:null, rating:5.0, reviews:22, badge:'Best Seller', stock:true, added:3,
    desc:'Our most-requested bridal piece — hand-finished organza with dense embroidery across the bodice and hem. Made to order with a 2-week lead time.', sizes:['S','M','L','XL'] },
  { id:9, cat:'bags', name:'Farah Woven Clutch', price:22, was:null, rating:4.3, reviews:19, badge:null, stock:true, added:4,
    desc:'A hand-woven evening clutch with a magnetic clasp closure. Comes with a detachable wrist strap.' },
  { id:10, cat:'jewelry', name:'Deeba Rose Gold Bangles', price:99, was:111, rating:4.7, reviews:71, badge:'Sale', stock:true, added:2,
    desc:'A set of three rose-gold plated bangles with a matte-and-polish contrast finish. Sold as a set of three.' },
  { id:11, cat:'suits', name:'Nimra Cotton Casual 2PC', price:19, was:null, rating:4.2, reviews:40, badge:null, stock:true, added:5,
    desc:'An everyday cotton two-piece, pre-washed and pre-shrunk. Our most breathable fabric — built for daily wear, not just occasions.', sizes:['S','M','L','XL','XXL'] },
  { id:12, cat:'bags', name:'Iman Leather Crossbody', price:46, was:null, rating:4.6, reviews:36, badge:null, stock:false, added:1,
    desc:'A compact genuine-leather crossbody with an adjustable strap and interior card slots.' },
  { id:13, cat:'bags', name:'Jasmine Rose Pearl Clutch', price:35, was:null, rating:5.0, reviews:2, badge:'New', stock:true, added:6,
    img:'images/jasmine-rose-pearl-clutch.jpg',
    desc:'A hand-assembled rose-appliqué clutch with a pearl-beaded top handle. Each fabric rose is individually stitched — no two bags are perfectly identical.' },
];
