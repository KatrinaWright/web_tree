'use client';

import { useState, useEffect } from 'react';
import FamilyTree from '@/components/FamilyTree'

export default function Home() {
  const [familyData, setFamilyData] = useState(null);

  useEffect(() => {
    fetch('/sampleFamilyData.json')
      .then((response) => response.json())
      .then((data) => setFamilyData(data));
  }, []);

  return (
    <main>
        {familyData ? (
          <FamilyTree data={familyData} />
        ) : (
          <p>
Loading family data...
</p>
        )}
    </main>
    );
  }
  