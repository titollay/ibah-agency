const fs = require('fs');
const file = 'src/i18n/index.ts';
let code = fs.readFileSync(file, 'utf8');

// Replace French
code = code.replace(
  /title:\s*"Conseil & Audit Digital",\s*body:\s*"[^"]*",\s*},\s*{\s*title:\s*"Abonnements & Licences",\s*body:\s*"[^"]*",\s*}/g,
  `title: "Conseil & Produits Digitaux",\n          body: "Conseil expert, audit de vos systèmes, et fourniture de produits digitaux premium (Netflix, Canva, etc.) en direct.",\n        }`
);

// Replace English
code = code.replace(
  /title:\s*"Digital Consulting & Audit",\s*body:\s*"[^"]*",\s*},\s*{\s*title:\s*"Digital Subscriptions",\s*body:\s*"[^"]*",\s*}/g,
  `title: "Consulting & Digital Products",\n          body: "Expert consulting, systems audit, and provision of premium digital products (Netflix, Canva, etc.) with instant delivery.",\n        }`
);

// Replace Arabic
code = code.replace(
  /title:\s*"الاستشارات والتدقيق الرقمي",\s*body:\s*"[^"]*",\s*},\s*{\s*title:\s*"اشتراكات وتراخيص رقمية",\s*body:\s*"[^"]*",\s*}/g,
  `title: "الاستشارات والمنتجات الرقمية",\n          body: "استشارات استراتيجية، تدقيق للأنظمة، وتوفير منتجات رقمية مميزة (Netflix, Canva) بتسليم فوري.",\n        }`
);

fs.writeFileSync(file, code);
console.log('Done replacing the 4th item.');
