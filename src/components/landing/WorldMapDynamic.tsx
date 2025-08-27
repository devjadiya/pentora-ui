'use client';

import dynamic from 'next/dynamic';

const WorldMap = dynamic(() => import('@/components/landing/WorldMap'), {
  ssr: false,
  loading: () => <div className="h-[480px] w-full flex items-center justify-center"><p>Loading Map...</p></div>
});

export default function WorldMapDynamic() {
  return <WorldMap />;
}
