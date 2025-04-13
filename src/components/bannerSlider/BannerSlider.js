import { Button } from "@chakra-ui/react";
import Image from "next/image";

export default function BannerSlider({}) {
  return(
    <div>
      <div className="slider-banner" style={{background: '#EA4325'}}>
        <div className="banner-content">
          <Image src='/logo.webp' alt='logo' width={138} height={50} />
          <h2 className="fw-600">
            Avail exclusive discounts
            on your favorite consoles
            on the Valentines day
          </h2>
          <Button className="btn-black btn-lg text-uppercase" style={{maxWidth: 'max-content'}}>shop now</Button>
        </div>
        <div className="banner-discount">
          <Image src='/dicountOffer.png' alt='discount' width={240} height={240} />
        </div>
        <div className="banner-image">
          <Image src='/bannerImg.png' alt='banner' width={460} height={400} />
        </div>
      </div>
    </div>
  )
}