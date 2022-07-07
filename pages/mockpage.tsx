import React from "react";
import Link from "next/link";

export default function Mockpage() {
  return (
    <div>
      <div>mockpage</div>
      <Link href="/">
        <a>to home</a>
      </Link>
    </div>
  );
}
