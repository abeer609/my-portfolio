import { footer } from "@/data/content";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line sm:mt-20 lg:mt-[36px]">
      <div className="page-container py-8">
        <div className="flex flex-col items-center gap-2 text-center text-xs text-muted sm:flex-row sm:justify-between sm:text-left">
          <p>{footer.copyright}</p>
          <p>{footer.built}</p>
        </div>

        
      </div>
    </footer>
  );
}
