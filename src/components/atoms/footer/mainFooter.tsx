import { memo } from "react";

function MainFooter() {
  return (
    <footer className="w-full h-[5%] m-1 bottom-0 relative">
      <h1
        color="blue-gray"
        className="text-center text-lg text-neutral-800 dark:text-neutral-300 font-sora"
      >
        &copy; {new Date().getFullYear()} Ananda Fiqri
      </h1>
    </footer>
  );
}

export default memo(MainFooter);
