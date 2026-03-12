'use client';

import { useLanguage } from '@/context/LanguageContext';
import TicketsSectionEs from './TicketsSectionEs';
import TicketsSectionVa from './TicketsSectionVa';

const TicketsSection: React.FC = () => {
  const { lang } = useLanguage();
  
  return lang === 'va' ? <TicketsSectionVa /> : <TicketsSectionEs />;
};

export default TicketsSection;
