export const runtime = 'nodejs';
import { renderDynamicPage } from '@/lib/renderDynamicPage';
export default function Page() { return renderDynamicPage('degrees'); }
