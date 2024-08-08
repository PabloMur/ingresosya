// hooks/uiHooks.ts
import { useRecoilState } from "recoil";
import { loaderAtom } from "@/lib/Atoms";

export const useLoader = (): [boolean, () => void] => {
  const [loaderState, setLoaderState] = useRecoilState(loaderAtom);
  const toggleLoader = () => setLoaderState((prevState) => !prevState);
  return [loaderState, toggleLoader];
};
