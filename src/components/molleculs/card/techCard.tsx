export interface TechCardProps {
  name: string;
  svg: any;
}

export default function TechCard({ name, svg }: TechCardProps) {
  return (
    <article className="px-2 rounded-sm cursor-pointer">
      <div className="flex w-full space-x-2 rounded-full px-4 py-2 shadow-[0_3px_10px_rgb(0,0,0,0.15)] dark:shadow-neutral-800 border-collapse border hover:border-gray-800">
        <div className="h-6 w-6">{svg}</div>
        <div className="whitespace-nowrap cursor-pointer">{name}</div>
      </div>
    </article>
  );
}
