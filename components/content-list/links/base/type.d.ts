import type { BaseInterfaceProps } from "../../interface";

type InterfaceProps = Omit<BaseInterfaceProps, "children">;

export interface LinkProps extends InterfaceProps {
  title: string;
  link: string;
}
