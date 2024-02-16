import React from 'react'
import Link from 'next/link';
import FEATURED from '../component/ScriptWritingServices/featuredSec'
import LHScript from '../component/ScriptWritingServices/LetUsPress'
import GhostWriting from '../component/ghostWritingServices/ghostWriting'
import CREATIVEGHOSTWRITERS from '../component/ghostWritingServices/creativeGhostWriters'
import HeaderContactForm from '../component/headerContactformNew';
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
          banneraffordable='ScriptWriting'
          title='Professional High-Quality Script by Expert Writers'
          dec={`Streamline your content needs with our high-quality script writing service, which educates your audience about your brand and helps elevate you.`}
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
        <HeaderContactForm />
        <LHScript />
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
