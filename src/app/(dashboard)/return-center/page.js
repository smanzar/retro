'use client'
import CardBox from "@/components/cardBox/CardBox";
import Cpagination from "@/components/customPagination/Cpagination";
import OrderRow from "@/components/orderRow/OrderRow";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";

export default function ReturnCenter() {
  const router = useRouter()
  const orderTableHeader = [
    {
      nameKey: 'id',
      name: 'id'
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
      nameKey: 'activity',
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
      nameKey: 'support',
      name: 'Action'
    }
  ]
  const orderTableData = [
    {
      id: '#213432',
      price: '$80.00',
      product: 'Nintendo 3DS Console',
      activity: '01',
      ordered: '25 Apr, 2024',
      status: 'Delivered',
      support: 'RETURN PRODUCT',
      reward: '120.75',
      avatarSrc: 'https://bit.ly/dan-abramov',
    },
    {
      id: '#213432',
      price: '$80.00',
      product: 'Nintendo 3DS Console',
      activity: '01',
      ordered: '25 Apr, 2024',
      status: 'Delivered',
      support: 'RETURN PRODUCT',
      reward: '120.75',
      avatarSrc: 'https://bit.ly/dan-abramov',
    },
    {
      id: '#213432',
      price: '$80.00',
      product: 'Nintendo 3DS Console',
      activity: '01',
      ordered: '25 Apr, 2024',
      status: 'Delivered',
      support: 'RETURN PRODUCT',
      reward: '120.75',
      avatarSrc: 'https://bit.ly/dan-abramov',
    },
    {
      id: '#213432',
      price: '$80.00',
      product: 'Nintendo 3DS Console',
      activity: '01',
      ordered: '25 Apr, 2024',
      status: 'Delivered',
      support: 'RETURN PRODUCT',
      reward: '120.75',
      avatarSrc: 'https://bit.ly/dan-abramov',
    },
    {
      id: '#213432',
      price: '$80.00',
      product: 'Nintendo 3DS Console',
      activity: '01',
      ordered: '25 Apr, 2024',
      status: 'Delivered',
      support: 'RETURN PRODUCT',
      reward: '120.75',
      avatarSrc: 'https://bit.ly/dan-abramov',
    },
  ]

  const handleReturnProduct = (item) => {
    console.log(item)
    router.push(`/return-center/${item.product.toLowerCase().replace(/\s+/g, '-')}`)
  }
  return(
    <>
      <div className="mb-40">
        <div className="flex-start-center gap-10">
          <div>
            <h1 className="fw-700">Return Center</h1>
            <p className="fs-14 fw-600 text-uppercase mt-12">Manage your return orders here</p>
          </div>
        </div>

        <SimpleGrid columns={{ base: 1, md: 4 }} gap={{ base: "24px", md: "30px" }} className="mt-30">
          <GridItem colSpan={{ base: 1, md: 1 }}>
            <CardBox color="#FF7898" btnText='See status' arrowBtn={true} btnTop={false}>
              <p className="fs-14 fw-600 text-white mb-20 text-uppercase pt-30">Returns in process</p>
              <h2 className="text-white">$120.75</h2>
            </CardBox>
          </GridItem>
        </SimpleGrid>

        <div className="mt-40">
          <h2 className="fw-700 mb-30">Order history <span className="fw-400 text-black-45">(Last 12 months)</span></h2>
          <CardBox color='#fff'>
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
                      <OrderRow key={index} order={order} headers={orderTableHeader} supportActionClick={handleReturnProduct} />
                    )
                  })
                }
              </div>
            </div>
          </CardBox>
          <Cpagination />
        </div>
      </div>
    </>
  )
}