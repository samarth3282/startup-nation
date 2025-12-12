"use client";
import { X } from "lucide-react";
import Link from "next/link";

const SearchFormReset = () => {
  return (
    <Link href="/" className="search-btn text-white">
      <X className="size-5" />
    </Link>
  );
};

export default SearchFormReset;
