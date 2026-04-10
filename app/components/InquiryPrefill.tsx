'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function InquiryPrefill() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname !== '/contact-us') {
      return;
    }

    const inquiry = searchParams.get('inquiry');
    if (!inquiry) {
      return;
    }

    const applyInquiry = () => {
      const input = document.querySelector<HTMLInputElement>('input[name="inquiry"]');
      if (!input) {
        return false;
      }

      input.value = inquiry;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
      return true;
    };

    if (applyInquiry()) {
      return;
    }

    const timer = window.setTimeout(() => {
      applyInquiry();
    }, 120);

    return () => window.clearTimeout(timer);
  }, [pathname, searchParams]);

  return null;
}
