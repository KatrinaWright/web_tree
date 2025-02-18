'use client';

import dynamic from 'next/dynamic';

const FamilyTree = dynamic(() => import('@/components/FamilyTree'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <FamilyTree />
    </main>
  );
}