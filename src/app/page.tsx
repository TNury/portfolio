import { About } from '@portfolio/components/sections//About';
import { Banner } from '@portfolio/components/sections/Banner';
import { Contact } from '@portfolio/components/sections/Contact';
import { MyWork } from '@portfolio/components/sections/MyWork';
import { WhatIDo } from '@portfolio/components/sections/WhatIDo';

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      <Banner />
      <About />
      <WhatIDo />
      <MyWork />
      <Contact />
    </main>
  );
}
