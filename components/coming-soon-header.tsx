import Image from 'next/image'

export function ComingSoonHeader() {
  return (
    <header className="relative z-10 flex min-h-28 items-center justify-center px-6 pt-12 pb-4 mt-4 lg:mt-6 lg:pt-14 lg:pb-6">
      <a
        className="flex min-h-11 w-[min(236px,66vw)] items-center justify-center lg:w-[min(420px,78vw)] mt-7 lg:mt-12 xl:mt-14"
        href="#home"
        aria-label="KIMHAB ORK home"
      >
        <Image
          className="block h-auto w-full object-cover"
          src="/logo-light.png"
          alt="KIMHAB ORK"
          width={1162}
          height={164}
          sizes="(max-width: 358px) 66vw, (max-width: 767px) 236px, 420px"
        />
      </a>
    </header>
  )
}
