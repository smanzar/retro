'use client'

import { Button, Stack } from "@chakra-ui/react"
import Image from "next/image"

export default function RedeemCard({product}) {
  return(
    <div className="redeem-card">
      <div className="redeem-card-img">
        <Image src={product.Imgsrc} alt='product' width={250} height={190} className="img-cover" />
      </div>
      <div className="redeem-card-desc">
        <Button className="btn-black text-uppercase">Redeem Now</Button>
        <Stack gap='4'>
          <div>
            <p className="fs-14 fw-700 text-black-50">{product.name}</p>
            <p className="">{product.genre}</p>
          </div>
          <p className="fs-14 text-black-80">
            {product.category}
          </p>
          <p className="fw-600">${product.price}</p>
        </Stack>
      </div>
    </div>
  )
}