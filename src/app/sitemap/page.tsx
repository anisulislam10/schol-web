import { renderDynamicPage } from '@/lib/renderDynamicPage';

export const runtime = 'nodejs';

export default function Page() { 
  return renderDynamicPage('sitemap', 'Sitemap'); 
}
