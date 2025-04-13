"use client";
import CardBox from "@/components/cardBox/CardBox";
import OrderRow from "@/components/orderRow/OrderRow";
import ProductBox from "@/components/productBox/ProductBox";
import { Avatar, Badge, Button, Field, Flex, GridItem, HStack, IconButton, Input, InputGroup, RadioGroup, SimpleGrid, Stack, Textarea } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight, Info, MoveRight, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion"; 
import BannerSlider from "@/components/bannerSlider/BannerSlider";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const pendingOrderHeader = [
    {
      name: 'Product',
      nameKey: 'product',
    },
    {
      name: 'Quantity',
      nameKey: 'quantity',
    },
    {
      name: 'Total',
      nameKey: 'price',
    },
    {
      name: 'Reward',
      nameKey: 'reward',
    },
    {
      name: 'Action',
      nameKey: 'actions',
    }
  ]
  const pendingOrder = [
    {
      product: 'Nintendo 3DS Console',
      quantity: '1',
      price: '$120.75',
      reward: '120.75',
      actions: [
        {
          icon: <Trash2 style={{color: 'red'}} />
        }
      ],
      avatarSrc: 'https://bit.ly/dan-abramov',
    },
    {
      product: 'Nintendo 3DS Console',
      quantity: '1',
      price: '$120.75',
      reward: '120.75',
      actions: [
        {
          icon: <Trash2 style={{color: 'red'}} />
        }
      ],
      avatarSrc: 'https://bit.ly/dan-abramov',
    },
  ]

  const orderNowHeader = [
    {
      name: 'ID',
      nameKey: 'id',
    },
    {
      name: 'Product',
      nameKey: 'product',
    },
    {
      name: 'Price',
      nameKey: 'price',
    },
    {
      name: 'Status',
      nameKey: 'status',
    },
    {
      name: 'Ordered on',
      nameKey: 'orderedOn',
    },
    {
      name: 'Support',
      nameKey: 'support',
    },
    {
      name: 'Others',
      nameKey: 'others',
    }
  ]
  const orderNow = [
    {
      id: '#213432',
      product: 'Nintendo 3DS Console',
      price: '$120.75',
      status: 'Delivered',
      orderedOn: '25 Apr, 2024',
      support: 'Submit/View ticket',
      others: 'More info',
      avatarSrc: 'https://bit.ly/dan-abramov',
    },
    {
      id: '#213432',
      product: 'Nintendo 3DS Console',
      price: '$120.75',
      status: 'Cancelled',
      orderedOn: '25 Apr, 2024',
      support: 'Submit/View ticket',
      others: 'More info',
      avatarSrc: 'https://bit.ly/dan-abramov',
    },
    {
      id: '#213432',
      product: 'Nintendo 3DS Console',
      price: '$120.75',
      status: 'Processing',
      orderedOn: '25 Apr, 2024',
      support: 'Submit/View ticket',
      others: 'More info',
      avatarSrc: 'https://bit.ly/dan-abramov',
    },
    {
      id: '#213432',
      product: 'Nintendo 3DS Console',
      price: '$120.75',
      status: 'Out for delivery',
      orderedOn: '25 Apr, 2024',
      support: 'Submit/View ticket',
      others: 'More info',
      avatarSrc: 'https://bit.ly/dan-abramov',
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

  const couponPoints = [
    { label: "Use coupon", value: "1" },
    { label: "Use RetroCoins", value: "3" },
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "20px",
    variableWidth:false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (_, next) => setCurrentSlide(next),
  };
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

  const settingsBanner = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    variableWidth:false,
  };
  return (
    <>
      <div className="flex-start-center gap-10">
        <Avatar.Root>
          <Avatar.Fallback name="Segun Adebayo" />
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
        </Avatar.Root>
        <h1 className="fw-700">Welcome Back, Brittany!</h1>
      </div>

      <SimpleGrid columns={{ base: 2, md: 4 }} gap={{ base: "24px", md: "30px" }} className="mt-30">
        <GridItem colSpan={{ base: 1, md: 3 }}>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: "24px", md: "30px" }}>
            <GridItem colSpan={{ base: 1, md: 1 }}>
              <CardBox color="#F9BC26" arrowBtn={true} btnTop={true}>
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
            <GridItem colSpan={{ base: 1, md: 1 }}>
              <CardBox color="#449AD0" btnText='See full wallet' arrowBtn={true} btnTop={false}>
                <p className="fs-14 fw-600 text-white mb-20 text-uppercase">Store credit balance</p>
                <h2 className="text-white">$120.75</h2>
              </CardBox>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 1 }}>
              <CardBox color="#EA399A" btnText='See all products' arrowBtn={true} btnTop={true}>
                <Image src='/heart.png' alt='heart' width={110} height={100} />
                <h4 className="text-white text-uppercase">Your <br/> wishlist</h4>
              </CardBox>
            </GridItem>

            <GridItem colSpan={{ base: 1, md: 3 }}>
              <CardBox>
                <div className="flex-between-center">
                  <h5>Order History</h5>
                  <Button className="btn-black">See all</Button>
                </div>
                <div className="order-history-table">
                  <div className="order-thead">
                    {
                      orderNowHeader.map((header) => (
                        <div key={header.nameKey} className={`t-${header.nameKey}`}>
                          {header.name}
                        </div>
                      ))
                    }
                  </div>
                  <div className="order-tbody">
                    {
                      orderNow.map((order, index) => {
                        return (
                          <OrderRow key={index} order={order} headers={orderNowHeader} />
                        )
                      })
                    }
                    
                  </div>
                </div>
              </CardBox>
            </GridItem>
          </SimpleGrid>    
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <CardBox color="#449ADF">
            <h5 className="text-white">
              Got a problem? Submit a ticket and let us have a look
            </h5>
            <form className="mt-30">
              <Stack gap='4'>
                <Field.Root>
                  <Field.Label className="text-white">Subject</Field.Label>
                  <Input placeholder="Write subject here" className="border-field" />
                </Field.Root>
                <Field.Root>
                  <Field.Label className="text-white">Issue category</Field.Label>
                  <Input placeholder="Select issue category" className="border-field" />
                </Field.Root>
                <Field.Root>
                  <Field.Label className="text-white">How would you like to be contacted</Field.Label>
                  <Input placeholder="Contact via" className="border-field" />
                </Field.Root>
                <Field.Root>
                  <Field.Label className="text-white">Description</Field.Label>
                  <Textarea placeholder="Describe your issue" className="border-field" style={{height: '204px'}} />
                </Field.Root>

                <HStack gap='6'>
                  <Button className="btn-black btn-lg text-uppercase" style={{maxWidth: 'max-content'}}>submit</Button>
                  <Button variant="plain" className="btn-lg p-0 gap-4" style={{maxWidth: 'max-content'}}>See all tickets <ChevronRight /></Button>
                </HStack>
              </Stack>
            </form>
          </CardBox>
        </GridItem>
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 4 }} gap={{ base: "24px", md: "30px" }} className="mt-30">
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <CardBox color="#FF7898" btnText='Visit return center' arrowBtn={true} btnTop={false}>
            <p className="fs-14 fw-600 text-white mb-20 text-uppercase">Returns in process</p>
            <h2 className="text-white">2</h2>
          </CardBox>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <CardBox color="#65EBAC" btnText='See all coupons' arrowBtn={true} btnTop={true}>
            <Image src='/coupon.png' alt='heart' width={110} height={100} />
            <h4 className="text-black text-uppercase">Active <br/> Coupons</h4>
          </CardBox>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <CardBox color="#FF0000" btnText='Sell to us' arrowBtn={true} btnTop={true}>
            <Image src='/trade.png' alt='heart' width={65} height={80} />
            <h4 className="text-white text-uppercase">Trade-in <br/> program</h4>
          </CardBox>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <CardBox color="#006633" btnText='See details' arrowBtn={true} btnTop={true}>
            <Image src='/community.png' alt='heart' width={83} height={80} />
            <h4 className="text-white text-uppercase">Retrofam<br/> community</h4>
          </CardBox>
        </GridItem>
      </SimpleGrid>

      <div className="mt-30">
        <CardBox color="#05DFE3">
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "24px", md: "30px" }}>
            <GridItem colSpan={{ base: 1, md: 1 }}>
              <Flex gap="14" direction="column" justify='space-between'>
                <Flex gap="4" align='flex-start' justify='space-between'>
                  <h4 className="text-black">Join affiliate program now and
                  earn upto 10% commission per sale!</h4>
                  <Link href='/' className='text-black text-underline flex-start-center fw-600 whitespace-nowrap gap-4'>
                    Join now and get <MoveRight />
                  </Link>
                </Flex>
                <Button className="btn-black btn-lg text-uppercase" style={{maxWidth: 'max-content'}}>Join affiliate program now</Button>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 1 }}>
              <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "24px", md: "30px" }} className="align-center">
                <GridItem colSpan={{ base: 1, md: 1 }}>
                  <ul className="list-unordered">
                    {[...Array(5)].map((x, i) => (
                      <li>Lorem ipsum dolor adipiscing elit</li>
                    ))}
                  </ul>
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 1 }}>
                  <div className="float-md-right">
                    <Image src='/loudSpeaker.png' alt='heart' width={230} height={150} />
                  </div>
                </GridItem>
              </SimpleGrid>
            </GridItem>
          </SimpleGrid>
        </CardBox>
      </div>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "24px", md: "30px" }} className="mt-30">
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <CardBox color="#3FB8D0">
            <h5>Recently viewed</h5>
            <div className="mt-30 product-slider">
              <Slider {...settings} className="slider-arrows">
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
                    x: `${(currentSlide / (saleProducts.length - 1)) * 100}%`, // Move bee with slide index
                  }}
                  transition={{ type: "tween", duration: 0.5 }}
                >
                  <Image src='/bee.png' alt='bee' width={40} height={30} />
                </motion.div>
              </div>
            </div>
            <div className="text-right mt-30">
              <Button variant="plain" className="btn-lg p-0 gap-4"> Explore more products <ChevronRight /></Button>
            </div>
          </CardBox>
        </GridItem>
        <GridItem colSpan={{ base: 1, md: 1 }}>
          <CardBox color="#fff">
            <h5>Pending checkout</h5>
            <div className="order-history-table">
              <div className="order-thead">
                {
                  pendingOrderHeader.map((header) => (
                    <div key={header.nameKey} className={`t-${header.nameKey}`}>
                      {header.name}
                    </div>
                  ))
                }
              </div>
              <div className="order-tbody">
                {
                  pendingOrder.map((order, index) => {
                    return (
                      <OrderRow key={index} order={order} headers={pendingOrderHeader} />
                    )
                  })
                }
                
              </div>
              <div className="order-tfooter">
                <div className="single-footer">
                  <Stack gap='3'>
                    <div className="flex-between-center">
                      <p className="fs-14">Subtotal</p>
                      <p className="fs-18">$362.25</p>
                    </div>
                    <div className="flex-between-center">
                      <p className="fs-14 fw-600">Avail discounts</p>
                      <RadioGroup.Root defaultValue="1">
                        <HStack gap="6">
                          {couponPoints.map((item) => (
                            <RadioGroup.Item key={item.value} value={item.value}>
                              <RadioGroup.ItemHiddenInput />
                              <RadioGroup.ItemIndicator />
                              <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                            </RadioGroup.Item>
                          ))}
                        </HStack>
                      </RadioGroup.Root>
                    </div>
                    <HStack gap="6">
                      <div className="flex-auto">
                        <InputGroup endElement="Apply" className='black-field-group'>
                          <Input placeholder="Enter discount coupon code here" className='border-field' />
                        </InputGroup>
                      </div>
                      <p className="fs-18 fw-600" style={{color: '#449ADF'}}>-$120.00</p>
                    </HStack>
                    <div className="flex-between-center">
                      <p className="fw-600">Grand total</p>
                      <p className="fw-600">$362.25</p>
                    </div>
                  </Stack>
                </div>
                <div className="single-footer">
                  <div className="flex-between-start">
                    <Button className="btn-black btn-lg text-uppercase" style={{maxWidth: 'max-content'}}>go to checkout</Button>
                    <div className="flex-end-end direction-column gap-4">
                      <Button className="btn-green btn-lg text-uppercase" style={{maxWidth: 'max-content'}}>one-click Checkout</Button>
                      <p className="flex-start-center gap-4 text-black-45 fs-14"><Info />Based on your last checkout exclusing add-ons</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardBox>
        </GridItem>
      </SimpleGrid>

      <div className="mt-30">
        <Flex gap="1" align='flex-start'>
          <Image src='/stars.png' alt='bee' width={40} height={30} />
          <h2 className="m-0 fw-700">Recommended for you</h2>
        </Flex>
        <div className="product-slider mt-12">
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

      <div className="container mt-30 p-0">
        <Slider {...settingsBanner} className="slider-dots">
          <BannerSlider />
          <BannerSlider />
        </Slider>
      </div>
    </>
  );
}
