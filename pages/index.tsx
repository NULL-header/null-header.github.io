import React from "react";
import { Box } from "@chakra-ui/react";
import { Container, ContainerItem } from "components/content-list/container";
import Link from "next/link";
import { FaUser, FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <Box width="100%" height="100%">
      <Box width="100%" marginX="auto">
        <Container title="プロフィール" icon={FaUser}>
          <ContainerItem
            title="職務経歴書を見る"
            icon={FaSearch}
            link="https://example.com"
          />
        </Container>
      </Box>
      <Link href="/mockpage">
        <a>to mockpage</a>
      </Link>
    </Box>
  );
}
