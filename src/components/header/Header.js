'use client'
import { Avatar, Menu, Portal } from "@chakra-ui/react";
import { BellRing, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";


export default function Header({isLoggedIn}) {
  const ref = useRef(null);
  const getAnchorRect = () => ref.current ? ref.current.getBoundingClientRect() : null;
  return(
    <header className='main-header'>
      <div className="promo-line">
        <Image alt="controller" width={15} height={20} className="" src="/header-controller-img.svg" />
        <p className="text-white fw-600">
          Limited Time Offer 60% Off for 6 Months
          <Link href="/" className="text-underline fs-18">BUY NOW &amp; SAVE</Link>
        </p>
      </div>

      <div className="container">
        <div className="logo-search-cart">
          <Link href="/" className="brand-logo">
            <Image alt="logo" width={170} height={60} className="" src="/logo.webp" />
          </Link>
          <div className="other-options">
            {
              isLoggedIn && (
                <>
                  <div className="gaps-apart">
                    <div>
                      <p className="fs-12">RETROCOIN</p>
                      <div className="flex-between-center gap-10">
                        <Image src='/coin.png' width={24} height={24} alt='coin' />
                        <p className="fw-600">10,370</p>
                      </div>
                    </div>
                  </div>
                  <div className="gaps-apart">
                    <div>
                      <p className="fs-12">Store credit</p>
                      <p className="fw-600">$120.75</p>
                    </div>
                  </div>   
                </>
              )
            }
            <div className="site-search gaps-apart">
              <Search />
              <input type="text" placeholder="Search games & consoles" className="" />
            </div>
            <div className="gaps-apart">
              <Link href="/">
                <Image alt="Shopping cart" width={24} height={24} src="/cart.svg" />
              </Link>
            </div>
            <div className="gaps-apart">
              <Link href="#" className="notification">
                <BellRing />
                <span className="notification-count"></span>
              </Link>
            </div>
            {
              isLoggedIn && (
                <Menu.Root positioning={{ getAnchorRect }}>
                  <Menu.Trigger asChild>
                    <Avatar.Root ref={ref} className="user-avatar">
                      <Avatar.Fallback name="Segun Adebayo" />
                      <Avatar.Image src="https://bit.ly/sage-adebayo" />
                    </Avatar.Root>
                  </Menu.Trigger>
                  <Portal>
                    <Menu.Positioner>
                      <Menu.Content>
                        <Menu.Item value="new-txt">New Text File</Menu.Item>
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                </Menu.Root>
              )
            }
          </div>
        </div>
      </div>
    </header>
  )
}