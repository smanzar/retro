'use client'

import CardBox from "@/components/cardBox/CardBox"
import Cpagination from "@/components/customPagination/Cpagination"
import OrderRow from "@/components/orderRow/OrderRow"
import RedeemCard from "@/components/productBox/RedeemCard"
import { Badge, Button, ButtonGroup, GridItem, IconButton, Pagination, SimpleGrid, Stack } from "@chakra-ui/react"
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react"
import Image from "next/image"
import { useState } from "react"


export default function Retrocoin() {
  const [activeTab, setActiveTab] = useState('Redeem rewards');
  const [selectedOrderType, setSelectedOrderType] = useState('all');
  const tabs = [
    {
      id: 1,
      name: 'Redeem rewards',
    },
    {
      id: 2,
      name: 'Activity log',
    },
  ]

  const redeemCardData = [
    {
      id: 1,
      Imgsrc: '/product.png',
      name: 'Apple AirPods Pro',
      genre: 'Electronics',
      category: 'Audio',
      price: 199.99,
    },
    {
      id: 2,
      Imgsrc: '/product.png',
      name: 'Samsung Galaxy S21',
      genre: 'Electronics',
      category: 'Mobile',
      price: 799.99,
    },
    {
      id: 3,
      Imgsrc: '/product.png',
      name: 'Sony WH-1000XM4',
      genre: 'Electronics',
      category: 'Audio',
      price: 349.99,
    },
    {
      id: 4,
      Imgsrc: '/product.png',
      name: 'Dell XPS 13',
      genre: 'Electronics',
      category: 'Laptop',
      price: 999.99,
    },
    {
      id: 5,
      Imgsrc: '/product.png',
      name: 'Apple MacBook Air',
      genre: 'Electronics',
      category: 'Laptop',
      price: 1299.99,
    },
    {
      id: 6,
      Imgsrc: '/product.png',
      name: 'Bose QuietComfort 35 II',
      genre: 'Electronics',
      category: 'Audio',
      price: 299.99,
    },
    {
      id: 7,
      Imgsrc: '/product.png',
      name: 'Google Pixel 6',
      genre: 'Electronics',
      category: 'Mobile',
      price: 599.99,
    },
    {
      id: 8,
      Imgsrc: '/product.png',
      name: 'Fitbit Charge 5',
      genre: 'Electronics',
      category: 'Wearable',
      price: 149.99,
    },
    {
      id: 9,
      Imgsrc: '/product.png',
      name: 'Apple Watch Series 7',
      genre: 'Electronics',
      category: 'Wearable',
      price: 399.99,
    },
    {
      id: 10,
      Imgsrc: '/product.png',
      name: 'Microsoft Surface Pro 7',
      genre: 'Electronics',
      category: 'Laptop',
      price: 899.99,
    },
  ]
  
    const orderTypes = [
      { id: 1, name: 'All' },
      { id: 2, name: 'Earned' },
      { id: 3, name: 'spent' },
    ]

    const orderTableHeader = [
      {
        nameKey: 'activity',
        name: 'Activity'
      },
      {
        nameKey: 'reward',
        name: 'Points'
      },
      {
        nameKey: 'product',
        name: 'Product'
      },
      {
        nameKey: 'ordered',
        name: 'date'
      },
      {
        nameKey: 'status',
        name: 'Outcome'
      },
      {
        nameKey: 'support',
        name: 'Action'
      },
    ]
    const orderTableData = [
      {
        activity: 'Purchase',
        reward: '300',
        product: 'Nintendo 3DS Console',
        ordered: '25 Apr, 2024',
        status: 'Earned',
        avatarSrc: 'https://bit.ly/dan-abramov',
        support: 'Submit ticket'
      },
      {
        activity: 'Challenge completed',
        reward: '300',
        product: 'Nintendo 3DS Console',
        ordered: '25 Apr, 2024',
        status: 'Spent',
        avatarSrc: 'https://bit.ly/dan-abramov',
        support: 'Submit ticket'
      },
      {
        activity: 'Purchase',
        reward: '300',
        product: 'Nintendo 3DS Console',
        ordered: '25 Apr, 2024',
        status: 'Earned',
        avatarSrc: 'https://bit.ly/dan-abramov',
        support: 'Submit ticket'
      },
      {
        activity: 'Challenge completed',
        reward: '300',
        product: 'Nintendo 3DS Console',
        ordered: '25 Apr, 2024',
        status: 'Spent',
        avatarSrc: 'https://bit.ly/dan-abramov',
        support: 'Submit ticket'
      },
      
    ]

  
  return (
    <div className="mb-40">
      <div className="flex-start-center gap-10">
        <div>
          <h1 className="fw-700">Retro Coins</h1>
          <p className="fs-14 fw-600 text-uppercase mt-12">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
        </div>
      </div>

      <SimpleGrid columns={{ base: 1, md: 4 }} gap={{ base: "24px", md: "60px" }} className="mt-30">
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <CardBox color="#F9BC26">
            <div className="level-stats">
              <div className="flex-start-center gap-10">
                <Image src='/coin.png' alt='heart' width={110} height={100} />
                <div>
                  <Badge>LEVEL 3</Badge>
                  <h4 className="mt-0">10,370</h4>
                  <p className="fs-14 fw-600 text-black text-uppercase">Retro coins</p>
                </div>
              </div>
              <Image src='/slider.png' alt='slider' width={1000} height={62} />
              <p className="text-black fw-600">12000 more points to next level</p>
            </div>
          </CardBox>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 3 }}>
          <div className="order-stats retro-coin m-0">
            <div className="single-stat">
              <p className="fw-600 fs-14">
                <span className="icon-green">
                  <TrendingUp />
                </span>
                Lifetime Points earned
              </p>
              <h2 className="fw-700 flex-start-center gap-10">
                <Image src='/coin.png' alt='heart' width={45} height={45} />  82,530
              </h2>
              <Badge color="green" className="badge-green">+10% yearly</Badge>
            </div>
            <div className="single-stat">
              <p className="fw-600 fs-14">
                <span className="icon-green">
                  <TrendingUp />
                </span>
                Claimed rewards
              </p>
              <h2 className="fw-700 flex-start-center gap-10">
                <Image src='/coin.png' alt='heart' width={45} height={45} />10,300
              </h2>
              <Badge color="green" className="badge-green">+25% yearly</Badge>
            </div>
            <div className="single-stat">
              <p className="fw-600 fs-14">
                Points available to claim
              </p>
              <h2 className="fw-700 flex-start-center gap-10">
                <Image src='/coin.png' alt='heart' width={45} height={45} />82,530
              </h2>
              <Badge color="green" className="badge-pink">Redeemable</Badge>
            </div>
            <div className="single-stat">
              <p className="fw-600 fs-14">
                Savings on purchases
              </p>
              <h2 className="fw-700">$1,300</h2>
              <Badge color="green" className="badge-yellow">Redeemed rewards</Badge>
            </div>
          </div>
        </GridItem>
      </SimpleGrid>

      <div className="redeem-rewards">
        <div className="redeem-tabs">
          {
            tabs.map((tab) => (
              <p key={tab.id} className={`tab ${activeTab === tab.name ? 'active' : ''}`} onClick={() => setActiveTab(tab.name)}>
                {tab.name}
              </p>
            ))
          }
        </div>

        <div className="tab-listing mt-40">
          {
            activeTab === 'Activity log' ? (
              <>
                <div className="order-type-detail mx-auto">
                  {
                    orderTypes.map((type) => {
                      return (
                        <div key={type.id} className={`single-type ${selectedOrderType.toLowerCase() === type.name.toLowerCase() ? 'active' : ''}`} onClick={() => setSelectedOrderType(type.name)}>
                          <p>{type.name}</p>
                        </div>
                      )
                    })
                  }
                </div>
                <div className="mt-30">
                  <CardBox color="#fff">
                    <div className="order-history-table">
                      <div className="order-thead">
                        {orderTableHeader.map((header) => (
                          <div key={header} className={`t-${header.nameKey}`}>
                            {header.name.toUpperCase()}
                          </div>
                        ))}
                      </div>
                      <div className="order-tbody">
                        {
                          orderTableData.map((order, index) => {
                            return (
                              <OrderRow key={index} order={order} headers={orderTableHeader} />
                            )
                          })
                        }
                        
                      </div>
                    </div>
                    <Cpagination />
                  </CardBox>
                </div>
              </>
            ) : (
              <>
                <SimpleGrid columns={{ base: 1, md: 5 }} gap={{ base: "24px", md: "30px" }}>
                  {
                    redeemCardData.map((product) => (
                      <GridItem key={product.id} colSpan={{ base: 1, md: 1 }}>
                        <RedeemCard product={product} />
                      </GridItem>
                    ))
                  }
                </SimpleGrid>

                <Cpagination />
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}