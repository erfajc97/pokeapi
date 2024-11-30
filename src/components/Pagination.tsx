"use client";
import { Pagination } from "@nextui-org/react";

type PaginationProps = {
  total: number;
  page: number;
  onChange: (page: number) => void;
};

export default function PaginationComponent({
  total,
  page,
  onChange,
}: PaginationProps) {
  return <Pagination size="md" total={total} page={page} onChange={onChange} />;
}
