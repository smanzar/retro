'use client';
import { Avatar, Button, HStack, IconButton, NumberInput } from "@chakra-ui/react";
import { ChevronRight, Minus, Plus } from "lucide-react";
import Image from "next/image";

export default function OrderRow({order, headers, supportActionClick}) {
  return (
    <div className="single-order">
      {headers.map((key) => (
        <div key={key.nameKey} className={`t-${key.nameKey}`}>
          {key.nameKey === 'product' ? (
            <div className="flex-start-center gap-10">
              <Avatar.Root shape="square" size="2xl">
                <Avatar.Fallback name="Dan Abramov" />
                <Avatar.Image src={order.avatarSrc} />
              </Avatar.Root>
              <p className="fs-14 fw-400">
              {order.product}
              </p>
            </div>
          ) : key.nameKey === 'referredUser' ? (
            <div className="flex-start-center gap-10">
              <Avatar.Root shape="square" size="2xl">
                <Avatar.Fallback name="Dan Abramov" />
                <Avatar.Image src={order.referredUserAvatar} />
              </Avatar.Root>
              <p className="fs-14 fw-400">
              {order.referredUser}
              </p>
            </div>
          ) : key.nameKey === 'quantity' ? (
            <NumberInput.Root defaultValue={order.quantity} unstyled spinOnPress={false}>
              <HStack gap="2" justify='space-between'>
                <NumberInput.DecrementTrigger asChild>
                  <IconButton variant="plain" size="sm">
                    <Minus />
                  </IconButton>
                </NumberInput.DecrementTrigger>
                <NumberInput.ValueText textAlign="center" fontSize="lg" minW="3ch" />
                <NumberInput.IncrementTrigger asChild>
                  <IconButton variant="plain" size="sm">
                    <Plus />
                  </IconButton>
                </NumberInput.IncrementTrigger>
              </HStack>
            </NumberInput.Root>
            // order.status === 'Delivered' || order.status === 'Completed'
          ) : key.nameKey === 'status' ? (
            <p style={{color: (['Delivered', 'Completed', 'Earned', 'Resolved'].includes(order.status)) ? '#00773F' : 
              (['Cancelled', 'Spent'].includes(order.status)) ? '#EA4325' : order.status === 'Processing' ? '#F2A317' : 
              '#449ADF'
            }}>{order.status} </p>
          ) : key.nameKey === 'reward' ? (
            <p className="flex-start-center gap-4">
              <Image src='/coin.png' width={24} height={24} alt='coin' />
              {order.reward}
            </p>
          ) : key.nameKey === 'support' ? (
            <Button className="btn-yellow" onClick={() => order?.support && supportActionClick?.(order)}>{order.support}</Button>
          ) : key.nameKey === 'others' ? (
            <p className="flex-start-center">{order.others} <ChevronRight /></p>
          ) : key.nameKey === 'actions' ? (
            <div className="flex-center-center">
              {
                Array.isArray(order.actions) ? (
                  order.actions.map((action, index) => (
                    <IconButton key={index} variant='plain' size="sm">
                      {action.icon}
                    </IconButton>
                  ))
                ) : (
                  <p className="flex-start-center fs-12">{order.actions} <ChevronRight /></p>
                )
              }
            </div>
          ) : <>{order[key.nameKey]}</>}
        </div>
      ))}
      {/* {order.actions && (
        <div className="t-actions">
          
        </div>
      )} */}
    </div>
  )
}