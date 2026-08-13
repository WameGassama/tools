import Image from "next/image"

export function NavBar() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between border-b bg-background px-4 py-3 sm:px-10 sm:py-4">
      <div className="flex gap-2">
        <Image
          src={"/icon.svg"}
          width={30}
          height={30}
          alt="Gennemsnits Beregning Icon"
        />
        <span className="text-lg font-extrabold tracking-tight text-primary italic">
          Gennemsnitsberegner.dk
        </span>
      </div>
    </nav>
  )
}
