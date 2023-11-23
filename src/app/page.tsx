import { About } from '@portfolio/components/sections/About';
import { Banner } from '@portfolio/components/sections/Banner';
import { Contact } from '@portfolio/components/sections/Contact';
import { MyWork } from '@portfolio/components/sections/MyWork';
import { WhatIDo } from '@portfolio/components/sections/WhatIDo';
import { ContactBar } from '@portfolio/components/ui/ContactBar';

import { staticRootBannerProps } from '@portfolio/static-data/staticData';

export default function Home() {
  return (
    <main className='flex flex-col items-center overflow-x-clip'>
      <Banner bannerProps={staticRootBannerProps} />
      <ContactBar />
      <About />
      <WhatIDo />
      <MyWork />
      <Contact />
    </main>
  );
}
