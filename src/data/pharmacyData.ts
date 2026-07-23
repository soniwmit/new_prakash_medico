import { ServiceItem, CategoryItem, MedicineItem, Testimonial, FAQItem, GalleryItem } from '../types';

export const BUSINESS_INFO = {
  name: 'New Prakash Medico',
  alternateName: 'Nishant Medical Hall',
  tagline: 'Your Trusted Medical Store for Genuine Medicines & Healthcare Needs',
  location: 'Karpi Bus Stand, Kurtha, Khemkaran Saray Panchayat, Bihar 804421',
  shortLocation: 'Kurtha, Bihar',
  phone: '09931075521',
  phoneFormatted: '+91 9931075521',
  whatsapp: '919931075521',
  email: 'contact@newprakashmedico.com',
  workingHours: 'Mon - Sun: 7:00 AM - 10:00 PM',
  emergencyInfo: '7 Days Open • Emergency Medicine Assistance Available',
  establishedYear: '2012',
  mapQueryUrl: 'https://www.google.com/maps/search/?api=1&query=New+Prakash+Medico+Karpi+Bus+Stand+Kurtha+Bihar+804421',
  heroImage: '/src/assets/images/pharmacy_hero_banner_1784791703621.jpg',
  storefrontImage: '/src/assets/images/pharmacy_storefront_1784791719146.jpg',
  googleRating: 4.9,
  googleReviewCount: 184,
};

export const WHY_CHOOSE_US = [
  {
    id: '1',
    title: '100% Genuine Medicines',
    description: 'Directly sourced from certified pharmaceutical distributors with guaranteed batch authenticity and long shelf life.',
    icon: 'ShieldCheck',
  },
  {
    id: '2',
    title: 'Experienced Staff',
    description: 'Qualified pharmacists with years of experience providing polite guidance on dosage, precautions, and general wellness.',
    icon: 'UserCheck',
  },
  {
    id: '3',
    title: 'Affordable Prices',
    description: 'Fair, MRP-conscious pricing with best discounts on essential chronic disease and daily healthcare products.',
    icon: 'Tag',
  },
  {
    id: '4',
    title: 'Fast Service',
    description: 'Quick counter dispensing with minimal waiting time. Pre-order via WhatsApp for instant store pickup.',
    icon: 'Zap',
  },
  {
    id: '5',
    title: 'Prescription Medicines',
    description: 'Wide inventory of prescribed cardiovascular, diabetic, antibiotic, pediatric, and specialty formulations.',
    icon: 'FileText',
  },
  {
    id: '6',
    title: 'Healthcare Products',
    description: 'Complete range of baby care, feminine hygiene, wellness supplements, surgical dressings, and wellness items.',
    icon: 'HeartPulse',
  },
  {
    id: '7',
    title: 'Trusted Local Pharmacy',
    description: 'Proudly serving Kurtha, Karpi, and nearby panchayats with unwavering integrity and community care.',
    icon: 'MapPin',
  },
  {
    id: '8',
    title: 'Easy WhatsApp Support',
    description: 'Send prescription photo or list on WhatsApp for quick availability confirmation and reservation.',
    icon: 'MessageSquare',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'prescription-medicines',
    title: 'Prescription Medicines',
    category: 'Core Pharmacy',
    description: 'Complete range of authentic doctor-prescribed drugs including antibiotics, cardiac care, neurological, gastroenterology, and daily management medicines.',
    iconName: 'Pill',
    details: ['Verification of doctor prescription', 'Storage in temperature-controlled conditions', 'Batch & expiry verification', 'Clear usage guidance'],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'otc-medicines',
    title: 'General & OTC Medicines',
    category: 'Daily Health',
    description: 'Everyday non-prescription remedies for fever, pain relief, cough, cold, acidity, digestion, and seasonal allergies.',
    iconName: 'PackageCheck',
    details: ['Antacids & pain relievers', 'Cough syrups & lozenges', 'Allergy & cold tablets', 'Oral rehydration salts (ORS)'],
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'diabetic-care',
    title: 'Diabetic Care',
    category: 'Chronic Care',
    description: 'Comprehensive diabetes management products including insulin, oral anti-diabetic medications, glucose test strips, lancets, and glucometers.',
    iconName: 'Activity',
    details: ['Blood glucose meters & strips', 'Insulin vials & pen needles', 'Sugar-free health supplements', 'Diabetic foot care products'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'bp-monitors',
    title: 'Blood Pressure & Heart Monitors',
    category: 'Medical Devices',
    description: 'Digital and manual BP monitors, pulse oximeters, ECG monitors, and cardiovascular monitoring supplies for home health checking.',
    iconName: 'Heart',
    details: ['Automatic digital BP cuffs', 'Fingertip pulse oximeters', 'Stethoscopes & accessories', 'Demonstration at counter'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'first-aid-supplies',
    title: 'First Aid Supplies',
    category: 'Emergency Care',
    description: 'Essential emergency wound care, antiseptics, sterile cotton, bandage rolls, medical tapes, and burn ointments.',
    iconName: 'Cross',
    details: ['Antiseptic liquids (Dettol/Savlon)', 'Sterile gauze & cotton rolls', 'Waterproof adhesive bandages', 'Burn & wound healing creams'],
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'surgical-items',
    title: 'Surgical Supplies',
    category: 'Surgical Care',
    description: 'High-grade surgical gloves, IV sets, disposable syringes, catheter tubes, masks, and post-surgery care items.',
    iconName: 'Scissors',
    details: ['Sterile disposable syringes', 'Infusion IV sets & cannulas', 'Surgical masks & gloves', 'Surgical spirit & povidone iodine'],
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'baby-care-products',
    title: 'Baby Care Products',
    category: 'Mother & Baby',
    description: 'Safe and trusted infant formula, baby cereals, diapers, baby wipes, gentle skin lotions, and pediatric health drops.',
    iconName: 'Baby',
    details: ['Infant cereal & milk formula', 'Dermatologist-tested baby soap & oils', 'Diapers & wet wipes', 'Pediatric gripe water & vitamins'],
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80',
    popular: true,
  },
  {
    id: 'personal-care-products',
    title: 'Personal Care & Hygiene',
    category: 'Personal Care',
    description: 'Feminine hygiene products, dermatological creams, soaps, herbal shampoos, hand sanitizers, and oral care.',
    iconName: 'Sparkles',
    details: ['Feminine protection pads', 'Medicated soaps & facewash', 'Antifungal powders', 'Oral care & antiseptic mouthwashes'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'health-supplements',
    title: 'Health & Nutrition Supplements',
    category: 'Wellness',
    description: 'Multivitamin capsules, protein powders, calcium tablets, immunity boosters, and Ayurvedic energy supplements.',
    iconName: 'Shield',
    details: ['Protein powders for all ages', 'Calcium + Vitamin D3 supplements', 'Immunity enhancement syrups', 'Chyawanprash & herbal tonics'],
    image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'medical-devices',
    title: 'Medical Devices & Equipment',
    category: 'Equipment',
    description: 'Nebulizers, steam inhalers, hot water bags, thermistors, digital thermometers, and walking support sticks.',
    iconName: 'Thermometer',
    details: ['Compressor nebulizer machines', 'Digital infrared thermometers', 'Hot & cold gel packs', 'Orthopedic knee & back supports'],
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'home-care-products',
    title: 'Home Care & Orthopedic Support',
    category: 'Home Care',
    description: 'Cervical collars, lumbar belts, knee caps, crepe bandages, air cushions, and mobility support tools for elderly.',
    iconName: 'Home',
    details: ['Lumbar sacral belts', 'Knee & ankle supports', 'Air mattresses for bedridden patients', 'Walking sticks & crutches'],
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'healthcare-essentials',
    title: 'Daily Healthcare Essentials',
    category: 'General',
    description: 'Sanitizers, disinfectant sprays, N95 masks, gloves, thermometer strips, and health drinks for daily family safety.',
    iconName: 'ShieldPlus',
    details: ['N95 & surgical masks', 'Alcohol hand rubs', 'Disinfectant liquids', 'Family hydration salts'],
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=800&q=80',
  }
];

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'tablets',
    name: 'Tablets',
    description: 'Prescription & OTC tablet dosages for fever, infection, pain, and chronic conditions.',
    icon: 'Pill',
    itemCount: '500+ Items',
    featuredProducts: ['Paracetamol 650mg', 'Pantoprazole 40mg', 'Amoxicillin 500mg', 'Telmisartan 40mg'],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'capsules',
    name: 'Capsules',
    description: 'Hard & soft gel capsules for digestive health, multivitamins, and antibiotics.',
    icon: 'Box',
    itemCount: '350+ Items',
    featuredProducts: ['Rabeprazole + DSR', 'Multivitamin Softgels', 'Omega 3 Fish Oil', 'Itraconazole 200mg'],
    image: 'https://images.unsplash.com/photo-1550572017-edf792890003?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'syrups',
    name: 'Syrups & Tonics',
    description: 'Pediatric cough syrups, antacids, iron tonics, and digestive enzymes.',
    icon: 'Wine',
    itemCount: '250+ Items',
    featuredProducts: ['Cough Relief Syrup', 'Iron & B12 Tonic', 'Digestive Enzyme', 'Pediatric Fever Suspension'],
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'injection',
    name: 'Injections & IV Fluids',
    description: 'Sterile injectable formulations, tetanus toxoid, anti-pain, and IV saline bags.',
    icon: 'Syringe',
    itemCount: '150+ Items',
    featuredProducts: ['Tetanus Toxoid', 'Ceftriaxone Injection', 'Normal Saline (NS)', 'Diclofenac Sodium'],
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'medical-equipment',
    name: 'Medical Equipment',
    description: 'BP apparatus, pulse oximeters, nebulizers, digital thermometers, and steam inhalers.',
    icon: 'Stethoscope',
    itemCount: '80+ Devices',
    featuredProducts: ['Omron BP Monitor', 'Dr. Trust Oximeter', 'Compressor Nebulizer', 'Digital Thermometer'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'protein-supplements',
    name: 'Protein & Health Drinks',
    description: 'Nutritional protein powder for adults, diabetic protein, children growth supplements.',
    icon: 'Dumbbell',
    itemCount: '60+ Brands',
    featuredProducts: ['Protinex Powder', 'Ensure Complete', 'Pediasure Growth', 'Horlicks Women'],
    image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'vitamins',
    name: 'Vitamins & Minerals',
    description: 'Essential Vitamin C, Vitamin D3, B-Complex, Calcium, Zinc, and iron support.',
    icon: 'Sparkles',
    itemCount: '200+ Products',
    featuredProducts: ['Limcee Vitamin C', 'Shelcal 500 Calcium', 'Becosules Z', 'Neurobion Forte'],
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'skin-care',
    name: 'Derma & Skin Care',
    description: 'Medicated acne gels, moisturizing lotions, antifungal ointments, and sunscreens.',
    icon: 'Sun',
    itemCount: '180+ Items',
    featuredProducts: ['Candid B Cream', 'Caladryl Lotion', 'Derma Antifungal Soap', 'Aloe Vera Gel'],
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'baby-products',
    name: 'Baby Care & Diapers',
    description: 'Gentle baby soaps, baby shampoos, diapers, baby oil, and nutrition products.',
    icon: 'Heart',
    itemCount: '120+ Products',
    featuredProducts: ['Pampers Diapers', 'Himalaya Baby Lotion', 'Cerelac Wheat-Apple', 'Johnson Baby Soap'],
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'personal-hygiene',
    name: 'Personal Hygiene',
    description: 'Sanitary pads, hand washes, intimate wash, mouthwashes, and sanitizers.',
    icon: 'Shield',
    itemCount: '140+ Items',
    featuredProducts: ['Whisper Choice Pads', 'Dettol Handwash', 'Listerine Mouthwash', 'V-Wash Plus'],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'orthopedic-support',
    name: 'Orthopedic Support',
    description: 'Belts, collars, wrist supports, knee caps, and compression bandages.',
    icon: 'Activity',
    itemCount: '90+ Items',
    featuredProducts: ['Flamingo LS Belt', 'Tynor Knee Cap', 'Cervical Collar Soft', 'Crepe Bandage 10cm'],
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'diabetic-care',
    name: 'Diabetic Supplies',
    description: 'Glucometers, test strips, lancets, alcohol swabs, and sugar substitutes.',
    icon: 'Cross',
    itemCount: '110+ Items',
    featuredProducts: ['Accu-Chek Active Strips', 'OneTouch Verio Test Strips', 'SugarFree Gold', 'Insulin Syringes'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
  },
];

export const FEATURED_MEDICINES: MedicineItem[] = [
  {
    id: 'med-1',
    name: 'Paracetamol 650 mg (Dolo / Calpol)',
    category: 'Tablets',
    dosageForm: 'Tablet',
    description: 'Effective antipyretic and analgesic for fever reduction and mild to moderate pain relief.',
    uses: 'Fever, body pain, headache, post-vaccination fever',
    prescriptionRequired: false,
    inStock: true,
    priceNote: 'Best price guaranteed'
  },
  {
    id: 'med-2',
    name: 'Pantoprazole 40 mg (Pan 40 / Pantocid)',
    category: 'Tablets',
    dosageForm: 'Tablet',
    description: 'Proton pump inhibitor used to reduce stomach acid secretion and treat hyperacidity & GERD.',
    uses: 'Acidity, heart burn, stomach ulcers',
    prescriptionRequired: true,
    inStock: true
  },
  {
    id: 'med-3',
    name: 'Omron Automatic Digital Blood Pressure Monitor',
    category: 'Medical Equipment',
    dosageForm: 'Equipment',
    description: 'Accurate clinical grade automatic digital BP monitor with Intellisense technology.',
    uses: 'Home blood pressure measurement',
    prescriptionRequired: false,
    inStock: true,
    priceNote: '1 Year Warranty'
  },
  {
    id: 'med-4',
    name: 'Accu-Chek Active Glucose Test Strips (50s)',
    category: 'Diabetic Care',
    dosageForm: 'Equipment',
    description: 'High precision blood glucose monitoring test strips for diabetic self-testing.',
    uses: 'Blood sugar checking',
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: 'med-5',
    name: 'Limcee 500mg Vitamin C Chewable Tablets',
    category: 'Vitamins',
    dosageForm: 'Tablet',
    description: 'Chewable Vitamin C supplement for boosting immunity and collagen synthesis.',
    uses: 'Immunity booster, scurvy prevention',
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: 'med-6',
    name: 'Shelcal 500 Calcium + Vitamin D3 Tablets',
    category: 'Supplement',
    dosageForm: 'Tablet',
    description: 'Essential calcium and vitamin D3 combination for bone strength and osteoporosis prevention.',
    uses: 'Bone strength, joint pain, calcium deficiency',
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: 'med-7',
    name: 'Protinex High Protein Powder Vanilla/Chocolate (400g)',
    category: 'Protein Supplements',
    dosageForm: 'Supplement',
    description: 'Fortified protein supplement with 34 vital nutrients for stamina and muscle recovery.',
    uses: 'Daily nutrition, recovery, immunity',
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: 'med-8',
    name: 'Pampers Baby Dry Diaper Pants (All Sizes)',
    category: 'Baby Care',
    dosageForm: 'Care',
    description: 'Ultra-absorbent baby diaper pants with 12-hour leak-lock protection.',
    uses: 'Infant hygiene & overnight comfort',
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: 'med-9',
    name: 'Compressor Nebulizer Machine',
    category: 'Medical Equipment',
    dosageForm: 'Equipment',
    description: 'High efficiency mist nebulizer for respiratory treatment of asthma and cough in kids & adults.',
    uses: 'Asthma, wheezing, bronchial congestion',
    prescriptionRequired: false,
    inStock: true
  },
  {
    id: 'med-10',
    name: 'Tynor Lumbar Sacral Back Belt (L/M/S)',
    category: 'Orthopedic Support',
    dosageForm: 'Equipment',
    description: 'Flexible spinal immobilization belt designed for back ache relief and posture support.',
    uses: 'Lower back pain, sciatica, lumbar spine support',
    prescriptionRequired: false,
    inStock: true
  }
];

export const TRUST_REASONS = [
  {
    title: 'Experienced Pharmacy',
    desc: 'Serving Kurtha with registered expertise and licensed pharmacists since 2012.',
    icon: 'Award'
  },
  {
    title: 'Quality Medicines',
    desc: '100% genuine pharmaceuticals stored strictly in temperature-controlled environments.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Quick Service',
    desc: 'Fast billing, counter pickup, and instant WhatsApp response for urgent medicine queries.',
    icon: 'Clock'
  },
  {
    title: 'Friendly Staff',
    desc: 'Compassionate, polite staff ready to assist with medicine usage and dosage instructions.',
    icon: 'Smile'
  },
  {
    title: 'Reasonable Pricing',
    desc: 'Fair MRP rates, special generic options, and regular discounts on essential supplies.',
    icon: 'DollarSign'
  },
  {
    title: 'Convenient Location',
    desc: 'Easily accessible right at Karpi Bus Stand, Kurtha, Bihar with convenient parking.',
    icon: 'MapPin'
  }
];

export const WORKING_PROCESS = [
  {
    step: '01',
    title: 'Visit Store or Order Online',
    description: 'Walk into our Karpi Bus Stand store or send your medicine requirement via WhatsApp.',
    icon: 'Store'
  },
  {
    step: '02',
    title: 'Share Prescription',
    description: 'Show your doctor prescription or upload a clear photo of the prescription slip.',
    icon: 'FileUp'
  },
  {
    step: '03',
    title: 'Get Genuine Medicines',
    description: 'Our certified staff verifies batch, expiry, and packs your 100% genuine medicines.',
    icon: 'CheckCircle'
  },
  {
    step: '04',
    title: 'Easy Payment & Advice',
    description: 'Pay via Cash or GooglePay/PhonePe UPI and get clear dosage guidance before you leave.',
    icon: 'CreditCard'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Rameshwar Kumar Singh',
    location: 'Kurtha Main Market, Bihar',
    rating: 5,
    date: '2 weeks ago',
    comment: 'New Prakash Medico is the most reliable medical store in Kurtha. I get all my cardiac and blood pressure medicines regularly here. The staff is very polite and always gives authentic medicines.',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Sunita Devi',
    location: 'Khemkaran Saray Panchayat',
    rating: 5,
    date: '1 month ago',
    comment: 'Great store! Nishant ji and team always help us understand medicine dosages carefully. Very quick WhatsApp order facility when I need baby products for my grandchild.',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Manoj Sharma',
    location: 'Karpi Bus Stand Area',
    rating: 5,
    date: '3 weeks ago',
    comment: 'Conveniently located at Karpi Bus Stand. I bought an Omron Blood Pressure monitor and nebulizer machine at a reasonable price with full bill and warranty.',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Dr. A. K. Verma',
    location: 'Kurtha Primary Health Care',
    rating: 5,
    date: '2 months ago',
    comment: 'As a local doctor, I often advise patients to visit New Prakash Medico because they maintain genuine inventory, fresh stocks, and proper storage conditions.',
    verified: true
  },
  {
    id: 'rev-5',
    name: 'Pankaj Kumar',
    location: 'Arwal Road, Kurtha',
    rating: 5,
    date: '3 days ago',
    comment: 'Quick and hassle-free service. Sent my prescription photo on WhatsApp and got my entire month stock packed and ready for pickup within 10 minutes!',
    verified: true
  },
  {
    id: 'rev-6',
    name: 'Anita Kumari',
    location: 'Khemkaran Saray',
    rating: 5,
    date: '2 weeks ago',
    comment: '100% genuine baby diapers, Cerelac, and mother care products available at fair prices. Highly recommended for every family in Kurtha.',
    verified: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Where is New Prakash Medico located in Kurtha?',
    answer: 'New Prakash Medico (Nishant Medical Hall) is located conveniently at Karpi Bus Stand, Kurtha, Khemkaran Saray Panchayat, Bihar 804421. You can easily find us near the main bus stop area.',
    category: 'Store'
  },
  {
    id: 'faq-2',
    question: 'What are the store operating hours?',
    answer: 'We are open 7 days a week from 7:00 AM to 10:00 PM. For emergency medicine requests, you can contact us at 09931075521.',
    category: 'Store'
  },
  {
    id: 'faq-3',
    question: 'How do I order medicines via WhatsApp?',
    answer: 'Simply click the WhatsApp button on our website, fill out your name and required medicines or upload a clear photo of your prescription slip. We will immediately confirm availability and total price.',
    category: 'Ordering'
  },
  {
    id: 'faq-4',
    question: 'Are all medicines sold at New Prakash Medico 100% genuine?',
    answer: 'Yes, 100%. All medicines, surgical supplies, and health supplements are directly procured from authorized pharmaceutical distributors with batch verification and proper temperature storage.',
    category: 'General'
  },
  {
    id: 'faq-5',
    question: 'Do I need a prescription to buy medicines?',
    answer: 'Prescription-only drugs (Schedule H and H1 medications like antibiotics, strong pain relievers, cardiac & diabetic drugs) require a valid doctor prescription. OTC medicines and supplements do not require a prescription.',
    category: 'Prescription'
  },
  {
    id: 'faq-6',
    question: 'Can I check medicine availability before coming to the store?',
    answer: 'Yes! You can call us directly on 09931075521 or drop a WhatsApp message to inquire if your specific tablet, syrup, or device is currently in stock.',
    category: 'Ordering'
  },
  {
    id: 'faq-7',
    question: 'What payment methods do you accept at the medical store?',
    answer: 'We accept Cash as well as all major UPI payment apps including Google Pay, PhonePe, Paytm, BHIM, and QR code transfers.',
    category: 'Store'
  },
  {
    id: 'faq-8',
    question: 'Do you keep baby care and medical equipment in stock?',
    answer: 'Yes! We stock baby foods (Cerelac, Lactogen), diapers, baby skin care, BP monitors, pulse oximeters, digital thermometers, nebulizers, and orthopedic support belts.',
    category: 'General'
  },
  {
    id: 'faq-9',
    question: 'Can I return or exchange medicines if not needed?',
    answer: 'Unopened, un-damaged medicines in original sealed strip/bottle with clear batch number and valid bill can be returned/exchanged within 3 days as per pharmacy guidelines (except refrigerated products like insulin).',
    category: 'General'
  },
  {
    id: 'faq-10',
    question: 'Do you offer discount on monthly chronic disease medicines?',
    answer: 'Yes, we offer attractive discounts on regular monthly supplies for diabetes, hypertension, cardiac care, and long-term health supplements.',
    category: 'Ordering'
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Pharmacy Storefront',
    category: 'Store Front',
    imageUrl: '/src/assets/images/pharmacy_storefront_1784791719146.jpg',
    caption: 'Welcoming entrance of New Prakash Medico at Karpi Bus Stand, Kurtha.'
  },
  {
    id: 'gal-2',
    title: 'Organized Medicine Counter',
    category: 'Store Interior',
    imageUrl: '/src/assets/images/pharmacy_hero_banner_1784791703621.jpg',
    caption: 'Clean, well-lit counter with organized prescription medicine racks.'
  },
  {
    id: 'gal-3',
    title: 'Medical Devices & Equipment Display',
    category: 'Medical Equipment',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80',
    caption: 'Blood Pressure monitors, glucometers, nebulizers, and pulse oximeters.'
  },
  {
    id: 'gal-4',
    title: 'Baby Care & Nutrition Shelves',
    category: 'Products',
    imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1000&q=80',
    caption: 'Top branded infant cereal, diapers, and gentle baby skin lotions.'
  },
  {
    id: 'gal-5',
    title: 'Temperature Controlled Storage',
    category: 'Medicine Shelves',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80',
    caption: 'Refrigerated and temperature-monitored storage for insulin & vaccines.'
  },
  {
    id: 'gal-6',
    title: 'Surgical & First Aid Counter',
    category: 'Products',
    imageUrl: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1000&q=80',
    caption: 'Sterile cotton, bandages, surgical gloves, antiseptics & wound care.'
  }
];

export const TIMELINE_MILESTONES = [
  { year: '2012', title: 'Grand Opening', desc: 'Established Nishant Medical Hall / New Prakash Medico at Karpi Bus Stand, Kurtha.' },
  { year: '2016', title: 'Inventory Expansion', desc: 'Added full surgical supplies, baby care department, and digital medical equipment.' },
  { year: '2020', title: 'Emergency Community Support', desc: 'Maintained 100% open doors with essential sanitizers, masks, and life-saving drugs during health crises.' },
  { year: '2023', title: 'Digital & WhatsApp Ordering', desc: 'Introduced quick prescription WhatsApp order system for rural and town families.' },
  { year: '2026', title: 'Modernized Healthcare Store', desc: 'Upgraded modern store layout, digital inventory management, and community health services.' },
];

export const OWNER_MESSAGE = {
  name: 'Nishant Kumar',
  role: 'Proprietor & Certified Pharmacist',
  message: 'Welcome to New Prakash Medico. For over 14 years, our single non-negotiable commitment has been the health and trust of our Kurtha community. We treat every customer like family — ensuring that every pill, syrup, or device you take home is 100% genuine, affordable, and handed over with correct medical advice. Thank you for making us Kurtha\'s most trusted medical store.',
};

/**
 * Generate formatted WhatsApp URL with prefilled text
 */
export function buildWhatsAppUrl(data: {
  customerName?: string;
  mobileNumber?: string;
  address?: string;
  medicineName?: string;
  hasPrescription?: string;
  message?: string;
  preferredTime?: string;
}) {
  const lines = [
    `Hello New Prakash Medico,`,
    ``,
    `I would like to place an order / inquiry:`,
    `----------------------------------`,
    `*Customer Name:* ${data.customerName || 'N/A'}`,
    `*Phone:* ${data.mobileNumber || 'N/A'}`,
    `*Medicine Required:* ${data.medicineName || 'N/A'}`,
    `*Address:* ${data.address || 'N/A'}`,
    `*Prescription:* ${data.hasPrescription || 'No'}`,
    `*Preferred Time:* ${data.preferredTime || 'Immediate'}`,
    data.message ? `*Additional Note:* ${data.message}` : '',
    `----------------------------------`,
    `Sent via New Prakash Medico Official Website`
  ].filter(Boolean);

  const fullText = lines.join('\n');
  return `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(fullText)}`;
}
