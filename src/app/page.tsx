import { About } from '@portfolio/components/sections//About';
import { Banner } from '@portfolio/components/sections/Banner';
import { WhatIDo } from '@portfolio/components/sections/WhatIDo';

export default function Home() {
  return (
    <main className=''>
      <Banner />
      <About />
      <WhatIDo />
    </main>
  );
}
