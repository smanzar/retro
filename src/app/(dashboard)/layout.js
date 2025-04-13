"use client";
import { useRouter } from "next/navigation";
import Header from "@/components/header/Header";
import { useState } from "react";
import Footer from "@/components/footer/Footer";
import SideMenu from "@/components/sideMenu/SideMenu";

export default function DashboardLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();
  return (
    <div className="main-layout">
      <Header isLoggedIn={isLoggedIn} />
      {/* <Theme appearance="light">{children}</Theme> */}
      <div className="dashboard-layout">
        <SideMenu />
        <div className="container">
          {children}
        </div>
      </div>
      {
        isLoggedIn && (
          <Footer />
        )
      }
    </div>
  );
}
