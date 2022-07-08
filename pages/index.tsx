import React from "react";
import { Box } from "@chakra-ui/react";
import { Container } from "components/content-list/container";
import Link from "next/link";

export default function Home() {
  return (
    <Box width="100%" height="100%">
      <Box width="100%" marginX="auto">
        <Container title="プロフィール" />
      </Box>
      <Link href="/mockpage">
        <a>to mockpage</a>
      </Link>
    </Box>
  );
}
