export interface PointTextProps {
  text: string[];
}

export default function PointText({ text }: PointTextProps) {
  return (
    <ul className="flex flex-col space-y-6 text-neutral-800 dark:text-neutral-300 font-sora">
      {text.map((el, idx) => (
        <li key={idx}>
          <span className="mx-2">*</span>
          {el}
        </li>
      ))}
    </ul>
  );
}
