'use client';

import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function Cpagination() {
  return (
    <>
      <Pagination.Root count={20} pageSize={2} defaultPage={1} className="t-pagination mt-30">
        <ButtonGroup variant="ghost" size='md'>
          <Pagination.PrevTrigger asChild>
            <IconButton>
              <ChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton>
              <ChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </>
  )
}