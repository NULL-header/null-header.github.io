import { BaseInterfaceProps } from "./base-interface";

export type InterfaceProps = Omit<BaseInterfaceProps, "children"> & {
  title: string;
};
