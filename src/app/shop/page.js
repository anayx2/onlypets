// app/shop/page.js
import ProductListing from '@/components/shop/ShopPage';
import { Suspense } from 'react';

export default function ShopPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductListing />
    </Suspense>
  );
}