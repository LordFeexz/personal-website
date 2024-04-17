import Breakline from "@/components/atoms/contents/breakLine";
import ServicesList from "@/components/organs/contents/serviceList";

export default function Page() {
  return (
    <>
      <ServicesList />
      <Breakline className="my-6" />
    </>
  );
}
