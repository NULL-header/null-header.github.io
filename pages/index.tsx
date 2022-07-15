import React from "react";
import { Box } from "@chakra-ui/react";
import { Container } from "components/content-list/container";
import { ExternalLink, LocalLink } from "components/content-list/links";
import Link from "next/link";
import { FaUser, FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <Box width="100%" height="100%">
      <Box width="100%" marginX="auto">
        <Container title="プロフィール" icon={FaUser}>
          <ExternalLink
            icon={FaSearch}
            title="Findyで職務経歴書を見る"
            link="https://findy-code.io/share_profiles/7BR0_weh_idU3"
          />
          <LocalLink
            title="その他のプロフィールを見る"
            icon={FaUser}
            link="/profile"
          />
        </Container>
      </Box>
      <Link href="/mockpage">
        <a>to mockpage</a>
      </Link>
    </Box>
  );
}
