import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export interface Country {
  code: string;
  name: { FR: string; EN: string; AR: string };
  region: { FR: string; EN: string; AR: string };
}

export const COUNTRIES: Country[] = [
  // Afrique du Nord
  { code: 'DZ', name: { FR: 'Algérie', EN: 'Algeria', AR: 'الجزائر' }, region: { FR: 'Afrique du Nord', EN: 'North Africa', AR: 'شمال أفريقيا' } },
  { code: 'EG', name: { FR: 'Égypte', EN: 'Egypt', AR: 'مصر' }, region: { FR: 'Afrique du Nord', EN: 'North Africa', AR: 'شمال أفريقيا' } },
  { code: 'LY', name: { FR: 'Libye', EN: 'Libya', AR: 'ليبيا' }, region: { FR: 'Afrique du Nord', EN: 'North Africa', AR: 'شمال أفريقيا' } },
  { code: 'MA', name: { FR: 'Maroc', EN: 'Morocco', AR: 'المغرب' }, region: { FR: 'Afrique du Nord', EN: 'North Africa', AR: 'شمال أفريقيا' } },
  { code: 'SD', name: { FR: 'Soudan', EN: 'Sudan', AR: 'السودان' }, region: { FR: 'Afrique du Nord', EN: 'North Africa', AR: 'شمال أفريقيا' } },
  { code: 'TN', name: { FR: 'Tunisie', EN: 'Tunisia', AR: 'تونس' }, region: { FR: 'Afrique du Nord', EN: 'North Africa', AR: 'شمال أفريقيا' } },
  // Afrique subsaharienne
  { code: 'AO', name: { FR: 'Angola', EN: 'Angola', AR: 'أنغولا' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'BJ', name: { FR: 'Bénin', EN: 'Benin', AR: 'بنين' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'BW', name: { FR: 'Botswana', EN: 'Botswana', AR: 'بوتسوانا' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'BF', name: { FR: 'Burkina Faso', EN: 'Burkina Faso', AR: 'بوركينا فاسو' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'CM', name: { FR: 'Cameroun', EN: 'Cameroon', AR: 'الكاميرون' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'CI', name: { FR: "Côte d'Ivoire", EN: "Ivory Coast", AR: 'ساحل العاج' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'ET', name: { FR: 'Éthiopie', EN: 'Ethiopia', AR: 'إثيوبيا' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'GA', name: { FR: 'Gabon', EN: 'Gabon', AR: 'الغابون' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'GH', name: { FR: 'Ghana', EN: 'Ghana', AR: 'غانا' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'GN', name: { FR: 'Guinée', EN: 'Guinea', AR: 'غينيا' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'KE', name: { FR: 'Kenya', EN: 'Kenya', AR: 'كينيا' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'MG', name: { FR: 'Madagascar', EN: 'Madagascar', AR: 'مدغشقر' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'ML', name: { FR: 'Mali', EN: 'Mali', AR: 'مالي' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'MR', name: { FR: 'Mauritanie', EN: 'Mauritania', AR: 'موريتانيا' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'MZ', name: { FR: 'Mozambique', EN: 'Mozambique', AR: 'موزمبيق' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'NA', name: { FR: 'Namibie', EN: 'Namibia', AR: 'ناميبيا' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'NE', name: { FR: 'Niger', EN: 'Niger', AR: 'النيجر' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'NG', name: { FR: 'Nigéria', EN: 'Nigeria', AR: 'نيجيريا' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'RW', name: { FR: 'Rwanda', EN: 'Rwanda', AR: 'رواندا' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'SN', name: { FR: 'Sénégal', EN: 'Senegal', AR: 'السنغال' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'SO', name: { FR: 'Somalie', EN: 'Somalia', AR: 'الصومال' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'SS', name: { FR: 'Soudan du Sud', EN: 'South Sudan', AR: 'جنوب السودان' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'TZ', name: { FR: 'Tanzanie', EN: 'Tanzania', AR: 'تنزانيا' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'TG', name: { FR: 'Togo', EN: 'Togo', AR: 'توغو' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'UG', name: { FR: 'Ouganda', EN: 'Uganda', AR: 'أوغندا' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'ZM', name: { FR: 'Zambie', EN: 'Zambia', AR: 'زامبيا' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'ZW', name: { FR: 'Zimbabwe', EN: 'Zimbabwe', AR: 'زيمبابوي' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  { code: 'ZA', name: { FR: 'Afrique du Sud', EN: 'South Africa', AR: 'جنوب أفريقيا' }, region: { FR: 'Afrique subsaharienne', EN: 'Sub-Saharan Africa', AR: 'أفريقيا جنوب الصحراء' } },
  // Moyen-Orient
  { code: 'SA', name: { FR: 'Arabie Saoudite', EN: 'Saudi Arabia', AR: 'المملكة العربية السعودية' }, region: { FR: 'Moyen-Orient', EN: 'Middle East', AR: 'الشرق الأوسط' } },
  { code: 'AE', name: { FR: 'Émirats Arabes Unis', EN: 'United Arab Emirates', AR: 'الإمارات العربية المتحدة' }, region: { FR: 'Moyen-Orient', EN: 'Middle East', AR: 'الشرق الأوسط' } },
  { code: 'BH', name: { FR: 'Bahreïn', EN: 'Bahrain', AR: 'البحرين' }, region: { FR: 'Moyen-Orient', EN: 'Middle East', AR: 'الشرق الأوسط' } },
  { code: 'IQ', name: { FR: 'Irak', EN: 'Iraq', AR: 'العراق' }, region: { FR: 'Moyen-Orient', EN: 'Middle East', AR: 'الشرق الأوسط' } },
  { code: 'IR', name: { FR: 'Iran', EN: 'Iran', AR: 'إيران' }, region: { FR: 'Moyen-Orient', EN: 'Middle East', AR: 'الشرق الأوسط' } },
  { code: 'JO', name: { FR: 'Jordanie', EN: 'Jordan', AR: 'الأردن' }, region: { FR: 'Moyen-Orient', EN: 'Middle East', AR: 'الشرق الأوسط' } },
  { code: 'KW', name: { FR: 'Koweït', EN: 'Kuwait', AR: 'الكويت' }, region: { FR: 'Moyen-Orient', EN: 'Middle East', AR: 'الشرق الأوسط' } },
  { code: 'LB', name: { FR: 'Liban', EN: 'Lebanon', AR: 'لبنان' }, region: { FR: 'Moyen-Orient', EN: 'Middle East', AR: 'الشرق الأوسط' } },
  { code: 'OM', name: { FR: 'Oman', EN: 'Oman', AR: 'عُمان' }, region: { FR: 'Moyen-Orient', EN: 'Middle East', AR: 'الشرق الأوسط' } },
  { code: 'PS', name: { FR: 'Palestine', EN: 'Palestine', AR: 'فلسطين' }, region: { FR: 'Moyen-Orient', EN: 'Middle East', AR: 'الشرق الأوسط' } },
  { code: 'QA', name: { FR: 'Qatar', EN: 'Qatar', AR: 'قطر' }, region: { FR: 'Moyen-Orient', EN: 'Middle East', AR: 'الشرق الأوسط' } },
  { code: 'SY', name: { FR: 'Syrie', EN: 'Syria', AR: 'سوريا' }, region: { FR: 'Moyen-Orient', EN: 'Middle East', AR: 'الشرق الأوسط' } },
  { code: 'TR', name: { FR: 'Turquie', EN: 'Turkey', AR: 'تركيا' }, region: { FR: 'Moyen-Orient', EN: 'Middle East', AR: 'الشرق الأوسط' } },
  { code: 'YE', name: { FR: 'Yémen', EN: 'Yemen', AR: 'اليمن' }, region: { FR: 'Moyen-Orient', EN: 'Middle East', AR: 'الشرق الأوسط' } },
  // Asie
  { code: 'CN', name: { FR: 'Chine', EN: 'China', AR: 'الصين' }, region: { FR: 'Asie', EN: 'Asia', AR: 'آسيا' } },
  { code: 'IN', name: { FR: 'Inde', EN: 'India', AR: 'الهند' }, region: { FR: 'Asie', EN: 'Asia', AR: 'آسيا' } },
  { code: 'ID', name: { FR: 'Indonésie', EN: 'Indonesia', AR: 'إندونيسيا' }, region: { FR: 'Asie', EN: 'Asia', AR: 'آسيا' } },
  { code: 'JP', name: { FR: 'Japon', EN: 'Japan', AR: 'اليابان' }, region: { FR: 'Asie', EN: 'Asia', AR: 'آسيا' } },
  { code: 'KZ', name: { FR: 'Kazakhstan', EN: 'Kazakhstan', AR: 'كازاخستان' }, region: { FR: 'Asie', EN: 'Asia', AR: 'آسيا' } },
  { code: 'MY', name: { FR: 'Malaisie', EN: 'Malaysia', AR: 'ماليزيا' }, region: { FR: 'Asie', EN: 'Asia', AR: 'آسيا' } },
  { code: 'MN', name: { FR: 'Mongolie', EN: 'Mongolia', AR: 'منغوليا' }, region: { FR: 'Asie', EN: 'Asia', AR: 'آسيا' } },
  { code: 'NP', name: { FR: 'Népal', EN: 'Nepal', AR: 'نيبال' }, region: { FR: 'Asie', EN: 'Asia', AR: 'آسيا' } },
  { code: 'PK', name: { FR: 'Pakistan', EN: 'Pakistan', AR: 'باكستان' }, region: { FR: 'Asie', EN: 'Asia', AR: 'آسيا' } },
  { code: 'PH', name: { FR: 'Philippines', EN: 'Philippines', AR: 'الفلبين' }, region: { FR: 'Asie', EN: 'Asia', AR: 'آسيا' } },
  { code: 'RU', name: { FR: 'Russie', EN: 'Russia', AR: 'روسيا' }, region: { FR: 'Asie', EN: 'Asia', AR: 'آسيا' } },
  { code: 'SG', name: { FR: 'Singapour', EN: 'Singapore', AR: 'سنغافورة' }, region: { FR: 'Asie', EN: 'Asia', AR: 'آسيا' } },
  { code: 'KR', name: { FR: 'Corée du Sud', EN: 'South Korea', AR: 'كوريا الجنوبية' }, region: { FR: 'Asie', EN: 'Asia', AR: 'آسيا' } },
  { code: 'LK', name: { FR: 'Sri Lanka', EN: 'Sri Lanka', AR: 'سريلانكا' }, region: { FR: 'Asie', EN: 'Asia', AR: 'آسيا' } },
  { code: 'TH', name: { FR: 'Thaïlande', EN: 'Thailand', AR: 'تايلاند' }, region: { FR: 'Asie', EN: 'Asia', AR: 'آسيا' } },
  { code: 'VN', name: { FR: 'Viêt Nam', EN: 'Vietnam', AR: 'فيتنام' }, region: { FR: 'Asie', EN: 'Asia', AR: 'آسيا' } },
  { code: 'BD', name: { FR: 'Bangladesh', EN: 'Bangladesh', AR: 'بنغلاديش' }, region: { FR: 'Asie', EN: 'Asia', AR: 'آسيا' } },
  // Europe
  { code: 'AL', name: { FR: 'Albanie', EN: 'Albania', AR: 'ألبانيا' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'AT', name: { FR: 'Autriche', EN: 'Austria', AR: 'النمسا' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'BE', name: { FR: 'Belgique', EN: 'Belgium', AR: 'بلجيكا' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'BG', name: { FR: 'Bulgarie', EN: 'Bulgaria', AR: 'بلغاريا' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'HR', name: { FR: 'Croatie', EN: 'Croatia', AR: 'كرواتيا' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'CY', name: { FR: 'Chypre', EN: 'Cyprus', AR: 'قبرص' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'CZ', name: { FR: 'Tchéquie', EN: 'Czech Republic', AR: 'التشيك' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'DK', name: { FR: 'Danemark', EN: 'Denmark', AR: 'الدنمارك' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'FI', name: { FR: 'Finlande', EN: 'Finland', AR: 'فنلندا' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'FR', name: { FR: 'France', EN: 'France', AR: 'فرنسا' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'DE', name: { FR: 'Allemagne', EN: 'Germany', AR: 'ألمانيا' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'GR', name: { FR: 'Grèce', EN: 'Greece', AR: 'اليونان' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'HU', name: { FR: 'Hongrie', EN: 'Hungary', AR: 'المجر' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'IE', name: { FR: 'Irlande', EN: 'Ireland', AR: 'أيرلندا' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'IT', name: { FR: 'Italie', EN: 'Italy', AR: 'إيطاليا' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'LU', name: { FR: 'Luxembourg', EN: 'Luxembourg', AR: 'لوكسمبورغ' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'MT', name: { FR: 'Malte', EN: 'Malta', AR: 'مالطا' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'NL', name: { FR: 'Pays-Bas', EN: 'Netherlands', AR: 'هولندا' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'NO', name: { FR: 'Norvège', EN: 'Norway', AR: 'النرويج' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'PL', name: { FR: 'Pologne', EN: 'Poland', AR: 'بولندا' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'PT', name: { FR: 'Portugal', EN: 'Portugal', AR: 'البرتغال' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'RO', name: { FR: 'Roumanie', EN: 'Romania', AR: 'رومانيا' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'RS', name: { FR: 'Serbie', EN: 'Serbia', AR: 'صربيا' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'ES', name: { FR: 'Espagne', EN: 'Spain', AR: 'إسبانيا' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'SE', name: { FR: 'Suède', EN: 'Sweden', AR: 'السويد' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'CH', name: { FR: 'Suisse', EN: 'Switzerland', AR: 'سويسرا' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'UA', name: { FR: 'Ukraine', EN: 'Ukraine', AR: 'أوكرانيا' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  { code: 'GB', name: { FR: 'Royaume-Uni', EN: 'United Kingdom', AR: 'المملكة المتحدة' }, region: { FR: 'Europe', EN: 'Europe', AR: 'أوروبا' } },
  // Amériques
  { code: 'US', name: { FR: 'États-Unis', EN: 'United States', AR: 'الولايات المتحدة' }, region: { FR: 'Amériques', EN: 'Americas', AR: 'الأمريكتان' } },
  { code: 'CA', name: { FR: 'Canada', EN: 'Canada', AR: 'كندا' }, region: { FR: 'Amériques', EN: 'Americas', AR: 'الأمريكتان' } },
  { code: 'MX', name: { FR: 'Mexique', EN: 'Mexico', AR: 'المكسيك' }, region: { FR: 'Amériques', EN: 'Americas', AR: 'الأمريكتان' } },
  { code: 'BR', name: { FR: 'Brésil', EN: 'Brazil', AR: 'البرازيل' }, region: { FR: 'Amériques', EN: 'Americas', AR: 'الأمريكتان' } },
  { code: 'AR', name: { FR: 'Argentine', EN: 'Argentina', AR: 'الأرجنتين' }, region: { FR: 'Amériques', EN: 'Americas', AR: 'الأمريكتان' } },
  { code: 'CO', name: { FR: 'Colombie', EN: 'Colombia', AR: 'كولومبيا' }, region: { FR: 'Amériques', EN: 'Americas', AR: 'الأمريكتان' } },
  { code: 'CL', name: { FR: 'Chili', EN: 'Chile', AR: 'تشيلي' }, region: { FR: 'Amériques', EN: 'Americas', AR: 'الأمريكتان' } },
  { code: 'PE', name: { FR: 'Pérou', EN: 'Peru', AR: 'بيرو' }, region: { FR: 'Amériques', EN: 'Americas', AR: 'الأمريكتان' } },
  { code: 'VE', name: { FR: 'Venezuela', EN: 'Venezuela', AR: 'فنزويلا' }, region: { FR: 'Amériques', EN: 'Americas', AR: 'الأمريكتان' } },
  { code: 'CU', name: { FR: 'Cuba', EN: 'Cuba', AR: 'كوبا' }, region: { FR: 'Amériques', EN: 'Americas', AR: 'الأمريكتان' } },
  // Océanie
  { code: 'AU', name: { FR: 'Australie', EN: 'Australia', AR: 'أستراليا' }, region: { FR: 'Océanie', EN: 'Oceania', AR: 'أوقيانوسيا' } },
  { code: 'NZ', name: { FR: 'Nouvelle-Zélande', EN: 'New Zealand', AR: 'نيوزيلندا' }, region: { FR: 'Océanie', EN: 'Oceania', AR: 'أوقيانوسيا' } },
  { code: 'FJ', name: { FR: 'Fidji', EN: 'Fiji', AR: 'فيجي' }, region: { FR: 'Océanie', EN: 'Oceania', AR: 'أوقيانوسيا' } },
];

interface CountrySelectProps {
  value: string;
  onChange: (code: string) => void;
  isDarkMode?: boolean;
  placeholder?: string;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange, isDarkMode, placeholder }) => {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = COUNTRIES.find(c => c.code === value);
  const langKey = lang as 'FR' | 'EN' | 'AR';

  // Group by region
  const filtered = COUNTRIES.filter(c =>
    c.name[langKey].toLowerCase().includes(search.toLowerCase()) ||
    c.code.toLowerCase().includes(search.toLowerCase())
  );

  const grouped = filtered.reduce((acc, country) => {
    const region = country.region[langKey];
    if (!acc[region]) acc[region] = [];
    acc[region].push(country);
    return acc;
  }, {} as Record<string, Country[]>);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && searchRef.current) {
      setTimeout(() => searchRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const bg = isDarkMode ? '#18181C' : '#F8F7F5';
  const border = isDarkMode ? '#333' : '#e5e7eb';
  const text = isDarkMode ? '#fff' : '#333';
  const subtext = isDarkMode ? '#888' : '#999';
  const hoverBg = isDarkMode ? '#2a2a2e' : '#f5f5f5';
  const dropdownBg = isDarkMode ? '#1a1a1e' : '#fff';
  const groupColor = isDarkMode ? '#777' : '#aaa';

  return (
    <div ref={ref} style={{ position: 'relative', fontFamily: "'Montserrat', sans-serif" }}>
      {/* Trigger (Combobox) */}
      <div
        onClick={() => {
          if (!isOpen) setIsOpen(true);
          searchRef.current?.focus();
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '14px 18px',
          border: `2px solid ${isOpen ? '#A44C4C' : border}`,
          borderRadius: '8px',
          background: bg,
          cursor: 'text',
          transition: 'all 0.2s ease',
          boxShadow: isOpen ? '0 0 0 3px rgba(164,76,76,0.1)' : 'none',
        }}
      >
        {selected && (
          <img
            src={`https://flagcdn.com/20x15/${selected.code.toLowerCase()}.png`}
            width="20"
            height="15"
            alt={selected.name[langKey]}
            style={{ borderRadius: '2px', flexShrink: 0, opacity: (isOpen && search) ? 0.3 : 1, transition: '0.2s' }}
          />
        )}
        
        <input
          ref={searchRef}
          value={isOpen ? search : (selected ? selected.name[langKey] : '')}
          onChange={e => {
            setSearch(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={selected ? selected.name[langKey] : (placeholder || (lang === 'AR' ? 'ابحث عن دولة...' : 'Rechercher un pays...'))}
          style={{
            flex: 1,
            border: 'none',
            background: 'transparent',
            outline: 'none',
            color: text,
            fontSize: '14px',
            fontFamily: "'Montserrat', sans-serif",
            width: '100%',
            padding: 0,
          }}
        />
        
        <svg
          onClick={(e) => { e.stopPropagation(); setIsOpen(prev => !prev); }}
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A44C4C" strokeWidth="2.5"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.2s', flexShrink: 0, cursor: 'pointer' }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 6px)',
          left: 0,
          right: 0,
          background: dropdownBg,
          border: `2px solid #A44C4C`,
          borderRadius: '10px',
          boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
          zIndex: 9999,
          overflow: 'hidden',
          direction: lang === 'AR' ? 'rtl' : 'ltr',
        }}>
          {/* Options list */}
          <div style={{ maxHeight: '260px', overflowY: 'auto' }}>
            {Object.entries(grouped).map(([region, countries]) => (
              <div key={region}>
                <div style={{
                  padding: '6px 14px 4px',
                  fontSize: '10px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: groupColor,
                  background: isDarkMode ? '#111' : '#f8f8f8',
                }}>
                  {region}
                </div>
                {countries.map(country => (
                  <div
                    key={country.code}
                    onClick={() => { onChange(country.code); setIsOpen(false); setSearch(''); }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '9px 14px',
                      cursor: 'pointer',
                      fontSize: '13.5px',
                      color: value === country.code ? '#A44C4C' : text,
                      background: value === country.code ? 'rgba(164,76,76,0.07)' : 'transparent',
                      fontWeight: value === country.code ? 600 : 400,
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => { if (value !== country.code) (e.currentTarget as HTMLDivElement).style.background = hoverBg; }}
                    onMouseLeave={e => { if (value !== country.code) (e.currentTarget as HTMLDivElement).style.background = 'transparent'; }}
                  >
                    <img
                      src={`https://flagcdn.com/20x15/${country.code.toLowerCase()}.png`}
                      width="20"
                      height="15"
                      alt={country.name[langKey]}
                      style={{ borderRadius: '2px', flexShrink: 0 }}
                    />
                    {country.name[langKey]}
                    {value === country.code && (
                      <svg style={{ marginLeft: 'auto' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A44C4C" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            ))}
            {Object.keys(grouped).length === 0 && (
              <div style={{ padding: '20px', textAlign: 'center', color: subtext, fontSize: '13px' }}>
                {lang === 'AR' ? 'لا توجد نتائج' : lang === 'FR' ? 'Aucun résultat' : 'No results'}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
