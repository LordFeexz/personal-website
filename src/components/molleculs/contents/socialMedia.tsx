import { SOCIALMEDIA } from "@/constants/socialMedia";
import ContactCard from "@/components/molleculs/card/contactCard";

export default function SocialMediaList() {
  return (
    <section className="flex flex-col items-center space-y-4">
      <h2>Find me on</h2>
      <div className="flex flex-wrap gap-3" suppressHydrationWarning>
        {SOCIALMEDIA.map((el) => (
          <ContactCard key={el.title} {...el} />
        ))}
      </div>
    </section>
  );
}
