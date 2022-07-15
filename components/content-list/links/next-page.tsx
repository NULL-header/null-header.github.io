import React from "react";
import { FaFolder } from "react-icons/fa";
import { LocalLink } from "./base";

interface NextPageProps {
  pageName: string;
  pageLink: string;
}

export const NextPage = React.memo(({ pageLink, pageName }: NextPageProps) => (
  <LocalLink icon={FaFolder} link={pageLink} title={pageName} />
));
