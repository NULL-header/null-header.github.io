import React from "react";
import { DiGithub } from "react-icons/di";
import { LocalLink } from "./base";

interface GithubLinkProps {
  projectName: string;
}

export const GithubLink = React.memo(({ projectName }: GithubLinkProps) => (
  <LocalLink
    icon={DiGithub}
    link={`https://github.com/NULL-header/${projectName}`}
    title="Githubでリポジトリを見る"
  />
));
