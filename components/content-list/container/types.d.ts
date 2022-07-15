import { BaseInterfaceProps } from "../base-interface";

export type InterfaceProps = Omit<BaseInterfaceProps, "children"> & {
  title: string;
};

export interface LinkProps extends InterfaceProps {
  link: string;
}
