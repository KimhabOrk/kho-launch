import { ComingSoonHeader } from '@/components/coming-soon-header'
import { ComingSoonHero } from '@/components/coming-soon-hero'
import { NewsletterSignup } from '@/components/newsletter-signup'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden bg-[url('/burgundy-satin-background.jpeg')] bg-cover bg-center opacity-[var(--satin-opacity)] brightness-[var(--satin-brightness)] saturate-[var(--satin-saturation)] md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[url('/portrait-burgundy-satin-background.jpeg')] bg-cover bg-center opacity-[var(--satin-opacity)] brightness-[var(--satin-brightness)] saturate-[var(--satin-saturation)] md:hidden"
      />
      <div className="relative z-10">
        <div className="flex min-h-svh flex-col">
          <ComingSoonHeader />
          <ComingSoonHero />
        </div>
        <NewsletterSignup formId={process.env.FORMBOLD_FORM_ID} />
        <SiteFooter />
      </div>
    </main>
  )
}
