import { atom, useAtom } from "jotai";
import { useMount } from "react-use";
import type * as Vender from "./vender";

const venderAtom = atom<typeof Vender | undefined>(undefined);
export const useVender = () => {
  const [vender, setVender] = useAtom(venderAtom);
  useMount(() => {
    if (vender != null) return;
    import("./vender").then((imported) => {
      setVender(imported);
    });
  });
  return vender;
};
