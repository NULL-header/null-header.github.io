import React from "react";
import { SiZenn } from "react-icons/si";
import { LocalLink } from "./base";

interface GithubLinkProps {
  slug: string;
}

export const GithubLink = React.memo(({ slug }: GithubLinkProps) => (
  <LocalLink
    icon={SiZenn}
    link={`https://zenn.dev/nullheader/articles/${slug}`}
    title="Zennで記事を見る"
  />
));
