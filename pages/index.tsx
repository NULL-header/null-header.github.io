import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>home</div>
      <Link href="/mockpage">
        <a>to mockpage</a>
      </Link>
    </div>
  );
}
