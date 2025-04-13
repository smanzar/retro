'use client'
import { Button } from "@chakra-ui/react";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";


export default function SideMenu({isLoggedIn}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: "/menu/dashboard.png",
      link: "/",
    },
    {
      id: 2,
      name: "order management",
      icon: "/menu/order.png",
      link: "/order-management",
    },
    {
      id: 3,
      name: "retrocoins",
      icon: "/menu/coin.png",
      link: "/retrocoins",
    },
    {
      id: 4,
      name: "Wishlist products",
      icon: "/menu/wishlist.png",
      link: "/",
    },
    {
      id: 5,
      name: "Trade-in program",
      icon: "/menu/trade.png",
      link: "/",
    },
    {
      id: 6,
      name: "coupons/gift cards",
      icon: "/menu/coupon.png",
      link: "/coupons",
    },
    {
      id: 7,
      name: "affiliate program",
      icon: "/menu/affiliated.png",
      link: "/",
    },
    {
      id: 8,
      name: "Referral program",
      icon: "/menu/affiliated.png",
      link: "/referral-program",
    },
    {
      id: 9,
      name: "Store credit wallet",
      icon: "/menu/account.png",
      link: "/wallet",
    },
    {
      id: 10,
      name: "explore community",
      icon: "/menu/community.png",
      link: "/",
    },
    {
      id: 11,
      name: "customer support",
      icon: "/menu/faq.png",
      link: "/customer-support",
    },
    {
      id: 12,
      name: "Account settings",
      icon: "/menu/user.png",
      link: "/account-settings",
    },
    {
      id: 12,
      name: "Return Center",
      icon: "/menu/return.png",
      link: "/return-center",
    },
  ]
  return(
    <>
      <div className="floating-sidemenu">
        <div className={`menulist ${menuOpen ? 'open' : ''}`}>
          {
            menuList.map((item) => {
              return(
                <Link href={item.link} key={item.id} onClick={() => setMenuOpen(false)}>
                  <span className="icon"><Image width={30} height={30} src={item.icon} alt="home" /></span>
                  {item.name}
                </Link>
              )
            })
          }

          <div className="text-center mt-24">
            <Button className="btn-black btn-lg text-uppercase" style={{maxWidth: 'max-content'}}>Close menu</Button>
          </div>
        </div>
        <div className={`menu-opener ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="hamburger">
            <span className="top-bar"></span>
            <span className="bottom-bar"></span>
          </span>
          Menu
        </div>
      </div>
    </>
  )
}