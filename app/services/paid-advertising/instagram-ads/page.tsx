import type { Metadata } from 'next';
import ServicesCatchAllPage, { getServicesMetadata } from '@/app/services/[[...slug]]/page';

const slug = ['paid-advertising', 'instagram-ads'] as const;

export const metadata: Metadata = getServicesMetadata([...slug]);

export default function Page() {
  return <ServicesCatchAllPage params={Promise.resolve({ slug })} />;
}
