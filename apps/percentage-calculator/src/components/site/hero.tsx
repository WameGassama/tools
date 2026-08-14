export function Hero() {
  return (
    <section className="px-4 pt-8 sm:px-6 sm:pt-10">
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl bg-slate-900 px-6 py-14 sm:px-12 sm:py-20">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-10 text-[220px] leading-none font-black text-white/5 select-none sm:-top-20 sm:-right-6 sm:text-[320px]"
        >
          %
        </span>
        <div className="relative">
          <h1 className="text-[32px] leading-[1.1] font-extrabold text-balance wrap-break-word text-white sm:text-3xl">
            Procentregning
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-base">
            Procentregning handler om sammenhængen mellem et tal, en procentdel
            og en total. Vælg den beregning, du har brug for herunder: procent
            af et tal, procentvis stigning eller fald, hvor stor en andel ét tal
            udgør af et andet, eller find hele tallet ud fra en kendt
            procentdel.
          </p>
        </div>
      </div>
    </section>
  )
}
