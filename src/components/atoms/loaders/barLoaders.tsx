import { Spinner } from "./material-tailwind";

export default function BarLoader() {
  return (
    <div className="flex justify-center items-center">
      <Spinner className="h-6 w-6" />
    </div>
  );
}
