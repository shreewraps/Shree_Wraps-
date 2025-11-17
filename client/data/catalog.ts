import type { Product } from "@shared/api";

export const CATEGORIES = [
  { key: "promotional-gifts", label: "Promotional Gifts" },
  { key: "corporates", label: "Corporate Gifts" },
  { key: "festival-gifts", label: "Festival Gifts" },
  { key: "occasional-gifts", label: "Occasional Gifts" },
  { key: "charity-gifts", label: "Charity Gifts" },
] as const;

export const products: Product[] = [
  // === PROMOTIONAL ITEMS (used by PromotionalGifts page) START ===
  // These product objects were added specifically for the Promotional Gifts page
  // and are grouped here so you can find them easily.
  // Each object below includes `subCategory` which the strip filters on.

  // PROMO - subCategory: everyday
  {
    id: "Personalized Can Glass Tumbler - COD Not Applicable",
    name: "Personalized Can Glass Tumbler - COD Not Applicable",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762591956/Gemini_Generated_Image_qevcdhqevcdhqevc_kh2cso.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762591956/Gemini_Generated_Image_qevcdhqevcdhqevc_kh2cso.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762592272/Gemini_Generated_Image_37f8ky37f8ky37f8_dmidym.png",
    ],
    price: 690,
    originalPrice: 1000,
    category: "promotional-gifts",
    subCategory: "everyday",
    description:
      "A compact everyday utility promotional set — bottle, snack, and greeting card.",
  },
  // PROMO - subCategory: everyday
  {
    id: "PERSONALIZED INSULATED MINI FLASK - COD NOT APPLICABLE",
    name: "PERSONALIZED INSULATED MINI FLASK - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695540/Gemini_Generated_Image_vdhu7hvdhu7hvdhu_nj5ju3.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695540/Gemini_Generated_Image_vdhu7hvdhu7hvdhu_nj5ju3.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695371/DSC03466-min_1800x1800_wc1f0v.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695372/DSC03454-min_1200x_coidml.webp",
    ],
    price: 545,
    originalPrice: 600,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "PERSONALIZED LARGE CERAMIC COFFEE MUG - COD NOT APPLICABLE",
    name: "PERSONALIZED LARGE CERAMIC COFFEE MUG - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697174/IMG_4836-min_1800x1800_ozizua.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697174/IMG_4836-min_1800x1800_ozizua.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697173/Gemini_Generated_Image_g8x9edg8x9edg8x9_qaqddu.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697148/IMG_4775-min_800x_mfttwl.webp",
    ],
    price: 799,
    originalPrice: 850,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "PERSONALIZED HAMPER - SELF-CARE GIRLIE - COD NOT APPLICABLE",
    name: "PERSONALIZED HAMPER - SELF-CARE GIRLIE - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762699273/Gemini_Generated_Image_wtri9awtri9awtri_zuei4x.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762699273/Gemini_Generated_Image_wtri9awtri9awtri_zuei4x.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762699269/JewelleryBox_7_e3630604-01ea-4c87-88bb-ba07a2c445ec_800x_mnwddj.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762699276/Gemini_Generated_Image_qm3glhqm3glhqm3g_ewunzf.png",
    ],
    price: 1900,
    originalPrice: 2150,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "PERSONALIZED CAN GLASS TUMBLER - SNOWFLAKE - COD NOT APPLICABLE",
    name: "PERSONALIZED CAN GLASS TUMBLER - SNOWFLAKE - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762700941/Gemini_Generated_Image_hzesc5hzesc5hzes_plolwf.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762700941/Gemini_Generated_Image_hzesc5hzesc5hzes_plolwf.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762700942/Gemini_Generated_Image_ra3ovbra3ovbra3o_jmqv0m.png",
    ],
    price: 845,
    originalPrice: 900,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "PERSONALIZED CLEAR ZIPPER POUCH - COD NOT APPLICABLE",
    name: "PERSONALIZED CLEAR ZIPPER POUCH - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702513/Gemini_Generated_Image_aaehxgaaehxgaaeh_tampa6.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702513/Gemini_Generated_Image_aaehxgaaehxgaaeh_tampa6.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702511/Gemini_Generated_Image_d48p4ed48p4ed48p_yjkyra.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702510/Gemini_Generated_Image_9cbzyk9cbzyk9cbz_f0rlhe.png",
    ],
    price: 525,
    originalPrice: 600,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "PERSONALIZED HAMPER - REGAL - COD NOT APPLICABLE",
    name: "PERSONALIZED HAMPER - REGAL - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762704618/Gemini_Generated_Image_exe23rexe23rexe2_alpsvk.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762704618/Gemini_Generated_Image_exe23rexe23rexe2_alpsvk.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762704618/Gemini_Generated_Image_pv463ipv463ipv46_cdslwy.png",
    ],
    price: 1699,
    originalPrice: 1850,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "Money Plant In Stylish Terracotta Pot",
    name: "Money Plant In Stylish Terracotta Pot",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762705128/DSC_2761_pt1wzk.avif",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762705128/DSC_2761_pt1wzk.avif",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762705157/DSC_2762_kncklz.avif",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762705158/DSC_2763_h45vmf.avif",
    ],
    price: 625,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },

  // PROMO - subCategory: travel
  {
    id: "Exclusive Passport Cover - Wanderlust",
    name: "Exclusive Passport Cover - Wanderlust",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762758513/Gemini_Generated_Image_awub9cawub9cawub_onhx8j.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762758513/Gemini_Generated_Image_awub9cawub9cawub_onhx8j.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762758514/Gemini_Generated_Image_8y63vp8y63vp8y63_sceydm.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762758513/Gemini_Generated_Image_90fk3s90fk3s90fk_cz2ptg.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762758512/personalized-passport-cover-forest-green-the-messy-corner-passport-cover-19463612858524_0ac71628-1e57-4cc2-b3d4-025a661cbd56_1300x_z6j4kn.webp",
    ],
    price: 449,
    originalPrice: 900,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Premium travel kit for corporate gifting.",
  },
  {
    id: "Travel Memory Box - souvenir & keepsake box customized",
    name: "Travel Memory Box - souvenir & keepsake box customized",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762771590/Gemini_Generated_Image_xh6l3mxh6l3mxh6l_eigmwy.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762771590/Gemini_Generated_Image_xh6l3mxh6l3mxh6l_eigmwy.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762771589/Gemini_Generated_Image_2sne1x2sne1x2sne_z6drjx.png",
    ],
    price: 990,
    originalPrice: 1399,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Premium travel kit for corporate gifting.",
  },
  {
    id: "Customized 6-in-1 Travel Gift Set – Perfect for Business & Travel",
    name: "Customized 6-in-1 Travel Gift Set – Perfect for Business & Travel",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772027/Gemini_Generated_Image_jkpv94jkpv94jkpv_fbdsn6.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772027/Gemini_Generated_Image_jkpv94jkpv94jkpv_fbdsn6.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772026/Gemini_Generated_Image_an4seoan4seoan4s_o6afgp.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772026/Gemini_Generated_Image_ig3189ig3189ig31_xbbxnq.png",
    ],
    price: 1495,
    originalPrice: 2995,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Premium travel kit for corporate gifting.",
  },
  {
    id: "Jet Setter Gift Tote",
    name: "Jet Setter Gift Tote",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772306/NewProject_3_1476905e-1302-4605-9884-ad9492af6d18_800x800_iwmdi7.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772306/NewProject_3_1476905e-1302-4605-9884-ad9492af6d18_800x800_iwmdi7.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772305/NewProject_4_25588915-ad3a-4329-bcae-9c30bf415726_800x800_clvbqi.webp",
    ],
    price: 7130,
    originalPrice: 7130,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Premium travel kit for corporate gifting.",
  },
  {
    id: "Gold Foiled Pocket Umbrella",
    name: "Gold Foiled Pocket Umbrella",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772590/DSC09506-min_1800x1800_jurumd.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772590/DSC09506-min_1800x1800_jurumd.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772589/DSC09520-min_1500x1500_l6eekt.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772589/DSC09516-min_1800x1800_mbeslu.webp",
    ],
    price: 800,
    originalPrice: 1000,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Premium travel kit for corporate gifting.",
  },
  {
    id: "PERSONALIZED CLEAR ZIPPER POUCH - COD NOT APPLICABLE - travel",
    name: "PERSONALIZED CLEAR ZIPPER POUCH - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702513/Gemini_Generated_Image_aaehxgaaehxgaaeh_tampa6.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702513/Gemini_Generated_Image_aaehxgaaehxgaaeh_tampa6.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702511/Gemini_Generated_Image_d48p4ed48p4ed48p_yjkyra.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702510/Gemini_Generated_Image_9cbzyk9cbzyk9cbz_f0rlhe.png",
    ],
    price: 525,
    originalPrice: 600,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "PERSONALIZED LARGE CERAMIC COFFEE MUG - COD NOT APPLICABLE - travel",
    name: "PERSONALIZED LARGE CERAMIC COFFEE MUG - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697174/IMG_4836-min_1800x1800_ozizua.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697174/IMG_4836-min_1800x1800_ozizua.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697173/Gemini_Generated_Image_g8x9edg8x9edg8x9_qaqddu.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697148/IMG_4775-min_800x_mfttwl.webp",
    ],
    price: 799,
    originalPrice: 850,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "Personalized Can Glass Tumbler - COD Not Applicable - travel",
    name: "Personalized Can Glass Tumbler - COD Not Applicable",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762591956/Gemini_Generated_Image_qevcdhqevcdhqevc_kh2cso.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762591956/Gemini_Generated_Image_qevcdhqevcdhqevc_kh2cso.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762592272/Gemini_Generated_Image_37f8ky37f8ky37f8_dmidym.png",
    ],
    price: 690,
    originalPrice: 1000,
    category: "promotional-gifts",
    subCategory: "travel",
    description:
      "A compact everyday utility promotional set — bottle, snack, and greeting card.",
  },
  // PROMO - subCategory: travel
  {
    id: "PERSONALIZED INSULATED MINI FLASK - COD NOT APPLICABLE - travel",
    name: "PERSONALIZED INSULATED MINI FLASK - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695540/Gemini_Generated_Image_vdhu7hvdhu7hvdhu_nj5ju3.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695540/Gemini_Generated_Image_vdhu7hvdhu7hvdhu_nj5ju3.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695371/DSC03466-min_1800x1800_wc1f0v.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695372/DSC03454-min_1200x_coidml.webp",
    ],
    price: 545,
    originalPrice: 600,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "Personalized Sleek Pocket Umbrella - COD Not Applicable",
    name: "Personalized Sleek Pocket Umbrella - COD Not Applicable",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762773075/DSC07253-min_1200x_s6ubmh.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762773075/DSC07253-min_1200x_s6ubmh.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762773076/DSC07256-min_1200x_flbnyr.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762773078/DSC07258-min_1200x_stmhwo.webp",
    ],
    price: 899,
    originalPrice: 1100,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Value everyday gift with custom branding options.",
  },

  // PROMO - subCategory: lifestyle
  {
    id: "Gorgeous Bride Gift Box",
    name: "Gorgeous Bride Gift Box",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762855490/Gorgeous-Bride-2-768x768_haumcj.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762855490/Gorgeous-Bride-2-768x768_haumcj.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762855489/Gorgeous-Bride--768x782_btjawv.webp",
    ],
    price: 2175,
    originalPrice: 2500,
    category: "promotional-gifts",
    subCategory: "lifestyle",
    description: "Personal care & lifestyle gifts suitable for events.",
  },

  {
    id: "Pretty Pink Box for Her",
    name: "Pretty Pink Box for Her",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856397/Pretty-Pink-Gift-Hamper-3_vlqpxo.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856397/Pretty-Pink-Gift-Hamper-3_vlqpxo.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856397/Pretty-Pink-Gift-Hamper-3_vlqpxo.webp",
    ],
    price: 2599,
    originalPrice: 2999,
    category: "promotional-gifts",
    subCategory: "lifestyle",
    description: "Personal care & lifestyle gifts suitable for her.",
  },
  {
    id: "Pamper Yourself Gift Hamper",
    name: "Pamper Yourself Gift Hamper",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856972/pamper-yourself-gift-hamper-the-spring-palette-37328289169627_uye89z.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856972/pamper-yourself-gift-hamper-the-spring-palette-37328289169627_uye89z.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856971/pamper-yourself-gift-hamper-the-spring-palette-37328289661147_ne8zap.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856970/pamper-yourself-gift-hamper-the-spring-palette-37328304111835_x1ormz.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856970/pamper-yourself-gift-hamper-the-spring-palette-37328290021595_ayfity.webp",
    ],
    price: 2249,
    originalPrice: 2999,
    category: "promotional-gifts",
    subCategory: "lifestyle",
    description: "Personal care & lifestyle gifts suitable for her.",
  },
  {
    id: "Sweet Birthday Celebration Basket",
    name: "Sweet Birthday Celebration Basket",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857495/Gemini_Generated_Image_t1ek01t1ek01t1ek_himzxy.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857495/Gemini_Generated_Image_t1ek01t1ek01t1ek_himzxy.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857495/Gemini_Generated_Image_rhk2uirhk2uirhk2_ggcl3w.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857496/Gemini_Generated_Image_kahar6kahar6kaha_az8oef.png",
    ],
    price: 1575,
    originalPrice: 1800,
    category: "promotional-gifts",
    subCategory: "lifestyle",
    description: "Personal care & lifestyle gifts suitable for her.",
  },

  // PROMO - subCategory: eco
  {
    id: "Thenga Evergreen Eco-Friendly Gift Hampers",
    name: "Thenga Evergreen Eco-Friendly Gift Hampers",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857931/Evergreen3_1080x_phrevh.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857931/Evergreen3_1080x_phrevh.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857930/285_1080x_aqruoi.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857929/Evergreen2_1080x_rfmhnv.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857928/284_180x_pccbcg.avif",
    ],
    price: 1499,
    originalPrice: 1799,
    category: "promotional-gifts",
    subCategory: "eco",
    description: "Jute and terracotta based eco-friendly promotional gifts.",
  },
  // PROMO - subCategory: eco
  {
    id: "Eco - Essentials",
    name: "Eco - Essentials",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858534/eco-friendly-gift_cbg5tt.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858534/eco-friendly-gift_cbg5tt.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858532/corporate-eco-friendly-gifts_ztazcl.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858530/eco-friendly-gift-hamper_vfnz6q.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858529/Mug_2_y7afv3.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858528/CoconutCandle_vsffkq.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858527/multipurpose-eco-friendly-canvas-pouch_sdfzhc.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858526/StrawP4_iby4fu.webp",
    ],
    price: 2650,
    originalPrice: 3100,
    category: "promotional-gifts",
    subCategory: "eco",
    description: `Are you looking for eco-friendly gift hampers for employees, clients, and business associates? Check out our ‘eco-essentials’ organic gift hamper that will not only cater to your brand image but also protect the environment. Transform your everyday routine with this eco-conscious, sustainable gift hamper that combines style and sustainability.

The chic multipurpose canvas pouch keeps your essentials organized, while the 250-ml eco-friendly travel cup makes every sip feel planet-friendly. With the reusable stainless steel straw set of 4 straws in its jute pouch, you can make a small but meaningful change in your daily life to conserve the planet. Plus, you will get a coconut shell candle made with soy wax that adds a touch of natural serenity to any space.

This eco-friendly gift hamper is perfect for those who want to make a positive impact on the environment while enjoying stylish and practical accessories.`,
  },
  {
    id: "The Eco-friendly Box",
    name: "The Eco-friendly Box",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859400/Gemini_Generated_Image_l0d3f6l0d3f6l0d3_sklqhn.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859400/Gemini_Generated_Image_l0d3f6l0d3f6l0d3_sklqhn.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859401/Gemini_Generated_Image_f0fdbzf0fdbzf0fd_p54vpy.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859432/41KDjRa5viL_888ec556-919e-4b8b-9ff0-8d398c77b85d_phoxrw.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859433/CorkV1_paad1w.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859435/WhatsAppImage2023-09-02at14.25.59_2_indto2.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859436/WhatsAppImage2023-09-02at14.26.00_jdnuzb.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859439/travelpouch.03_fb1f6bef-f104-4269-bf1a-4e1b047af671_zj6g8w.webp",
    ],
    price: 3350,
    originalPrice: 3700,
    category: "promotional-gifts",
    subCategory: "eco",
    description: `Going eco-friendly can help you go a long way.’ This saying is especially true when it comes to corporate gifting. Choosing environmentally friendly gifts is not just good for the environment but also good for your brand image. If you are looking for some creative, thoughtful, and sustainable gift ideas, this Eco-friendly box would be perfect for you.

 This eco-friendly gift box contains an insulated bamboo tumbler to keep your beverages hot or cold for a long time. The cork coasters and cork diary are a great way to reuse cork and avoid generating extra waste. You will also get a cork travel pouch in this gift hamper, that can be a great replacement for plastic travel pouches. This way, you can contribute to conserving the environment without compromising on functionality. 

The plantable pens are a great way to inspire more people to plant trees, and they come in a sustainable cork pouch. Besides being sustainable, all the items in this eco-friendly box are aesthetically pleasing and make your life easy and convenient.`,
  },
  {
    id: "Eco-Chic Gift Box - Bamboo like notebook, pen & Bamboo bottle Gift Pack",
    name: "Eco-Chic Gift Box - Bamboo like notebook, pen & Bamboo bottle Gift Pack",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860294/Gemini_Generated_Image_t57d7ft57d7ft57d_xykllv.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860294/Gemini_Generated_Image_t57d7ft57d7ft57d_xykllv.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860294/Gemini_Generated_Image_sg0ovksg0ovksg0o_e8fexa.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860293/Gemini_Generated_Image_u708ksu708ksu708_vzrhhm.png",
    ],
    price: 3350,
    originalPrice: 3700,
    category: "promotional-gifts",
    subCategory: "eco",
    description: `Embrace style and sustainability with our Eco-Chic Gift Box, featuring a bamboo-inspired notebook, sleek bamboo water bottle, and smooth bamboo pen—all crafted from eco-friendly, reusable materials. Perfect for work, travel, and gifting, this elegant set combines natural charm with everyday functionality, helping reduce plastic waste while adding a touch of earthy sophistication to your routine or someone special’s day.
`,
  },
  {
    id: "The Sustainable Way",
    name: "The Sustainable Way",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860678/eco-friendly-corporate-gift-hamper_o0ec28.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860689/eco-friendly-copper-gift_s2dfhm.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860678/eco-friendly-corporate-gift-hamper_o0ec28.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860677/WoodenLeafCoaster_1_mbveo9.webp ",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860674/IndividualDiwaliProducts_-4_422fe08b-08a0-4070-aa5c-40fd6992e3b3_ldx3ke.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860673/CoconutCandle_1_oywh5h.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860672/wooden-slider-gift-box_p1qgju.webp",
    ],
    price: 2290,
    originalPrice: 3290,
    category: "promotional-gifts",
    subCategory: "eco",
    description: `Elevate your eco-conscious gifting with The Sustainable Way hamper, a thoughtfully curated box designed with sustainability and style in mind. Set inside a reusable wooden slider-lid box, this elegant hamper includes a pair of half‑hammered copper glasses, a coconut-shell candle, two leaf-carved wooden coasters, and two packs of golden almond brittle, all tied together with a greeting card of your choice. Each item is sustainably crafted from natural coconut shell and wood to plant-based brittle, making it perfect for mindful celebrations or eco-friendly gifting.

Whether it’s to delight at Diwali, to honor someone’s green lifestyle, or to serve as a standout corporate or personal gift, this hamper combines rustic aesthetics with premium packaging. Ideal for recipients who value sustainability without compromising on elegance. Celebrate consciously and beautifully with a gift that’s good for them and kind to the planet.
`,
  },
  {
    id: "Chef’s Essentials",
    name: "Chef’s Essentials",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762861558/gift-for-chef_yjig61.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762861558/gift-for-chef_yjig61.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762861558/Akshita_sShoot-23_hugazr.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762861558/IMG_5659_720x_53d5d698-01b2-43b3-a000-5b0c88a8adaa_du8isp.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762861557/DSC03336_720x_4820ed35-b332-4def-8039-a28a03922a23_gqqgva.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762861557/20210822-IMG_2803_720x_75a21a2f-c1a5-4232-b6b8-cefcd0661ac8_f20a1t.webp",
    ],
    price: 2990,
    originalPrice: 3290,
    category: "promotional-gifts",
    subCategory: "eco",
    description: `Treat the special women in your life with a delightful culinary experience with our Chef’s Essentials gift hamper, specially curated for the kitchen enthusiast in her. 
  Combining practicality with style and sentiment, this gift hamper for ladies is the perfect way to celebrate their love of cooking. 
  For the amazing chefs who make delicious and sumptuous recipes with love as their secret ingredient, this gift hamper is one of the unique gifts for women. 
  Beautifully packed in an eco-friendly reusable gift box the premium products and cooking equipment encourage experimentation and enhance culinary adventures. 
  The Chef's Essentials Gift Hamper is the perfect way to spread the joy of delicious food. 
  You can add a personalized message to convey your love and appreciation to the chef, making this gift even more memorable. 
`,
  },

  {
    id: "Rasatva Ruvaa - Nirvana | Coffee Supreme | Gourmet Coffee Gift Hamper | Premium Corporate Gift for Employees | Anniversary, Festive Gift for Friends & Family",
    name: "Rasatva Ruvaa - Nirvana | Coffee Supreme | Gourmet Coffee Gift Hamper | Premium Corporate Gift for Employees | Anniversary, Festive Gift for Friends & Family",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762862366/91-W9eTKZnL._SX569__mwcjk2.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762862366/91-W9eTKZnL._SX569__mwcjk2.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762862293/81jFlp9iC4L._SX679__e8dtap.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762862295/Gemini_Generated_Image_uefi0yuefi0yuefi_xgqxwf.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762862294/Gemini_Generated_Image_6jl61h6jl61h6jl6_bqkpah.png",
    ],
    price: 2500,
    category: "promotional-gifts",
    subCategory: "premium",
    description:
      "Deluxe premium collection with assorted dryfruits and chocolates.",
  },
  {
    id: "Good Wishes Sustainable Hamper",
    name: "Good Wishes Sustainable Hamper",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762864167/good-wishes-sustainable-hamper_2_tteec7.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762864167/good-wishes-sustainable-hamper_2_tteec7.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762863632/good-wishes-sustainable-hamper_1_sqaho0.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762863631/good-wishes-sustainable-hamper_3_dqueop.webp",
    ],
    price: 2499,
    category: "promotional-gifts",
    subCategory: "premium",
    description: `This elegant gift box is the perfect way to show your loved ones that you care about the environment This beautiful and thoughtful gift comes with personalised text on a reusable pinewood box and is filled with sustainable goodies All of the sustainable items are presented in a reusable box making it an ecofriendly and beautiful gift for any occasion
Product Details

Copper Glass Set of 2
Love and Light Coaster Set of 2
Mix Dry fruits Jar 100 gms
Copper Planter 3 x 7.62 x 10.16 cms
Green Potpourri in Jute Potli
Reusable Personalised Pinewood Box 10 x 25.40 x 114.30 cms
Net Quantity 1 Set
Dimensions 27x27x14 cm
Weight Approx 1 Kg
Country of Origin India
Vegetarian`,
  },
  {
    id: "Shaadmaan Luxury Gift Box",
    name: "Shaadmaan Luxury Gift Box",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762864276/UntitledSession00049_iqirtx.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762864276/UntitledSession00049_iqirtx.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762864277/PurpleBird-19thDec202200450_crop_r0hers.webp",
    ],
    price: 2700,
    category: "promotional-gifts",
    subCategory: "premium",
    description: `If you or your gift recipient are anything like us, candles will make them happy. 
     Those whose love language is smell, know the sheer pleasure associated with a fragrant candle. Especially, when the fragrance is of rose - the ultimate symbol of love, passion and romance.
      Double the joy of gifting, with the Shaadmaan, curation with a pair of silver plated Baagh rose candles. Cheers to new beginnings!`,
  },
  {
    id: "Tea Candle Holder",
    name: "Tea Candle Holder",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762938753/CSH041_i77c6h.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762938753/CSH041_i77c6h.webp",
    ],
    price: 2499,
    category: "promotional-gifts",
    subCategory: "premium",
    description: `Elevate your gifting game with our hamper featuring a set of 2 tea light holders. 
     These beautifully handcrafted holders, made from brass and silver-plated with a lacquer finish, add a touch of elegance and warmth to any setting.`,
  },
  {
    id: "Premium Passport Holder",
    name: "Premium Passport Holder",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762939516/CSSD219_fp1aaz.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762939516/CSSD219_fp1aaz.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762939296/CSSD219A_ztllrk.webp",
    ],
    price: 5400,
    category: "promotional-gifts",
    subCategory: "premium",
    description: `Elevate your travel essentials with our luxurious passport holder, crafted from high-quality brass, silver-plated, and lacquered for durability. This sleek and sophisticated design offers both style and protection for your passport. Its compact size ensures it fits perfectly in any travel bag. Ideal for discerning travelers who value elegance and practicality. Travel in style with this exquisite passport holder.`,
  },
  {
    id: "Silver Bowl",
    name: "Silver Bowl",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762940929/Silver_Bowl_crcvzg.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762940929/Silver_Bowl_crcvzg.webp",
    ],
    price: 4950,
    category: "promotional-gifts",
    subCategory: "premium",
    description: `One of our subtle collections, the decorated bowl may be used for holding potpourri or chocolates. 
     Completely handcrafted, made in brass and lacquered, it is a beautiful piece to own or gift!`,
  },
  {
    id: "Decorative Bowl Set",
    name: "Decorative Bowl Set",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762941096/Bowl_Set_hzo63b.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762941096/Bowl_Set_hzo63b.webp",
    ],
    price: 9999,
    category: "promotional-gifts",
    subCategory: "premium",
    description: `Make every day festive by the way you serve. 
     Our decorated bowl set comes in set of three and is completely handcrafted, silver-plated and lacquered. Add potpourri or dry eatables and keep it for personal use or gifting.`,
  },
  {
    id: "Silver Plated Plate",
    name: "Silver Plated Plate",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762941296/CSTW059---POOJA-THALI_oyx5up.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762941296/CSTW059---POOJA-THALI_oyx5up.webp",
    ],
    price: 7499,
    category: "promotional-gifts",
    subCategory: "premium",
    description: `Make every day festive by the way you serve. 
     Our decorated bowl set comes in set of three and is completely handcrafted, silver-plated and lacquered. Add potpourri or dry eatables and keep it for personal use or gifting.`,
  },
  // PROMO - subCategory: apparel
  {
    id: "promo-apparel-1",
    name: "Apparel & Wearable Pack - A",
    image: "https://picsum.photos/seed/promo-apparel-1/600/400",
    images: [],
    price: 899,
    category: "promotional-gifts",
    subCategory: "apparel",
    description: "Branded t-shirt/scarf promotional wearable.",
  },
  // PROMO - subCategory: apparel
  {
    id: "promo-apparel-2",
    name: "Apparel & Wearable Pack - B",
    image: "https://picsum.photos/seed/promo-apparel-2/600/400",
    images: [],
    price: 1299,
    category: "promotional-gifts",
    subCategory: "apparel",
    description: "Premium wearable set for corporate gifting.",
  },

  // PROMO - subCategory: premium

  {
    id: "Elite Onboarding Welcome Kit",
    name: "Elite Onboarding Welcome Kit",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763373992/Elite_Onboarding_Welcome_Kit_ufozst.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763373992/Elite_Onboarding_Welcome_Kit_ufozst.png",
    ],
    price: 1599,
    category: "corporates",
    subCategory: "onboarding",
    description: `ake every new beginning memorable with our Elite Onboarding Welcome Kit, thoughtfully curated to offer the perfect blend of professionalism, utility, and sophistication. Designed in a sleek black presentation box, this kit provides all the essentials a new team member needs to feel valued, prepared, and inspired from day one.

This premium welcome kit includes:
✔️ Executive Notebook – For ideas, planning, and daily notes
✔️ Insulated Bottle – To keep beverages hot or cold throughout the workday
✔️ Ceramic Mug – For a warm, comforting coffee or tea break
✔️ Signature Pen – Smooth writing for everyday tasks
✔️ Keychain – Stylish and functional
✔️ Office ID Holder – For easy access and a professional look
✔️ USB/Multifunction Tool (if included) – For convenient tech use

Perfect for corporate onboarding, employee welcome gifts, client gifting, HR kits, and premium corporate events, this set reflects appreciation while strengthening your company’s professional identity.

Stylish, practical, and impactful—our Elite Onboarding Welcome Kit helps every new employee start their journey on the right note.`,
  },
  {
    id: "Executive Starter Welcome Kit",
    name: "Executive Starter Welcome Kit",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763374333/Executive_Starter_Welcome_Kit_zcmktx.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763374333/Executive_Starter_Welcome_Kit_zcmktx.png",
    ],
    price: 1299,
    category: "corporates",
    subCategory: "onboarding",
    description: `Make a powerful first impression with our Executive Starter Welcome Kit, a premium onboarding box crafted to reflect sophistication, practicality, and a warm corporate welcome. Designed in a sleek matte-black presentation box, it includes essential office tools that set the tone for productivity and success.

Inside the kit:
✔️ Premium Leather Notebook – Perfect for jotting down ideas, meetings, and daily tasks
✔️ Metallic Executive Pen – Smooth writing with a touch of class
✔️ Matte Black Insulated Bottle – Keeps beverages hot or cold throughout long workdays

Minimalistic yet impactful, this kit is ideal for new employee onboarding, client gifting, corporate events, induction programs, and HR welcome packages. With its elegant design and functional essentials, it helps every new joiner feel valued and ready to begin their professional journey with confidence.

Stylish, thoughtful, and truly executive—this welcome kit is the perfect way to say “Welcome to the team.”`,
  },
  {
    id: "Essential Welcome Box for New Joiners",
    name: "Essential Welcome Box for New Joiners",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763374491/Essential_Welcome_Box_for_New_Joiners_erdban.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763374491/Essential_Welcome_Box_for_New_Joiners_erdban.png",
    ],
    price: 1999,
    category: "corporates",
    subCategory: "onboarding",
    description: `Give your new team members a warm, stylish, and thoughtful start with our Essential Welcome Box for New Joiners. Curated to combine practicality with brand-friendly elegance, this kit includes must-have items that support a productive and comfortable beginning in the workplace.

Inside the kit:
✔️ Premium Polo T-shirt – Smart, comfortable, and perfect for representing the company with pride
✔️ Matte Black Insulated Bottle – Keeps beverages hot or cold through long workdays
✔️ Classic Ceramic Mug – For refreshing coffee or tea breaks
✔️ Executive Pen – Sleek, reliable, and ideal for everyday office use

Packaged in a vibrant, premium gift box, this onboarding kit reflects appreciation, professionalism, and a welcoming corporate culture. Perfect for HR onboarding programs, employee induction, corporate events, and client welcome gifting, it sets a positive tone from day one.

Thoughtful, functional, and brand-ready—this kit is designed to make every new joiner feel valued and prepared.`,
  },
  {
    id: "Premium Corporate Welcome Kit",
    name: "Premium Corporate Welcome Kit",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763374700/Premium_Corporate_Welcome_Kit1_uxzcfe.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763374700/Premium_Corporate_Welcome_Kit1_uxzcfe.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763374701/Premium_Corporate_Welcome_Kit_natkmn.png",
    ],
    price: 1699,
    category: "corporates",
    subCategory: "onboarding",
    description: `Welcome your new team members with style and warmth through our Premium Corporate Welcome Kit, a thoughtfully curated collection of office essentials designed to inspire productivity from day one. Packed in a sleek matte-black gift box, this kit blends elegance, functionality, and corporate professionalism.

Inside the kit:
✔️ Executive Notebook – Ideal for daily tasks, planning, and creative thinking
✔️ Classic Ceramic Mug – Perfect for energising coffee or tea breaks
✔️ Metallic Executive Pen – Smooth, reliable writing for everyday use
✔️ Insulated Black Bottle – Keeps beverages hot or cold throughout the day
✔️ Premium Packaging Box – Stylish and presentation-ready for onboarding events

Ideal for new employee onboarding, HR welcome programs, client gifting, conferences, and corporate milestone events, this kit ensures every recipient feels valued, prepared, and excited to begin their journey.

Sleek, thoughtful, and truly premium—your brand’s first impression starts here.`,
  },

  {
    id: "Signature Welcome Essentials Kit",
    name: "Signature Welcome Essentials Kit",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763374935/Signature_Welcome_Essentials_Kit_mzetlt.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763374935/Signature_Welcome_Essentials_Kit_mzetlt.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763374938/Signature_Welcome_Essentials_Kit1_h8zvfa.png",
    ],
    price: 1599,
    category: "corporates",
    subCategory: "onboarding",
    description: `Make every new joiner feel valued and truly part of the team with our Signature Welcome Essentials Kit, a sleek and modern onboarding box crafted to represent professionalism, unity, and your brand’s premium identity. Perfectly coordinated in classic black, this kit includes all the must-have essentials for a confident start in the workplace.

Inside the kit:
✔️ Premium Polo T-shirt – Smart, comfortable, and ideal for a unified team look
✔️ Executive Notebook – Perfect for notes, planning, and daily productivity
✔️ Matte Black Signature Pen – Elegant, smooth-writing, and office-ready
���️ Luxury Black Gift Box – A stylish presentation that makes a lasting first impression

Designed for corporate onboarding, HR welcome programs, employee induction, team-building events, and client gifting, this kit blends practicality with a polished aesthetic to ensure new employees feel motivated and appreciated from day one.

Minimal, classy, and meaningful—your brand’s first welcome starts here.`,
  },

  {
    id: "The Luxe Wellness Welcome Kit",
    name: "The Luxe Wellness Welcome Kit",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763375119/The_Luxe_Wellness_Welcome_Kit_q2hx4a.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763375119/The_Luxe_Wellness_Welcome_Kit_q2hx4a.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763375118/The_Luxe_Wellness_Welcome_Kit1_lkrgr2.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763375118/The_Luxe_Wellness_Welcome_Kit2_qziqp0.webp",
    ],
    price: 1799,
    category: "corporates",
    subCategory: "onboarding",
    description: `Give your team, clients, or loved ones a thoughtful and refreshing start with our Luxe Wellness Welcome Kit, a beautifully curated box designed to inspire calm, productivity, and positivity. Wrapped in a stunning black box with a golden ribbon and complete logo customization, this kit elevates every unboxing moment.

Inside the kit:
✔️ 2024 Wellness Planner – To organize goals, habits, and mindful living
✔️ Affirmation Flip Cards – Daily reminders of positivity and self-growth
✔️ Vanilla Scented Candle – For moments of calm and relaxation
✔️ Premium White Mug with Lid – Perfect for tea or coffee on-the-go
✔️ Logo-Branded Badge – Ideal for workspaces or bags
✔️ Personalized Message Card – Add your welcome note or branding

Perfect for new employee onboarding, festive gifting, corporate retreats, team appreciation, self-care packages, and client gifting, this kit blends elegance with meaningful utility.

Elegant, personal, and inspiring—The Luxe Wellness Welcome Kit is the perfect way to say “Welcome, we’re glad you’re here.”`,
  },

  // CORPORATE - subCategory: anniversary
  {
    id: "Milestone Work Anniversary Gift Box",
    name: "Milestone Work Anniversary Gift Box",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763375405/Milestone_Work_Anniversary_Gift_Box_qay5pj.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763375405/Milestone_Work_Anniversary_Gift_Box_qay5pj.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763375402/Milestone_Work_Anniversary_Gift_Box1_wfp4xy.webp",
    ],
    price: 799,
    category: "corporates",
    subCategory: "anniversary",
    description: `Celebrate dedication, loyalty, and years of valuable service with our Premium Work Anniversary Gift Box.
Thoughtfully curated for corporate milestones, this hamper includes a custom-framed certificate, delicious treats, a relaxing scented candle, and a preserved rose symbolizing gratitude and respect.
Packaged in a luxury box featuring your company logo, it’s the perfect way to recognize employees on their work anniversaries and make them feel truly appreciated.
Ideal for 1-year, 5-year, or any milestone celebrations—this gift box adds a personal and elegant touch to your employee recognition program.`,
  },
  {
    id: "Adventure Awaits Farewell Box",
    name: "Adventure Awaits Farewell Box",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763375781/Adventure_Awaits_Farewell_Box_hucbfe.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763375781/Adventure_Awaits_Farewell_Box_hucbfe.webp",
    ],
    price: 699,
    category: "corporates",
    subCategory: "anniversary",
    description: `Make farewells memorable with our New Beginnings Farewell Gift Box, created to appreciate the journey and celebrate a fresh start.
This beautifully curated hamper features:
✔ A stylish travel tumbler for new adventures
✔ Easy-pour specialty coffee to energize the next chapter
✔ A mini desk plant symbolizing growth and positivity
✔ A vibrant dreamcatcher for good vibes and good luck
✔ A farewell message card to express heartfelt wishes

All items come packed in an elegant, logo-branded black box with a premium ribbon finish.
A perfect farewell present for employees, coworkers, team members, or friends embarking on a new journey—because goodbyes deserve to be special.`,
  },

  {
    id: "Elegant Appreciation Gift Box",
    name: "Elegant Appreciation Gift Box",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763375910/Elegant_Appreciation_Gift_Box_dgmi9v.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763375910/Elegant_Appreciation_Gift_Box_dgmi9v.png",
    ],
    price: 899,
    category: "corporates",
    subCategory: "anniversary",
    description: `Show genuine appreciation with our Luxury Achievement Gift Hamper, crafted to make every moment of recognition truly special.
This premium set includes:

✔ A professionally framed certificate of appreciation
✔ A stylish matte black insulated bottle, tied with a charming ribbon
✔ A beautifully wrapped gourmet treat
✔ Decorative fillers and an elegant pastel gift box with subtle gold detailing

Perfect for employee awards, corporate events, yearly achievements, team recognitions, or client gifting, this hamper conveys gratitude in the most refined way.
Thoughtful, classy, and memorable—an ideal choice to honor someone who truly deserves it.`,
  },

  {
    id: "Happy Workiversary Candle",
    name: "Happy Workiversary Candle",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763376225/Happy_Workiversary_Candle_cw9sfy.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763376225/Happy_Workiversary_Candle_cw9sfy.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763376225/Happy_Workiversary_Candle2_gzbwxm.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763376224/Happy_Workiversary_Candle3_kpyqye.webp",
    ],
    price: 1099,
    category: "corporates",
    subCategory: "anniversary",
    description: `Honor years of commitment with our Work Anniversary Appreciation Candle, a warm and heartfelt way to say “Thank You.”
Hand-poured using premium soy wax, this clean-burning, vegan candle brings a touch of comfort and joy to any workspace or home.
Featuring a charming “Happy Workiversary” label and the option to include a custom personal message on the back, it becomes a truly special keepsake.
Ideal for celebrating employee milestones, work anniversaries, or team achievements—this candle makes appreciation feel personal, warm, and unforgettable.`,
  },

  {
    id: "The Luxury Family Feast Hamper(Corporate)",
    name: "The Luxury Family Feast Hamper (Corporate)",
    image: "https://i.ibb.co/0psvzhyJ/The-Family-Feast-Collections.png",
    price: 3599,
    originalPrice: 3999,
    category: "corporates",
    subCategory: "festival",
    description: `• Top & Bottom Super Luxury Box
• One Jar of Besan Laddu
• One Jar of Dryfruits Laddu
• Three Jars of Dried Fruits
• Two Jars of Potato Wafers
• One Box of Chocolate
• Lord Ganesha and Lakshmi Idol (Brass/Metal)
• Decorative Diya - 2 pcs
• Sweets Design Candle (Optional)
• Copper Water Bottle
• Premium Greeting Card
• Lotus Wall Hangings - 2 pcs`,
  },
  {
    id: "The Jute Blessing(Corporate)",
    name: "The Jute Blessing (Corporate)",
    image: "https://i.ibb.co/LhZjYccG/The-Jute-Blessing.png",
    price: 1599,
    originalPrice: 1867,
    category: "corporates",
    subCategory: "festival",
    description: `• Woven Basket
• Decorative Diyas-5pcs
• Cracker DEsign Chocolates-10pcs
• Homemaid Chips-200gms
• Decorative Flower Glass jar
• One Box of Chocolate
• Lotus Flower Wall Hanging
• Custom Note card
• Poutpuri
• Besan Laddu-250gms`,
  },
  {
    id: "The Harmony(Corporate)",
    name: "The Harmony(Corporate)",
    image: "https://i.ibb.co/Wb8ySyn/image.png",
    price: 1299,
    originalPrice: 1499,
    category: "corporates",
    subCategory: "festival",
    description: `• Top & Bottom Luxury Box
• Decorative Diyas-1pcs
• Assorted Chocolates-10pcs
• Jar of Crunchy Nuts
• Rich Cookies
• Lotus Flower Wall Hanging-2pcs
• Custom Note card`,
  },
  {
    id: "The Excelare(Corporate)",
    name: "The Excelare (Corporate)",
    image: "https://i.ibb.co/KjXRLG5v/The-Excelcare.png",
    price: 1499,
    originalPrice: 1699,
    category: "corporates",
    subCategory: "festival",
    description: `• Top & Bottom Luxury Box
• Brass Diyas-2pcs
• Assorted Chocolates
• Poutpuri
• Besan Laddu & Chocolates-250gms
• Custom Note card`,
  },
  {
    id: "The Festival of Flavours Box(Corporate)",
    name: "The Festival of Flavours Box (Corporate)",
    image: "https://i.ibb.co/jk5g0MQf/The-Festival-of-flovour-Box.png",
    price: 1199,
    originalPrice: 1399,
    category: "corporates",
    subCategory: "festival",
    description: `• Top & Bottom Luxury Box
• Golden Candle Holder
• Assorted Chocolates
• Poutpuri
• cashews with jute pouch
• Almonds with jute pouch
• Custom Note card
• Lotus Flower Wall hanging`,
  },
  {
    id: "The Tyohaar Treat(Corporate)",
    name: "The Tyohaar Treat (Corporate)",
    image: "https://i.ibb.co/twwrChs6/The-Tyohaar-Treet.png",
    price: 1299,
    originalPrice: 1499,
    category: "corporates",
    subCategory: "festival",
    description: `• Top & Bottom Luxury Box
• Golden Candle Holder
• Assorted Chocolates
• Choco Chips-8pcs
• Nuts with jute pouch
• Glass Bottle with jute pouch
• Custom Note card
• Lotus Flower Wall hanging`,
  },

  // CORPORATE - subCategory: funfriday
  {
    id: "Fun Friday Nostalgia Box",
    name: "Fun Friday Nostalgia Box",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763377041/Fun_Friday_Nostalgia_Box_q8nma7.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763377041/Fun_Friday_Nostalgia_Box_q8nma7.webp",
    ],
    price: 599,
    category: "corporates",
    subCategory: "funfriday",
    description: `Turn your Fun Friday into a full-on nostalgia celebration with the Fun Friday Bachpan Blast Box!
Packed with iconic childhood treats such as Magic Pops, Phantom Cigarettes, Coffee Bite, vintage toys, Tinkle Digest, and the classic Brick Game, this box guarantees smiles, giggles, and sweet memories.

Whether you're planning an office Fun Friday activity, surprising your team, or simply treating yourself, this box recreates the charm of those carefree school days.
Bring your team together, spark conversations, and relive the magic of being a kid—all on a Fun Friday!`,
  },
  {
    id: "Fun Friday 90s Nostalgia Box",
    name: "Fun Friday 90s Nostalgia Box",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763377202/Fun_Friday_90s_Nostalgia_Box_pk7toi.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763377202/Fun_Friday_90s_Nostalgia_Box_pk7toi.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763377201/Fun_Friday_90s_Nostalgia_Box1_t6kdeh.avif",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763377200/Fun_Friday_90s_Nostalgia_Box2_sl578s.webp",
    ],
    price: 799,
    category: "corporates",
    subCategory: "funfriday",
    description: `Bring your office Fun Friday to life with the Fun Friday 90s Kid Forever Box, a nostalgia-loaded hamper designed to spark childhood memories and fun conversations.

Inside this memory-packed box, you'll find:
✔ Phantom Sweet Cigarettes
✔ Brick Game (9999 in 1)
✔ Magic Pops
✔ Fatafat
✔ Vintage toys (pencil helicopter, slinky, spinning top, etc.)
✔ Retro treats and candies

Perfect for team engagement, Fun Friday activities, birthdays, or surprising coworkers with something unexpected and playful.
This box turns any Friday into a trip back to school days—where we played Brick Game all day, traded candies, and lived life tension-free!`,
  },

  {
    id: "Fun Friday Time-Travel Box",
    name: "Fun Friday Time-Travel Box",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763377495/Fun_Friday_Time-Travel_Box_uzfeux.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763377495/Fun_Friday_Time-Travel_Box_uzfeux.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763377494/Fun_Friday_Time-Travel_Box2_tt7nzm.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763377493/Fun_Friday_Time-Travel_Box3_epeahm.webp",
    ],
    price: 349,
    category: "corporates",
    subCategory: "funfriday",
    description: `Make Fun Friday truly FUN with the Fun Friday Childhood Throwback Kit, an epic nostalgia-packed hamper celebrating everything we loved as 90s kids.

Inside the box, you’ll find:
✔ Magic Pops
✔ Fatafat
✔ Phantom Sweet Cigarettes
✔ Brick Game (9999 in 1)
✔ Archie & Friends Double Digest
✔ Paper boat toy
✔ Classic slinky spring
✔ Retro candies & mini toys

This kit is perfect for office Fun Friday celebrations, creativity breaks, team bonding, or gifting coworkers a joyful walk down memory lane.
Let your team relive those carefree school days—where Magic Pops cracked in the mouth, Brick Game was life, and Archie Comics ruled!`,
  },

  {
    id: "Fun Friday Nostalgia Reloaded Hamper",
    name: "Fun Friday Nostalgia Reloaded Hamper",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763377834/Fun_Friday_Nostalgia_Reloaded_Hamper_wsroaw.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763377834/Fun_Friday_Nostalgia_Reloaded_Hamper_wsroaw.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763377833/Fun_Friday_Nostalgia_Reloaded_Hamper1_emu1u9.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763377832/Fun_Friday_Nostalgia_Reloaded_Hamper2_ljr0e7.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763377831/Fun_Friday_Nostalgia_Reloaded_Hamper3_fral6t.webp",
    ],
    price: 549,
    category: "corporates",
    subCategory: "funfriday",
    description: `Turn your Fun Friday into a full-on nostalgia festival with the Fun Friday Back-to-Bachpan Box!
Curated with the most iconic 90s childhood treasures, this box brings back memories of school lunch breaks, neighborhood competitions, and simple joys.

Inside the box, you’ll find:
✔ Goti Master marbles – for the OG street champions
✔ Lucky Spinner game – test your luck like old times
✔ Water-ring mobile game – the legendary arcade in your pocket
✔ Phantom Sweet Cigarettes – the classic candy we all proudly “smoked”
✔ Magic Pops – crackling popping candy
✔ Fatafat – the timeless black digestive
✔ Lollipops, toffees & little surprise toys
✔ Retro packaging that screams 90s Kid Forever!

This kit adds energy, laughter, conversations, and cheerful chaos to any Fun Friday celebration.
Perfect for:

Office teams

Startup culture vibes

Employee engagement

Throwback parties

Gifting coworkers or friends

Bring back the fun, the madness, and the magic—because every Friday deserves a little Bachpan! 🎉`,
  },

  {
    id: "Superhero Water Ring Challenge",
    name: "Superhero Water Ring Challenge",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763378209/Superhero_Water_Ring_Challenge_ckzmb6.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763378209/Superhero_Water_Ring_Challenge_ckzmb6.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763378208/Superhero_Water_Ring_Challenge1_u1biem.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763378207/Superhero_Water_Ring_Challenge2_dqewci.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763378205/Superhero_Water_Ring_Challenge3_goqksv.jpg",
    ],
    price: 249,
    category: "corporates",
    subCategory: "funfriday",
    description: `Turn your Fun Friday into a full-on nostalgia festival with the Fun Friday Back-to-Bachpan Box!
Curated with the moExperience nostalgic fun with our Avengers Water Ring Game, a perfect blend of retro gaming and superhero excitement.
This handheld water toy features vibrant Marvel character prints including Iron Man, Captain America, Hulk, Black Widow, and others.
Press the soft push button to launch the rings and challenge yourself to land them on the pegs—simple, engaging, and incredibly satisfying!

✔ Avengers-themed graphics
✔ Lightweight, portable & safe for kids
✔ Stress-relief toy for adults
✔ Ideal for birthday return gifts, party favors & Fun Friday hampers
✔ Size: approx. 13.5 cm

A perfect pick for 90s nostalgia boxes, superhero gift hampers, and everyday fun!`,
  },
  {
    id: "Classic Handheld Brick Game",
    name: "Classic Handheld Brick Game",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763378482/Classic_Handheld_Brick_Game_dfk8ae.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763378482/Classic_Handheld_Brick_Game_dfk8ae.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763378480/Classic_Handheld_Brick_Game2_c5vjru.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763378479/Classic_Handheld_Brick_Game3_gr0i2j.jpg",
    ],
    price: 1100,
    category: "corporates",
    subCategory: "funfriday",
    description: `Step back in time with the legendary Vintage 90s Brick Game (9999 in 1)—a must-have for every 90s kid!
This handheld console features a bright display, responsive buttons, and multiple retro games including Brick, Tank, Racing, Snake, and more.
Whether you’re building a nostalgia gift box or gifting someone a piece of their childhood, this console brings instant joy.

✔ 9999 in 1 retro brick game
✔ Lightweight & travel-friendly
✔ Bright sound options and reset controls
✔ Classic 90s design in vibrant colors
✔ Perfect for nostalgia kits, Fun Friday hampers, birthday gifts & office games

This is not just a toy—it's a memory revived!`,
  },

  // CORPORATE - subCategory: premium
  {
    id: "Nature’s Harmony Gift Set",
    name: "Nature’s Harmony Gift Set",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763380685/Nature_s_Harmony_Gift_Set_eofr5w.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763380685/Nature_s_Harmony_Gift_Set_eofr5w.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763380685/Nature_s_Harmony_Gift_Set2_ezdy0f.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763380684/Nature_s_Harmony_Gift_Set4_urqplv.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763380684/Nature_s_Harmony_Gift_Set3_iyp3ic.webp",
    ],
    price: 3999,
    category: "corporates",
    subCategory: "premium",
    description: `Celebrate meaningful moments with the Blossom Delight Luxury Gift Box, a beautifully curated hamper designed to spread joy, positivity, and love.
This premium gift set includes:

✔ Floral Ceramic Mug – vibrant, elegant, and perfect for everyday use
✔ Designer Wiro Notepad – with scenic artwork for creative thoughts
✔ Inspirational Desk Art Frame – uplifting visual for any workspace
✔ Premium Dry Fruit Tin – beautifully designed lotus tin
✔ Hand-poured Scented Candle – calming fragrance for relaxation
✔ Chocolate Bar – delicious indulgence to sweeten the moment
✔ Round Woven Coaster – earthy and aesthetic
✔ Greeting Card & Wax-sealed Envelope – to share your heartfelt message

Packed in a pastel pink gift box with a satin ribbon, this hamper is a perfect blend of beauty and utility. Ideal for birthdays, 
thank-you gifts, festive gifting, clients, teachers, employees, or anyone who deserves something special.`,
  },
  {
    id: "The Ultimate Me-Time Gift Box",
    name: "The Ultimate Me-Time Gift Box",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763380981/The_Ultimate_Me-Time_Gift_Box_cnui0e.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763380981/The_Ultimate_Me-Time_Gift_Box_cnui0e.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763380979/The_Ultimate_Me-Time_Gift_Box2_jenu5u.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763380978/The_Ultimate_Me-Time_Gift_Box3_dihzq1.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763380976/The_Ultimate_Me-Time_Gift_Box4_d85cd9.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763380975/The_Ultimate_Me-Time_Gift_Box5_bdm6uq.webp",
    ],
    price: 1799,
    category: "corporates",
    subCategory: "premium",
    description: `Indulge in the ultimate self-care experience with our Relax & Recharge Self-Care Gift Hamper, designed to calm the mind, soothe the senses, and refresh the skin.
This luxurious box includes:

✔ Pilgrim Squalane Foaming Face Wash – With Kiwi & Vitamin B5 to cleanse, nourish, and hydrate
✔ The Body Shop Strawberry Shower Gel (250ml) – Soap-free, lather-rich & infused with cold-pressed strawberry seed oil
✔ Bath Lily Loofah – Enhances lather & gently exfoliates
✔ Hand-poured Soy Candle – Sweet vanilla fragrance for a peaceful ambience
✔ Ferrero Rocher Chocolates – A touch of indulgence
✔ Relax & Recharge Art Frame – Inspiring décor for daily motivation
✔ Pretty Pink Gift Box – With satin ribbon and shredded fillings`,
  },
  {
    id: "Amore Floral Gift Set",
    name: "Amore Floral Gift Set",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763381320/Amore_Floral_Gift_Set_msxsi8.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763381320/Amore_Floral_Gift_Set_msxsi8.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763381318/Amore_Floral_Gift_Set1_aqrrji.webp",
      "hhttps://res.cloudinary.com/dzh2zxbvw/image/upload/v1763381317/Amore_Floral_Gift_Set2_ivpduh.jpg",
    ],
    price: 1299,
    category: "corporates",
    subCategory: "premium",
    description: `Celebrate your loved ones with the Bloom Beauty Luxury Gift Hamper, a charming collection designed to delight anyone who appreciates elegance and thoughtful gifting.

This premium box includes:

✔ Ferrero Rocher Chocolates – a touch of golden indulgence
✔ Floral Multipurpose Pouch – chic design with a smooth golden zipper
✔ Designer Floral Notebook – hardbound, aesthetic, and perfect for journaling
✔ Floral Ceramic Mug – vibrant and artistic, ideal for daily use
✔ Soy Wax Candle – gentle fragrance to calm and refresh
✔ Floral Scrunchie – soft, comfy, and stylish
✔ Beautiful Gift Box Packaging – pastel themed and ribbon wrapped

Perfect for birthdays, corporate gifting, bridesmaids hampers, teacher appreciation, farewells, and festive gifting.
It’s the ideal mix of beauty, sweetness, and practicality.`,
  },
  {
    id: "The Gourmet Delight Box",
    name: "The Gourmet Delight Box",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763381609/The_Gourmet_Delight_Box_flzl3p.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763381609/The_Gourmet_Delight_Box_flzl3p.png",
    ],
    price: 1399,
    category: "corporates",
    subCategory: "premium",
    description: `Celebrate good taste with our Luxury Snack & Spread Gourmet Hamper, curated for food lovers who appreciate premium quality and unique flavours.

This box includes a thoughtful mix of:

✔ Epiphany Cranberry Almond Crisps – baked, protein-rich, and fibre-loaded
✔ Bean to Berries Chocolate-Coated Cranberries – dark chocolate goodness
✔ Eat Better Co. Snack Mix – wholesome, crunchy, and preservative-free
✔ Ragi & Sesame Crackers – nutritious snacking with a delicious twist
✔ Snackible Coffee Cookies – aromatic, crisp, and irresistibly tasty
✔ Oh Cha Spiced Vanilla Tea – comforting artisanal brew
✔ The Gourmet Jar Red Pepper Pesto – rich, handcrafted flavour bomb

Beautifully packed in a premium floral box, this hamper makes an exceptional choice for corporate gifting, birthdays, housewarmings, 
festive celebrations, thank-you hampers, and wellness-focused gifts.`,
  },

  {
    id: "The Luxe Floral Gourmet Hamper",
    name: "The Luxe Floral Gourmet Hamper",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763382046/The_Luxe_Floral_Gourmet_Hamper_zcwyme.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763382046/The_Luxe_Floral_Gourmet_Hamper_zcwyme.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763382047/The_Luxe_Floral_Gourmet_Hamper1_q3afnl.png",
    ],
    price: 1599,
    category: "corporates",
    subCategory: "premium",
    description: `Indulge the senses with the Blush Blossom Indulgence Box—a luxurious curation of gourmet delicacies and artisanal treats. Designed in a premium floral box with golden satin detailing, this hamper makes a refined and memorable gift for any celebration.

Inside the box, you’ll find:

✔ Premium Herbal Tea Tin – flavourful and soothing
✔ Artisanal Cookies – perfectly baked, rich, and buttery
✔ Gourmet Chocolate Bar – crafted with exotic flavours
✔ Luxury Honey Jar / Spread – indulgent and natural
✔ Basil Olive Oil Crackers – savoury and crisp
✔ Pistachio Roca / Brittle – a decadent sweet crunch
✔ Mini Snack Jar – delightful munchies to enjoy anytime
✔ Designer Keepsake Tin – crafted for reuse

Whether you’re sending festive wishes, celebrating a milestone, or surprising someone special, this hamper delivers premium taste wrapped in elegance.

Perfect for Diwali gifting, client hampers, weddings, birthdays, anniversaries, or premium corporate orders.`,
  },

  // === CORPORATE ITEMS END ===

  // === OCCASIONAL ITEMS (used by OccasionalGifts page) START ===
  // These product objects were added for the Occasional Gifts page and are grouped
  // here so you can find and edit them easily. Each has `category: 'occasional-gifts'`
  // and a `subCategory` value used by the occasional page strip.

  // OCCASIONAL - subCategory: wedding
  {
    id: "Open Tray Square Gift Hamper",
    name: "Open Tray Square Gift Hamper (Room Hamper)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951306/OpenTraySquareGiftHamper_h2yb2d.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951306/OpenTraySquareGiftHamper_h2yb2d.webp",
    ],
    price: 800,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Open Tray Square Gift Hamper includes:

Lays
Kurkure
Real Juice
Coca Cola Can
Britannia Cake
Doritos
Cadbury Cookies
Paper Boat Aamras
Metal Basket
Floral Decor`,
  },
  {
    id: "Stripes Jute Bag Room Hamper",
    name: "Stripes Jute Bag Room Hamper (Room Hamper)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951305/Eco-friendly_Rakhi_delight_bag_for_sister_ta0lou.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951305/Eco-friendly_Rakhi_delight_bag_for_sister_ta0lou.webp",
    ],
    price: 630,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Choco Parlour Room Hamper includes :

Lays
Kurkure
Real Juice
Coca Cola Can
Britannia Cake
Doritos
Cadbury Cookies
Paper Boat Aamras
Stripes Jute Bag`,
  },
  {
    id: "Wedding Serenity Hamper",
    name: "Wedding Serenity Hamper (Room Hamper)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951304/IMG_9424_1_srsk9u.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951304/IMG_9424_1_srsk9u.webp",
    ],
    price: 850,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Wedding Room Hamper includes:

Lays Chips
Kurkure
Real Juice
Coca Cola Can
Cake 
Doritos
Cadbury Cookies
Bhujia
Metal Jute Basket - 12 x 6 x 6 inches
Net decoration
Please mention any name personalisation or customisation requirement while checking out. For any other queries drop us a message on Whatsapp, link can be found on the bottom right corner.

Gifting Recommendation:

Immerse your guests in an atmosphere of opulence with our hotel-themed wedding room hampers. From sumptuous bed linens to carefully curated amenities, each item is selected to enhance the comfort and style of their stay.

Why is Wedding Room Hamper the best wedding gift for your guests?

Transform your wedding venue into a haven of luxury and warmth for your guests with our Wedding Room Hampers. Elevate their experience, make them feel truly cherished, and set the stage for unforgettable moments during your joyous celebration. Because every guest deserves to be a part of a love story as beautiful as yours.`,
  },
  {
    id: "Snack Time Bliss Basket hamper",
    name: "Snack Time Bliss Basket hamper (Room Hamper)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951302/SnackTimeBlissBaskethamper_oamw7t.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951302/SnackTimeBlissBaskethamper_oamw7t.webp",
    ],
    price: 780,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Wedding Room Hamper includes:

Lays
Kurkure
Real Juice
Coca Cola Can
Britannia Cake
Doritos
Cadbury Cookies
Paper Boat Aamras
Organza Festive Tray`,
  },
  {
    id: "Gourmet Room Gift Hamper",
    name: "Gourmet Room Gift Hamper (Room Hamper)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951301/GourmetRoomGiftHamper_sb42gk.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951301/GourmetRoomGiftHamper_sb42gk.webp",
    ],
    price: 830,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `A delightful blend of treats, perfect for any occasion! This thoughtfully curated hamper comes packed with everyone’s favorite snacks and beverages, making it an instant crowd-pleaser.

Inside the Hamper:
🍟 Lays Chips
🔥 Kurkure
🧃 Real Fruit Juice
🥤 Coca-Cola Can
🍰 Britannia Cake
🌮 Doritos
🍪 Cadbury Cookies
🥭 Paper Boat Aamras

Beautifully presented in a premium transparent gift bag, this hamper is the perfect balance of taste, style, and joy — ideal for gifting or indulgence!`,
  },
  {
    id: "Snack & Sip Delight Box",
    name: "Snack & Sip Delight Box",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951300/SnackSensationsRoomGiftHampers_jdgh5j.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951300/SnackSensationsRoomGiftHampers_jdgh5j.webp",
    ],
    price: 720,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `delightful hamper curated to bring joy, flavor, and festivity to any room! Bursting with everyone’s favorite snacks and beautifully decorated, this hamper is perfect for welcoming guests, gifting, or celebrating special occasions.

✨ What’s Inside:
🍟 Lays Chips
🔥 Kurkure
🧃 Real Juice
🥤 Coca-Cola Can
🍰 Britannia Cake
🌮 Doritos
🍪 Cadbury Cookies
🥭 Paper Boat Aamras

Beautifully arranged on a Festive Tray, adorned with elegant Net Wrapping and Floral Décor, the Snack Sensations Room Gift Hamper is a perfect blend of taste, presentation, and celebration.`,
  },
  {
    id: "The Bloom & Bliss Hamper",
    name: "The Bloom & Bliss Hamper (Room Hamper)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951298/SnackDelighthamper_lkaid2.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951298/SnackDelighthamper_lkaid2.webp",
    ],
    price: 700,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `A perfect treat for every occasion, the Snack Delight Hamper is crafted to bring smiles, flavor, and freshness to your celebrations. Thoughtfully curated with everyone’s favorite snacks and beverages, it’s ideal for welcoming guests, gifting, or adding a touch of joy to any moment.

✨ What’s Inside:
🍟 Lays Chips
🔥 Kurkure
🧃 Real Juice
🥤 Coca-Cola Can
🍰 Britannia Cake
🌮 Doritos
🍪 Cadbury Cookies
🥭 Paper Boat Aamras

Packed in a beautiful printed jute bag, this hamper blends taste with style — a perfect combination of delicious indulgence and elegant presentation.`,
  },
  {
    id: "The Luxe Snack Affair",
    name: "The Luxe Snack Affair (Room Hamper)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951297/SensationalGourmetSnacksRoomGiftHamper_hlkcdn.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951297/SensationalGourmetSnacksRoomGiftHamper_hlkcdn.webp",
    ],
    price: 820,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `A tastefully curated hamper designed to add joy, flavor, and sophistication to every occasion! The Sensational Gourmet Snacks Hamper is filled with everyone’s favorite treats, making it an ideal choice for festive gifting, hotel welcomes, or special celebrations.

✨ What’s Inside:
🍟 Lays Chips
🔥 Kurkure
🧃 Real Juice
🥤 Coca-Cola Can
🍰 Britannia Cake
🌮 Doritos
🍪 Cadbury Cookies
🥭 Paper Boat Aamras

Beautifully presented in an elegant Metal Basket adorned with Floral Décor, this hamper perfectly blends taste, luxury, and charm — creating a delightful gifting experience that leaves a lasting impression.`,
  },
  {
    id: "The Signature Welcome Basket",
    name: "The Signature Welcome Basket (Room Hamper)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951296/In-RoomSnackHamper_h3z7a8.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951296/In-RoomSnackHamper_h3z7a8.webp",
    ],
    price: 420,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `A warm and delightful gesture for any occasion, the Gourmet Welcome Snack Hamper is thoughtfully curated to bring comfort, flavor, and festivity to every guest experience. Perfect for hotel room welcomes, gifting, or corporate hospitality, it’s a tasteful blend of indulgence and charm.

✨ What’s Inside:
🍟 Lays Chips
🔥 Kurkure
🧃 Frooti
🍰 Britannia Cake
🍪 Cadbury Cookies
🍫 Munch
🌀 Orbit

Elegantly packed in a Festive Paper Bag with Ribbon Decoration, this hamper combines simplicity and sophistication — making it the perfect treat to refresh, surprise, and delight.`,
  },

  {
    id: "Elegant Dome Gift Collect",
    name: "Elegant Dome Gift Collect (Room Hamper)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951295/DomeRoomGiftHamper_btlnir.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951295/DomeRoomGiftHamper_btlnir.webp",
    ],
    price: 749,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `A perfect blend of taste, freshness, and thoughtful hosting, the Dome Room Gift Hamper is designed to make every welcome feel special. Ideal for hotel room greetings, guest hospitality, celebrations, or thoughtful gifting, it brings together comfort, convenience, and delightful snacking in one charming package.

✨ What’s Inside:
🍟 Lays
🔥 Kurkure
🧃 Real Juice
🥤 Coca-Cola Can
🍰 Britannia Cake
🌮 Doritos
🍪 Cadbury Cookies
🧃 Paper Boat Aamras
🧺 Premium Big Basket

Beautifully arranged in a Premium Dome-Style Basket, this hamper blends elegance with everyday indulgence — making it the perfect surprise to refresh, delight, and create a memorable experience for any recipient.`,
  },
  {
    id: "Royal Comfort Room Gift Hamper",
    name: "Royal Comfort Room Gift Hamper (Room Hamper)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951295/ClassicEleganceRoomGiftHamper_etz0um.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951295/ClassicEleganceRoomGiftHamper_etz0um.webp",
    ],
    price: 811,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `A refined blend of taste, style, and warm hospitality, the Classic Elegance Room Gift Hamper is curated to elevate every guest experience. Perfect for hotel welcomes, celebrations, or thoughtful gifting, this hamper brings together premium snacks and aesthetic presentation for a truly memorable touch.

✨ What’s Inside:
🍟 Lays
🔥 Kurkure
🧃 Real Juice
🥤 Coca-Cola Can
🍰 Britannia Cake
🌮 Doritos
🍪 Cadbury Cookies
🧃 Paper Boat Aamras
🧺 Metal Basket
🌸 Floral Décor

Beautifully presented in a Metal Basket adorned with floral decor, this hamper offers the perfect mix of indulgence and elegance — making every welcome feel special, warm, and unforgettable.`,
  },
  {
    id: "Heritage Room Gift Hamper",
    name: "Heritage Room Gift Hamper (Room Hamper)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951294/AztecRoomGiftHamper_vudwga.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951294/AztecRoomGiftHamper_vudwga.webp",
    ],
    price: 699,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `The Aztec Wedding Room Gift Hamper is a stunning blend of celebration, warmth, and thoughtful hospitality—perfect for welcoming wedding guests or adding a touch of festivity to any special occasion. Designed with vibrant aesthetics and curated with premium treats, this hamper delivers joy in every detail.

✨ What’s Inside:
🍟 Lays
🔥 Kurkure
🧃 Real Juice
🥤 Coca-Cola Can
🍰 Britannia Cake
🌮 Doritos
🍪 Cadbury Cookies
🧃 Paper Boat Aamras
🎁 Festive Tray
✨ Net Decoration
🌸 Floral Décor

Expertly arranged on a Festive Tray with elegant Net and Floral Decoration, this hamper blends modern indulgence with wedding charm—making every guest feel welcomed, appreciated, and truly celebrated.`,
  },

  {
    id: "Guest Delight Room Hamper",
    name: "Guest Delight Room Hamper (Room Hamper)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951294/IMG_9399_1_in0i46.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951294/IMG_9399_1_in0i46.webp",
    ],
    price: 649,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Show your appreciation to your guests with thoughtful, personalized tokens of gratitude. Our Wedding Room Hampers are crafted to make every guest feel welcomed, valued, and truly part of your celebration. You can also add custom welcome notes, itinerary details, or keepsakes to make their stay even more memorable.

✨ What’s Inside:
🍟 Lays Chips
🔥 Kurkure
🧃 Real Juice
🥤 Coca-Cola Can
🍰 Cake
🌮 Doritos
🍪 Cadbury Cookies
🥨 Bhujia
👜 Transparent Jute Bag (11 × 6 × 6 inches)

Please mention any name personalization or customization requirements during checkout. For any additional queries, feel free to message us on WhatsApp — the link is available on the bottom right corner.

Gifting Recommendation

Immerse your guests in an atmosphere of warmth and comfort with our beautifully curated wedding room hampers. Thoughtfully selected snacks, elegant packaging, and personalized touches ensure your guests enjoy a welcoming experience that feels luxurious and heartfelt.

Why the Wedding Room Hamper Is the Perfect Gift for Your Guests

Transform your wedding venue into a haven of joy and hospitality. Our Wedding Room Hampers elevate your guests’ experience, making them feel cherished from the moment they arrive. These delightful treats and thoughtful inclusions add a personal touch, creating unforgettable moments throughout your celebration.
Because every guest deserves to be part of a love story as beautiful as yours.`,
  },
  {
    id: "Haldi,Mehendi,Teej favour ",
    name: "Haldi / Mehendi / Teej Hampers",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763104826/96F25A36-FE58-44E6-BD5C-58E3CC771367_namxl0.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763104826/96F25A36-FE58-44E6-BD5C-58E3CC771367_namxl0.webp",
    ],
    price: 199,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `A beautifully crafted floral zari potli with an ornate pearl handle forms the centerpiece of this charming gifting set. Paired with a stunning kundan pearl bracelet and a matching kundan ring, it brings together tradition and elegance in perfect harmony.

To complete the ensemble, a fragrant gajra adds a touch of festive grace, while a saunf / mehendi cone provides the classic traditional element, making this set ideal for weddings, mehendi ceremonies, festive gifting, or bridal favors.
`,
  },
  {
    id: "Haldi & Mehandi Potli ",
    name: "HALDI & MEHANDI Potli",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763104824/WhatsAppImage2025-02-02at11.31.45PM_mcwvad.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763104824/WhatsAppImage2025-02-02at11.31.45PM_mcwvad.jpg",
    ],
    price: 120,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `This exquisite gifting ensemble features a luxurious Organza Banarasi Potli, blending traditional craftsmanship with modern elegance. Complementing the potli is a charming Pearl Bandhej Bracelet and an Adjustable Bandhej Ring, both designed to add a festive and stylish touch to any look.

A delicate Gajra Scrunchie brings in floral grace, making it perfect for weddings, mehendi functions, festive favors, or bridal gifting. Available in assorted colors, this set offers the perfect balance of beauty, tradition, and thoughtful detailing.
`,
  },
  {
    id: "Haldi Hamper ",
    name: "Haldi Hamper",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763104824/WhatsAppImage2025-02-22at11.16.39PM_prpjfr.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763104824/WhatsAppImage2025-02-22at11.16.39PM_prpjfr.jpg",
    ],
    price: 99,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `A vibrant Gota Potli in mix colors sets the tone for this beautifully curated festive set. Paired with a pair of gota beads bangles in coordinated mix colors, it adds a charming traditional touch perfect for weddings, haldi, mehendi, or festive celebrations.

The ensemble also includes a delicate floral maangtika and a floral adjustable ring, completing the look with a graceful blend of elegance and tradition. A personalised card adds a heartfelt touch, making this set an ideal choice for gifting or return favors that leave a lasting impression. 
`,
  },
  {
    id: "Haldi & Mehandi Hamper ",
    name: "Haldi & Mehandi Hamper",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763106087/AEE11B1C-5EEA-4CAD-B8AF-FE69CE59BE24_qycmfv.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763106087/AEE11B1C-5EEA-4CAD-B8AF-FE69CE59BE24_qycmfv.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763106087/6748B2F0-2570-4400-AA66-1143A0C24C83_ifeygi.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763106087/52B68C93-EB76-488E-9ED5-4396E2DEA7E9_hpucp7.webp",
    ],
    price: 179,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `This charming gifting set includes a beautifully crafted Potli, perfect for festive occasions and celebrations. Paired with a Bangle Pair in mix colours, it adds a vibrant traditional touch to any outfit.

A colourful Bindi Sheet is included to enhance the look with classic elegance, along with a Mehendi Cone to complete the festive essentials. Thoughtful, simple, and beautifully curated — ideal for mehendi favors, wedding giveaways, or festive gifting.
`,
  },
  {
    id: "Handmade Earings Set ",
    name: "Handmade Earings Set",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763107051/CFE2353_D_ifpbol.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763107051/CFE2353_D_ifpbol.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763107051/CFE2357_D_x2blwn.webp",
    ],
    price: 479,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Presenting our exquisite “Dulhan ki Behen” Beaded Earrings, a signature piece from our handcrafted jewellery collection. More than just accessories, these earrings capture the charm of Indian tradition with a playful, character-inspired theme—perfect for Haldi and Mehndi celebrations.

Crafted with precision and artistry, the vibrant pink beads sway beautifully with every movement, adding a touch of festive sparkle to your look. Designed for the modern woman with a spirited heart, they feature a secure push-back closure that ensures comfort throughout long celebrations. Their lightweight build lets you enjoy every moment—from dancing to posing—without any discomfort.

Ideal for the bright, joyful vibes of spring and summer weddings, these earrings don���t just complement your ensemble—they complete it. Whether you’re a bridesmaid, a sister of the bride, or simply love festive elegance, the “Dulhan ki Behen” Beaded Earrings promise to make your entrance unforgettable.

A must-have for Haldi, Mehndi, and all wedding festivities, this pair is the perfect addition to any jewellery collection.
`,
  },
  {
    id: "3 jar dryfruit hamper",
    name: "3 Jar Dryfruit Hamper (Return Gifts)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763110690/IMG-20250304-WA0005_cr90pz.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763110690/IMG-20250304-WA0005_cr90pz.webp",
    ],
    price: 899,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Cashew: 200g
Almond: 200g
Kishmish: 200g

Elegantly packed in a premium MDF box with 3 airtight jars, this Wedding Return Gift Box brings together taste, health, and sophistication—perfect for thanking your guests with something truly meaningful.

Each jar is filled with high-quality Cashews, Almonds, and Kishmish, offering a thoughtful blend of wellness and indulgence. The airtight jars maintain freshness and hygiene, while the sleek MDF box adds a luxurious touch that enhances the overall presentation.

Ideal for weddings, engagements, and all festive ceremonies, these 3-jar dry fruit boxes are a symbol of warmth, gratitude, and refined hospitality. Compact, stylish, and easy to carry, they make the perfect take-home keepsake that guests truly appreciate.

With the rising trend of healthy and elegant gifting, these wedding return gift boxes have become a preferred choice across India. The box can also be personalized with the couple’s names, wedding date, or a heartfelt message, making every gift feel special and memorable.

A smart, elegant, and timeless wedding return gift—perfectly blending flavor, freshness, and heartfelt sentiment.
`,
  },
  {
    id: "Vibrant Haldi Rasam Gift Set",
    name: "Vibrant Haldi Rasam Gift Set",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763111033/47DFCC17-D0F6-4D37-939E-69FC9A463411_msnyio.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763111033/47DFCC17-D0F6-4D37-939E-69FC9A463411_msnyio.webp",
    ],
    price: 249,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `This vibrant and culturally inspired hamper celebrates the rich charm of Rajasthan, making it a perfect pick for Haldi, Mehendi, wedding favors, or festive gifting.

✨ Includes:

👜 Rajasthani Theme Bag
(Traditional prints, design & color may vary — each piece carries its own unique charm.)

🧣 Bandhej Dupatta
(Mix colors available, crafted in classic tie-dye patterns for a bright and festive touch.)

🌼 Gota Beads Bangles
(Mix color pairs featuring intricate gota detailing, adding elegance and tradition to the ensemble.)

🔴 Colored Bindi Sheet
(Multiple sizes and colors to complete the traditional festive look.)

Thoughtfully curated with vibrant Rajasthani aesthetics, this hamper is perfect for adding joy, culture, and color to any celebration.
`,
  },
  {
    id: "Baraat Swagat Broach",
    name: "Baraat Swagat Broach (Pack of 10)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763112596/WhatsAppImage2024-12-03at21.39.12_1_fe7ezf.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763112596/WhatsAppImage2024-12-03at21.39.12_1_fe7ezf.webp",
    ],
    price: 579,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Welcome your guests / baraatis with this exquisite kundan broaches and make them feel special. 

comes in a pack of 10
`,
  },
  {
    id: "Shri Krishna Broach",
    name: "Shri Krishna Broach (Pack of 10)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763112595/WhatsAppImage2025-08-04at21.47.03_2790ab84-6016-4df5-bef4-ad7f6d25bc8f_mx2cav.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763112595/WhatsAppImage2025-08-04at21.47.03_2790ab84-6016-4df5-bef4-ad7f6d25bc8f_mx2cav.webp",
    ],
    price: 679,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Welcome your guests / baraatis with this exquisite kundan broaches and make them feel special. 

comes in a pack of 10
`,
  },
  {
    id: "Evil Eye Broach",
    name: "Evil Eye Broach (Pack of 10)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763112594/WhatsAppImage2024-12-03at21.39.03_1_dync88.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763112594/WhatsAppImage2024-12-03at21.39.03_1_dync88.webp",
    ],
    price: 679,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Welcome your guests / baraatis with this exquisite kundan broaches and make them feel special. 

comes in a pack of 10
`,
  },
  {
    id: "Swagath Mala",
    name: "Swagath Mala (Pack of 10)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763112594/WhatsAppImage2024-12-03at21.38.45_2_wljebp.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763112594/WhatsAppImage2024-12-03at21.38.45_2_wljebp.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763112594/WhatsApp_Image_2024-12-03_at_21.39.02_1_b7o0lt.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763112594/WhatsApp_Image_2024-12-03_at_21.38.46_2_cipr9s.webp",
    ],
    price: 879,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `When your guests are special , there should be something more special to welcoe them. Now Welcome your guests with this uniquely designed swagat mala and make them feel special.

Comes in a pack of 10
`,
  },
  // {
  //     id: "Swagath Mala with Shrinath ji pendandt",
  //     name: "Swagath Mala with Shrinath ji pendandt(Pack of 10)",
  //     image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763113908/swagat-mala-or-guest-welcome-garland-858_qgobu5.jpg",
  //     images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763113908/swagat-mala-or-guest-welcome-garland-858_qgobu5.jpg",
  //       "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763113284/51tgEWnYG2L_teagys.jpg"
  //     ],
  //     price: 759,
  //     category: "occasional-gifts",
  //     subCategory: "wedding",
  //     description: `Bring a touch of divine elegance to your celebrations with this beautifully crafted Srinath Ji Pendant Pearl Mala, designed especially for Indian wedding rituals and barati welcomes. Featuring classic pearl-style beads and intricate golden detailing, this mala adds charm, tradition, and sophistication to any ceremony.

  // ✨ Key Features:

  // • Traditional & Elegant Design
  // A stunning multi-strand mala adorned with premium synthetic pearls, highlighted with golden accents and delicate black enamel work for a regal finish.

  // • Ceremonial Perfect
  // Ideal for Indian weddings, especially as a graceful welcome accessory for the barati (groom’s procession).

  // • Premium Craftsmanship
  // Made with high-quality pearls and metallic embellishments to ensure durability, shine, and a luxurious appearance.

  // • Comfortable Length
  // Approximately 45 cm in length, offering a comfortable and versatile fit for guests of all ages.

  // • Divine Pendant
  // Features a beautifully detailed Srinath Ji idol pendant, adding spiritual charm and traditional richness to the mala.

  // • Color Variants
  // Available in White / Off-White, complementing all ethnic outfits and wedding themes.

  // This mala is the perfect blend of cultural significance and elegant craftsmanship—an ideal choice for wedding events, festive occasions, and traditional ceremonies.
  // `},
  {
    id: "Swagath Mala with kundan stone",
    name: "Swagath Mala with kundan stone (Pack of 10)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763113241/IMG-20231210-WA0549_bzvvya.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763113241/IMG-20231210-WA0549_bzvvya.webp",
    ],
    price: 900,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `The Baraat Swagat Mala with Kundan Stones is a beautifully crafted welcome accessory, designed with lustrous pearls and premium Kundan embellishments. Perfect for traditional Indian weddings, this mala represents warmth, respect, and the heartfelt bond between the bride’s and groom’s families.

As the baraat arrives at the wedding venue, these malas are ceremoniously placed on the groom’s side guests, symbolizing honor and joy. The blend of pearls and Kundan stones adds a regal touch, making each moment feel grand and memorable.

Ideal for those looking for wedding welcome gifts, barati swagat malas, or traditional gifting options, this elegant mala enhances the cultural charm of your celebration while creating a lasting impression on your guests.
`,
  },
  {
    id: "Royal Kundan Satka Charm Keychains",
    name: "Royal Kundan Satka Charm Keychains",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763116625/65-rs-per-pc-on-buying-50-pcs-satka-pins-lamansh-designer-kundan-satka-s-keychains-for-ladies-haldi-mehendi-sangeet-favors-for-bridesmaids-in-weddings-31352644567101_1080x_kj0par.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763116625/65-rs-per-pc-on-buying-50-pcs-satka-pins-lamansh-designer-kundan-satka-s-keychains-for-ladies-haldi-mehendi-sangeet-favors-for-bridesmaids-in-weddings-31352644567101_1080x_kj0par.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763116625/65-rs-per-pc-on-buying-50-pcs-satka-pins-lamansh-designer-kundan-satka-s-keychains-for-ladies-haldi-mehendi-sangeet-favors-for-bridesmaids-in-weddings-31389537959997_1800x1800_gtihbd.webp",
    ],
    price: 1400,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Elevate your traditional look with this classic antique designer tassel side Kamarband Chabi Challa Satka, thoughtfully crafted for women, brides, teens, and girls. Lightweight yet stunning, this waist key chain blends heritage charm with contemporary elegance.

✨ Symbolic & Traditional

In Indian culture, gifting keys to the new bride by her mother-in-law signifies trust, responsibility, and the beginning of a new life. This Chabi Challa is designed to honor that tradition beautifully.

✨ Stylish & Functional

Perfect as a waist accessory, it enhances your outfit while serving as a functional key holder. Its intricate antique finish, premium plating, and soft tassel detailing give it the appeal of fine jewelry—durable, skin-friendly, and long-lasting.

✨ Perfect for Special Occasions

Ideal for:
• Weddings & Bridal Ceremonies
• Haldi, Mehendi, Sangeet
• Festivals like Diwali & Rakshabandhan
• Engagements, Receptions & Family Functions
• Birthdays, Anniversaries & Gifting Occasions

A truly unique and graceful gift choice for brides, mothers, wives, daughters, sisters, and girlfriends.

✨ Versatile Wear

Pairs beautifully with:
• Lehengas
• Sarees
• Ethnic Dresses
• All Traditional Outfits
`,
  },
  {
    id: "Handmade Earings Set(Groom)",
    name: "Handmade Earings Set(Groom Side)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763117199/CFE2413_D_d5qd3n.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763117199/CFE2413_D_d5qd3n.webp",
    ],
    price: 300,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Let your style speak louder than words with our “Dulhe Ki Behen” Green Drop Earrings, designed for women and girls who love to stand out. A perfect blend of glamour and tradition, these earrings are ideal for engagements, weddings, haldi, and mehndi celebrations.

Crafted with meticulous detail, the stunning green and gold combination adds a royal charm to your festive look. Lightweight yet impactful, these drop-and-dangler earrings are made for those who seek something extraordinary. Their secure pierced-back closure ensures all-day comfort, so you can dance, celebrate, and shine without worry.

Part of our exclusive wedding fashion series, these earrings enhance your individuality and bring out your festive radiance. Whether you're searching for the perfect Dulhe Ki Behen accessory or a thoughtful gift for someone special, these earrings are a timeless choice.

Seasonless, stylish, and statement-worthy—our Green Dulhe Ki Behen Earrings will make every moment picture-perfect. Get ready to steal the spotlight and let your elegance take center stage.
`,
  },
  {
    id: "Haldi Glow Maangtikka",
    name: "Haldi Glow Maangtikka (Pack of 10)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763117657/IMG_1204-scaled_sj9uxf.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763117657/IMG_1204-scaled_sj9uxf.jpg",
    ],
    price: 300,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Brighten up your pre-wedding celebrations with these stunning yellow floral accessories, handcrafted to add charm and grace to every Haldi and Mehndi ceremony. Designed with delicate artificial roses, buds, and pearl chains, each piece radiates freshness, vibrance, and traditional beauty.

Lightweight, comfortable, and perfect for brides, bridesmaids, and guests, these floral adornments effortlessly enhance any ethnic outfit. Whether used as a maangtikka, bracelet, or hair accessory, they bring the perfect pop of yellow for a joyful, picture-perfect celebration.

Ideal for Haldi, Mehndi, Sangeet, and festive gifting—these floral pieces make every moment feel special and beautifully coordinated.
`,
  },
  {
    id: "Utsav Haldi Mehndi Gift Hamper",
    name: "Utsav Haldi Mehndi Gift Hamper(Pack of 5)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763118537/IMG_1152-scaled_tv1xuo.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763118537/IMG_1152-scaled_tv1xuo.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763118516/IMG_1153-scaled_lalbt8.png ",
    ],
    price: 739,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Add a burst of tradition and charm to your accessory collection with this beautifully curated combo. The vibrant pink Bandhani clutch features classic tie-dye patterns in yellow and white, highlighted with a delicate golden lace trim for a festive touch. Lightweight and spacious, it's perfect for carrying your essentials during weddings, mehndi, haldi, or casual ethnic outings.

Paired with it are stunning handcrafted earrings adorned with pearls, red accents, and intricate metallic floral motifs. These studs beautifully complement the clutch, making the set an ideal gift or a stylish accessory bundle for any traditional occasion.

Stylish • Traditional • Perfect for Gifting
`,
  },
  {
    id: "Cover Pouch",
    name: "Cover Pouch(Pack of 10)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763120167/IMG-3161_my0tty.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763120167/IMG-3161_my0tty.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763120189/IMG-3164_ou0nvd.webp ",
    ],
    price: 439,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `right, vibrant, and beautifully traditional — these Bandhani print clutches are the perfect blend of style and culture. Available in multiple rich colors like yellow, pink, blue, orange, red, and green, each clutch is crafted with traditional Bandhej patterns and finished with a neat flap design.

Lightweight and spacious, they are ideal for weddings, mehndi functions, haldi giveaways, festive hampers, ladies’ kitty parties, and return gifts. Their colorful appeal makes them a favorite for ethnic events and gifting.

• Premium Bandhani print fabric
• Available in assorted vibrant colors
• Perfect for gifting & bulk orders
• Stylish, lightweight & easy to carry
`,
  },
  {
    id: "Bride & Bridesmaid Floral Hand Accessory Set",
    name: "Bride & Bridesmaid Floral Hand Accessory Set(Pack of 10)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763120444/1C0029F7-A6E6-434A-BCB8-1E93EEE1C92F_tjbpvk.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763120444/1C0029F7-A6E6-434A-BCB8-1E93EEE1C92F_tjbpvk.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763120444/0588E4F4-83A2-4307-BA1E-178EB33E93CE_t0pqll.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763120443/1C0E51A7-39D9-43CA-AE20-73482CFA12BB_whmv9j.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763120440/B79A613C-38C8-432B-A302-5E4DC36BEEC7_d67mlc.webp",
    ],
    price: 1439,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Crafted with stunning artificial flowers and pearl detailing, this hand accessory set adds a graceful statement to ethnic wear.
     The vibrant colors make it ideal for group functions, bridesmaid coordination, and themed celebrations.
`,
  },

  // OCCASIONAL - subCategory: engagement
  {
    id: "Handcrafted Multicolor Pichwai Pot with Cow Motifs",
    name: "Handcrafted Multicolor Pichwai Pot with Cow Motifs",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763115097/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_6_kfzofp.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763115097/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_6_kfzofp.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763115099/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_1_eq1kgc.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763115097/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_7_adilgo.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763115097/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_5_fzy059.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763115097/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_6_kfzofp.webp",
    ],
    price: 1499,
    category: "occasional-gifts",
    subCategory: "engagement",
    description: `This vibrant Cow-Themed Serving Set adds a touch of tradition and color to any home. 
    Featuring a beautifully printed tray with matching airtight jars, it’s perfect for gifting during weddings, festivals, or housewarmings. Elegant, durable, and eye-catching—an ideal choice for thoughtful and functional gifting.`,
  },

  {
    id: "Silver-Plated Tortoise Decorative Plate Set",
    name: "Silver-Plated Tortoise Decorative Plate Set",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763115958/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_8_a2lxb3.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763115958/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_8_a2lxb3.webp",
    ],
    price: 1999,
    category: "occasional-gifts",
    subCategory: "engagement",
    description: `This beautifully crafted silver-plated tortoise with an intricately designed plate comes in a luxurious velvet box, symbolizing longevity, prosperity, and good fortune. Ideal for wedding return gifts, housewarmings, and festive gifting, it blends tradition with elegance—making it a meaningful keepsake your guests will truly cherish.`,
  },
  {
    id: "Silver Leaf Embellished Decorative Bowl Set",
    name: "Silver Leaf Embellished Decorative Bowl Set",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763116235/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_9_tjnyih.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763116235/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_9_tjnyih.webp",
    ],
    price: 1699,
    category: "occasional-gifts",
    subCategory: "engagement",
    description: `This exquisite Silver Leaf Embellished Bowl Set features two premium metal bowls adorned with intricate leaf motifs and accented with elegant green beads.
     Presented in a luxurious velvet box, it makes a stunning gift for weddings, housewarmings, festivals, or corporate occasions.
     A perfect blend of modern elegance and artistic craftsmanship.`,
  },

  {
    id: "Swastik Brass Diya with Velvet Gift Box",
    name: "Swastik Brass Diya with Velvet Gift Box",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763119581/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_11_ukx2vo.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763119581/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_11_ukx2vo.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763119581/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_11_ukx2vo.webp",
    ],
    price: 2199,
    category: "occasional-gifts",
    subCategory: "engagement",
    description: `Bring divine energy into your home with this beautifully crafted Swastik Brass Diya. 
    Designed with engraved golden detailing and a premium steel oil cup, it symbolizes prosperity and positivity. 
    Packed in a luxurious velvet box, it makes a perfect gift for festivals, pooja rituals, weddings, and return favors.`,
  },
  {
    id: "Royal Lotus Bowl & Spoon Gift Set",
    name: "Royal Lotus Bowl & Spoon Gift Set",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763119916/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_12_mhbvpn.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763119916/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_12_mhbvpn.webp",
    ],
    price: 1199,
    category: "occasional-gifts",
    subCategory: "engagement",
    description: `Elevate your gifting with this luxurious Lotus Bowl & Spoon Set, crafted with stunning gold and silver detailing. 
    Perfect for serving dry fruits, sweets, or desserts, it comes beautifully packed in a premium red velvet box. 
    Ideal for weddings, anniversaries, festivals, and return gifts.`,
  },
  {
    id: "Golden Swan Tealight Holder Pair",
    name: "Golden Swan Tealight Holder Pair (Return Gifts)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763121310/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_13_kttow2.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763121310/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_13_kttow2.webp",
    ],
    price: 1399,
    category: "occasional-gifts",
    subCategory: "engagement",
    description: `Bring charm and sophistication to your home décor with this exquisite Golden Swan Tealight Holder Set. 
    Beautifully crafted with detailed feather engraving and a rich metallic finish, these swan-shaped holders create a warm, soothing glow. 
    Perfect for festive décor, centerpieces, gifting, and enhancing any elegant corner of your home.`,
  },
  {
    id: "Silver Peacock Diya with Parrot Top – Premium Gift Edition",
    name: "Silver Peacock Diya with Parrot Top – Premium Gift Edition (Silver Plated)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763121577/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_14_w3xkio.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763121577/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_14_w3xkio.webp",
    ],
    price: 2399,
    category: "occasional-gifts",
    subCategory: "engagement",
    description: `This exquisite Silver Peacock Diya features intricate hand-carved detailing and a beautifully crafted parrot figurine on top. 
    Designed with a sturdy base and elegant finish, it adds a divine touch to any pooja setup. 
    Packed in a luxurious purple velvet box, it makes a perfect choice for weddings, housewarmings, and festive gifting.`,
  },
  {
    id: "Royal Brass Gift Tray Set – 4 Box Dry Fruit Holder",
    name: "Royal Brass Gift Tray Set – 4 Box Dry Fruit Holder",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763122396/Gemini_Generated_Image_j85l5sj85l5sj85l_xaizoi.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763122396/Gemini_Generated_Image_j85l5sj85l5sj85l_xaizoi.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763122384/Gemini_Generated_Image_lutnvplutnvplutn_1_ersqe3.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763122383/Gemini_Generated_Image_19046i19046i1904_pd3lup.png",
    ],
    price: 1199,
    category: "occasional-gifts",
    subCategory: "engagement",
    description: `Elevate your gifting and serving experience with this Premium Brass Dry Fruit Tray Set, featuring four beautifully crafted bowls placed on an elegant decorative tray. Made with high-quality brass, this set exudes a rich, traditional look that enhances any table setting.

Perfect for serving dry fruits, sweets, mukhwas, snacks, or for festive décor, this gift tray is an ideal choice for weddings, anniversaries, housewarmings, and corporate gifting. Its intricate detailing and luxurious finish make it both functional and aesthetically appealing.

• 4 premium brass bowls with matching tray
• Perfect for dry fruits, sweets & festive serving
• Ideal for gifting on all special occasions
• Durable, elegant & beautifully designed`,
  },
  {
    id: "Premium Brass Storage Jar with Lotus Top",
    name: "Premium Brass Storage Jar with Lotus Top",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763122927/Gemini_Generated_Image_ue682rue682rue68_t4ix5e.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763122927/Gemini_Generated_Image_ue682rue682rue68_t4ix5e.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763122928/Gemini_Generated_Image_gx95t2gx95t2gx95_gyft4j.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763122928/Gemini_Generated_Image_gx95t2gx95t2gx95_gyft4j.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763122932/Gemini_Generated_Image_9mcvt49mcvt49mcv_ynbew4.png",
    ],
    price: 170,
    category: "occasional-gifts",
    subCategory: "engagement",
    description: `Add a touch of elegance to your home décor with this beautifully handcrafted Hammered Brass Lotus Lid Jar. Designed with a polished hammered finish and a stunning lotus-shaped metal lid, this piece combines functionality with artistic charm.

Ideal for storing dry fruits, sweets, mukhwas, jewelry, or small keepsakes, it also makes a luxurious gifting option for weddings, festive hampers, anniversaries, and housewarmings. Its premium look and durable brass construction make it a timeless addition to any space.

• Hammered brass body with floral lotus lid
• Perfect for storage or decorative use
• Ideal for gifting & festive hampers
• Elegant, durable & uniquely handcrafted`,
  },
  {
    id: "Floral Copper Bottle & Glass Set",
    name: "Floral Copper Bottle & Glass Set",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763123765/Gemini_Generated_Image_wc3hrbwc3hrbwc3h_cbvxg9.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763123765/Gemini_Generated_Image_wc3hrbwc3hrbwc3h_cbvxg9.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763123732/Gemini_Generated_Image_xno1e0xno1e0xno1_qxds6i.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763123696/Gemini_Generated_Image_nv1xu2nv1xu2nv1x_v8kx8n.png",
    ],
    price: 1999,
    category: "occasional-gifts",
    subCategory: "engagement",
    description: `Stay hydrated in style with this elegant Floral Copper Water Bottle & Glass Set, beautifully designed with a vibrant rose garden print. The interior is crafted from pure copper, known for its natural health benefits like improved digestion, better metabolism, and purification of drinking water.

The matching copper glasses add to the charm, making it a perfect set for home use, office desks, gifting, and festive occasions. Lightweight, durable, and visually stunning, this set blends tradition with modern aesthetics.

• Pure copper interior with floral printed exterior
• Includes: 1 Bottle + 2 Matching Glasses
• Health-friendly, stylish & eco-friendly
• Ideal for gifting: weddings, festivals, housewarmings`,
  },

  // OCCASIONAL - subCategory: anniversary
  {
    id: "Anniversary Coffee Delight Box",
    name: "Anniversary Coffee Delight Box",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763188596/001-60-scaled_fcyhh0.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763188596/001-60-scaled_fcyhh0.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763188597/002-58_o5y5no.webp",
    ],
    price: 2399,
    category: "occasional-gifts",
    subCategory: "anniversary",
    description: `Celebrate the joy of togetherness with our Anniversary Bloom & Brew Gift Set, a thoughtfully designed return gift that perfectly blends warmth, elegance, and everyday usefulness. This premium hamper features the rich and aromatic Davidoff Fine Aroma Coffee — a luxurious brew loved by true coffee enthusiasts. Paired with a beautifully printed coffee mug, it creates the ideal setup for relaxing moments, morning rituals, or cozy conversations over a cup of coffee.

Adding a touch of freshness and positivity, the hamper includes a charming mini succulent planted in a stylish ceramic pot. Known for being low-maintenance and long-lasting, the succulent symbolizes growth, resilience, and the enduring bond of love — making it a meaningful addition to your anniversary celebration.

The entire gift is beautifully arranged in a sturdy box filled with vibrant shredded fillers, creating a premium unboxing experience that feels personal, thoughtful, and memorable. Perfect as an anniversary return gift for family, friends, and guests, this hamper is ideal for expressing gratitude in a unique, heartfelt way. It blends practicality with aesthetics, ensuring your guests take home something they will use, enjoy, and cherish long after the celebration.`,
  },
  {
    id: "Serenity Bamboo & Aroma Candle Gift Set",
    name: "Serenity Bamboo & Aroma Candle Gift Set",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763188921/51Vhp0luHnL_pxxkf9.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763188921/51Vhp0luHnL_pxxkf9.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763188920/515gnUcgG5L_f3o1m0.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763188920/51-GfVUYOBL_crcjyi.jpg",
    ],
    price: 799,
    category: "occasional-gifts",
    subCategory: "anniversary",
    description: `Bring positivity, warmth, and tranquility into any space with our Serenity Bamboo & Aroma Candle Gift Set. Thoughtfully curated, this premium duo combines the timeless charm of a Lucky Bamboo plant with the comforting fragrance of a Mimosa & Cardamom scented candle. The lush green bamboo, presented in a modern glass planter, symbolizes good fortune, growth, and harmony—making it a meaningful addition to homes and workspaces alike.

Complementing the plant’s natural freshness is the elegant scented candle, crafted to fill the room with a soothing blend of floral mimosa and warm cardamom notes. Its luxurious design and calming aroma create a serene atmosphere, perfect for relaxation, meditation, or setting a peaceful mood after a long day.

Ideal for gifting on anniversaries, housewarmings, festivals, or corporate events, this set beautifully blends nature and fragrance into one thoughtful package. A perfect gesture of love, positivity, and well-being.`,
  },
  {
    id: "Shree Wraps Premium Dry Fruit Treasure Box",
    name: "Shree Wraps Premium Dry Fruit Treasure Box",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763189226/IMG_0033._copy_npga2l.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763189226/IMG_0033._copy_npga2l.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763189226/IMG_0022.copy_fcgltc.webp",
    ],
    price: 1599,
    category: "occasional-gifts",
    subCategory: "anniversary",
    description: `Shree Wraps brings you an exceptional gifting experience with the Premium Dry Fruit Treasure Box—a beautifully crafted wooden hamper designed to elevate every celebration. Made with precision and elegance, this premium box features six spacious compartments filled with the finest quality nuts, seeds, and dry fruits sourced from trusted suppliers. Every element of this gift is thoughtfully curated to deliver freshness, flavour, and nutritional value in every bite.

At Shree Wraps, we believe gifting is a heartfelt gesture that carries emotion, gratitude, and warmth. That’s why our packaging is designed not only to look luxurious but also to reflect care and craftsmanship. The wooden box features a transparent lid that highlights the rich colours and textures of the dry fruits inside, while the elegant ribbon embellishment adds a festive touch—making it a perfect gift for weddings, anniversaries, festivals, corporate events, and family celebrations.

The box includes a delicious assortment of almonds, cashews, pistachios, walnuts, raisins, and a wholesome seed-berry mix—each packed with natural goodness and essential nutrients. Fresh, crunchy, and hygienically processed, these premium dry fruits offer the perfect blend of tradition and taste, making them an ideal choice for both gifting and personal indulgence.

Turn your precious moments into unforgettable memories with Shree Wraps’ luxurious dry fruit hamper—where quality meets elegance in every detail.

Contents (Approx.)

California Almonds
Whole Cashews
Pistachios
Walnuts
Raisin
Mixed Seeds & Berries`,
  },
  {
    id: "Shree Wraps Anniversary Bliss Hamper",
    name: "Shree Wraps Anniversary Bliss Hamper",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763190212/Gemini_Generated_Image_qz8brqqz8brqqz8b_wsfdt2.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763190212/Gemini_Generated_Image_qz8brqqz8brqqz8b_wsfdt2.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763190212/Gemini_Generated_Image_yx17jbyx17jbyx17_zjlplb.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763190212/Gemini_Generated_Image_qz8brqqz8brqqz8b_1_tiqp3t.png",
    ],
    price: 599,
    category: "occasional-gifts",
    subCategory: "anniversary",
    description: `Celebrate love, growth, and togetherness with the Shree Wraps Anniversary Bliss Hamper—a thoughtfully curated gift designed to add warmth and elegance to your special day. This beautifully handcrafted wooden crate features a refreshing live plant that symbolizes harmony, positivity, and the continued flourishing of a relationship. Paired alongside is a premium jar filled with delicious cookies/snacks, offering a sweet treat to mark the joy of another cherished year.

Wrapped in soft, shimmering net fabric and adorned with a delicate bow and butterfly accent, this hamper exudes a romantic charm perfect for anniversary gifting. The personalized anniversary tag adds an emotional touch, making the hamper feel truly special and memorable.

Whether you’re gifting it to a loved one or sharing it as a return gift for guests, this hamper is a perfect blend of aesthetics, meaning, and utility—crafted with love, care, and the signature Shree Wraps elegance.`,
  },
  {
    id: "Shree Wraps Divine Blessings Anniversary Hamper",
    name: "Shree Wraps Divine Blessings Anniversary Hamper",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763190646/Gemini_Generated_Image_u932xu932xu932xu_st7iwy.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763190646/Gemini_Generated_Image_u932xu932xu932xu_st7iwy.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763190645/Gemini_Generated_Image_rvjifwrvjifwrvji_cboe7b.png",
    ],
    price: 649,
    category: "occasional-gifts",
    subCategory: "anniversary",
    description: `Celebrate the essence of love, gratitude, and togetherness with the Shree Wraps Divine Blessings Anniversary Hamper. Thoughtfully curated with a touch of tradition and elegance, this hamper beautifully blends spiritual charm with luxurious presentation—making it the perfect return gift for an anniversary celebration.

The hamper features a premium mesh gift bag adorned with a stunning lotus brooch and delicate pearl detailing, symbolizing purity, beauty, and prosperity. Inside lies a handcrafted Charan Paduka box, representing blessings, protection, and divine grace—an auspicious keepsake your guests will cherish for years. Along with it, two organza potlis filled with sacred coins offer an added touch of fortune and positivity, completing the traditional gifting experience.

Wrapped with shimmering fabrics, soft hues, and refined embellishments, this hamper carries the signature elegance of Shree Wraps—simple, meaningful, and beautifully memorable. Perfect for thanking loved ones and making your special day even more auspicious, this gift serves as a token of heartfelt appreciation and spiritual wellbeing.

A return gift that truly touches the heart—bringing blessings home with every detail.`,
  },
  {
    id: "Royal-Lotus-Bowl-Spoon-Gift-Set-Anniversary-01",
    name: "Royal Lotus Bowl & Spoon Gift Set",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763119916/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_12_mhbvpn.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763119916/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_12_mhbvpn.webp",
    ],
    price: 1199,
    category: "occasional-gifts",
    subCategory: "anniversary",
    description: `Elevate your gifting with this luxurious Lotus Bowl & Spoon Set, crafted with stunning gold and silver detailing.
  Perfect for serving dry fruits, sweets, or desserts, it comes beautifully packed in a premium red velvet box.
  Ideal for anniversaries, weddings, festivals, and elegant return gifts.`,
  },
  {
    id: "Shree Wraps Royal Copper Hydration Set",
    name: "Shree Wraps Royal Copper Hydration Set",
    image:
      "hhttps://res.cloudinary.com/dzh2zxbvw/image/upload/v1763191765/Gemini_Generated_Image_z8mpuwz8mpuwz8mp_bvhdxv.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763191765/Gemini_Generated_Image_z8mpuwz8mpuwz8mp_bvhdxv.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763191765/IAV-DGS-114-3B_ffce71cf-fb8e-4cd7-b7ca-17c3cb860770_1728x_ompfxp.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763191764/IAV-DGS-114-3C_b3a3aa36-5fbe-43d8-a48e-39682e62534e_1728x_bjecxf.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763191764/IAV-DGS-114-3G_c75d571c-39d5-4716-893b-1e12b126167c_1728x_nryjyz.webp",
    ],
    price: 1495,
    originalPrice: 1999,
    category: "occasional-gifts",
    subCategory: "anniversary",
    description: `Experience the perfect blend of tradition, wellness, and luxury with the Shree Wraps Royal Copper Hydration Set. This premium set includes a beautifully hand-etched copper bottle paired with two matching copper glasses, each crafted with intricate detailing that reflects timeless Indian artistry.

Made from 100% pure copper, this drinkware set is not only visually stunning but also offers powerful Ayurvedic health benefits. Drinking water stored in copper helps balance the body's doshas, boosts immunity, improves digestion, and promotes overall well-being. The glossy finish and traditional patterns add a touch of elegance, making it suitable for everyday use as well as display.

Thoughtfully designed for gifting, this set is perfect for anniversaries, weddings, festive gifting, housewarming ceremonies, and premium return gifts. Its luxurious look, meaningful purpose, and long-lasting quality make it a memorable and functional present your loved ones will truly appreciate.

A beautiful fusion of health, heritage, and craftsmanship—only from Shree Wraps.`,
  },
  {
    id: "Shree Wraps Handcrafted Royale Drinkware Set",
    name: "Shree Wraps Handcrafted Royale Drinkware Set",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763192003/img_1815_cqpjdl.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763192003/img_1815_cqpjdl.png",
    ],
    price: 1399,
    originalPrice: 2500,
    category: "occasional-gifts",
    subCategory: "anniversary",
    description: `Celebrate tradition and artistry with the Shree Wraps Floral Elegance Bottle & Glass Gift Set—a luxurious gifting choice that brings together beauty, craftsmanship, and wellness. This stunning set includes a premium hand-printed bottle accompanied by two matching tumblers, each adorned with vibrant floral motifs inspired by traditional Indian designs.

Crafted with precision and coated with high-quality enamel artwork, the set stands out for its rich detailing and glossy finish. Beyond its visual appeal, the bottle is lined with pure copper on the inside, offering the well-known Ayurvedic benefits of copper-infused water—improved digestion, enhanced immunity, and balanced energy levels.

The elegant pieces come seated in a satin-lined gift box, making it an ideal present for anniversaries, weddings, festive gifting, corporate giveaways, and premium return gifts. Designed to impress and built to last, this set combines functionality with artistic charm, delivering a gift that is both meaningful and memorable.

A perfect fusion of health, heritage, and handcrafted beauty—crafted with love by Shree Wraps.`,
  },
  // OCCASIONAL - subCategory: baby-shower
  {
    id: "Shree Wraps New Arrival Sweet Cart Hamper",
    name: "Shree Wraps New Arrival Sweet Cart Hamper",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763192410/5cf3f13d86d625147fa914619181dfe0_original_g8br5n.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763192410/5cf3f13d86d625147fa914619181dfe0_original_g8br5n.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763192409/6933e62f435712e1dc452af3ebe6fc6b_original_qckbg1.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763192409/6310f61afda9fb5fe88b9e5099dd51eb_original_rkh2vd.jpg",
    ],
    price: 949,
    category: "occasional-gifts",
    subCategory: "baby-shower",
    description: `Make your baby shower even more memorable with the Shree Wraps Baby Boy Celebration Cart Hamper—a charming, handcrafted mini cart designed to delight your guests with sweetness and love. Styled in soothing baby blue and white tones, this adorable cart-shaped box is decorated with cute detailing, including little socks, ribbons, and a special “Thank you for showering our baby with love” tag that adds a heartfelt touch.

Inside, the hamper features a delightful assortment of treats such as donut-themed goodies, premium jars filled with sweet surprises, and adorable “It’s a Boy!” themed elements that complete the joyful celebration. The beautifully curated presentation makes it perfect for baby showers, newborn celebrations, and gifting to welcome a baby boy.

Thoughtfully designed with elegance and warmth, this hamper by Shree Wraps is sure to bring smiles and leave your loved ones with a keepsake they’ll cherish long after the celebration.

A sweet gesture for a sweet beginning!`,
  },

  {
    id: "Shree Wraps Two-Tier Baby Boy Welcome Hamper",
    name: "Shree Wraps Two-Tier Baby Boy Welcome Hamper",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763192730/IMG_6067_a1kb9p.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763192730/IMG_6067_a1kb9p.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763192730/2_Tier_Hamper_1_a9tppo.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763192730/IMG_6065_dbpcx3.webp",
    ],
    price: 4999,
    category: "occasional-gifts",
    subCategory: "baby-shower",
    description: `Welcome your little prince with the Shree Wraps Grand Baby Boy Celebration Hamper—a luxurious two-tier gift arrangement curated with love, joy, and celebration. Designed in soothing baby blue and pastel tones, this premium hamper is beautifully decorated with foam roses, baby elements, butterflies, pearls, and themed accessories that create a festive and heartwarming look.

This hamper is packed with a delightful assortment of gourmet treats, snacks, premium goodies, and celebration essentials—thoughtfully handpicked to convey warmth and happiness. From chocolates and cookies to dry fruits, cereals, and premium jars, every item reflects quality and indulgence, making it a memorable gifting choice.

Perfect for baby showers, newborn welcome ceremonies, naming celebrations, and hospital visits, this hamper adds charm to any occasion. The sturdy two-tier structure not only looks stunning but also provides ample space for generous and meaningful gifting.

Overflowing with sweetness, style, and celebration, this Shree Wraps hamper is the perfect way to congratulate new parents and make the arrival of their baby boy even more magical.`,
  },
  {
    id: "Shree Wraps Baby Girl Celebration Hamper",
    name: "Shree Wraps Baby Girl Celebration Hamper",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763196997/Gemini_Generated_Image_q2939iq2939iq293_kksnpc.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763196997/Gemini_Generated_Image_q2939iq2939iq293_kksnpc.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763196996/Gemini_Generated_Image_sc377zsc377zsc37_aimz6a.png",
    ],
    price: 999,
    category: "occasional-gifts",
    subCategory: "baby-shower",
    description: `Celebrate the arrival of your little princess with the Shree Wraps Pink Teddy Treasure Gift Box—a charming and thoughtfully curated hamper designed to delight your loved ones. This premium keepsake trunk features soft pastel tones, adorable teddy bear illustrations, and classy printed patterns that add a touch of elegance and sweetness to your celebration.

The inside of the box opens to reveal beautifully arranged compartments lined with luxurious satin fabric, each holding individually packed treats or goodies. From chocolates to baby-themed surprises, every element is wrapped with love and attention to detail, making the unboxing experience truly memorable.

Perfect for baby showers, newborn gifting, naming ceremonies, or return gifts, this hamper brings together cuteness and sophistication in the most heartwarming way. The sturdy trunk-style box can also be reused as a keepsake storage box for baby memories, making it a meaningful and practical choice.

A lovely blend of charm, quality, and celebration—crafted with care by Shree Wraps.`,
  },
  {
    id: "Shree Wraps One-derful Unicorn Celebration Hamper",
    name: "Shree Wraps One-derful Unicorn Celebration Hamper",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763197135/Hitube_v6auvKbCOT_2025_11_15_13_19_23_k130y8.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763197135/Hitube_v6auvKbCOT_2025_11_15_13_19_23_k130y8.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763197134/Hitube_EmTBMZjuln_2025_11_15_13_19_25_ay27co.jpg",
    ],
    price: 969,
    category: "occasional-gifts",
    subCategory: "baby-shower",
    description: `Make your little one’s celebration truly one-derful with the Shree Wraps Magical Unicorn Birthday Gift Box—a dreamy, pastel-themed hamper filled with sweetness, sparkle, and unicorn magic. This beautifully crafted box features a vibrant rainbow design, adorable unicorn illustrations, and a glossy finish that brings fairytale charm to life.

Inside, the hamper opens to a luxurious satin-lined interior, showcasing neatly arranged jars with unicorn-themed lids and a stunning grid of assorted treats or chocolates. Packed with love and presented with elegance, this hamper is a delightful surprise for birthdays, return gifts, milestone celebrations, and themed parties.

Perfectly blending fantasy and fun, this unicorn box is not just a gift—it's a keepsake your child will cherish forever. From the enchanting design to the thoughtful detailing, every element is crafted to make their special day unforgettable.

A magical burst of rainbows, sweetness, and celebration—only from Shree Wraps.`,
  },
  {
    id: "Shree Wraps Little Prince Gift Basket",
    name: "Shree Wraps Little Prince Gift Basket",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763197547/Hitube_qfLj8NHHgq_2025_11_15_14_31_10_hkysjk.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763197547/Hitube_qfLj8NHHgq_2025_11_15_14_31_10_hkysjk.jpg",
    ],
    price: 799,
    category: "occasional-gifts",
    subCategory: "baby-shower",
    description: `Celebrate the arrival of your little prince with the Shree Wraps Little Prince Gift Basket—a charming and heartfelt return-gift hamper crafted in soothing shades of blue and white. This elegant setup features a beautifully wrapped potli decorated with soft net fabric, pearl accents, and a stunning blue tassel, giving it a luxurious and festive finish.

The base is adorned with delicate artificial florals, baby-themed embellishments, and a “Boy!” cutout that adds a playful and joyful touch. Whether used for baby showers, naming ceremonies, cradle ceremonies, or newborn welcome gifts, this hamper is sure to leave guests impressed with its thoughtful presentation and aesthetic appeal.

Perfectly blending elegance and celebration, this baby boy hamper by Shree Wraps makes the occasion even more special, offering a memorable keepsake that reflects love, warmth, and gratitude.A royal gesture for your little prince!`,
  },
  {
    id: "Shree Wraps Little Gentleman Gift Tray",
    name: "Shree Wraps Little Gentleman Gift Tray",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763197748/Hitube_hAmzj0WFz4_2025_11_15_14_31_09_dyg6gd.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763197748/Hitube_hAmzj0WFz4_2025_11_15_14_31_09_dyg6gd.jpg",
    ],
    price: 899,
    category: "occasional-gifts",
    subCategory: "baby-shower",
    description: `Celebrate your little one’s special moments with the Shree Wraps Blue Baby Celebration Hamper—a stunning, handcrafted gift arrangement designed to express love, joy, and gratitude. Styled in enchanting shades of blue, ivory, and soft neutrals, this hamper features a premium pumpkin-style potli adorned with elegant tassels, pearls, and delicate floral accents.

Placed on a beautifully decorated tray with matching jars wrapped in burlap and baby-themed elements, the arrangement creates a visually delightful and heartwarming display. Cute motifs like the baby cutout, mini whale, and star embellishments add charm and make this hamper perfect for baby showers, birthdays, naamkaran, and newborn welcome celebrations.

Thoughtfully curated and artistically arranged, this hamper is ideal for return gifts, guest giveaways, or as a memorable keepsake. Every detail reflects the signature Shree Wraps touch—elegant, modern, and full of warmth.

A perfect blend of cuteness and luxury to make your celebration truly unforgettable.`,
  },
  {
    id: "Shree Wraps Little Star Baby Gift Arrangement",
    name: "Shree Wraps Little Star Baby Gift Arrangement",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763197939/Hitube_PvB0w83aPW_2025_11_15_14_31_08_w2rk95.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763197939/Hitube_PvB0w83aPW_2025_11_15_14_31_08_w2rk95.jpg",
    ],
    price: 999,
    category: "occasional-gifts",
    subCategory: "baby-shower",
    description: `Celebrate the arrival of your little bundle of joy with the Shree Wraps Little Star Baby Gift Arrangement—a heartwarming and luxurious hamper designed with elegance, softness, and love. This beautifully crafted setup features an adorable cuddly teddy, a charming mini cradle basket, and a golden keepsake jar adorned with floral accents and a blue tassel, creating a magical and memorable display.

The entire arrangement sits on a premium marble-finish base decorated with delicate artificial flowers, baby-themed elements, pearls, and personalized tags—making it a perfect pick for baby showers, naming ceremonies, cradle ceremonies, and newborn welcome gifts. Every piece is thoughtfully placed to reflect warmth, celebration, and the innocent joy of a new beginning.

A delightful blend of cuteness and sophistication, this hamper by Shree Wraps is sure to leave a lasting impression on your loved ones and become a cherished keepsake.`,
  },
  {
    id: "Shree Wraps Blue Bliss Premium Truffle Hamper",
    name: "Shree Wraps Blue Bliss Premium Truffle Hamper",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763198119/WhatsApp_Image_2025-11-15_at_2.20.43_PM_1_fgx4dy.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763198119/WhatsApp_Image_2025-11-15_at_2.20.43_PM_1_fgx4dy.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763198118/WhatsApp_Image_2025-11-15_at_2.20.44_PM_via28e.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763198120/WhatsApp_Image_2025-11-15_at_2.20.43_PM_qlbjpo.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763198121/WhatsApp_Image_2025-11-15_at_2.20.42_PM_uogows.jpg",
    ],
    price: 799,
    category: "occasional-gifts",
    subCategory: "baby-shower",
    description: `Indulge in elegance with the Shree Wraps Royal Blue Luxe Chocolate Box—a breathtaking gourmet hamper crafted to elevate your celebrations. Designed in a stunning marble and honeycomb pattern, this premium double-layered box showcases a luxurious arrangement of handcrafted chocolates wrapped in glistening gold and icy blue foils.

Each layer opens to reveal beautifully placed truffles and bite-sized chocolates, carefully seated in golden trays for a rich and festive presentation. Adorned with delicate blue florals and rope handles, this box brings together sophistication and charm, making it a perfect pick for weddings, anniversaries, baby showers, festive gifting, and corporate occasions.

Gift your loved ones a delightful experience that blends taste, beauty, and craftsmanship—every detail perfected with Shree Wraps elegance.

A truly royal treat for truly special moments.`,
  },
  {
    id: "Shree Wraps Little Joy Treat Box",
    name: "Shree Wraps Little Joy Treat Box",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763198299/WhatsApp_Image_2025-11-15_at_2.20.41_PM_sa9jbh.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763198299/WhatsApp_Image_2025-11-15_at_2.20.41_PM_sa9jbh.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763198300/WhatsApp_Image_2025-11-15_at_2.20.40_PM_1_vypmev.jpg",
    ],
    price: 199,
    category: "occasional-gifts",
    subCategory: "baby-shower",
    description: `Make your baby celebration extra adorable with the Shree Wraps Baby Balloon Favour Box—a cute and colourful giveaway perfect for baby showers, birthdays, and newborn welcome ceremonies. Designed with playful baby illustrations, bright balloon toppers, and soft net-wrapped goodies inside, this box adds a delightful charm to your event.

Available in baby blue and pastel pink, each box is filled with sweet treats and wrapped neatly to create a joyful and memorable return gift for your guests. Lightweight, attractive, and full of cuteness—this little box is sure to bring big smiles!

Perfect for baby showers • gender reveal parties • newborn celebrations • first birthdays.`,
  },
  {
    id: "Blue Teddy Baby Chocolate Cart",
    name: "Blue Teddy Baby Chocolate Cart",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763198572/WhatsApp_Image_2025-11-15_at_2.20.40_PM_qe7off.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763198572/WhatsApp_Image_2025-11-15_at_2.20.40_PM_qe7off.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763198572/WhatsApp_Image_2025-11-15_at_2.20.39_PM_1_l3ltxj.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763198579/WhatsApp_Image_2025-11-15_at_2.20.39_PM_afxt54.jpg",
    ],
    price: 749,
    category: "occasional-gifts",
    subCategory: "baby-shower",
    description: `Celebrate the joy of a new baby boy with this adorable Blue Teddy Baby Chocolate Cart. Thoughtfully designed in the shape of a tiny carriage, this gift features a delightful blue teddy sitting atop a beautifully arranged box of premium chocolates wrapped in elegant blue foil. The cart is decorated with soft floral accents and baby-themed embellishments, making it an eye-catching and memorable return gift.
Perfect for baby showers, naming ceremonies, welcome-baby celebrations, and first-birthday favors, this charming hamper brings together sweetness, cuteness, and creativity in one delightful package. A heart-warming token your guests will absolutely love!`,
  },
  {
    id: "Premium Baby Boy Celebration Hamper Cart",
    name: "Premium Baby Boy Celebration Hamper Cart",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763199027/new_gdts0b.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763199027/new_gdts0b.jpg",
    ],
    price: 1249,
    category: "occasional-gifts",
    subCategory: "baby-shower",
    description: `Make your baby boy’s celebration unforgettable with this Premium Baby Boy Celebration Hamper Cart, designed to reflect joy, creativity, and heartfelt gratitude. Styled as a charming miniature cart, it comes beautifully decorated with pastel blues and pinks, cute baby-themed cut-outs, elegant floral detailing, and handcrafted tassels.

This deluxe hamper includes a mix of premium jars, treats, and custom goodies, all arranged neatly on a bed of straw for a rustic yet luxurious feel. A personalized message frame at the back adds a warm, emotional touch—perfect for thanking your guests with style.

Ideal for baby showers, welcome-baby celebrations, cradle ceremonies, and first birthdays, this hamper is not just a gift—it's a keepsake that leaves a lasting impression. A stunning blend of sweetness, creativity, and celebration!`,
  },
  {
    id: "Boss Baby Welcome Gift Hamper",
    name: "Boss Baby Welcome Gift Hamper",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763199229/new34_ko7yov.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763199229/new34_ko7yov.jpg",
    ],
    price: 1249,
    category: "occasional-gifts",
    subCategory: "baby-shower",
    description: `Celebrate the arrival of your little superstar with this fun and stylish Boss Baby Welcome Gift Hamper! Designed with a playful Boss Baby theme, this hamper brings together cuteness, creativity, and charm in one eye-catching display.

Beautifully decorated in shades of blue, it features:
🌿 A lively green plant in a matching blue pot
🎁 Premium goodies and jars filled with treats
🎀 Elegant ribbon accents, floral embellishments, and themed cut-outs
🍼 A personalized “Thank You” badge from the family

Perfect for baby showers, welcome-baby celebrations, or return gifts, this hamper adds a unique, joyful touch to your event. A delightful keepsake your guests will love and remember!`,
  },

  // OCCASIONAL - subCategory: birthday-hamper
  {
    id: "Blue Fun Activity Gift Basket",
    name: "Blue Fun Activity Gift Basket",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763202761/IMG_5471_h06ejz.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763202761/IMG_5471_h06ejz.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763202760/Haab439c35a714c83934d74a7607c77a_lvsw7u.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763202805/DeWatermark.ai_1752644425959_jhi01a.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763202805/O1CN01xOLeex1hLabAb6Fid__2217755_a7382362-b0cd-4764-8ed8-d2fe395efd38_ojfmho.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763202805/main-image-1_57bf9e4e-7ae0-4c83_mz4m0a.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763202806/IMG_6288_q9asog.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763202807/IMG_5465_0d599347-a3a0-41a4-91eb-ced4956b317d_ww3qwv.webp",
    ],
    price: 699,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description: `Make your little guests smile with this exciting Blue Fun Activity Gift Basket, the perfect return gift for children’s birthday parties! Packed with playful goodies like a mini microphone, toy ball, fun spinner toy, and colorful activity items, this charming gift box promises hours of entertainment.

Beautifully arranged in a transparent golden-handled box, it’s not only fun but also visually appealing — a thoughtful and joyful surprise that kids will love taking home. 
Ideal for birthday parties, school events, and celebrations!`,
  },
  {
    id: "Red Bus Creative Activity Return Gift Set",
    name: "Red Bus Creative Activity Return Gift Set",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203093/elewrap-gifting-studio-avenger-tag-car-fun-h079-41732324524269_zr5hsv.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203093/elewrap-gifting-studio-avenger-tag-car-fun-h079-41732324524269_zr5hsv.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203093/elewrap-gifting-studio-avenger-tag-car-fun-h079-41732324491501_wdug1n.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203093/elewrap-gifting-studio-avenger-tag-car-fun-h079-41732324393197_zzrjyp.webp",
    ],
    price: 120,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description:
      "Party-friendly snacks and activity kits for birthday parties.",
  },
  {
    id: "Lucky Forever Kids Creative Gift Set",
    name: "Lucky Forever Kids Creative Gift Set",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203348/RoughOne_13_z94m3r.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203348/RoughOne_13_z94m3r.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203348/IMG_6603d_fcwzlf.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203347/IMG_6606_qktggw.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203346/O1CN01avNbGO28x8U2i25JD__2214082_uf7loz.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203347/5285-1000x1000copywa_upscayl_2x_ed24a0ac-de6c-4668-b868-fa0249a4da87_mgkmef.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203346/ChatGPTImageJul15_2025_11_36_38A_1_rcw1k9.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203346/imgi_36_214fbc2e73364c15c7fb2d1a_g1kyam.webp",
    ],
    price: 399,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description:
      "Party-friendly snacks and activity kits for birthday parties.",
  },
  {
    id: "Yellow Dino Art & Fun Return Gift Box",
    name: "Yellow Dino Art & Fun Return Gift Box",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203668/IMG_6467_fe84148e-495a-480b-ba1d-71808845a65a_jyhwvi.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203668/IMG_6467_fe84148e-495a-480b-ba1d-71808845a65a_jyhwvi.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203668/IMG_6454_ofg1mg.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203668/IMG_6455_n6nurw.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203668/IMG_6457_d84ade1b-d5eb-41e8-bc5a-a6674b7c0d0d_jnzd0w.webp",
    ],
    price: 739,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description: `Make your child’s birthday unforgettable with the Yellow Dino Art & Fun Return Gift Box — a bright, joyful, and creativity-packed surprise that every kid will love! Beautifully arranged in a transparent yellow-handled gift bag, this return gift combines art, DIY fun, toys, and learning into one perfect package.

Inside the gift box, children will find:
✨ Watercolour Painting Book – Age of Dinosaurs
✨ Cute Unicorn Pop-It Purse
✨ Soft Plush Toy (Mini character)
✨ DIY Thread Painting Shoulder Bag Kit
✨ Dinosaur Toy Figurine Set
✨ Coloured Clay/Crayons Pack
✨ Set of Pastel Fountain Pens/Highlighters

This exciting mix encourages kids to paint, craft, play, explore science concepts, and express creativity in the most fun way. The unicorn pop-it sling bag and plush toy add a cute charm, while the DIY thread painting and watercolor set promote hands-on learning.

Perfect for birthday return gifts, school events, and theme parties, the Yellow Dino Art & Fun Return Gift Box guarantees entertainment, creativity, and smiles all in one thoughtful pack.`,
  },

  {
    id: "Premium Smart Learning & Fun Gift Set for Kids",
    name: "Premium Smart Learning & Fun Gift Set for Kids",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203985/IMG_6435_p4jj9n.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203985/IMG_6435_p4jj9n.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203984/IMG_6433_kiayvv.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203984/O1CN01ZckGvf28uqeVPxnZc__2216134397993-0-cib_8bd23464-50d7-4741-ac87-7f236b2cf224_anyoek.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203983/WhatsAppImage2025-09-24at7.55.32PM_2_jkj_upscayl_2x_upscayl-lite-4x_19a0ed19-bb3c-4c7c-998d-7677792966e9_vhjdoi.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763203983/IMAGEYE_40_6654f8e4-cdc4-4d2f-8b50-5413a8cc2ead_oyllz8.webp",
    ],
    price: 1129,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description: `Make your child’s birthday unforgettable with this Premium Smart Learning & Fun Gift Set, a stylish combination of creativity, education, and entertainment. Packed inside an adorable pastel-themed gift bag, this set includes high-quality and exciting goodies that children will love using every day.

This thoughtfully curated return gift set includes:
✨ LCD Writing Tablet – Kids can draw, doodle, practice writing, and erase instantly.
✨ Habit Tracker Board – Teaches kids discipline, routine building, and daily goal-setting in a fun way.
✨ Mini Cartoon Sling Bag – Trendy, lightweight, and perfect for carrying small toys and stationery.
✨ Cute Sticker Pack – Fun stickers for notebooks, diaries, and craft activities.
✨ Premium Fountain Pen Set – Smooth-writing pens with extra cartridges.
✨ Kids Puzzle / Logic Box – Encourages problem-solving and cognitive development.
✨ Colourful Gift Bag – Durable, reusable, and printed with cute pastel designs.

This gift set is a perfect mix of learning tools, creativity boosters, and stylish accessories—ideal for both boys and girls. Whether it’s a birthday return gift, kids’ party hamper, or a special celebration, this smart learning combo guarantees excitement, engagement, and smiles!`,
  },
  {
    id: "Ultimate Kids Adventure Gift Set – Magic, Learning & Fun Combo",
    name: "Ultimate Kids Adventure Gift Set – Magic, Learning & Fun Combo",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763204205/IMG_6506_rgi4im.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763204205/IMG_6506_rgi4im.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763204204/IMG_6507_8c6caa1d-fa84-476a-97b4-7ceff898759f_k0f6ni.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763204203/wmb-handlee-1_upscayl_2x_ultrash_2_hrpzoq.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763204203/download-2023-06-06T150342.745_5_gp6h1z.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763204202/H1b5c68762ea74c739fe79a2a46e3138_bcmscx.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763204202/61ee0d8c6bd84cb224dd274ee68fe2a9_xld1eo.webp",
    ],
    price: 349,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description: `Make your child’s birthday unforgettable with this Premium Smart Learning & Fun Gift Set, a stylish combination of creativity, education, and entertainment. Packed inside an adorable pastel-themed gift bag, this set includes high-quality and exciting goodies that children will love using every day.

This thoughtfully curated return gift set includes:
✨ LCD Writing Tablet – Kids can draw, doodle, practice writing, and erase instantly.
✨ Habit Tracker Board – Teaches kids discipline, routine building, and daily goal-setting in a fun way.
✨ Mini Cartoon Sling Bag – Trendy, lightweight, and perfect for carrying small toys and stationery.
✨ Cute Sticker Pack – Fun stickers for notebooks, diaries, and craft activities.
✨ Premium Fountain Pen Set – Smooth-writing pens with extra cartridges.
✨ Kids Puzzle / Logic Box – Encourages problem-solving and cognitive development.
✨ Colourful Gift Bag – Durable, reusable, and printed with cute pastel designs.

This gift set is a perfect mix of learning tools, creativity boosters, and stylish accessories—ideal for both boys and girls. Whether it’s a birthday return gift, kids’ party hamper, or a special celebration, this smart learning combo guarantees excitement, engagement, and smiles!`,
  },
  {
    id: "Jungle Explorer Creative Gift Set for Kids",
    name: "Jungle Explorer Creative Gift Set for Kids",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763204425/IMG_6510_1ce4c58d-0751-4e92-bdf2-a76253afdd54_zakrs4.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763204425/IMG_6510_1ce4c58d-0751-4e92-bdf2-a76253afdd54_zakrs4.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763204424/IMG_6512_gb6mpe.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763204423/IMG_6513_xhbbgz.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763204422/Imageye_89_e11374ad-095f-4782-8f_41b93b5a-f7dc-43cf-b0a0-1fe08ae8a9cb_oq2olw.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763204421/H3148957c8fa841e99e5144ef20b858b_1_qk3fya.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763204421/download_24_018516a1-b375-412c-a_pgbmsa.webp",
    ],
    price: 315,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description: `Bring joy, creativity, and learning together with the Jungle Explorer Creative Gift Set for Kids — the perfect return gift for birthdays, school events, and celebrations. This carefully curated hamper is packed with fun activities and adorable jungle-themed surprises that kids absolutely love.

This amazing set includes:
✨ Racing Insect Buildable Toy Car – A cute insect-inspired pull-back car toy that combines building fun with racing excitement.
✨ Watercolour Painting Book (10 Pages) – Forest-themed painting pad with a brush, perfect for young artists.
✨ Dino Space Stationery Set – Includes scale, pencil box, and fun cartoon designs.
✨ Premium Colouring Puzzle Board – A large jigsaw puzzle with a paintable design, plus mini sketch pens to colour it in.
✨ Cute Cartoon Digital Watch – Fun, colourful, and perfect for kids to wear daily.
✨ Premium Non-Sharpening Pencil – Long-lasting and smooth writing tool.
✨ Jungle Animal Gift Bag – Beautiful, vibrant paper bag featuring lion, hippo, monkey, or elephant designs.

This return gift set offers the perfect blend of creativity, play, and early learning, ensuring every child goes home smiling. Ideal for both boys and girls, it’s a delightful surprise that keeps them engaged for hours!`,
  },
  {
    id: "Smart Racer Activity Gift Set for Kids",
    name: "Smart Racer Activity Gift Set for Kids",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763204929/IMG_6497_epcelx.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763204929/IMG_6497_epcelx.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763204929/IMG_6499_qk4f74.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763204929/O1CN01Ne86Gx1hxbW2MWyVd__2988144_1_zj4sp7.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763204929/Imageye_70_e7097119-692d-4567-95_85713519-fe9f-4eb9-9356-132254c163bf_u9oigf.webp",
    ],
    price: 449,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description: `Make your birthday return gifts exciting, educational, and fun with the Smart Racer Activity Gift Set for Kids! Packed with learning tools, creative activities, and playful toys, this vibrant set is perfect for boys and girls who love cars, space, and hands-on fun.

This action-packed gift set includes:
✨ Math Flash Cards (Addition 1–12) – Reusable dry-erase cards with markers to make learning maths enjoyable and engaging.
✨ Space-Themed Stationery Kit – Includes a cool astronaut ruler set for everyday school use.
✨ DIY Paintable Keychain Set – A cute character keychain with 3 mini colours + brush for creative painting fun.
✨ Cute Rolling Animal Toy – A soft bear push-and-roll toy that kids adore.
✨ Flying Saucer Spinner Toy – Lightweight, colourful spinner for indoor and outdoor play.
✨ Premium Whistle Toy – Fun, colourful, and safe for kids.
✨ Racing Car Gift Bag – Stylish, strong, and car-themed bag that completes the gifting experience.

The Smart Racer Activity Gift Set blends learning, creativity, and play into one perfect return gift. Ideal for birthday parties, school giveaways, or special celebrations—this gift set guarantees happy kids and memorable moments!`,
  },

  {
    id: "Pink Princess Creative Gift Set for Kids",
    name: "Pink Princess Creative Gift Set for Kids",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763205151/Gemini_Generated_Image_h39azph39azph39a_ubfstq.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763205151/Gemini_Generated_Image_h39azph39azph39a_ubfstq.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763205167/Gemini_Generated_Image_yu96zzyu96zzyu96_ulrpja.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763205120/O1CN01Q73m5z1zIX0YNDzen__2208050456691-0-cib_994a5989-2764-4a89-9e83-b487b21af94c_fcaoph.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763205118/d9a8a161-d1a4-411b-8e57-cfd044eb76e4_df681d34-2646-42b6-89ad-f1fa355c40e4_iqfj7z.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763205119/IMG_8187_32854a2b-d69e-4858-a2a0-dbf3b84b193d_lh7elo.webp",
    ],
    price: 569,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description: `Make every little girl feel extra special with our Pink Princess Creative Gift Set — a delightful return-gift pack filled with fun, creativity, and charm! Beautifully packed in a stylish transparent gift bag with golden handles, this set brings together adorable stationery and playful accessories that kids love.

This gift set includes:
✨ Unicorn Scratch Art Book – Let imaginations glow with colorful scratch designs.
✨ Cute Character Crayons (12 pcs) – Vibrant shades for endless coloring fun.
✨ Handmade Felt Shaker Keychain – Adorable bunny-themed shaker full of fun confetti.
✨ Animal-Themed Wooden Photo Frame – A lovely keepsake for their favorite picture.
✨ Grape Mini Hand Fan – Cute, refreshing, and perfect for summer days.
✨ Soft Pink Hair Brush – Gentle and pretty for everyday use.

Perfect for birthdays, return gifts, school events, and party favors, the Pink Princess Creative Gift Set blends usefulness with charm — guaranteed to bring a big smile to every child’s face!`,
  },

  {
    id: "Cartoon Purse Kids Stationery Gift Set",
    name: "Cartoon Purse Kids Stationery Gift Set",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763205421/IMG_5770_mys8jn.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763205421/IMG_5770_mys8jn.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763205420/IMG_5774_tgq4hj.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763205409/IMG_5772_uuwvxo.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763205408/O1CN019NIwEl27GiPpiU2b3__2208467707770-0-cib_37ac64b2-1a82-49f4-9e59-9142a3185580_ug7bo2.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763205408/Imageye_30_cccbd38b-8d9e-4126-b3_n6exoy.webp",
    ],
    price: 225,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description: `Make your little one’s day extra special with this adorable Cartoon Purse Kids Stationery Gift Set! Packed in a stylish cartoon handbag–shaped pouch, this return-gift combo includes cute sticky notes, colourful pens, a fun cartoon pencil, and a playful slap wristwatch. 
    Perfect for birthday return gifts, school rewards, or surprise treats. 
    Designed to delight kids with bright colours, fun characters, and usable stationery that sparks creativity every day!`,
  },
  {
    id: "Blue Explorer Activity Gift Hamper",
    name: "Blue Explorer Activity Gift Hamper",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763205734/IMG_5465_0d599347-a3a0-41a4-91eb-ced4956b317d_onkrvi.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763205734/IMG_5465_0d599347-a3a0-41a4-91eb-ced4956b317d_onkrvi.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763205734/IMG_5471_vjj2jv.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763205733/IMG_5479_o1dywb.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763205733/IMG_6288_wucmnc.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763205733/main-image-1_57bf9e4e-7ae0-4c83_ig4ri1.webp",
    ],
    price: 549,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description: `A fun-filled activity hamper packed with exciting toys and stationery for kids! Includes a kaleidoscope, puzzle game, sticky wall climbers, cartoon pen, bouncy ball toy, water gun, and more — all arranged beautifully in a premium transparent box. 
    Ideal for return gifts, birthdays, and special celebrations!`,
  },
  {
    id: "LABUBU Dreamland Stationery Gift Set",
    name: "LABUBU Dreamland Stationery Gift Set",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763206589/O1CN01SI3ikk1Pb0ut3k4or__2216680051858-0-cib_e9gofd.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763206589/O1CN01SI3ikk1Pb0ut3k4or__2216680051858-0-cib_e9gofd.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763206576/O1CN01n2o2Ie1Pb0uu5YzK3__2216680051858-0-cib_vtyoft.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763206574/O1CN016IMdN51Pb0uuYpAMQ__2216680051858-0-cib_imubeq.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763206573/O1CN01LVNHTL1Pb0uv5ytVo__2216680051858-0-cib_rygpro.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763206554/O1CN01ohZoOu1Pb0uw1nsle__2216680051858-0-cib_olvgit.webp",
    ],
    price: 139,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description: `Bring imagination to life with the enchanting LABUBU Dreamland Stationery Gift Set. Designed in soothing pastel purples and decorated with adorable LABUBU artwork, this set is perfect for kids who love cute, aesthetic stationery. Each piece has been crafted to make study time more enjoyable and creative.

The box includes a high-quality notebook, smooth-writing pencils, a sharpener, a soft eraser, and a ruler, all coordinated in the same dreamy theme. Whether your child wants to doodle, write, draw, or complete homework, this kit adds a touch of magic to every moment. 
Ideal as a birthday gift, school starter kit, return gift, or everyday stationery bundle, this LABUBU set brings smiles and creativity to kids of all ages.`,
  },
  {
    id: "Cute Stationery Surprise Gift Pouch",
    name: "Cute Stationery Surprise Gift Pouch",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763206827/IMG_6529_07ffc01f-c065-486c-b75d-aa97093e8694_xzbzq1.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763206827/IMG_6529_07ffc01f-c065-486c-b75d-aa97093e8694_xzbzq1.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763206825/IMG_6532_0dc32448-92be-43d8-a8b7-c97c42307a2f_jctwhq.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763206825/IMG_6531_67272e24-3f3d-4da9-b773-c558cc8f7dd9_mavdjv.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763206823/O1CN01elr66A1TNy7s1s9hS__2218300_2_vwcf0n.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763206822/Imageye_66_50798b21-2c96-49a1-aa_3_q4igzg.webp",
    ],
    price: 189,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description: `Give your little guests a return gift they will truly love! This Cute Stationery Surprise Gift Pouch is a beautifully designed, fun-filled stationery combo packed inside an adorable “Thank You” zipper pouch featuring a cute teddy print. It is perfect for birthday return gifts, classroom rewards, parties, and festival gifting for both boys and girls.

This thoughtfully curated set includes a mix of useful, creative, and playful items that keep kids engaged—whether 
they’re drawing, studying, or simply exploring their imagination.`,
  },
  {
    id: "Love Summer Kids Stationery Gift Set – Premium 6-in-1 Return Gift Kit",
    name: "Love Summer Kids Stationery Gift Set – Premium 6-in-1 Return Gift Kit",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763206997/IMG_6417_evzkph.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763206997/IMG_6417_evzkph.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763206995/IMG_6414_db5f3438-200a-4952-8c2d-c3960c838b3e_ujohjc.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763206994/IMG_5345_wia7wq.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763206992/IMG_6418_v5jzpv.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763206991/O1CN01XqXU2D1wVrVbQdFqu__2213307_a936a14d-d5a1-4790-a7da-866871108e5b_tsixn3.webp",
    ],
    price: 265,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description: `Make every celebration brighter with our Love Summer Kids Stationery Gift Set, a thoughtfully curated 6-in-1 combo designed to thrill, engage, and inspire young minds. Packed inside a super-cute LOVE Summer-themed zip pouch, this kit is the perfect blend of creativity, fun, and practicality, making it an ideal choice for birthday return gifts, school events, party giveaways, or festive celebrations.

Each item in this set is handpicked to offer kids a joyful and meaningful experience. From the adorable daisy slap band watch that kids love to wear, to the cute animal mini notepad perfect for doodles and tiny notes, every component sparks imagination. The premium gel pen ensures smooth writing, while the cartoon-themed ruler set helps make learning more colourful and enjoyable. The combo also includes a bright highlighter and a fun character eraser, making homework and study sessions much more exciting.

The transparent zip pouch is not only visually appealing with its summer-style flamingo, fruit, and leaf designs, but also reusable and durable—perfect for carrying stationery, accessories, or little treasures. Whether it's for school use or gifting, this set packs delight and value in every piece.

Bring smiles, creativity, and colour to your child’s world with the Love Summer Kids Stationery Gift Set—a perfect mix of cute, useful, and fun!`,
  },
  {
    id: "Little Artist Pencil & Scissors Combo Set",
    name: "Little Artist Pencil & Scissors Combo Set",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763207290/H91c147237161498eadfbf4c7834ec986R_lnl2q0.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763207290/H91c147237161498eadfbf4c7834ec986R_lnl2q0.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763207289/Hc81ad32a202e446aa29b24977368f623M_d0kuur.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763207287/Hc23849b2f4764b16b1c52fabb135f823I_motwl4.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763207286/Haa187b1f413d42cb9067013a30adb57bt_sojlrs.webp",
    ],
    price: 420,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description: `Make learning fun, safe, and exciting with our Kids Premium Stationery Gift Set, specially designed for young learners. This adorable stationery combo is packed with colorful essentials that encourage creativity, early learning, and independent classroom habits.

The set includes child-friendly scissors, featuring soft plastic blades that are safe for little hands and cannot cut skin—perfect for craft time, paper cutting practice, and school activities. Paired with a manual pencil sharpener, designed for smooth sharpening and easy waste collection, 
it helps children learn responsibility and organizational skills.`,
  },

  {
    id: "Dino Gift Bag with Stationery Kit",
    name: "Dino Gift Bag with Stationery Kit",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763207566/IMG_6392_pvrgjy.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763207566/IMG_6392_pvrgjy.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763207521/IMG_9694_tgjmuw.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763207522/IMG_6395_o4aiz0.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763207521/IMG_1340_zltl57.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763207520/O1CN01uh7ve81NGHVVBlJjm__9956115_957ccd3d-ef54-4792-bc21-2cde3a4273e5_adms2h.webp",
    ],
    price: 440,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description: `Make gifting fun and exciting with our Super Dino Kids Gift Bag, designed with adorable dinosaur characters and vibrant jungle themes. This premium-quality gift bag comes filled with useful stationery items kids love! Perfect for birthday return gifts, school events, surprise hampers, and festive gifting.

Inside, children will find colorful pencils, a cute notebook, themed stationery kit, chocolate treat, and more—making it the perfect blend of fun, creativity, 
and delight. Durable, attractive, and guaranteed to bring smiles!`,
  },

  {
    id: "Blossom Accessory Gift Bag – Premium Girls’ Hair & Style Kit",
    name: "Blossom Accessory Gift Bag – Premium Girls’ Hair & Style Kit",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763208287/SnapInsta.to_522834318_17884207992344316_4352140203840561714_n_uabl5u.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763208287/SnapInsta.to_522834318_17884207992344316_4352140203840561714_n_uabl5u.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763208286/SnapInsta.to_520709316_17884208010344316_5571801005896678952_n_ijanxf.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763208266/SnapInsta.to_520601273_17884208001344316_7844249456376750781_n_1_g1jbya.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763208287/SnapInsta.to_523328646_17884207995344316_1204399495290249959_n_pywbn9.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763208255/SnapInsta.to_522440508_17884207998344316_6543425516144766152_n_zgqbkx.jpg",
    ],
    price: 410,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description: `A dreamy collection for your little princess! The Blue Blossom Accessory Gift Bag comes filled with elegant satin scrunchies, floral hair clips, pastel accessories, and a cute message card—perfect for birthdays, return gifts, party favors, or everyday styling. 
    Packed in a stylish transparent carry bag, this set adds charm, color, and magic to every outfit.`,
  },

  {
    id: "Girlie Blossom Charm Gift Box – Pink Edition",
    name: "Girlie Blossom Charm Gift Box – Pink Edition",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763208523/SnapInsta.to_523693622_17884207965344316_1471183180627489529_n_1_ex19wo.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763208523/SnapInsta.to_523693622_17884207965344316_1471183180627489529_n_1_ex19wo.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763208523/SnapInsta.to_522614195_17884207962344316_7117415935627191168_n_od0uhu.jpg",
    ],
    price: 340,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description: `The Girlie Blossom Charm Gift Box – Pink Edition is a beautifully curated collection of adorable accessories designed for anyone who loves soft, feminine aesthetics. Packed in a pastel pink box filled with shredded confetti paper, this set includes a variety of cute jewelry, hair accessories, and girly essentials that instantly brighten up any outfit.

Inside the box, you’ll find glossy flower-shaped hair clips in bright pink and orange, silky scrunchies, mini claw clips, and lace-detailed bows that add a touch of charm to your everyday hairstyles. The set also includes delicate necklaces with heart pendants, stylish earrings with pearl and pastel elements, and a cute bracelet accented with girlish pink beads. Each accessory is arranged on decorative cards featuring adorable characters and uplifting messages, making the box visually delightful from the moment it’s opened.

Perfect for birthdays, friendship gifts, or a self-love treat, this box celebrates sweetness, color, and playful style. 
Every item reflects a youthful, happy vibe — ideal for anyone who loves expressing their inner girlie energy.`,
  },
  {
    id: "Cozy Mug & Accessories Gift Box",
    name: "Cozy Mug & Accessories Gift Box",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763209086/Cozy_Mug_Accessories_Gift_Box_odc1fc.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763209086/Cozy_Mug_Accessories_Gift_Box_odc1fc.jpg",
    ],
    price: 499,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description: `The Cozy Mug & Accessories Gift Box is a beautifully curated self-care set designed to bring joy, comfort, and a touch of pastel charm to anyone’s day. Each box features a high-quality ceramic mug paired with soft, cozy socks, adorable floral hair clips, and uplifting mini message cards that add positivity and warmth.

Thoughtfully arranged with shredded filler for an aesthetic presentation, this gift box combines practicality with cuteness — perfect for sipping warm drinks, relaxing at home, or adding a cheerful touch to daily styling. The vibrant flower-shaped clips and pastel hairpins brighten any look, while the knitted socks keep feet warm and comfortable. Every piece is carefully color-matched, making each box visually appealing, unique, and ready to gift without any extra packaging.

Whether it’s for birthdays, thank-you gifts, appreciation surprises, festive gifting, or a sweet gesture “just because,” this box is made to make someone smile. 
A charming blend of comfort, color, and thoughtful details — the perfect little happiness package for someone special.`,
  },
  {
    id: "Deluxe Chocolate Candy Bouquet – Sweet Treat Gift Stick",
    name: "Deluxe Chocolate Candy Bouquet – Sweet Treat Gift Stick",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763209255/Deluxe_Chocolate_Candy_Bouquet_Sweet_Treat_Gift_Stick_bz7kbe.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763209255/Deluxe_Chocolate_Candy_Bouquet_Sweet_Treat_Gift_Stick_bz7kbe.jpg",
    ],
    price: 449,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description: `The Deluxe Chocolate Candy Bouquet is the ultimate sweet surprise for chocolate lovers of all ages. Beautifully arranged on a round base and wrapped in clear cellophane, this edible bouquet features a premium assortment of everyone’s favorite chocolates and candies — including brands like KitKat, Bounty, Twix, Galaxy, Snickers, Mars, Mentos, and more.

Finished with a vibrant red satin ribbon and easy-to-hold stick design, this bouquet adds a fun and festive touch to any celebration. Whether it’s for birthdays, anniversaries, Valentine’s Day, school events, or simply to brighten someone’s day, this chocolate bouquet delivers joy in the most delicious way.

Each piece is securely placed to create a full, attractive arrangement that looks as good as it tastes. 
Ready to gift straight out of the package, it’s the perfect combination of sweetness, creativity, and presentation — guaranteed to bring a big smile to anyone you surprise.`,
  },
  {
    id: "Galaxy Explorer Kids Gift Set – Space Adventure Kit",
    name: "Galaxy Explorer Kids Gift Set – Space Adventure Kit",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763210247/Galaxy_Explorer_Kids_Gift_Set_Space_Adventure_Kit4_g10dbe.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763210247/Galaxy_Explorer_Kids_Gift_Set_Space_Adventure_Kit4_g10dbe.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763210245/Galaxy_Explorer_Kids_Gift_Set_Space_Adventure_Kit3_gnoqd5.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763210243/Galaxy_Explorer_Kids_Gift_Set_Space_Adventure_Kit2_jqb0cq.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763210242/Galaxy_Explorer_Kids_Gift_Set_Space_Adventure_Kit1_vvmnom.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763210242/Galaxy_Explorer_Kids_Gift_Set_Space_Adventure_Kit_v8evvb.jpg",
    ],
    price: 1099,
    category: "occasional-gifts",
    subCategory: "birthday-hamper",
    description: `The Galaxy Explorer Kids Gift Set – Space Adventure Kit is the ultimate all-in-one bundle designed for little astronauts who dream beyond the stars. Packed with colorful, engaging, and space-themed essentials, this gift set inspires creativity, fun, and imagination during school, playtime, or travel.

At the heart of the set is a spacious astronaut-print lunch bag, featuring bright planets, rockets, and a cute space explorer design that instantly captures a child’s curiosity. The kit also includes a matching space-themed water bottle, keeping drinks fresh while adding a fun cosmic vibe.

Kids will love the color pencil set, perfect for drawing galaxies, planets, and their own adventures. The compartment lunch/snack box helps keep small treats organized, while the test-tube style stationery tube adds excitement to storing little pencils or tiny treasures.

For interactive fun, the set includes a space-pattern sensory ball and a Lego-style pencil box with mini blocks to build, play, and learn. Every item is coordinated in bright, cosmic blues that create a theme kids adore.

Perfect as a birthday gift, school starter pack, return gift, or surprise present, this set combines practicality with imagination. It’s not just a gift — it’s a mini space mission packed with joy, curiosity, and endless fun.`,
  },

  // OCCASIONAL - subCategory: farewell
  {
    id: "Golden Elegance Chocolate Gift Box",
    name: "Golden Elegance Chocolate Gift Box",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763365213/Golden_Elegance_Chocolate_Gift_Box_xnioso.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763365213/Golden_Elegance_Chocolate_Gift_Box_xnioso.png",
    ],
    price: 299,
    category: "occasional-gifts",
    subCategory: "farewell",
    description: `Indulge in the charm of luxury with our Golden Elegance Chocolate Gift Box, a perfect blend of style, sweetness, and sophistication. Presented in a pristine white box adorned with a stunning golden satin bow, this delightful set features beautifully wrapped chocolates showcasing an elegant clover-inspired design.

Perfect for weddings, corporate gifting, festive celebrations, anniversaries, or as a thoughtful gesture, this premium chocolate box adds a touch of refined beauty to every moment.

Whether you're gifting someone special or elevating your own celebration, 




the Golden Elegance Chocolate Gift Box promises to leave a lasting impression with its minimalist charm and irresistible sweetness.`,
  },
  {
    id: "Royal Ruby Blossom Thank You Box",
    name: "Royal Ruby Blossom Thank You Box (Pack of 5)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763364070/Royal_Ruby_Blossom_Thank_You_Box_zfawix.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763364070/Royal_Ruby_Blossom_Thank_You_Box_zfawix.jpg",
    ],
    price: 100,
    category: "occasional-gifts",
    subCategory: "farewell",
    description: `Make your celebrations unforgettable with our Royal Ruby Blossom Thank You Box, crafted in a rich maroon shade with luxurious gold detailing. Each box features exquisite floral-inspired sides, adorned with a delicate pearl and satin ribbon bow, creating a stunning blend of sophistication and charm.

Perfect for weddings, engagements, baby showers, festive gifting, return favors, or corporate events, these premium boxes are designed to hold chocolates, dry fruits, candies, or small souvenirs—making every gesture feel special and heartfelt.

Elegant, classy, and crafted with love, the Royal Ruby Blossom Box is the perfect way to say “Thank You” with grace and style.`,
  },

  {
    id: "The Golden Retirement Coffee Hamper",
    name: "The Golden Retirement Coffee Hamper",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763365233/The_Golden_Retirement_Coffee_Hamper_orvgiv.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763365233/The_Golden_Retirement_Coffee_Hamper_orvgiv.jpg",
    ],
    price: 599,
    category: "occasional-gifts",
    subCategory: "farewell",
    description: `Celebrate a beautiful new chapter with our Golden Retirement Coffee Hamper, thoughtfully curated to honor years of dedication, hard work, and memories. Designed in an elegant black and gold theme, this hamper reflects dignity, gratitude, and the joy of new beginnings.

Inside this premium box, tied with a shimmering gold ribbon, your recipient will find:

1. A classy black ceramic mug — perfect for peaceful, slow morning coffees

2. A Nescafé Gold Latte sachet — because retirement deserves a rich, comforting brew

3. Ferrero Rocher chocolates — sweet moments for sweet days ahead

4. Elegant golden floral décor — symbolizing growth, wisdom, and timeless contribution

Whether you’re gifting a colleague, senior, mentor, or loved one, this hamper is the perfect way to say:
“Thank you for your years of service. Enjoy the golden years ahead.”`,
  },

  {
    id: "Blossom Delight Dry Fruit Jar",
    name: "Blossom Delight Dry Fruit Jar (500gram jar`",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763364599/Blossom_Delight_Dry_Fruit_Jar_kerqvu.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763364599/Blossom_Delight_Dry_Fruit_Jar_kerqvu.jpg",
    ],
    price: 499,
    category: "occasional-gifts",
    subCategory: "farewell",
    description: `Celebrate warmth, love, and thoughtful gifting with our Blossom Delight Dry Fruit Jar, beautifully crafted to add charm to any occasion. Filled with premium-quality cashews and almonds, this glass jar is elegantly wrapped in soft pink net and adorned with a rustic raffia bow.

A stunning floral arrangement on top adds a touch of sophistication, making it the perfect gifting choice for festivals, weddings, return favors, baby showers, corporate gifting, or special celebrations.

Graceful, wholesome, and beautifully designed—this jar offers both taste and elegance in one thoughtful package.`,
  },
  {
    id: "Silver-Plated Tortoise Decorative Plate Set (farewell gift)",
    name: "Silver-Plated Tortoise Decorative Plate Set",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763115958/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_8_a2lxb3.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763115958/Return_Gifts_Available_at_very_Reasonable_prices_For_more_information_contact_us9149111034_8_a2lxb3.webp",
    ],
    price: 1999,
    category: "occasional-gifts",
    subCategory: "farewell",
    description: `This beautifully crafted silver-plated tortoise with an intricately designed plate comes in a luxurious velvet box, symbolizing longevity, prosperity, and good fortune. Ideal for wedding return gifts, housewarmings, and festive gifting, it blends tradition with elegance—making it a meaningful keepsake your guests will truly cherish.`,
  },

  {
    id: "Serenity Bamboo & Aroma Candle Gift Set(farewell gift)",
    name: "Serenity Bamboo & Aroma Candle Gift Set",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763188921/51Vhp0luHnL_pxxkf9.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763188921/51Vhp0luHnL_pxxkf9.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763188920/515gnUcgG5L_f3o1m0.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763188920/51-GfVUYOBL_crcjyi.jpg",
    ],
    price: 799,
    category: "occasional-gifts",
    subCategory: "farewell",
    description: `Bring positivity, warmth, and tranquility into any space with our Serenity Bamboo & Aroma Candle Gift Set. Thoughtfully curated, this premium duo combines the timeless charm of a Lucky Bamboo plant with the comforting fragrance of a Mimosa & Cardamom scented candle. The lush green bamboo, presented in a modern glass planter, symbolizes good fortune, growth, and harmony—making it a meaningful addition to homes and workspaces alike.

Complementing the plant’s natural freshness is the elegant scented candle, crafted to fill the room with a soothing blend of floral mimosa and warm cardamom notes. Its luxurious design and calming aroma create a serene atmosphere, perfect for relaxation, meditation, or setting a peaceful mood after a long day.

Ideal for gifting on anniversaries, housewarmings, festivals, or corporate events, this set beautifully blends nature and fragrance into one thoughtful package. A perfect gesture of love, positivity, and well-being.`,
  },

  {
    id: "Royal Peacock Heritage Jar Gift Box",
    name: "Royal Peacock Heritage Jar Gift Box",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763368742/Royal_Peacock_Heritage_Jar_Gift_Box_l3vi5v.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763368742/Royal_Peacock_Heritage_Jar_Gift_Box_l3vi5v.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763368742/Royal_Peacock_Heritage_Jar_Gift_Box2_ld0qce.jpg",
    ],
    price: 799,
    category: "occasional-gifts",
    subCategory: "farewell",
    description: `Celebrate timeless elegance with our Royal Peacock Heritage Jar Gift Box, inspired by the rich artistry of Indian culture. This luxurious box features exquisite hand-painted peacock motifs, blooming lotus designs, and regal golden detailing—making it a true statement piece for any occasion.

Inside, the box opens to reveal two premium jars nestled in a silky golden satin lining, perfect for storing dry fruits, sweets, spices, or artisanal treats. The vibrant artwork continues inside the lid, creating a breathtaking unboxing experience filled with beauty and tradition.

Ideal for weddings, festive gifting, anniversaries, housewarmings, and corporate hampers, 
this gift box blends heritage craftsmanship with modern luxury—making every gift feel special, meaningful, and royal.`,
  },

  {
    id: "Lotus Bloom Dry Fruit Duo Gift Pack",
    name: "Lotus Bloom Dry Fruit Duo Gift Pack",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763368862/Lotus_Bloom_Dry_Fruit_Duo_Gift_Pack_nvdrrr.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763368862/Lotus_Bloom_Dry_Fruit_Duo_Gift_Pack_nvdrrr.jpg",
    ],
    price: 339,
    category: "occasional-gifts",
    subCategory: "farewell",
    description: `Elegant, vibrant, and full of heartfelt warmth, our Lotus Bloom Dry Fruit Duo Gift Pack makes the perfect retirement return gift. Designed with exquisite lotus artwork on a soothing mint-green base, this graceful box holds two premium jars filled with the finest cashews and almonds—symbolizing good health, prosperity, and new beginnings.

Accented with a delicate golden ribbon and a luxe rope handle, it offers a touch of sophistication that perfectly matches the significance of the occasion. Whether you’re thanking colleagues, team members, or guests, this gift pack beautifully conveys appreciation and respect.

Thoughtfully curated to delight both the eyes and the taste buds, 
it stands as a meaningful token of gratitude—celebrating years of service, cherished memories, and the beautiful journey ahead.`,
  },

  // OCCASIONAL - subCategory: picnic-hampers
  {
    id: "Stripes Jute Bag Room Hamper(picnic-hampers)",
    name: "Stripes Jute Bag Room Hamper (picnic-hampers)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951305/Eco-friendly_Rakhi_delight_bag_for_sister_ta0lou.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951305/Eco-friendly_Rakhi_delight_bag_for_sister_ta0lou.webp",
    ],
    price: 630,
    category: "occasional-gifts",
    subCategory: "picnic-hampers",
    description: `Choco Parlour Room Hamper includes :

Lays
Kurkure
Real Juice
Coca Cola Can
Britannia Cake
Doritos
Cadbury Cookies
Paper Boat Aamras
Stripes Jute Bag`,
  },
  {
    id: "Wedding Serenity Hamper(picnic-hampers",
    name: "Wedding Serenity Hamper (picnic-hampers)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951304/IMG_9424_1_srsk9u.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951304/IMG_9424_1_srsk9u.webp",
    ],
    price: 850,
    category: "occasional-gifts",
    subCategory: "picnic-hampers",
    description: `Wedding Room Hamper includes:

Lays Chips
Kurkure
Real Juice
Coca Cola Can
Cake 
Doritos
Cadbury Cookies
Bhujia
Metal Jute Basket - 12 x 6 x 6 inches
Net decoration
Please mention any name personalisation or customisation requirement while checking out. For any other queries drop us a message on Whatsapp, link can be found on the bottom right corner.

Gifting Recommendation:

Immerse your guests in an atmosphere of opulence with our hotel-themed wedding room hampers. From sumptuous bed linens to carefully curated amenities, each item is selected to enhance the comfort and style of their stay.

Why is Wedding Room Hamper the best wedding gift for your guests?

Transform your wedding venue into a haven of luxury and warmth for your guests with our Wedding Room Hampers. Elevate their experience, make them feel truly cherished, and set the stage for unforgettable moments during your joyous celebration. Because every guest deserves to be a part of a love story as beautiful as yours.`,
  },
  {
    id: "Snack Time Bliss Basket hamper (picnic-hampers)",
    name: "Snack Time Bliss Basket hamper (picnic-hampers)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951302/SnackTimeBlissBaskethamper_oamw7t.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951302/SnackTimeBlissBaskethamper_oamw7t.webp",
    ],
    price: 780,
    category: "occasional-gifts",
    subCategory: "picnic-hampers",
    description: `Wedding Room Hamper includes:

Lays
Kurkure
Real Juice
Coca Cola Can
Britannia Cake
Doritos
Cadbury Cookies
Paper Boat Aamras
Organza Festive Tray`,
  },
  {
    id: "The Luxe Picnic Delight Hamper(picnic-hampers)",
    name: "The Luxe Picnic Delight Hamper (picnic-hampers)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763371267/The_Luxe_Picnic_Delight_Hamper_r3af5k.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763371267/The_Luxe_Picnic_Delight_Hamper_r3af5k.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763371266/The_Luxe_Picnic_Delight_Hamper2_uonlnc.webp",
    ],
    price: 3999,
    category: "occasional-gifts",
    subCategory: "picnic-hampers",
    description: `Bring the charm of the outdoors to your gatherings with our Luxe Picnic Delight Hamper, a beautifully curated basket designed for joyful, memorable moments under the open sky. Packed in a stylish woven picnic basket with sturdy leather handles, this hamper is filled with a delightful assortment of gourmet treats, crunchy nuts, artisanal snacks, sweets, and refreshing indulgences—everything you need for a perfect day out.

Thoughtfully adorned with floral décor and neatly arranged for easy serving, each item inside adds warmth, flavour, and convenience to your picnic experience. Whether you're planning a family outing, a romantic date, a weekend escape, or a get-together with friends, this hamper is your go-to companion for good times and great taste.

Celebrate sunshine, laughter, and togetherness with the Luxe Picnic Delight Hamper—your perfect partner for outdoor bliss.`,
  },

  {
    id: "Wild Picnic Buddies Drawstring Pouch Set",
    name: "Wild Picnic Buddies Drawstring Pouch Set",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763371687/Wild_Picnic_Buddies_Drawstring_Pouch_Set_teeopl.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763371687/Wild_Picnic_Buddies_Drawstring_Pouch_Set_teeopl.jpg",
    ],
    price: 499,
    category: "occasional-gifts",
    subCategory: "picnic-hampers",
    description: `Make every outdoor moment crunchy and exciting with our Wild Picnic Munchies Pouch—a cute drawstring bag featuring adorable animal designs like the lion, elephant, monkey, zebra, giraffe, and hippo. Each pouch is filled with a fun assortment of Indian packed snacks such as Kurkure, Lays, Bhujia, Chips, Mini Biscuits, and other kid-friendly munchies, making it the perfect treat for picnics and outings.

Lightweight, reusable, and easy to carry, this soft cotton pouch keeps all snacks neatly packed while adding a playful charm to your picnic setup. The secure drawstring closure ensures your goodies stay safe while the cute animal prints bring joy to everyone around.

Perfect for school picnics, family outings, kids’ birthday return gifts, travel hampers, and fun outdoor events, this munchies pouch adds taste, 
excitement, and adorable style to every adventure.`,
  },

  {
    id: "Jungle Picnic Munch Pack",
    name: "Jungle Picnic Munch Pack",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763371956/Jungle_Picnic_Munch_Pack_nhebc1.jpg",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763371956/Jungle_Picnic_Munch_Pack_nhebc1.jpg",
    ],
    price: 399,
    category: "occasional-gifts",
    subCategory: "picnic-hampers",
    description: `Turn your picnic into a wild adventure with our Jungle Picnic Munch Pack, a fun and exciting snack bag inspired by the cutest safari animals! Each kraft paper bag comes decorated with adorable jungle characters like the monkey, polar bear, and leopard—bringing instant joy to kids and adults alike.

Inside every pack is a delicious mix of Indian snack favourites such as Kurkure, Lays, chips, namkeens, biscuits, and mini treats—perfect for munching during school picnics, outdoor play, family outings, or birthday celebrations.

Lightweight, easy to carry, and full of yummy surprises, these Jungle Picnic Munch Packs make every outdoor moment more delightful and wholesome. A perfect return gift for picnics, kids’ parties, adventure-themed events, and school outings.`,
  },

  {
    id: "Picnic Backpack Snack Pouch",
    name: "Picnic Backpack Snack Pouch (pack of 2)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763372402/Picnic_Backpack_Snack_Pouch5_em642g.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763372402/Picnic_Backpack_Snack_Pouch5_em642g.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763372399/Picnic_Backpack_Snack_Pouch2_pbi7og.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763372400/Picnic_Backpack_Snack_Pouch_bnvebp.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763372399/Picnic_Backpack_Snack_Pouch3_udqe0q.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763372399/Picnic_Backpack_Snack_Pouch4_cy9tqi.webp",
    ],
    price: 699,
    category: "occasional-gifts",
    subCategory: "picnic-hampers",
    description: `Make snack time extra fun with our Picnic Backpack Snack Pouch, designed in an adorable cartoon-style school bag shape that kids instantly fall in love with! With a clear front window to showcase the treats inside, this pouch adds excitement and surprise to every picnic adventure.

Filled with a delightful mix of Indian packed snacks like Kurkure, Lays, chips, mini biscuits, chocolates, and fruity jellies, it’s the perfect pick for school outings, birthday return gifts, travel hampers, and outdoor fun.

Lightweight, resealable, and super cute, this pouch makes munching easy while keeping snacks fresh and organized. 
A playful must-have for little explorers who love tasty treats on the go!`,
  },

  {
    id: "FunPicnic Cartoon Backpack Snack Bag",
    name: "FunPicnic Cartoon Backpack Snack Bag (pack of 2)",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763372801/FunPicnic_Cartoon_Backpack_Snack_Bag_fxodts.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763372801/FunPicnic_Cartoon_Backpack_Snack_Bag_fxodts.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763372801/FunPicnic_Cartoon_Backpack_Snack_Bag2_gwo6zq.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763372801/FunPicnic_Cartoon_Backpack_Snack_Bag3_bp8tmk.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763372801/FunPicnic_Cartoon_Backpack_Snack_Bag4_dpsisf.webp",
    ],
    price: 599,
    category: "occasional-gifts",
    subCategory: "picnic-hampers",
    description: `Make every picnic extra joyful with our FunPicnic Cartoon Backpack Snack Bag, the cutest treat pack kids will absolutely love! Designed to look like a colorful cartoon school bag, these pouches come in bright, playful colours and feature a clear window that reveals all the yummy goodies inside.

Each bag is filled with a mix of kid-favourite Indian snacks such as Kurkure, Lays, chips, biscuits, chocolates, jellies, and more—perfect for outdoor fun, school picnics, birthday parties, and adventure-filled days.

Lightweight, resealable, and super stylish, these snack bags keep treats fresh while adding excitement to every moment. Whether it’s for a group picnic, a classroom outing, or a return gift, this backpack-shaped snack pouch is sure to bring big smiles and happy munching!`,
  },

  // === OCCASIONAL ITEMS END ===

  // === FESTIVAL ITEMS (festival-gifts) START ===

  // Diwali Gifts
  {
    id: "fest-diwali-1",
    name: "Diwali Deluxe Hamper",
    image: "https://picsum.photos/seed/fest-diwali-1/600/400",
    images: [],
    price: 1999,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description:
      "A celebratory Diwali hamper with sweets, diyas and dry fruits.",
  },
  {
    id: "fest-diwali-2",
    name: "Diwali Sweets & Decor Box",
    image: "https://picsum.photos/seed/fest-diwali-2/600/400",
    images: [],
    price: 1299,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: "Traditional sweets and decor items for Diwali celebrations.",
  },
  {
    id: "fest-diwali-3",
    name: "Diwali Corporate Hamper",
    image: "https://picsum.photos/seed/fest-diwali-3/600/400",
    images: [],
    price: 2499,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: "Premium Diwali hamper ideal for corporate gifting.",
  },
  {
    id: "fest-diwali-4",
    name: "Diwali Mini Gift Set",
    image: "https://picsum.photos/seed/fest-diwali-4/600/400",
    images: [],
    price: 699,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: "Compact Diwali set with sweets and small diyas.",
  },

  // Holi Hampers
  {
    id: "fest-holi-1",
    name: "Holi Colour & Sweets Hamper",
    image: "https://picsum.photos/seed/fest-holi-1/600/400",
    images: [],
    price: 899,
    category: "festival-gifts",
    subCategory: "holi-hampers",
    description: "Bright Holi hamper with gujiyas and colour packs.",
  },
  {
    id: "fest-holi-2",
    name: "Holi Family Hamper",
    image: "https://picsum.photos/seed/fest-holi-2/600/400",
    images: [],
    price: 1199,
    category: "festival-gifts",
    subCategory: "holi-hampers",
    description: "A family-sized Holi hamper with sweets and colours.",
  },
  {
    id: "fest-holi-3",
    name: "Holi Kids Pack",
    image: "https://picsum.photos/seed/fest-holi-3/600/400",
    images: [],
    price: 599,
    category: "festival-gifts",
    subCategory: "holi-hampers",
    description: "Fun Holi pack for kids with safe colours and treats.",
  },
  {
    id: "fest-holi-4",
    name: "Holi Gourmet Hamper",
    image: "https://picsum.photos/seed/fest-holi-4/600/400",
    images: [],
    price: 1499,
    category: "festival-gifts",
    subCategory: "holi-hampers",
    description: "Gourmet sweets and savoury snacks perfect for Holi.",
  },

  // Raksha Bandhan Hampers
  {
    id: "fest-raksha-1",
    name: "Raksha Bandhan Keepsake Hamper",
    image: "https://picsum.photos/seed/fest-raksha-1/600/400",
    images: [],
    price: 1099,
    category: "festival-gifts",
    subCategory: "raksha-bandhan-hampers",
    description:
      "A thoughtful Raksha Bandhan set with sweets and gift keepsakes.",
  },
  {
    id: "fest-raksha-2",
    name: "Raksha Sibling Hamper",
    image: "https://picsum.photos/seed/fest-raksha-2/600/400",
    images: [],
    price: 899,
    category: "festival-gifts",
    subCategory: "raksha-bandhan-hampers",
    description: "Sweet hampers curated especially for siblings.",
  },
  {
    id: "fest-raksha-3",
    name: "Raksha Premium Gift Box",
    image: "https://picsum.photos/seed/fest-raksha-3/600/400",
    images: [],
    price: 1599,
    category: "festival-gifts",
    subCategory: "raksha-bandhan-hampers",
    description: "Premium box with chocolates and keepsakes.",
  },
  {
    id: "fest-raksha-4",
    name: "Raksha Classic Set",
    image: "https://picsum.photos/seed/fest-raksha-4/600/400",
    images: [],
    price: 699,
    category: "festival-gifts",
    subCategory: "raksha-bandhan-hampers",
    description: "Classic rakhi set with sweets and a small gift.",
  },

  // Eid Gifts
  {
    id: "fest-eid-1",
    name: "Eid Celebration Box",
    image: "https://picsum.photos/seed/fest-eid-1/600/400",
    images: [],
    price: 1299,
    category: "festival-gifts",
    subCategory: "eid-gifts",
    description: "Traditional Eid sweets and savory treats in a beautiful box.",
  },
  {
    id: "fest-eid-2",
    name: "Eid Family Hamper",
    image: "https://picsum.photos/seed/fest-eid-2/600/400",
    images: [],
    price: 1799,
    category: "festival-gifts",
    subCategory: "eid-gifts",
    description: "Large Eid hamper perfect for family gatherings.",
  },
  {
    id: "fest-eid-3",
    name: "Eid Sweets Pack",
    image: "https://picsum.photos/seed/fest-eid-3/600/400",
    images: [],
    price: 799,
    category: "festival-gifts",
    subCategory: "eid-gifts",
    description: "Box of assorted traditional sweets for Eid.",
  },
  {
    id: "fest-eid-4",
    name: "Eid Deluxe Hamper",
    image: "https://picsum.photos/seed/fest-eid-4/600/400",
    images: [],
    price: 2199,
    category: "festival-gifts",
    subCategory: "eid-gifts",
    description: "Deluxe Eid hamper with premium treats and dates.",
  },

  // Christmas Gifts
  {
    id: "fest-christmas-1",
    name: "Christmas Gift Hamper",
    image: "https://picsum.photos/seed/fest-christmas-1/600/400",
    images: [],
    price: 1599,
    category: "festival-gifts",
    subCategory: "christmas-gifts",
    description: "Festive Christmas hamper with cookies, chocolates and decor.",
  },
  {
    id: "fest-christmas-2",
    name: "Christmas Family Box",
    image: "https://picsum.photos/seed/fest-christmas-2/600/400",
    images: [],
    price: 1999,
    category: "festival-gifts",
    subCategory: "christmas-gifts",
    description: "Family-sized Christmas hamper with assorted treats.",
  },
  {
    id: "fest-christmas-3",
    name: "Christmas Cookies & More",
    image: "https://picsum.photos/seed/fest-christmas-3/600/400",
    images: [],
    price: 899,
    category: "festival-gifts",
    subCategory: "christmas-gifts",
    description: "A selection of festive cookies and sweet treats.",
  },
  {
    id: "fest-christmas-4",
    name: "Christmas Premium Hamper",
    image: "https://picsum.photos/seed/fest-christmas-4/600/400",
    images: [],
    price: 2499,
    category: "festival-gifts",
    subCategory: "christmas-gifts",
    description: "Premium hamper with chocolates, wine and decor items.",
  },

  // New Year Gifts
  {
    id: "fest-newyear-1",
    name: "New Year Celebration Pack",
    image: "https://picsum.photos/seed/fest-newyear-1/600/400",
    images: [],
    price: 1399,
    category: "festival-gifts",
    subCategory: "new-year-gifts",
    description: "Ring in the New Year with snacks and celebratory treats.",
  },
  {
    id: "fest-newyear-2",
    name: "New Year Party Box",
    image: "https://picsum.photos/seed/fest-newyear-2/600/400",
    images: [],
    price: 1599,
    category: "festival-gifts",
    subCategory: "new-year-gifts",
    description: "Party-ready snacks and treats for New Year celebrations.",
  },
  {
    id: "fest-newyear-3",
    name: "New Year Gourmet Set",
    image: "https://picsum.photos/seed/fest-newyear-3/600/400",
    images: [],
    price: 1799,
    category: "festival-gifts",
    subCategory: "new-year-gifts",
    description: "Gourmet selection to welcome the New Year.",
  },
  {
    id: "fest-newyear-4",
    name: "New Year Mini Pack",
    image: "https://picsum.photos/seed/fest-newyear-4/600/400",
    images: [],
    price: 799,
    category: "festival-gifts",
    subCategory: "new-year-gifts",
    description: "Small celebratory pack ideal for gifting.",
  },

  // Navratri Gifts
  {
    id: "fest-navratri-1",
    name: "Navratri Festive Hamper",
    image: "https://picsum.photos/seed/fest-navratri-1/600/400",
    images: [],
    price: 1199,
    category: "festival-gifts",
    subCategory: "navratri-gifts",
    description: "Seasonal Navratri hamper with traditional sweets and snacks.",
  },
  {
    id: "fest-navratri-2",
    name: "Navratri Family Box",
    image: "https://picsum.photos/seed/fest-navratri-2/600/400",
    images: [],
    price: 1399,
    category: "festival-gifts",
    subCategory: "navratri-gifts",
    description: "Family-sized Navratri hamper with regional treats.",
  },
  {
    id: "fest-navratri-3",
    name: "Navratri Sweets Pack",
    image: "https://picsum.photos/seed/fest-navratri-3/600/400",
    images: [],
    price: 899,
    category: "festival-gifts",
    subCategory: "navratri-gifts",
    description: "Assorted sweets for Navratri celebrations.",
  },
  {
    id: "fest-navratri-4",
    name: "Navratri Premium Hamper",
    image: "https://picsum.photos/seed/fest-navratri-4/600/400",
    images: [],
    price: 1999,
    category: "festival-gifts",
    subCategory: "navratri-gifts",
    description: "Premium hamper with festive specialties.",
  },

  // Thanksgiving Gifts
  {
    id: "fest-thanksgiving-1",
    name: "Thanksgiving Gourmet Box",
    image: "https://picsum.photos/seed/fest-thanksgiving-1/600/400",
    images: [],
    price: 1499,
    category: "festival-gifts",
    subCategory: "thanksgiving-gifts",
    description: "Gourmet hamper perfect for Thanksgiving gatherings.",
  },
  {
    id: "fest-thanksgiving-2",
    name: "Thanksgiving Family Hamper",
    image: "https://picsum.photos/seed/fest-thanksgiving-2/600/400",
    images: [],
    price: 1799,
    category: "festival-gifts",
    subCategory: "thanksgiving-gifts",
    description: "Family-sized hamper for a Thanksgiving feast.",
  },
  {
    id: "fest-thanksgiving-3",
    name: "Thanksgiving Treats Box",
    image: "https://picsum.photos/seed/fest-thanksgiving-3/600/400",
    images: [],
    price: 999,
    category: "festival-gifts",
    subCategory: "thanksgiving-gifts",
    description: "A selection of seasonal treats for Thanksgiving.",
  },
  {
    id: "fest-thanksgiving-4",
    name: "Thanksgiving Deluxe Hamper",
    image: "https://picsum.photos/seed/fest-thanksgiving-4/600/400",
    images: [],
    price: 2299,
    category: "festival-gifts",
    subCategory: "thanksgiving-gifts",
    description: "Deluxe hamper with gourmet specialties.",
  },

  // Valentine's Day Gifts
  {
    id: "fest-valentine-1",
    name: "Valentine's Romantic Hamper",
    image: "https://picsum.photos/seed/fest-valentine-1/600/400",
    images: [],
    price: 999,
    category: "festival-gifts",
    subCategory: "valentines-day-gifts",
    description: "A romantic hamper with chocolates and a keepsake card.",
  },
  {
    id: "fest-valentine-2",
    name: "Valentine's Couple Box",
    image: "https://picsum.photos/seed/fest-valentine-2/600/400",
    images: [],
    price: 1299,
    category: "festival-gifts",
    subCategory: "valentines-day-gifts",
    description: "Couples' gift box with sweets and a card.",
  },
  {
    id: "fest-valentine-3",
    name: "Valentine's Chocolate Hamper",
    image: "https://picsum.photos/seed/fest-valentine-3/600/400",
    images: [],
    price: 799,
    category: "festival-gifts",
    subCategory: "valentines-day-gifts",
    description: "Chocolate-focused hamper perfect for Valentine's Day.",
  },
  {
    id: "fest-valentine-4",
    name: "Valentine's Premium Set",
    image: "https://picsum.photos/seed/fest-valentine-4/600/400",
    images: [],
    price: 1699,
    category: "festival-gifts",
    subCategory: "valentines-day-gifts",
    description: "Premium romantic hamper with keepsakes and treats.",
  },

  // Easter Hampers
  {
    id: "fest-easter-1",
    name: "Easter Sweets Hamper",
    image: "https://picsum.photos/seed/fest-easter-1/600/400",
    images: [],
    price: 799,
    category: "festival-gifts",
    subCategory: "easter-hampers",
    description: "Easter hamper with themed sweets and goodies.",
  },
  {
    id: "fest-easter-2",
    name: "Easter Family Box",
    image: "https://picsum.photos/seed/fest-easter-2/600/400",
    images: [],
    price: 999,
    category: "festival-gifts",
    subCategory: "easter-hampers",
    description: "Family-friendly Easter hamper with treats.",
  },
  {
    id: "fest-easter-3",
    name: "Easter Kids Pack",
    image: "https://picsum.photos/seed/fest-easter-3/600/400",
    images: [],
    price: 599,
    category: "festival-gifts",
    subCategory: "easter-hampers",
    description: "Kids-focused Easter pack with chocolates and toys.",
  },
  {
    id: "fest-easter-4",
    name: "Easter Gourmet Hamper",
    image: "https://picsum.photos/seed/fest-easter-4/600/400",
    images: [],
    price: 1199,
    category: "festival-gifts",
    subCategory: "easter-hampers",
    description: "Gourmet Easter hamper with premium sweets.",
  },

  // Lohri Hampers
  {
    id: "fest-lohri-1",
    name: "Lohri Traditional Hamper",
    image: "https://picsum.photos/seed/fest-lohri-1/600/400",
    images: [],
    price: 899,
    category: "festival-gifts",
    subCategory: "lohri-hampers",
    description: "Lohri hamper with traditional treats and sesame sweets.",
  },
  {
    id: "fest-lohri-2",
    name: "Lohri Family Hamper",
    image: "https://picsum.photos/seed/fest-lohri-2/600/400",
    images: [],
    price: 1199,
    category: "festival-gifts",
    subCategory: "lohri-hampers",
    description: "Family-sized Lohri hamper with sweet treats.",
  },
  {
    id: "fest-lohri-3",
    name: "Lohri Sweets Pack",
    image: "https://picsum.photos/seed/fest-lohri-3/600/400",
    images: [],
    price: 699,
    category: "festival-gifts",
    subCategory: "lohri-hampers",
    description: "Traditional sweets pack for Lohri celebrations.",
  },
  {
    id: "fest-lohri-4",
    name: "Lohri Premium Hamper",
    image: "https://picsum.photos/seed/fest-lohri-4/600/400",
    images: [],
    price: 1499,
    category: "festival-gifts",
    subCategory: "lohri-hampers",
    description: "Premium Lohri hamper with curated items.",
  },

  // Onam Hampers
  {
    id: "fest-onam-1",
    name: "Onam Celebration Hamper",
    image: "https://picsum.photos/seed/fest-onam-1/600/400",
    images: [],
    price: 1299,
    category: "festival-gifts",
    subCategory: "onam-hampers",
    description: "Onam hamper with regional sweets and curated gifts.",
  },
  {
    id: "fest-onam-2",
    name: "Onam Family Hamper",
    image: "https://picsum.photos/seed/fest-onam-2/600/400",
    images: [],
    price: 1599,
    category: "festival-gifts",
    subCategory: "onam-hampers",
    description: "Family-sized Onam hamper with traditional items.",
  },
  {
    id: "fest-onam-3",
    name: "Onam Sweets Box",
    image: "https://picsum.photos/seed/fest-onam-3/600/400",
    images: [],
    price: 999,
    category: "festival-gifts",
    subCategory: "onam-hampers",
    description: "Sweets box curated for Onam festivities.",
  },
  {
    id: "fest-onam-4",
    name: "Onam Premium Hamper",
    image: "https://picsum.photos/seed/fest-onam-4/600/400",
    images: [],
    price: 1999,
    category: "festival-gifts",
    subCategory: "onam-hampers",
    description: "Premium Onam hamper with regional specialties.",
  },

  // === FESTIVAL ITEMS END ===

  // === CHARITY ITEMS (charity-gifts) START ===

  // Charity Hampers for Kids
  {
    id: "charity-kids-1",
    name: "Kids Charity Hamper - Essentials A",
    image: "https://picsum.photos/seed/charity-kids-1/600/400",
    images: [],
    price: 499,
    category: "charity-gifts",
    subCategory: "kids",
    description: "Basic essentials and treats for kids in need.",
  },
  {
    id: "charity-kids-2",
    name: "Kids Charity Hamper - Essentials B",
    image: "https://picsum.photos/seed/charity-kids-2/600/400",
    images: [],
    price: 599,
    category: "charity-gifts",
    subCategory: "kids",
    description: "Clothing and snacks packed for children.",
  },
  {
    id: "charity-kids-3",
    name: "Kids Activity & Snack Pack",
    image: "https://picsum.photos/seed/charity-kids-3/600/400",
    images: [],
    price: 549,
    category: "charity-gifts",
    subCategory: "kids",
    description: "Fun activity set with educational goodies and snacks.",
  },
  {
    id: "charity-kids-4",
    name: "Kids Warm Winter Pack",
    image: "https://picsum.photos/seed/charity-kids-4/600/400",
    images: [],
    price: 699,
    category: "charity-gifts",
    subCategory: "kids",
    description: "Warm clothing and treats for colder months.",
  },

  // Charity Hampers for Teens
  {
    id: "charity-teens-1",
    name: "Teens Care Pack - Study & Snacks A",
    image: "https://picsum.photos/seed/charity-teens-1/600/400",
    images: [],
    price: 699,
    category: "charity-gifts",
    subCategory: "teens",
    description: "Study supplies and nutritious snacks for teens.",
  },
  {
    id: "charity-teens-2",
    name: "Teens Care Pack - Study & Snacks B",
    image: "https://picsum.photos/seed/charity-teens-2/600/400",
    images: [],
    price: 749,
    category: "charity-gifts",
    subCategory: "teens",
    description: "Back-to-school essentials and snack items.",
  },
  {
    id: "charity-teens-3",
    name: "Teens Hygiene & Snack Box",
    image: "https://picsum.photos/seed/charity-teens-3/600/400",
    images: [],
    price: 649,
    category: "charity-gifts",
    subCategory: "teens",
    description: "Hygiene essentials plus healthy snack options.",
  },
  {
    id: "charity-teens-4",
    name: "Teens Essentials Pack",
    image: "https://picsum.photos/seed/charity-teens-4/600/400",
    images: [],
    price: 799,
    category: "charity-gifts",
    subCategory: "teens",
    description: "A comprehensive pack for teen needs.",
  },

  // Charity Hampers for Adults
  {
    id: "charity-adults-1",
    name: "Adults Care Hamper - Basics",
    image: "https://picsum.photos/seed/charity-adults-1/600/400",
    images: [],
    price: 899,
    category: "charity-gifts",
    subCategory: "adults",
    description: "Basic food and hygiene essentials for adults.",
  },
  {
    id: "charity-adults-2",
    name: "Adults Wellness Pack",
    image: "https://picsum.photos/seed/charity-adults-2/600/400",
    images: [],
    price: 999,
    category: "charity-gifts",
    subCategory: "adults",
    description: "Nutritious snacks and wellness items for adults.",
  },
  {
    id: "charity-adults-3",
    name: "Adults Family Essentials",
    image: "https://picsum.photos/seed/charity-adults-3/600/400",
    images: [],
    price: 1199,
    category: "charity-gifts",
    subCategory: "adults",
    description: "Family-focused essentials and food items.",
  },
  {
    id: "charity-adults-4",
    name: "Adults Comfort Box",
    image: "https://picsum.photos/seed/charity-adults-4/600/400",
    images: [],
    price: 1099,
    category: "charity-gifts",
    subCategory: "adults",
    description: "Comfort items and packaged food for adults.",
  },

  // Charity Hampers for Elderly
  {
    id: "charity-elderly-1",
    name: "Elderly Care Hamper - Essentials",
    image: "https://picsum.photos/seed/charity-elderly-1/600/400",
    images: [],
    price: 999,
    category: "charity-gifts",
    subCategory: "elderly",
    description: "Gentle-care and nutrition packs for the elderly.",
  },
  {
    id: "charity-elderly-2",
    name: "Elderly Comfort Box",
    image: "https://picsum.photos/seed/charity-elderly-2/600/400",
    images: [],
    price: 1199,
    category: "charity-gifts",
    subCategory: "elderly",
    description: "Warm clothing and gentle snacks for seniors.",
  },
  {
    id: "charity-elderly-3",
    name: "Elderly Wellness Pack",
    image: "https://picsum.photos/seed/charity-elderly-3/600/400",
    images: [],
    price: 1299,
    category: "charity-gifts",
    subCategory: "elderly",
    description: "Health-focused essentials and easy-to-eat foods.",
  },
  {
    id: "charity-elderly-4",
    name: "Elderly Care Premium",
    image: "https://picsum.photos/seed/charity-elderly-4/600/400",
    images: [],
    price: 1499,
    category: "charity-gifts",
    subCategory: "elderly",
    description: "Premium comfort and care items for elderly recipients.",
  },

  // Special Kids Charity Hampers
  {
    id: "charity-specialkids-1",
    name: "Special Kids Sensory Pack",
    image: "https://picsum.photos/seed/charity-specialkids-1/600/400",
    images: [],
    price: 899,
    category: "charity-gifts",
    subCategory: "special-kids",
    description: "Sensory toys and gentle snacks for special-needs kids.",
  },
  {
    id: "charity-specialkids-2",
    name: "Special Kids Care Box",
    image: "https://picsum.photos/seed/charity-specialkids-2/600/400",
    images: [],
    price: 999,
    category: "charity-gifts",
    subCategory: "special-kids",
    description: "Tailored care items and treats for special kids.",
  },
  {
    id: "charity-specialkids-3",
    name: "Special Kids Activity Set",
    image: "https://picsum.photos/seed/charity-specialkids-3/600/400",
    images: [],
    price: 799,
    category: "charity-gifts",
    subCategory: "special-kids",
    description: "Engaging activity set suitable for varied abilities.",
  },
  {
    id: "charity-specialkids-4",
    name: "Special Kids Care Premium",
    image: "https://picsum.photos/seed/charity-specialkids-4/600/400",
    images: [],
    price: 1199,
    category: "charity-gifts",
    subCategory: "special-kids",
    description: "Premium sets with supportive care items.",
  },

  // Charity Hampers for Widows
  {
    id: "charity-widows-1",
    name: "Widows Support Hamper A",
    image: "https://picsum.photos/seed/charity-widows-1/600/400",
    images: [],
    price: 899,
    category: "charity-gifts",
    subCategory: "widows",
    description: "Supportive packages with essentials and comfort items.",
  },
  {
    id: "charity-widows-2",
    name: "Widows Support Hamper B",
    image: "https://picsum.photos/seed/charity-widows-2/600/400",
    images: [],
    price: 999,
    category: "charity-gifts",
    subCategory: "widows",
    description: "Care and support items for widows and families.",
  },
  {
    id: "charity-widows-3",
    name: "Widows Essentials Box",
    image: "https://picsum.photos/seed/charity-widows-3/600/400",
    images: [],
    price: 799,
    category: "charity-gifts",
    subCategory: "widows",
    description: "Essentials kit with food and hygiene items.",
  },
  {
    id: "charity-widows-4",
    name: "Widows Comfort Hamper",
    image: "https://picsum.photos/seed/charity-widows-4/600/400",
    images: [],
    price: 1299,
    category: "charity-gifts",
    subCategory: "widows",
    description: "Comforting hamper with treats and a keepsake.",
  },

  // All-Age Inclusive Charity Hampers
  {
    id: "charity-allage-1",
    name: "All-Age Inclusive Hamper - Basics",
    image: "https://picsum.photos/seed/charity-allage-1/600/400",
    images: [],
    price: 999,
    category: "charity-gifts",
    subCategory: "all-age-inclusive",
    description: "Inclusive hamper designed for recipients of any age.",
  },
  {
    id: "charity-allage-2",
    name: "All-Age Family Hamper",
    image: "https://picsum.photos/seed/charity-allage-2/600/400",
    images: [],
    price: 1299,
    category: "charity-gifts",
    subCategory: "all-age-inclusive",
    description: "Family-sized inclusive hamper with mixed items.",
  },
  {
    id: "charity-allage-3",
    name: "All-Age Essentials Box",
    image: "https://picsum.photos/seed/charity-allage-3/600/400",
    images: [],
    price: 899,
    category: "charity-gifts",
    subCategory: "all-age-inclusive",
    description: "Essentials and treats suitable for diverse recipients.",
  },
  {
    id: "charity-allage-4",
    name: "All-Age Premium Hamper",
    image: "https://picsum.photos/seed/charity-allage-4/600/400",
    images: [],
    price: 1599,
    category: "charity-gifts",
    subCategory: "all-age-inclusive",
    description: "Premium inclusive hamper with curated items.",
  },
  {
    id: "The Luxury Family Feast Hamper",
    name: "The Luxury Family Feast Hamper",
    image: "https://i.ibb.co/0psvzhyJ/The-Family-Feast-Collections.png",
    price: 3599,
    originalPrice: 3999,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Super Luxury Box
• One Jar of Besan Laddu
• One Jar of Dryfruits Laddu
• Three Jars of Dried Fruits
• Two Jars of Potato Wafers
• One Box of Chocolate
• Lord Ganesha and Lakshmi Idol (Brass/Metal)
• Decorative Diya - 2 pcs
• Sweets Design Candle (Optional)
• Copper Water Bottle
• Premium Greeting Card
• Lotus Wall Hangings - 2 pcs`,
  },
  {
    id: "The Jute Blessing",
    name: "The Jute Blessing",
    image: "https://i.ibb.co/LhZjYccG/The-Jute-Blessing.png",
    price: 1599,
    originalPrice: 1867,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Woven Basket
• Decorative Diyas-5pcs
• Cracker DEsign Chocolates-10pcs
• Homemaid Chips-200gms
• Decorative Flower Glass jar
• One Box of Chocolate
• Lotus Flower Wall Hanging
• Custom Note card
• Poutpuri
• Besan Laddu-250gms`,
  },
  {
    id: "The Harmony",
    name: "The Harmony",
    image: "https://i.ibb.co/Wb8ySyn/image.png",
    price: 1299,
    originalPrice: 1499,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Decorative Diyas-1pcs
• Assorted Chocolates-10pcs
• Jar of Crunchy Nuts
• Rich Cookies
• Lotus Flower Wall Hanging-2pcs
• Custom Note card`,
  },
  {
    id: "The Excelare",
    name: "The Excelare",
    image: "https://i.ibb.co/KjXRLG5v/The-Excelcare.png",
    price: 1499,
    originalPrice: 1699,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Brass Diyas-2pcs
• Assorted Chocolates
• Poutpuri
• Besan Laddu & Chocolates-250gms
• Custom Note card`,
  },
  {
    id: "The Festival of Flavours Box",
    name: "The Festival of Flavours Box",
    image: "https://i.ibb.co/jk5g0MQf/The-Festival-of-flovour-Box.png",
    price: 1199,
    originalPrice: 1399,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Golden Candle Holder
• Assorted Chocolates
• Poutpuri
• cashews with jute pouch
• Almonds with jute pouch
• Custom Note card
• Lotus Flower Wall hanging`,
  },
  {
    id: "The Tyohaar Treat",
    name: "The Tyohaar Treat",
    image: "https://i.ibb.co/twwrChs6/The-Tyohaar-Treet.png",
    price: 1299,
    originalPrice: 1499,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Golden Candle Holder
• Assorted Chocolates
• Choco Chips-8pcs
• Nuts with jute pouch
• Glass Bottle with jute pouch
• Custom Note card
• Lotus Flower Wall hanging`,
  },
  {
    id: "The Nutty Affair",
    name: "The Nutty Affair",
    image: "https://i.ibb.co/zhN37V7s/The-Nutty-Affair.png",
    price: 1299,
    originalPrice: 1499,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Jar of Cashews
• Jar of Assorted Chocolates
• Jar of Raisins
• Rich Cookies
• Diya & Jyoti
• Custom Note card`,
  },
  {
    id: "The Global Tech",
    name: "The Global Tech",
    image: "https://i.ibb.co/gM0qwzp8/Global-Tech.png",
    price: 1299,
    originalPrice: 1499,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Jute bag of Cashews
• Jute bag of Pistachio
• Jute bag of Almonds
• Assorted Chocolates- 6pcs
• Choco Chips Cookies-8pcs
• Teracotta Diya - 2pcs
• Custom Note card`,
  },
  {
    id: "Kongsberg",
    name: "Kongsberg",
    image: "https://i.ibb.co/5xMTzLDP/Koonsberg.png",
    price: 1199,
    originalPrice: 1399,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Jute bag of Almonds
• Jute bag of Cashews
• Phool Dhoop
• Wooden Block Diya
• Lotus Flower Wall hanging-2pcs
• Flower wax candles
• Custom Note card`,
  },
  {
    id: "A Sweet Diwali",
    name: "A Sweet Diwali",
    image: "https://i.ibb.co/k6zDkSFX/A-sweet-Diwali.png",
    price: 1399,
    originalPrice: 1599,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Jar of Cashews
• Jar of Pistachio
• Jar of Almonds
• Jar of Raisins
• Assorted Chocolates- 15pcs
• Custom Note card`,
  },
  {
    id: "The Festive Edit",
    name: "The Festive Edit",
    image: "https://i.ibb.co/PGYZW02d/The-Festive-Edit.png",
    price: 1199,
    originalPrice: 1499,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Jar of Crunchy Nuts
• Copper Bottle - 500ml
��� Besan Laddu-50gms
• Lotus Flower Wall hanging - 2pcs
• Decorative Diya / Scented Candle`,
  },
  {
    id: "Homelane",
    name: "Homelane",
    image: "https://i.ibb.co/wNFNPvR1/Homelane.png",
    price: 920,
    originalPrice: 1299,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Terracotta Diya - 2pcs
• Jute bag of Almonds
• Besan Laddu-50gms
• Lotus Flower Wall hanging - 2pcs
• Assorted Chocolates- 6pcs
• Decorative Diya / Scented Candle`,
  },
  {
    id: "The Flavour & Fastivity",
    name: "The Flavour & Fastivity",
    image: "https://i.ibb.co/rGMYJ7PS/The-Flavour-Fastive.jpg",
    price: 899,
    originalPrice: 1299,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Crunchy nuts
• Golden Candle holder
• Besan Laddu-50gms
• Lotus Flower Wall hanging - 2pcs
• Assorted Chocolates
• Custom Note Card
• Decorative Diya / Scented Candle`,
  },
  {
    id: "Diwali Dhamaka",
    name: "Diwali Dhamaka",
    image: "https://i.ibb.co/d4bDLG6r/diwali-dham-AKA.webp",
    price: 879,
    originalPrice: 1199,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Phool Dhoop
• A Metal Diya Holder
• Lotus Flower Wall hanging - 2pcs
• Assorted Dry Fruits- 3 jars
• Custom Note Card`,
  },
  {
    id: "The Scrumptious Munch box",
    name: "The Scrumptious Munch box",
    image: "https://i.ibb.co/G4fhN6bW/scumtions-munch-box.png",
    price: 1399,
    originalPrice: 1799,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Golden Candle Holder
• Assorted Chocolates-6pcs
• Choco Chips-8pcs
• Poutpuri
• cashews with jute pouch
• Almonds with jute pouch
• Pistachios with jute pouch
• Raisins with jute pouch
• Custom Note card
• Decorated Diya/Scented Candles`,
  },
  {
    id: "The Gratitude Box",
    name: "The Gratitude Box",
    image: "https://i.ibb.co/Y4cqhgTC/DSC09388-800x.webp",
    price: 849,
    originalPrice: 1100,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• A jute Pouch of Crunchy Nuts
• Rich Cookies
• Crispy Waffles Chips
• Scented Candles
• Custom Note Card
• Lotus Flower Wall Hanging- 2pcs`,
  },
  {
    id: "Dil of Diwali",
    name: "Dil of Diwali",
    image: "https://i.ibb.co/VWb47wKK/Dil-of-Diwali.png",
    price: 699,
    originalPrice: 879,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• A jute Pouch of Crunchy Nuts
• Cookies- 6pcs
• Cashews - 50gms
• Raisins - 50gms
• Assorted Chocolates -
• Custom Note Card
• Lotus Flower Wall Hanging- 2pcs`,
  },
  {
    id: "Diwali Snacks Box",
    name: "Diwali Snacks Box",
    image: "https://i.ibb.co/j96XMCBP/The-Diwali-Snacks-Box.png",
    price: 599,
    originalPrice: 679,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Jar of Cashews
• Jar of Almonds
• Jar of Raisins
• Jar of Pistachios
• Custom Note Card`,
  },
  {
    id: "Rigid Boxes 1",
    name: "Customise Your Box",
    image: "https://i.ibb.co/x8fPg8RZ/IMG-20251002-WA0008.jpg",
    price: 450,
    originalPrice: 800,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `We Can Customise it As Per Your Need`,
  },
  {
    id: "Rigid Boxes 2",
    name: "Customise Your Box",
    image: "https://i.ibb.co/hRqF14C5/IMG-20251002-WA0010.jpg",
    price: 80,
    originalPrice: 100,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `We Can Customise it As Per Your Need`,
  },
  {
    id: "Rigid Boxes 3",
    name: "Customise Your Box",
    image: "https://i.ibb.co/k2Y01SHj/IMG-20251002-WA0011.jpg",
    price: 300,
    originalPrice: 400,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `We Can Customise it As Per Your Need`,
  },
  {
    id: "Rigid Boxes 4",
    name: "Customise Your Box",
    image: "https://i.ibb.co/cKwb0CWs/IMG-20251002-WA0012.jpg",
    price: 400,
    originalPrice: 600,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `We Can Customise it As Per Your Need`,
  },
  {
    id: "Round Dry Fruits Chocolates",
    name: "Round Dry Fruits Chocolates -350gms",
    image: "https://i.ibb.co/yB6YLDNs/IMG-20251001-WA0030.jpg",
    price: 599,
    originalPrice: 899,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
  },
  {
    id: "Chocolate Bar",
    name: "Chocolate Bar-350gms (pack of 2)",
    image: "https://i.ibb.co/HLrJbGDP/Chocolate-bar.jpg",
    price: 350,
    originalPrice: 420,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
  },
  {
    id: "Exotic Chocolate Bar",
    name: "Exotic Chocolate Bar",
    image: "https://i.ibb.co/TqKJYTXF/Exorctic-Chocolate-Bar.jpg",
    price: 499,
    originalPrice: 599,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
  },
  {
    id: "Premium Homemaid Chocolates",
    name: "Premium Homemaid Chocolates-24 pcs",
    image: "https://i.ibb.co/RG040vbb/Premium-Homemaid-Chocolates.jpg",
    price: 399,
    originalPrice: 499,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
  },
  {
    id: "Exotic Dark Center Chocolates",
    name: "Exotic Dark Center Chocolates - 100gms",
    image: "https://i.ibb.co/n870rkt6/IMG-20251001-WA0028.jpg",
    price: 150,
    originalPrice: 180,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
  },
  {
    id: "Premium Shape Chocolates",
    name: "Premium Shape Chocolates -30pcs",
    image: "https://i.ibb.co/sp7krjYr/IMG-20251001-WA0026.jpg",
    price: 500,
    originalPrice: 600,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
  },
  {
    id: "Heart Shape Chocolates",
    name: "Heart Shape Chocolates with Cute Notes- 24pcs",
    image: "https://i.ibb.co/pBgLqmLq/IMG-20251001-WA0022.jpg",
    price: 500,
    originalPrice: 600,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
  },
  {
    id: "Diwali Crackers Chocolates",
    name: "Diwali Crackers Chocolates- 10pcs",
    image: "https://i.ibb.co/TBS5rBCP/Crackers-Chocklates.jpg",
    price: 300,
    originalPrice: 600,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
  },
  {
    id: "Festival Diwali Box 1",
    name: "Festival Diwali Box with Crackers Design & Sweets",
    image: "https://i.ibb.co/sJ1YC31x/IMG-20251001-WA0019.jpg",
    price: 1199,
    originalPrice: 1499,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
  },
  {
    id: "Festival Diwali Box 2",
    name: "Festival Diwali Box with Crackers Design,Chocolates, roasted Almonds and Joy",
    image: "https://i.ibb.co/ccFsKPpR/A-Full-Box-of-Handmade-Chocolates.jpg",
    price: 2499,
    originalPrice: 3099,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
  },

  // === CHARITY ITEMS END ===
];

export const topPicks: Product[] = products.slice(0, 8);

export function getById(id: string) {
  if (!id) return undefined;
  const normalized = decodeURIComponent(String(id)).trim().toLowerCase();
  return products.find((p) => String(p.id).trim().toLowerCase() === normalized);
}

export function listByCategory(cat?: string) {
  if (!cat) return products;
  return products.filter((p) => p.category === cat);
}

export function searchProducts(q: string) {
  const s = q.toLowerCase();
  return products.filter((p) => p.name.toLowerCase().includes(s));
}
