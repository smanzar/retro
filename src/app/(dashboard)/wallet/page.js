'use client'
import CardBox from "@/components/cardBox/CardBox";
import Cpagination from "@/components/customPagination/Cpagination";
import OrderRow from "@/components/orderRow/OrderRow";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";


export default function Wallet() {
  const [selectedOrderType, setSelectedOrderType] = useState('all');
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
      nameKey: 'price',
      name: 'Credit amount'
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
      nameKey: 'status',
      name: 'Outcome'
    },
    {
      nameKey: 'support',
      name: 'Action'
    }
  ]
  const orderTableData = [
    {
      activity: 'Gift card leftover',
      price: '$80.00',
      product: 'Nintendo 3DS Console',
      ordered: '25 Apr, 2024',
      status: 'Earned',
      support: 'Submit ticket',
      avatarSrc: 'https://bit.ly/dan-abramov',
    },
    {
      activity: 'Gift card leftover',
      price: '$80.00',
      product: 'Nintendo 3DS Console',
      ordered: '25 Apr, 2024',
      status: 'Earned',
      support: 'Submit ticket',
      avatarSrc: 'https://bit.ly/dan-abramov',
    },
    {
      activity: 'Gift card leftover',
      price: '$80.00',
      product: 'Nintendo 3DS Console',
      ordered: '25 Apr, 2024',
      status: 'Earned',
      support: 'Submit ticket',
      avatarSrc: 'https://bit.ly/dan-abramov',
    },
    {
      activity: 'Gift card leftover',
      price: '$80.00',
      product: 'Nintendo 3DS Console',
      ordered: '25 Apr, 2024',
      status: 'Earned',
      support: 'Submit ticket',
      avatarSrc: 'https://bit.ly/dan-abramov',
    },
    {
      activity: 'Gift card leftover',
      price: '$80.00',
      product: 'Nintendo 3DS Console',
      ordered: '25 Apr, 2024',
      status: 'Spent',
      support: 'Submit ticket',
      avatarSrc: 'https://bit.ly/dan-abramov',
    },
  ]

  return(
    <div className="wallet">
      <div className="mb-40">
        <div className="flex-start-center gap-10">
          <div>
            <h1 className="fw-700">Wallet</h1>
            <p className="fs-14 fw-600 text-uppercase mt-12">everything about your store credit</p>
          </div>
        </div>

        <SimpleGrid columns={{ base: 1, md: 4 }} gap={{ base: "24px", md: "30px" }} className="mt-30">
          <GridItem colSpan={{ base: 1, md: 1 }}>
            <CardBox color="#449ADF" btnText='$ withdraw' arrowBtn={false} btnTop={false}>
              <p className="fs-14 fw-600 text-white mb-20 text-uppercase pt-30">Store credit balance</p>
              <h2 className="text-white">$120.75</h2>
            </CardBox>
          </GridItem>
        </SimpleGrid>

        <div className="mt-30">
          <h2 className="fw-700">Transaction history</h2>
          <div className="order-type-detail mt-30">
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
                        <OrderRow key={index} order={order} headers={orderTableHeader} />
                      )
                    })
                  }
                </div>
              </div>
            </CardBox>
            <Cpagination />
          </div>
        </div>
      </div>
    </div>
  )
}