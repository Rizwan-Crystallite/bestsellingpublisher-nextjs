import React from 'react'
import Link from 'next/link'

import FEATURED from '../component/ghostWritingServices/featuredSec'
import LETUSHELP from '../component/ghostWritingServices/LetUsHelp'
import GhostWriting from '@/component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'
import HEADERCONTACTNEW from '../component/headerContactformNew'

import WMODE from '../component/workMode1'
import CTA from '../component/cta3';
import BTM from '../component/bottomLogos';
import SwiperComponents from '../component/SwiperComponent'
import LogoSliders from '../component/bottomLogosNEW'


const Ghostwriting = () => {
  return (
    <>
      <main>

        <FEATURED
          banneraffordable='affo'
          title='The Best Affordable and Professional Ghostwriting Services Agency'
          dec={` We’ve helped thousands of authors express themselves eloquently; you can be next! Hire our top-tier expert writers today and imprint your words in your readers’ minds forever.`}
          href1={<> <Link href=" " data-fancybox="" data-src="#popupform" className="btn btn-green">
            Get Started <i className="fas fa-caret-right ml-1"></i>
          </Link> </>}
          href2={<>
            <Link href=" " className="chat btn btn-white-border ml-4">
              Live Chat
            </Link>
          </>}
        />
        <LogoSliders />
        <HEADERCONTACTNEW />
        <LETUSHELP
          title='What Sets Us Apart?'
          desc={'Barnett Ghostwriting is a well-known international ghostwriting and editing firm that has been operating for over a decade. Our experts create well-versed writing that demonstrates true professionalism while exhibiting creativity. Our services are not only economical but also ensure that both the needs of the authors and the preferences of their target audience are adequately met. Some of our platform’s distinguishing traits are as follows: '}
        />
        <GhostWriting />
        <CREATIVEGHOSTWRITERS />
        <CTA />
        <BTM />
        <WMODE />
        <SwiperComponents />

      </main>
    </>
  )
}

export default Ghostwriting;
