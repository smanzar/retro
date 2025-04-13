'use client'
import CardBox from "@/components/cardBox/CardBox";
import Cpagination from "@/components/customPagination/Cpagination";
import CustomSelect from "@/components/customSelect/CustomSelect";
import OrderRow from "@/components/orderRow/OrderRow";
import { Accordion, Button, Field, GridItem, Input, InputGroup, SimpleGrid, Span, Stack, Textarea } from "@chakra-ui/react";
import { Search } from "lucide-react";

export default function CustomerSupport() {
  const orderTableHeader = [
    {
      nameKey: 'id',
      name: 'Ticket ID'
    },
    {
      nameKey: 'ordered',
      name: 'Date'
    },
    {
      nameKey: 'status',
      name: 'Status'
    },
    {
      nameKey: 'support',
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
      ordered: '25 Apr, 2024',
      status: 'Resolved',
      support: 'Re-open ticket',
      others: 'Show details',
    },
    {
      id: '#213432',
      ordered: '25 Apr, 2024',
      status: 'Resolved',
      support: 'Re-open ticket',
      others: 'Show details',
    },
    {
      id: '#213432',
      ordered: '25 Apr, 2024',
      status: 'Open',
      support: 'Re-open ticket',
      others: 'Show details',
    },
    {
      id: '#213432',
      ordered: '25 Apr, 2024',
      status: 'Resolved',
      support: 'Re-open ticket',
      others: 'Show details',
    },
    {
      id: '#213432',
      ordered: '25 Apr, 2024',
      status: 'Resolved',
      support: 'Re-open ticket',
      others: 'Show details',
    },
    {
      id: '#213432',
      ordered: '25 Apr, 2024',
      status: 'Open',
      support: 'Re-open ticket',
      others: 'Show details',
    },
    {
      id: '#213432',
      ordered: '25 Apr, 2024',
      status: 'Open',
      support: 'Re-open ticket',
      others: 'Show details',
    },
    
  ]

  const items = [
    { value: "a", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?", text: "Some value 1..." },
    { value: "b", title: "sed do eiusmod tempor incididunt ut labore et dolore?", text: "Some value 2..." },
    { value: "c", title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut?", text: "Some value 3..." },
    { value: "d", title: "Ut enim ad minima veniam, quis nostrum exercitationem?", text: "Some value 3..." },
    { value: "e", title: "Quis autem vel eum iure reprehenderit qui in ea voluptate?", text: "Some value 3..." },
    { value: "f", title: "dolorem eum fugiat quo voluptas nulla pariatur?", text: "Some value 3..." },
  ]
  return(
    <div className="c-support">
      <div className="mb-40">
        <div className="flex-start-center gap-10">
          <div>
            <h1 className="fw-700">Customer support</h1>
            <p className="fs-14 fw-600 text-uppercase mt-12">Retrofam is here to assist you</p>
          </div>
        </div>

        <SimpleGrid columns={{ base: 1, md: 4 }} rowGap={{ base: "40px", md: "60px" }} columnGap={{ base: "24px", md: "30px" }} className="mt-40">
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
                    <CustomSelect placeholder='Select issue category' />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label className="text-white">How would you like to be contacted</Field.Label>
                    <CustomSelect placeholder='Contact via' />
                  </Field.Root>
                  <Field.Root>
                    <Field.Label className="text-white">Description</Field.Label>
                    <Textarea placeholder="Describe your issue" className="border-field" style={{height: '204px'}} />
                  </Field.Root>

                  <Button className="btn-black btn-lg text-uppercase" style={{maxWidth: 'max-content'}}>submit</Button>
                </Stack>
              </form>
            </CardBox>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 3 }}>
            <h2 className="fw-700">Ticket history</h2>
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
          </GridItem>

          <GridItem colSpan={{ base: 1, md: 1 }}>
            <h2 className="fw-700">Ticket history</h2>
            <hr className="mt-8" />
            <div className="mt-24">
              <InputGroup endElement={<Search />}>
                <Input placeholder="Type to search here" className="border-field" />
              </InputGroup>
            </div>
          </GridItem>
          <GridItem colSpan={{ base: 1, md: 3 }}>
            <CardBox color="#fff">
              <h5 className="fw-700">Frequently Asked Questions</h5>
              <hr className="mt-24" />
              <div className="accordion-revamp">
                <Accordion.Root collapsible>
                  {items.map((item, index) => (
                    <Accordion.Item key={index} value={item.value}>
                      <Accordion.ItemTrigger>
                        <Span flex="1">{item.title}</Span>
                        <Accordion.ItemIndicator />
                      </Accordion.ItemTrigger>
                      <Accordion.ItemContent>
                        <Accordion.ItemBody>{item.text}</Accordion.ItemBody>
                      </Accordion.ItemContent>
                    </Accordion.Item>
                  ))}
                </Accordion.Root>
              </div>
            </CardBox>
          </GridItem>
        </SimpleGrid>
      </div>
    </div>
  )
}