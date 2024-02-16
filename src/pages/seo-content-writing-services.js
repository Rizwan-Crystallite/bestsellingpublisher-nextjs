import React from 'react'
import Link from 'next/link';


import FEATURED from '../component/SeoContentWriting/featuredSec'
import HEADERCONTACTNEW from '../component/headerContactformNew'
import LETUSHELPSEO from '../component/SeoContentWriting/LetUsHelpSEO'
import GhostWriting from '@/component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'
import WMODE from '../component/workMode1'
import CTA3 from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'

import LogoSliders from '../component/bottomLogosNEW'


const Ghostwriting = () => {
  return (
    <>
      <main>

        <FEATURED
          banneraffordable='seo'
          title='Amplify Your Brand Image Through SEO Content Writing'
          dec={` Create SEO-optimized content that converts and attracts more organic search traffic to boost your online visibility and credibility.`}
          href1={<> <Link href=" " data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href=" " className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        />
        <LogoSliders></LogoSliders>
        <HEADERCONTACTNEW />
        <LETUSHELPSEO />
        <GhostWriting />
        <CREATIVEGHOSTWRITERS />
        <CTA3 />
        <BTM />
        <WMODE />
        <SwiperComponents />

      </main>
    </>
  )
}

export default Ghostwriting;
