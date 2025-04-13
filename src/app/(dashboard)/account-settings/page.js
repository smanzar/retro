'use client'
import CardBox from "@/components/cardBox/CardBox";
import CustomSelect from "@/components/customSelect/CustomSelect";
import { PasswordInput } from "@/components/ui/password-input";
import { Button, Field, GridItem, Group, IconButton, Input, SimpleGrid, Stack, Textarea } from "@chakra-ui/react";
import { LocateFixed, MapPinHouse, Pencil, SwitchCamera, Trash2, University } from "lucide-react";
import Image from "next/image";


export default function AccountSettings() {
  return(
    <>
      <div className="mb-40">
        <div className="flex-center-center gap-10 mb-40">
          <div>
            <h1 className="fw-700">Account Management</h1>
          </div>
        </div>

        <div className="container-sm">
          <Stack gap='10'>
            <div>
              <div className="mb-30">
                <h2 className="fw-700 mb-2 text-center fs-18">Personal info</h2>
                <hr />
              </div>
              <div className='p-info'>
                <CardBox color='#fff'>
                  <div className="info-bio">
                    <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "24px", md: "30px" }} className="align-center">
                      <GridItem colSpan={{ base: 1, md: 1 }} className="photo-editer">
                        <Image src='/squareStar-gray.png' alt='squareStar' width={52} height={52} className="squareStar" />
                        {/* <Image src='/squareStar-yellow.png' alt='squareStar' width={52} height={52} className="squareStar" /> */}
                        <div className="photo-uploaded">
                          <Image src='/user.png' alt='user' width={150} height={150} />
                          <span className="edit-icon">
                            <SwitchCamera />
                          </span>
                        </div>
                      </GridItem>
                      <GridItem colSpan={{ base: 1, md: 1 }} className="bio-data">
                        <Field.Root>
                          <Field.Label>Bio</Field.Label>
                          <Textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit?" className="border-field" style={{height: '90px'}} />
                        </Field.Root>
                      </GridItem>
                    </SimpleGrid>
                  </div>

                  <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: "20px", md: "25px" }} className="mt-30">
                    <GridItem colSpan={{ base: 1, md: 1 }} className="bio-data-form">
                      <Field.Root>
                        <Field.Label>First name</Field.Label>
                        <Group attached w="full">
                          <Input flex="1" placeholder="Brittany" className='border-field' />
                          <Button bg="bg.subtle" variant="outline">
                            <Pencil />
                          </Button>
                        </Group>
                      </Field.Root>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 1 }} className="bio-data-form">
                      <Field.Root>
                        <Field.Label>Last name</Field.Label>
                        <Group attached w="full">
                          <Input flex="1" placeholder="Spencer" className='border-field' />
                          <Button bg="bg.subtle" variant="outline">
                            <Pencil />
                          </Button>
                        </Group>
                      </Field.Root>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 1 }} className="bio-data-form">
                      <Field.Root>
                        <Field.Label>Password</Field.Label>
                        <Group attached w="full">
                          {/* <Input flex="1" placeholder="***************" className='border-field' /> */}
                          <PasswordInput flex="1" placeholder="***************" className='border-field' />
                          {/* <Button bg="bg.subtle" variant="outline">
                            <Pencil />
                          </Button> */}
                        </Group>
                      </Field.Root>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 1 }} className="bio-data-form">
                      <Field.Root>
                        <Field.Label>Phone number</Field.Label>
                        <Group attached w="full">
                          <Input flex="1" placeholder="868 7540 435" className='border-field' />
                          <Button bg="bg.subtle" variant="outline">
                            <Pencil />
                          </Button>
                        </Group>
                      </Field.Root>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 1 }} className="bio-data-form">
                      <Field.Root>
                        <Field.Label>Email address</Field.Label>
                        <Group attached w="full">
                          <Input flex="1" placeholder="britspen89@gmail.com" className='border-field' />
                          <Button bg="bg.subtle" variant="outline">
                            <Pencil />
                          </Button>
                        </Group>
                      </Field.Root>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 1 }} className="bio-data-form">
                      <Field.Root>
                        <Field.Label>Select your date of birth</Field.Label>
                        <Group attached w="full">
                          <Input flex="1" placeholder="dd/mm/yyyy" className='border-field' />
                          <Button bg="bg.subtle" variant="outline">
                            <Pencil />
                          </Button>
                        </Group>
                      </Field.Root>
                    </GridItem>
                  </SimpleGrid>
                </CardBox>
              </div>
            </div>
            
            <div>
              <div className="mb-30">
                <h2 className="fw-700 mb-2 text-center fs-18">Payment methods</h2>
                <hr />
              </div>
              <CardBox color='#fff'>
                <p className="fs-14 fw-600">Manage your cards</p>
                <hr className="mt-8" />

                <Stack gap='4' className="mt-24">
                  <CardBox color="#fff">
                    <div className="flex-between-center">
                      <div className="flex-start-center gap-10">
                        <Image width={70} height={45} src="/visa.png" alt="visa" />
                        <div>
                          <p className="fs-14">Visa ending with 8790</p>
                          <p className="fs-12" style={{color: '#3FB8D0'}}>Expiry 07/25</p>
                        </div>
                      </div>
                      <div className="flex-start-center gap-10">
                        <Button className="btn-black">Default</Button>
                        <IconButton variant='plain' style={{color: '#EA4325'}}>
                          <Trash2 />
                        </IconButton>
                      </div>
                    </div>
                  </CardBox>
                  <CardBox color="#fff">
                    <div className="flex-between-center">
                      <div className="flex-start-center gap-10">
                        <Image width={70} height={45} src="/visa.png" alt="visa" />
                        <div>
                          <p className="fs-14">Visa ending with 8790</p>
                          <p className="fs-12" style={{color: '#3FB8D0'}}>Expiry 07/25</p>
                        </div>
                      </div>
                      <div className="flex-start-center gap-10">
                        <Button variant='plain' style={{color: '#449ADF'}} className="fs-18 p-0">Set as default</Button>
                        <IconButton variant='plain' style={{color: '#EA4325'}}>
                          <Trash2 />
                        </IconButton>
                      </div>
                    </div>
                  </CardBox>
                  <CardBox color="#fff">
                    <div className="flex-between-center">
                      <div className="flex-start-center gap-10">
                        <Image width={70} height={45} src="/visa.png" alt="visa" />
                        <div>
                          <p className="fs-14">Visa ending with 8790</p>
                          <p className="fs-12" style={{color: '#EA4325'}}>Expiry 07/25</p>
                        </div>
                      </div>
                      <div className="flex-start-center gap-10">
                        <Button variant='plain' style={{color: '#EA4325'}} className="fs-18 p-0">Expired</Button>
                        <IconButton variant='plain' style={{color: '#EA4325'}}>
                          <Trash2 />
                        </IconButton>
                      </div>
                    </div>
                  </CardBox>
                </Stack>
                <div className="mt-30">
                  <p className="fs-14 fw-600">Add payment method</p>
                  <hr className="mt-8" />
                  <SimpleGrid columns={{ base: 1, md: 2 }} rowGap={{ base: "10px", md: "15px" }} columnGap={{ base: "24px", md: "30px" }} className="mt-30 mb-30">
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
                  <Button className="btn-black btn-lg text-uppercase">Add payment method</Button>
                </div>
              </CardBox>
            </div>

            <div>
              <div className="mb-30">
                <h2 className="fw-700 mb-2 text-center fs-18">Saved addresses</h2>
                <hr />
              </div>
              <CardBox color='#fff'>
                <p className="fs-14 fw-600">Saved shipping/billing addresses</p>
                <hr className="mt-8" />

                <Stack gap='4' className="mt-24">
                  <CardBox color="#fff">
                    <div className="flex-between-center">
                      <div className="flex-start-center gap-10">
                        <Image width={70} height={45} src="/usaFlag.png" alt="visa" />
                        <div>
                          <p className="fs-14">70 Washington Square South, New York,</p>
                          <p className="fs-14">NY 10012, United States</p>
                        </div>
                      </div>
                      <div className="flex-start-center">
                        <IconButton variant='plain' style={{color: '#000000'}}><University /></IconButton>
                        <IconButton variant='plain' style={{color: '#323232'}}><Pencil /></IconButton>
                        <IconButton variant='plain' style={{color: '#EA4325'}}><Trash2 /></IconButton>
                      </div>
                    </div>
                  </CardBox>
                  <CardBox color="#fff">
                    <div className="flex-between-center">
                      <div className="flex-start-center gap-10">
                        <Image width={70} height={45} src="/usaFlag.png" alt="visa" />
                        <div>
                          <p className="fs-14">70 Washington Square South, New York,</p>
                          <p className="fs-14">NY 10012, United States</p>
                        </div>
                      </div>
                      <div className="flex-start-center">
                        <IconButton variant='plain' style={{color: '#000000'}}><MapPinHouse /></IconButton>
                        <IconButton variant='plain' style={{color: '#323232'}}><Pencil /></IconButton>
                        <IconButton variant='plain' style={{color: '#EA4325'}}><Trash2 /></IconButton>
                      </div>
                    </div>
                  </CardBox>
                </Stack>
                <div className="mt-30">
                  <div className="flex-between-center">
                    <p className="fs-14 fw-600">Add an address</p>
                    <Button className="btn-blue text-uppercase gap-4 fw-700"><LocateFixed /> Use geolocation autofill</Button>
                  </div>
                  <hr className="mt-8" />
                  <SimpleGrid columns={{ base: 1, md: 2 }} rowGap={{ base: "10px", md: "15px" }} columnGap={{ base: "24px", md: "30px" }} className="mt-30 mb-30">
                  <GridItem colSpan={{ base: 1, md: 2 }}>
                      <Field.Root>
                        <Field.Label>Address line - 1</Field.Label>
                        <Input placeholder="Address line - 1" className='border-field' />
                      </Field.Root>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 2 }}>
                      <Field.Root>
                        <Field.Label>Address line - 2</Field.Label>
                        <Input placeholder="Address line - 2" className='border-field' />
                      </Field.Root>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 1 }}>
                      <Field.Root>
                        <Field.Label>Country</Field.Label>
                        <CustomSelect placeholder='United States of America' />
                      </Field.Root>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 1 }}>
                      <Field.Root>
                        <Field.Label>State</Field.Label>
                        <CustomSelect placeholder='Select state' />
                      </Field.Root>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 1 }}>
                      <Field.Root>
                        <Field.Label>City</Field.Label>
                        <CustomSelect placeholder='Select city' />
                      </Field.Root>
                    </GridItem>
                    <GridItem colSpan={{ base: 1, md: 1 }}>
                      <Field.Root>
                        <Field.Label>Zip code</Field.Label>
                        <Input placeholder="Enter zip code" className="border-field" />
                      </Field.Root>
                    </GridItem>
                  </SimpleGrid>
                  <Button className="btn-black btn-lg text-uppercase">Add Address</Button>
                </div>
              </CardBox>
            </div>
          </Stack>
        </div>
      </div>
    </>
  )
}