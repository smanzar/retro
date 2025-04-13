import { Input, InputGroup } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FaTiktok, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaThreads } from "react-icons/fa6";


export default function Footer() {
  return(
    <div className='site-footer'>
      <div className="container">
        <div className="footer-logo text-center">
          <Link href="/" className="brand-logo">
            <Image alt="logo" width={170} height={60} className="mx-auto" src="/logo.webp" />
          </Link>
        </div>
        <div className="flex-between-start">
          <div className="footer-links">
            <ul>
              <li><Link href="/">Privacy Policy</Link></li>
              <li><Link href="/">Terms of service</Link></li>
              <li><Link href="/">Contact us</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <p className="fs-18 fw-700 text-center">Social media</p>
            <ul className="mt-12 item-inline">
              <li><Link href="/"><FaFacebook /></Link></li>
              <li><Link href="/"><FaInstagram /></Link></li>
              <li><Link href="/"><FaTiktok /></Link></li>
              <li><Link href="/"><FaXTwitter /></Link></li>
              <li><Link href="/"><FaYoutube /></Link></li>
              <li><Link href="/"><FaThreads /></Link></li>
            </ul>
          </div>
          <div className="footer-links text-right">
            <div className="subscribe">
              <p className="fs-20 fw-700">Subscribe to our newsletter</p>
              <InputGroup endElement="Subscribe" className="mt-12">
                <Input placeholder="Enter your email" />
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
      <div className="cpr">
        <div className="container">
          <div className="flex-between-center">
            <p className="text-white-70 fs-12 fw-300">
              ©2024 Retrofam. All Rights Reserved.
            </p>
            <Image src="/cards.png" alt="logo" width={240} height={20} className="" />
          </div>
        </div>
      </div>
    </div>
  )
}