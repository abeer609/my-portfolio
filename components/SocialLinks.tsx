import {
  SiGithub,
  SiStackoverflow,
  SiTelegram,
  SiWhatsapp,
} from "react-icons/si";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { contact } from "@/data/content";

const iconByName: Record<string, React.ComponentType<{ className?: string }>> = {
  LinkedIn: FaLinkedinIn,
  GitHub: SiGithub,
  "Stack Overflow": SiStackoverflow,
  X: FaXTwitter,
  Telegram: SiTelegram,
  WhatsApp: SiWhatsapp,
};

const brandColor: Record<string, string> = {
  LinkedIn: "#0A66C2",
  GitHub: "var(--fg)",
  "Stack Overflow": "#F48024",
  X: "var(--fg)",
  Telegram: "#229ED9",
  WhatsApp: "#25D366",
};

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap items-center gap-7">
      {contact.socials.map((social) => {
        const Icon = iconByName[social.name];
        const isPlaceholder = social.href === "#";

        return (
          <li key={social.name}>
            <a
              href={social.href}
              aria-label={social.name}
              title={social.name}
              {...(isPlaceholder
                ? {}
                : { target: "_blank", rel: "noopener noreferrer" })}
              className="inline-flex rounded-md opacity-90 transition-opacity duration-200 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              style={{ color: brandColor[social.name] }}
            >
              {Icon ? <Icon className="size-8" /> : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
