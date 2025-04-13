'use client'

import CardBox from "@/components/cardBox/CardBox"
import CustomSelect from "@/components/customSelect/CustomSelect"
import { Radio } from "@/components/ui/radio"
import { Avatar, Box, Button, Checkbox, CloseButton, Dialog, Field, Portal, RadioGroup, Stack } from "@chakra-ui/react"
import { ChevronLeft, ChevronRight, CloudUpload } from "lucide-react"
import { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion"; 
import ProductBox from "@/components/productBox/ProductBox"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function ReturnCenterSlug() {
  const router = useRouter()
  const [value, setValue] = useState('exchange');
  const [exchangeItem, setExchangeItem] = useState(false);
  const [currentSlide2, setCurrentSlide2] = useState(0);
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
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "20px",
    variableWidth:false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (_, next) => setCurrentSlide2(next),
  };

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return(
    <>
      <div className="mb-40">
        <div className="container-sm">
          <div className="flex-between-center">
            <p className="fs-14 fw-600 text-uppercase">product</p>
            <p className="fs-14 fw-600 text-uppercase">price</p>
          </div>
          <hr className="mt-8" />
          <div className="mt-24">
            <div className="flex-between-center gap-10">
              <div className="flex-start-center gap-10">
                <Avatar.Root shape="square" size="2xl" className='default-avatar'>
                  <Avatar.Fallback name="Dan Abramov" />
                  <Avatar.Image src='https://bit.ly/dan-abramov' />
                </Avatar.Root>
                <Stack gap='2'>
                  <div>
                    <p className="fs-14 fw-700 text-black-45">Nintendo</p>
                    <p className="">Love 3 - Nintendo Switch</p>
                  </div>
                  <p className="fs-14">Love 3 - Nintendo Switch</p>
                </Stack>
              </div>
              <p className="fs-18 fw-600 text-uppercase">$ 250.00</p>
            </div>
          </div>
          <hr className="mt-24" />

          <div className="mt-40">
            <Field.Root>
              <Field.Label className="fw-700 fs-16">Issue category</Field.Label>
              <CustomSelect placeholder='Choose A response' />
            </Field.Root>
            <div className="mt-8">
              <div className="flex-start-center gap-4">
                <CloudUpload />
                <p style={{color: '#EA4325'}}>Upload Image or Video</p>
              </div>
            </div>
          </div>

          <div className="mt-40 mb-30">
            <p className="fs-18 fw-700 mb-3">How can we make it right?</p>
            <CardBox color='#449ADF'>
              <div className="text-white">
              <RadioGroup.Root onChange={(e) => handleChange(e)} value={value}>
                <Stack gap={5}>
                  <Box>
                    <Radio value="exchange">Exchange for an item of your choice</Radio>
                    {value === 'exchange' && (
                      <Box my={3} ps={8}>
                        <Stack gap='6'>
                          <p>
                            We'll apply the amount of your refund to an exchange of one item of your choice
                          </p>
                          <Stack gap='3'>
                            <Button className="btn-lg btn-white-box" style={{maxWidth: '360px', width: '100%'}} onClick={() => setExchangeItem(true)}>CHOOSE EXCHANGE ITEM</Button>

                            <div className="flex-start-center gap-10">
                              <Avatar.Root shape="square" style={{width: '120px', height: '120px'}} className='default-avatar'>
                                <Avatar.Fallback name="Dan Abramov" />
                                <Avatar.Image src='https://bit.ly/dan-abramov' />
                              </Avatar.Root>

                              <Stack gap='2'>
                                <div className="text-white">
                                  <p className="fs-14 fw-700">Nintendo</p>
                                  <p className="">Love 3 - Nintendo Switch</p>
                                </div>
                                <p className="fs-14">Love 3 - Nintendo Switch</p>
                              </Stack>
                            </div>
                            <CardBox color='#fff'>
                              <Stack gap='8' className="text-black">
                                <Stack gap='4'>
                                  <div>
                                    <p className="fs-14 fw-700">Refund Summary</p>
                                    <hr className="mt-8" />
                                  </div>
                                  <div className="flex-between-center">
                                    <p className="fs-14">Original item price</p>
                                    <p className="fs-14 fw-600">$250</p>
                                  </div>
                                  <div className="flex-between-center">
                                    <p className="fs-14">Exchanged item price</p>
                                    <p className="fs-14 fw-600">$125</p>
                                  </div>
                                  <hr />
                                  <div className="flex-between-center">
                                    <p className="fs-14">Total refund amount</p>
                                    <p className="fs-14 fw-600">$125</p>
                                  </div>
                                </Stack>
                                <Stack gap='4'>
                                  <div>
                                    <p className="fs-14 fw-700">How would like to receive the refund amount?</p>
                                    <hr className="mt-8" />
                                  </div>
                                  <RadioGroup.Root>
                                    <Stack gap='2'>
                                      <Radio value="credit">Add refund amount to my store credit</Radio>
                                      <Radio value="refunf">Refund the amount to my card</Radio>
                                    </Stack>
                                  </RadioGroup.Root>
                                </Stack>
                              </Stack>
                            </CardBox>
                            <Checkbox.Root>
                              <Checkbox.HiddenInput />
                              <Checkbox.Control />
                              <Checkbox.Label className="fw-400">I agree to send the original item(s) back within 30 days</Checkbox.Label>
                            </Checkbox.Root>
                          </Stack>
                        </Stack>
                      </Box>
                    )}
                  </Box>

                  <Radio value="store-credit">Refund to your RetroFam Account as store credit</Radio>
                  <Radio value="replace">Replace with the exact same item</Radio>
                  <Radio value="visa">Refund to your Visa ending with XX89</Radio>
                </Stack>
              </RadioGroup.Root>
              </div>
            </CardBox>
          </div>

          <Button className="btn-lg btn-black text-uppercase" onClick={() => router.push('/return-progress')} style={{width: '100%', maxWidth: '414px'}}>Continue</Button>
        </div>
      </div>

      <Dialog.Root lazyMount open={exchangeItem} onOpenChange={(e) => setExchangeItem(e.open)} placement='top' size='lg'>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content className="exchange-modal">
              <Dialog.Header>
                <Dialog.Title className="fw-700">Choose exchange item</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <div className="product-slider mt-12">
                  <Slider {...settingsLarge} className="slider-arrows">
                    {
                      saleProducts.map((product, index) => {
                        return (
                          <ProductBox product={product} key={index} showSold={false} showBadge={false} />
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

                <Dialog.ActionTrigger asChild>
                  <div className="mt-24 text-center">
                    <Button className="btn-lg btn-black" style={{width: '100%', maxWidth: '414px'}}>DONE</Button>
                  </div>
                </Dialog.ActionTrigger>
              </Dialog.Body>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  )
}