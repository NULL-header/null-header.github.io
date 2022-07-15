import React from "react";
import { FaFolder } from "react-icons/fa";
import { LocalLink } from "./base";

interface NextStageProps {
  pageName: string;
  pageLink: string;
}

export const NextStage = React.memo(
  ({ pageLink, pageName }: NextStageProps) => (
    <LocalLink icon={FaFolder} link={pageLink} title={pageName} />
  ),
);
