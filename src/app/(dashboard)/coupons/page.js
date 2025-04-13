'use client'

import CardBox from "@/components/cardBox/CardBox"
import CouponCard from "@/components/couponCard/CouponCard"
import Cpagination from "@/components/customPagination/Cpagination"
import { Button, Field, GridItem, Input, SimpleGrid, Stack, Textarea } from "@chakra-ui/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Slider from "react-slick"


export default function Coupons() {
  const couponDate=[
    {
      discount: '10% off',
      code: 'NEWYEAR25',
      color: '#F9BC26',
    },
    {
      discount: '15% off',
      code: 'NEWYEAR25',
      color: '#F193BF',
    },
    {
      discount: '10% off',
      code: 'NEWYEAR25',
      color: '#080707',
    },
    {
      discount: '15% off',
      code: 'NEWYEAR25',
      color: '#F193BF',
    },
    {
      discount: '10% off',
      code: 'NEWYEAR25',
      color: '#EA4325',
    },
    {
      discount: '10% off',
      code: 'NEWYEAR25',
      color: '#F9BC26',
    },
    {
      discount: '15% off',
      code: 'NEWYEAR25',
      color: '#F193BF',
    },
    {
      discount: '10% off',
      code: 'NEWYEAR25',
      color: '#080707',
    },
    {
      discount: '15% off',
      code: 'NEWYEAR25',
      color: '#F193BF',
    },
    {
      discount: '10% off',
      code: 'NEWYEAR25',
      color: '#F9BC26',
    },
    {
      discount: '15% off',
      code: 'NEWYEAR25',
      color: '#F193BF',
    },
    {
      discount: '10% off',
      code: 'NEWYEAR25',
      color: '#080707',
    },
  ]

  const couponDateExpired=[
    {
      discount: '10% off',
      code: 'NEWYEAR25',
    },
    {
      discount: '15% off',
      code: 'NEWYEAR25',
    },
    {
      discount: '10% off',
      code: 'NEWYEAR25',
    },
    {
      discount: '15% off',
      code: 'NEWYEAR25',
    },
    {
      discount: '10% off',
      code: 'NEWYEAR25',
    },
    {
      discount: '15% off',
      code: 'NEWYEAR25',
    },
    {
      discount: '10% off',
      code: 'NEWYEAR25',
    },
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
      slidesToShow: 4,
      centerMode: true,
      centerPadding: "20px",
      variableWidth:false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
  return (
    <div className="mb-40">
      <div className="flex-start-center gap-10">
        <div>
          <h1 className="fw-700">Coupons and discounts</h1>
          <p className="fs-14 fw-600 text-uppercase mt-12">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
        </div>
      </div>
      <Stack gap='14' className="mt-40">
        <div>
          <h2 className="fw-700 mb-2">Active coupons</h2>
          <hr />
          <SimpleGrid columns={{ base: 1, md: 3, lg: 4, xl: 6 }} gap={{ base: "24px", md: "30px" }} className="mt-30">
            {
              couponDate.map((item, index) => (
                <GridItem colSpan={{ base: 1, md: 1, lg: 1, xl: 1 }} key={index}>
                  <Stack gap='4'>
                    <CouponCard couponColor={item}/>
                    <p className="fs-14">Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                    <p className="fs-18 fw-600">Expires before</p>
                    <p className="fw-600 fs-18 text-black-65">07 Mar, 2025</p>
                  </Stack>
                </GridItem>
              ))
            }
          </SimpleGrid>
          <Cpagination />
        </div>
        <div>
          <h2 className="fw-700 mb-2">Expired coupons</h2>
          <hr />
          <SimpleGrid columns={{ base: 1, md: 3, lg: 4, xl: 6 }} gap={{ base: "24px", md: "30px" }} className="mt-30">
            {
              couponDateExpired.map((item, index) => (
                <GridItem colSpan={{ base: 1, md: 1, lg: 1, xl: 1 }} key={index}>
                  <Stack gap='4'>
                    <CouponCard couponColor={item}/>
                    <p className="fs-14">Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
                    <p className="fs-18 fw-600">Expired on</p>
                    <p className="fw-600 fs-18 text-black-65">07 Mar, 2025</p>
                  </Stack>
                </GridItem>
              ))
            }
          </SimpleGrid>
          <Cpagination />
        </div>

        <div className="flex-start-center gap-10">
          <div>
            <h1 className="fw-700">Gift cards</h1>
            <p className="fs-14 fw-600 text-uppercase mt-12">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
          </div>
        </div>
        <div>
          <h2 className="fw-700 mb-2">Your gift cards</h2>
          <hr />
          <div className="mt-30">
            <Slider {...settings} className="slider-arrows">
              <div className="px-30"><Image width={300} height={200} src="/Coupons/coupon1.png" alt="giftcard" className="w-full" /></div>
              <div className="px-30"><Image width={300} height={200} src="/Coupons/coupon2.png" alt="giftcard" className="w-full" /></div>
              <div className="px-30"><Image width={300} height={200} src="/Coupons/coupon3.png" alt="giftcard" className="w-full" /></div>
              <div className="px-30"><Image width={300} height={200} src="/Coupons/coupon4.png" alt="giftcard" className="w-full" /></div>
            </Slider>
          </div>
        </div>

        <CardBox color="#FDCD00">
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "24px", md: "130px" }}>
            <GridItem colSpan={{ base: 1, md: 1 }}>
              <h3>Generate a gift card</h3>
              <form className="mt-30">
                <Stack gap='11'>
                  <SimpleGrid columns={{ base: 1, md: 2 }} rowGap={{ base: "10px", md: "15px" }} columnGap={{ base: "24px", md: "30px" }}>
                    <GridItem colSpan={{ base: 1, md: 1 }}>
                      <Field.Root>
                        <Field.Label>Who is it for?</Field.Label>
                        <Input placeholder="Enter name of the receiver" className="border-field" />
                      </Field.Root>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 1 }}>
                      <Field.Root>
                        <Field.Label>Enter email of the receiver</Field.Label>
                        <Input placeholder="Enter email address" className="border-field" />
                      </Field.Root>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 1 }}>
                      <Field.Root>
                        <Field.Label>Enter value of gift card</Field.Label>
                        <Input placeholder="Enter amount" className="border-field" />
                      </Field.Root>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 1 }}>
                      <Field.Root>
                        <Field.Label>What is the occasion?</Field.Label>
                        <Input placeholder="Enter name of the event" className="border-field" />
                      </Field.Root>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 2 }}>
                      <Field.Root>
                        <Field.Label>Personalised message</Field.Label>
                        <Textarea placeholder="Write a personalised message for the receiver here" className="border-field" style={{height: '104px'}} />
                      </Field.Root>
                    </GridItem>
                  </SimpleGrid>

                  <SimpleGrid columns={{ base: 1 }} rowGap={{ base: "10px", md: "15px" }} columnGap={{ base: "24px", md: "30px" }}>
                    <GridItem colSpan={{ base: 1 }}>
                      <p className="fs-20 fw-700">Quick pay with saved payment methods</p>
                    </GridItem>
                    <GridItem colSpan={{ base: 1 }}>
                      <CardBox color="#fff">
                        <div className="flex-start-center gap-10">
                          <Image width={70} height={45} src="/visa.png" alt="visa" />
                          <div>
                            <p className="fs-14">Visa ending with 8790</p>
                            <p className="fs-12" style={{color: '#3FB8D0'}}>Expiry 07/25</p>
                          </div>
                        </div>
                      </CardBox>
                    </GridItem>
                    <GridItem colSpan={{ base: 1 }}>
                      <CardBox color="#fff">
                        <div className="flex-start-center gap-10">
                          <Image width={70} height={45} src="/visa.png" alt="visa" />
                          <div>
                            <p className="fs-14">Visa ending with 8790</p>
                            <p className="fs-12" style={{color: '#3FB8D0'}}>Expiry 07/25</p>
                          </div>
                        </div>
                      </CardBox>
                    </GridItem>
                  </SimpleGrid>

                  <SimpleGrid columns={{ base: 1, md: 2 }} rowGap={{ base: "10px", md: "15px" }} columnGap={{ base: "24px", md: "30px" }}>
                    <GridItem colSpan={{ base: 1, md: 2 }}>
                      <p className="fs-20 fw-700">Pay with another card</p>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 1 }}>
                      <Field.Root>
                        <Field.Label>Name on card</Field.Label>
                        <Input placeholder="Enter name" className="border-field" />
                      </Field.Root>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 1 }}>
                      <Field.Root>
                        <Field.Label>Enter card number</Field.Label>
                        <Input placeholder="xxxx-xxxx-xxxx-xxxx" className="border-field" />
                      </Field.Root>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 1 }}>
                      <Field.Root>
                        <Field.Label>Expiry</Field.Label>
                        <Input placeholder="mm/yy" className="border-field" />
                      </Field.Root>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 1 }}>
                      <Field.Root>
                        <Field.Label>Security code</Field.Label>
                        <Input placeholder="CVC" className="border-field" />
                      </Field.Root>
                    </GridItem>
                  </SimpleGrid>

                  <Button className="btn-black btn-lg text-uppercase" style={{maxWidth: 'max-content'}}>Generate gift card</Button>
                </Stack>
              </form>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 1 }}>
              <Stack gap='6'>
                <div className="text-right">
                  <Image src='/joystick1.png' alt='joystick' width={426} height={195} className="ml-auto" />
                </div>
                <div className="perfect-gift-text">
                  <h1>pixel perfect gifts!</h1>
                </div>
                <p className="fs-14 fw-600 text-uppercase">Send a Retrofam Gift Card to your friends and family!</p>
                <Image src='/playboy.png' alt='playboy' width={145} height={215} />
              </Stack>
            </GridItem>
          </SimpleGrid>
        </CardBox>
      </Stack>
    </div>
  )
}