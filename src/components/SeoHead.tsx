import React, { useEffect } from 'react';
import { BUSINESS_INFO, FAQS } from '../data/pharmacyData';
import { NavPage } from '../types';

interface SeoHeadProps {
  currentPage: NavPage;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ currentPage }) => {
  useEffect(() => {
    // Dynamic document title
    const pageTitles: Record<NavPage, string> = {
      home: `${BUSINESS_INFO.name} | Best Medical Store & Pharmacy in Kurtha, Bihar`,
      about: `About Us | ${BUSINESS_INFO.name} - Nishant Medical Hall Kurtha`,
      services: `Pharmacy Services | Genuine Medicines & Health Supplies in Kurtha`,
      gallery: `Store Gallery & Facility | ${BUSINESS_INFO.name} Kurtha`,
      testimonials: `Customer Reviews | Trusted Local Pharmacy in Bihar`,
      faq: `Frequently Asked Questions | ${BUSINESS_INFO.name}`,
      contact: `Contact Us & Get Directions | ${BUSINESS_INFO.name} Karpi Bus Stand`
    };

    const title = pageTitles[currentPage] || pageTitles.home;
    document.title = title;

    // Helper to set meta tag
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const description = `${BUSINESS_INFO.name} (${BUSINESS_INFO.alternateName}) at ${BUSINESS_INFO.location}. 100% genuine medicines, baby care, surgical items, health supplements & instant WhatsApp order. Call: ${BUSINESS_INFO.phoneFormatted}.`;
    const keywords = `New Prakash Medico, Nishant Medical Hall, Pharmacy in Kurtha, Medical Store Karpi Bus Stand, Genuine Medicines Bihar, WhatsApp Medicine Order Kurtha, Khemkaran Saray Panchayat medical shop, BP monitor Kurtha, Surgical supplies Bihar`;

    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('author', BUSINESS_INFO.name);

    // OpenGraph
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', window.location.href, true);
    setMeta('og:site_name', BUSINESS_INFO.name, true);

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    // JSON-LD LocalBusiness & Pharmacy Schema Injection
    let scriptTag = document.getElementById('json-ld-schema') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': ['Pharmacy', 'MedicalBusiness', 'LocalBusiness'],
      'name': BUSINESS_INFO.name,
      'alternateName': BUSINESS_INFO.alternateName,
      'image': [
        window.location.origin + BUSINESS_INFO.heroImage,
        window.location.origin + BUSINESS_INFO.storefrontImage
      ],
      'logo': window.location.origin + '/icon.png',
      'url': window.location.href,
      'telephone': BUSINESS_INFO.phoneFormatted,
      'priceRange': '₹',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Karpi Bus Stand, Khemkaran Saray Panchayat',
        'addressLocality': 'Kurtha',
        'addressRegion': 'Bihar',
        'postalCode': '804421',
        'addressCountry': 'IN'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 25.0428,
        'longitude': 84.8118
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
          ],
          'opens': '07:00',
          'closes': '22:00'
        }
      ],
      'sameAs': [
        BUSINESS_INFO.mapQueryUrl
      ],
      'description': description
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': FAQS.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': window.location.origin
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': currentPage.toUpperCase(),
          'item': window.location.href
        }
      ]
    };

    scriptTag.textContent = JSON.stringify([localBusinessSchema, faqSchema, breadcrumbSchema]);

  }, [currentPage]);

  return null;
};
