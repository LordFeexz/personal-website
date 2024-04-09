import Breakline from "@/components/atoms/contents/breakLine";
import Introduction from "@/components/molleculs/contents/introduction";

export default function Page() {
  return (
    <>
      <Introduction />
      <Breakline className="my-6" />
    </>
  );
}

export const dinamic = "force-static";
