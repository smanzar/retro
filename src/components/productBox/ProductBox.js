import { Badge, IconButton, Stack } from "@chakra-ui/react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function ProductBox({product, showSold=true, showBadge=true}) {
  return(
    <div className="single-product-card">
      <div className="product-image">
        {
          showBadge && (
            <Badge>{product.badgeQuote}</Badge>
          )
        }
        <Image src={product.image} alt='product' width={200} height={200} />
      </div>
      <div className="product-description">
        <Stack gap='3'>
          <div>
            <p>{product.name}</p>
            <div className="prod-cat">
              {product.category.map((cat, index) => (
                <p key={index} className="single-cat">{cat}</p>
              ))}
              <p className="single-cat flex-start-center">
                <Image src='/rate.png' alt='rate' width={13} height={13} /><span className="fw-700">{product.rating}</span>
                ({product.reviews})
              </p>
            </div>
          </div>
          <Stack gap='0'>
            <div className="flex-start-center gap-10">
              <p className="fs-20 fw-700">{product.price}</p>
              <p className="fs-18 text-black-45">
                <span className="text-decoration-line-through">{product.oldPrice}</span>
              </p>
            </div>
            {
              showSold && (
                <div className="flex-between-center">
                  <p className="fs-14">{product.lastSale}</p>
                  <IconButton variant="plain" size="sm" rounded="full" className="btn-white"><ShoppingCart /></IconButton>
                </div>
              )
            }
          </Stack>
        </Stack>
      </div>
    </div>
  )
}