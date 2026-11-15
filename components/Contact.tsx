import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { contact, site } from "@/data/content";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HighlightedText } from "@/components/ui/Highlight";
import { SocialLinks } from "@/components/SocialLinks";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="pt-16 sm:pt-20 lg:pt-[82px]"
    >
      <div className="page-container">
        <Reveal>
          <div className="contact-card-surface rounded-3xl p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_270px] lg:gap-16">
              <div>
                <SectionLabel>{contact.label}</SectionLabel>

                <h2
                  id="contact-title"
                  className="mt-3 max-w-[460px] text-display-sm font-semibold sm:text-display-md"
                >
                  <HighlightedText
                    text={contact.title}
                    words={contact.highlights}
                  />
                </h2>

                <p className="mt-4 max-w-[520px] text-sm text-body">
                  {contact.paragraph}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="group inline-flex items-center gap-2 text-xl font-medium text-ink sm:text-display-sm"
                  >
                    <span className="underline decoration-accent decoration-2 underline-offset-[6px] transition-colors group-hover:text-accent">
                      {site.email}
                    </span>
                    <ArrowUpRight
                      className="size-5 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                  </a>
                  <CopyEmailButton email={site.email} />
                </div>

                <div className="mt-7">
                  <SocialLinks />
                </div>
              </div>

              <div className="order-first flex justify-center lg:order-none">
                <Image
                  src="/avatar.jpeg"
                  alt={`Portrait of ${site.name}`}
                  width={540}
                  height={540}
                  sizes="270px"
                  className="size-[180px] rounded-full object-cover outline-2 outline-offset-8 outline-accent lg:size-[270px]"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
