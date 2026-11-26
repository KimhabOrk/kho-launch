export function ComingSoonHero() {
  return (
    <section className="flex flex-1" id="home" aria-labelledby="coming-title">
      <div className="flex flex-1 flex-col items-center justify-center px-5 pt-4 pb-16 text-center sm:px-6 md:pb-20">
        <div className="flex items-center gap-2 text-[clamp(0.75rem,0.633rem+0.5vw,1.125rem)] tracking-[0.24em] text-foreground">
          <span aria-hidden="true" className="h-px w-6 shrink-0 bg-foreground/40" />
          <p className="m-0 leading-none">A NEW ERA OF LUXURY FASHION</p>
          <span aria-hidden="true" className="h-px w-6 shrink-0 bg-foreground/40" />
        </div>
        <h1
          id="coming-title"
          className="m-0 my-6 lg:my-8 xl:my-10 font-(family-name:--font-editorial) text-[clamp(3rem,16vw,11rem)] leading-[0.78] font-light tracking-[0.015em] text-foreground"
        >
          <span className="block">COMING</span>
          <span className="mt-[0.06em] block">SOON</span>
        </h1>
        <p className="m-0 max-w-[340px] px-2 font-sans text-[clamp(0.75rem,0.633rem+0.5vw,1.125rem)] leading-[1.8] tracking-[0.14em] text-muted-foreground uppercase">
          An affordable luxury womenswear.
        </p>
        <a
          className="mt-8 font-semibold inline-flex min-h-[54px] min-w-[190px] items-center justify-center border border-foreground/50 bg-card/50 px-7 font-sans text-[clamp(0.625rem,1vw,0.75rem)] tracking-[0.2em] text-foreground transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4 motion-reduce:transition-none"
          href="#newsletter-title"
        >
          GET NOTIFIED
        </a>
      </div>
    </section>
  )
}
