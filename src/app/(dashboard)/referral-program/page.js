'use client'

import CardBox from "@/components/cardBox/CardBox"
import Cpagination from "@/components/customPagination/Cpagination"
import OrderRow from "@/components/orderRow/OrderRow"
import { GridItem, SimpleGrid, ButtonGroup, IconButton, Pagination, HStack, Field, InputGroup, Input, Button, Stack } from "@chakra-ui/react"
import { ChevronLeft, ChevronRight, Clipboard } from "lucide-react"
import Image from "next/image"


export default function ReferralProgram() {
  const referralTableHeader = [
    {
      nameKey: 'ordered',
      name: 'date'
    },
    {
      nameKey: 'referredUser',
      name: 'referred user'
    },    
    {
      nameKey: 'reward',
      name: 'Reward detail'
    },
    {
      nameKey: 'status',
      name: 'Status'
    },
  ]
  const referralTableData = [
    {
      ordered: '25 Apr, 2024',
      reward: '120.75',
      status: 'Completed',
      referredUser: 'Jayden Smith',
      referredUserAvatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      ordered: '25 Apr, 2024',
      reward: '120.75',
      status: 'Completed',
      referredUser: 'Jayden Smith',
      referredUserAvatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      ordered: '25 Apr, 2024',
      reward: '120.75',
      status: 'Completed',
      referredUser: 'Jayden Smith',
      referredUserAvatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      ordered: '25 Apr, 2024',
      reward: '120.75',
      status: 'Completed',
      referredUser: 'Jayden Smith',
      referredUserAvatar: 'https://i.pravatar.cc/150?img=1',
    },
    {
      ordered: '25 Apr, 2024',
      reward: '120.75',
      status: 'Completed',
      referredUser: 'Jayden Smith',
      referredUserAvatar: 'https://i.pravatar.cc/150?img=1',
    },
    
  ]
  const trackerTableHeader = [
    {
      nameKey: 'reward',
      name: 'Reward detail'
    },
    {
      nameKey: 'status',
      name: 'Status'
    },
    {
      nameKey: 'others',
      name: ''
    },    
  ]
  const trackerTableData = [
    {
      reward: '120.75',
      status: 'Earned',
      others: 'Redeem'
    },
    {
      reward: '120.75',
      status: 'Earned',
      others: 'Redeem'
    },
    {
      reward: '120.75',
      status: 'Earned',
      others: 'Redeem'
    },
    {
      reward: '120.75',
      status: 'Earned',
      others: 'Redeem'
    },    
    {
      reward: '120.75',
      status: 'Earned',
      others: 'Redeem'
    },    
  ]
  return (
    <div className="mb-40">
      <div className="flex-start-center gap-10">
        <div>
          <h1 className="fw-700">Referral program</h1>
          <p className="fs-14 fw-600 text-uppercase mt-12">Refer a friend and earn rewards with retrofam</p>
        </div>
      </div>
      <div className="mt-30">
        <CardBox color="#3FB8D0">
          <SimpleGrid columns={{ base: 1, md: 5 }} gap={{ base: "24px", md: "30px" }}>
            <GridItem colSpan={{ base: 1, md: 3 }}>
              <div className="flex-between-start md-nowrap">
                <Stack gap='6'>
                  <Field.Root>
                    <Field.Label>You referral link</Field.Label>
                    <InputGroup endElement={<Clipboard />}>
                      <Input placeholder="Https://retrofam.com/?rfsn123431343265" className="border-field" style={{width: '530px'}} />
                    </InputGroup>
                  </Field.Root>
                  <Button className="btn-black btn-lg text-uppercase" style={{maxWidth: 'max-content'}}>Share</Button>
                </Stack>

                <div>
                  <p className="text-uppercase fw-600 fs-14">Total referrals</p>
                  <h2 className="fw-700 text-white">38</h2>
                </div>
              </div>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 2 }}>
              <div className="flex-between-start">
                <div>
                  <p className="text-uppercase fw-600 fs-14 mb-20">Total reward earned</p>
                  <div className="flex-start-center gap-10">
                    <Image src='/coin.png' alt='heart' width={65} height={65} />
                    <h2 className="fw-700 text-white mt-0">53,270.50</h2>
                  </div>
                </div>
                <Image src='/loudSpeaker.png' alt='heart' width={350} height={240} className="make-it-out" />
              </div>
            </GridItem>
          </SimpleGrid>
        </CardBox>
      </div>

      <div className="mt-40">
        <SimpleGrid columns={{ base: 1, md: 5 }} gap={{ base: "24px", md: "30px" }}>
          <GridItem colSpan={{ base: 1, md: 3 }}>
            <h2 className="fw-700">Referral activity log</h2>
            <div className="mt-030">
              <div className="order-history-table">
                <div className="order-thead">
                  {referralTableHeader.map((header) => (
                    <div key={header} className={`t-${header.nameKey}`}>
                      {header.name.toUpperCase()}
                    </div>
                  ))}
                </div>
                <div className="order-tbody">
                  {
                    referralTableData.map((order, index) => {
                      return (
                        <OrderRow key={index} order={order} headers={referralTableHeader} />
                      )
                    })
                  }
                  
                </div>
              </div>
              <Cpagination />
            </div>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <CardBox color="#fff">
              <h5 className="fw-700">Rewards tracker</h5>
              <div className="mt-30">
                <div className="order-history-table">
                  <div className="order-thead">
                    {trackerTableHeader.map((header) => (
                      <div key={header} className={`t-${header.nameKey}`}>
                        {header.name.toUpperCase()}
                      </div>
                    ))}
                  </div>
                  <div className="order-tbody">
                    {
                      trackerTableData.map((order, index) => {
                        return (
                          <OrderRow key={index} order={order} headers={trackerTableHeader} />
                        )
                      })
                    }
                    
                  </div>
                </div>
              </div>
              <Cpagination />
            </CardBox>
          </GridItem>
        </SimpleGrid>
      </div>
      <Image src='/trophy.png' width={145} height={145} alt='trophy' className="mt-30" />
    </div>
  )
}