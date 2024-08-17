import { SOCIALMEDIA } from "@/constants/socialMedia";
import ContactCard from "@/components/molleculs/card/contactCard";
import { memo } from "react";

function SocialMediaList() {
  return (
    <section className="flex flex-col items-center space-y-4">
      <h2>Find me on</h2>
      <nav className="flex flex-wrap gap-3" suppressHydrationWarning>
        {SOCIALMEDIA.map((el) => (
          <ContactCard key={el.title} {...el} />
        ))}
      </nav>
    </section>
  );
}

export default memo(SocialMediaList);
