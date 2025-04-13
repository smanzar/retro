'use client'
import CardBox from "@/components/cardBox/CardBox"
import OrderRow from "@/components/orderRow/OrderRow"
import ProductBox from "@/components/productBox/ProductBox";
import { Badge, Button, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion"; 
import { Calendar, ChevronLeft, ChevronRight, FileText, TrendingUp } from "lucide-react";
import Slider from "react-slick";
import { DatePickerInput } from '@mantine/dates';


export default function OrderManagement() {
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [value, setValue] = useState([null, null]);
  const [selectedOrderType, setSelectedOrderType] = useState('all');

  const orderTypes = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Cancelled' },
    { id: 3, name: 'in process' },
    { id: 4, name: 'Returned' },
  ]

  const orderTableHeader = [
    {
      nameKey: 'id',
      name: 'ID'
    },
    {
      nameKey: 'product',
      name: 'Product'
    },
    {
      nameKey: 'ordered',
      name: 'Date'
    },
    {
      nameKey: 'quantity',
      name: 'Quantity'
    },
    {
      nameKey: 'price',
      name: 'Price'
    },
    {
      nameKey: 'status',
      name: 'Status'
    },
    {
      nameKey: 'reward',
      name: 'Reward'
    },
    {
      nameKey: 'actions',
      name: 'Action'
    },
    {
      nameKey: 'others',
      name: ''
    }
  ]
  const orderTableData = [
    {
      id: '#213432',
      product: 'Nintendo 3DS Console',
      ordered: '25 Apr, 2024',
      quantity: '1',
      price: '$120.75',
      status: 'Out for delivery',
      reward: '120.75',
      actions: 'Review and get rewards',
      avatarSrc: 'https://bit.ly/dan-abramov',
      others: 'See more info',
      actions: 'Review and get rewards'
    },
    {
      id: '#213432',
      product: 'Nintendo 3DS Console',
      ordered: '25 Apr, 2024',
      quantity: '1',
      price: '$120.75',
      status: 'Out for delivery',
      reward: '120.75',
      actions: 'Review and get rewards',
      avatarSrc: 'https://bit.ly/dan-abramov',
      others: 'See more info',
      actions: 'Review and get rewards'
    },
    {
      id: '#213432',
      product: 'Nintendo 3DS Console',
      ordered: '25 Apr, 2024',
      quantity: '1',
      price: '$120.75',
      status: 'Out for delivery',
      reward: '120.75',
      actions: 'Review and get rewards',
      avatarSrc: 'https://bit.ly/dan-abramov',
      others: 'See more info',
      actions: 'Review and get rewards'
    },
    
  ]

  const saleProducts = [
    {
      id: 1,
      badgeQuote: '30% Off',
      image: '/product.png',
      name: 'Love 3 - Nintendo Switch',
      category: ['PS4', 'PS5'],
      rating: '4.9',
      reviews: '27 Reviews',
      price: '$120.75',
      oldPrice: '$150.00',
      lastSale: '20 Sold Out this Month',
    },
    {
      id: 2,
      badgeQuote: '30% Off',
      image: '/product.png',
      name: 'Love 3 - Nintendo Switch',
      category: ['PS4', 'PS5'],
      rating: '4.9',
      reviews: '27 Reviews',
      price: '$120.75',
      oldPrice: '$150.00',
      lastSale: '20 Sold Out this Month',
    },
    {
      id: 3,
      badgeQuote: '30% Off',
      image: '/product.png',
      name: 'Love 3 - Nintendo Switch',
      category: ['PS4', 'PS5'],
      rating: '4.9',
      reviews: '27 Reviews',
      price: '$120.75',
      oldPrice: '$150.00',
      lastSale: '20 Sold Out this Month',
    },
    {
      id: 4,
      badgeQuote: '30% Off',
      image: '/product.png',
      name: 'Love 3 - Nintendo Switch',
      category: ['PS4', 'PS5'],
      rating: '4.9',
      reviews: '27 Reviews',
      price: '$120.75',
      oldPrice: '$150.00',
      lastSale: '20 Sold Out this Month',
    }
  ]

  function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style}}
          onClick={onClick}
        ><ChevronRight /></div>
      );
    }
    
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style }}
          onClick={onClick}
        ><ChevronLeft /></div>
      );
    }

  const settingsLarge = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 6,
    centerMode: true,
    centerPadding: "20px",
    variableWidth:false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (_, next) => setCurrentSlide2(next),
  };
  return(
    <>
      <div className="flex-start-center gap-10">
        <h1 className="fw-700">Order management</h1>
      </div>

      <div className="mt-30">
        <Flex align='center' gap="3" justify='space-between' className="order-filter">
          <Flex align='center' gap="3" justify='start'>
            <DatePickerInput
              type="range"
              leftSection={<Calendar />}
              leftSectionPointerEvents="none"
              placeholder="Pick date"
              value={value}
              onChange={setValue}
            />
            <Button variant='plain' className="btn-lg text-uppercase p-0">Export <FileText /></Button>
          </Flex>
          <Button className="btn-green btn-lg text-uppercase">Shop for more</Button>
        </Flex>
      </div>

      <div className="order-stats">
        <div className="single-stat">
          <p className="fw-600 fs-14">
            <span className="icon-green">
              <TrendingUp />
            </span>
            Total orders
          </p>
          <h2 className="fw-700">25</h2>
          <Badge color="green" className="badge-green">+10% yearly</Badge>
        </div>
        <div className="single-stat">
          <p className="fw-600 fs-14">
            Rewards claimed
          </p>
          <h2 className="fw-700">$2,500</h2>
          <Badge color="green" className="badge-green">40% saved</Badge>
        </div>
        <div className="single-stat">
          <p className="fw-600 fs-14">
            Rewards claimed
          </p>
          <h2 className="fw-700">$2,500</h2>
          <Badge color="green" className="badge-green">40% saved</Badge>
        </div>
        <div className="single-stat">
          <p className="fw-600 fs-14">
            Total spent
          </p>
          <h2 className="fw-700">$3,500</h2>
          <Badge color="green" className="badge-blue">Actual amount = $6,250</Badge>
        </div>
        <div className="single-stat">
          <p className="fw-600 fs-14">
            Actual order value
          </p>
          <h2 className="fw-700">$6,500</h2>
          <Badge color="green" className="badge-green">40% saved</Badge>
        </div>
        <div className="single-stat">
          <p className="fw-600 fs-14">
            CANCELLED ORDERS
          </p>
          <h2 className="fw-700">3</h2>
          <Button variant='plain' className="p-0">See them all <ChevronRight /></Button>
        </div>
        <div className="single-stat">
          <p className="fw-600 fs-14">
            COMPLETED ORDERS
          </p>
          <h2 className="fw-700">22</h2>
          <Button variant='plain' className="p-0">See them all <ChevronRight /></Button>
        </div>
      </div>
      
      <div className="mt-30">
        <div className="order-type-detail">
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
        </CardBox>
      </div>

      <div className="mt-30 mb-40">
        <Flex gap="1" align='flex-start'>
          <Image src='/stars-yellow.png' alt='bee' width={40} height={30} />
          <h2 className="m-0 fw-700">You might also be interested in</h2>
        </Flex>
        <div className="container product-slider mt-12">
          <Slider {...settingsLarge} className="slider-arrows">
            {
              saleProducts.map((product, index) => {
                return (
                  <ProductBox product={product} key={index} />
                )
              })
            }
          </Slider>
          <div className="bee-transition">
            <div className="outline-stand"></div>
            <motion.div className="bee" animate={{
                x: `${(currentSlide2 / (saleProducts.length - 1)) * 100}%`, // Move bee with slide index
              }}
              transition={{ type: "tween", duration: 0.5 }}
            >
              <Image src='/bee.png' alt='bee' width={40} height={30} />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}