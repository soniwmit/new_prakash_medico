export type NavPage = 'home' | 'about' | 'services' | 'gallery' | 'testimonials' | 'faq' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  details: string[];
  image: string;
  popular?: boolean;
}

export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  itemCount: string;
  featuredProducts: string[];
  image: string;
}

export interface MedicineItem {
  id: string;
  name: string;
  category: string;
  dosageForm: 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Equipment' | 'Supplement' | 'Cream' | 'Care';
  manufacturer?: string;
  description: string;
  uses: string;
  prescriptionRequired: boolean;
  inStock: boolean;
  priceNote?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatar?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Prescription' | 'Ordering' | 'Store';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Store Front' | 'Store Interior' | 'Medicine Shelves' | 'Products' | 'Medical Equipment';
  imageUrl: string;
  caption: string;
}

export interface OrderFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  hasPrescription: 'Yes' | 'No';
  prescriptionFile?: File | null;
  prescriptionFileName?: string;
  message: string;
  preferredTime: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}
