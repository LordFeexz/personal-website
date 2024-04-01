import { Typography } from "@/components/atoms/typography/material-tailwind";

export default function MainFooter() {
  return (
    <footer className="w-full h-[5%] m-1 bottom-0 relative">
      <Typography
        color="blue-gray"
        className="text-center text-lg text-gray-50 text-neutral-800 dark:text-neutral-300 font-sora"
      >
        &copy; {new Date().getFullYear()} Ananda Fiqri
      </Typography>
    </footer>
  );
}
