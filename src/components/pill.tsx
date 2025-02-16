type PillProps = {
  text: string
  isActive?: boolean
}

export default function Pill({ text, isActive = false }: PillProps) {
  return (
    <button
      className={`text-xl leading-6 font-semibold py-2 px-4 rounded-full ${isActive ? 'bg-blue text-white' : 'bg-none text-subTitle border border-borderStroke'}`}
    >
      {text}
    </button>
  )
}

export function HighlightPill({ text }: { text: string }) {
  return (
    <button className="font-bold text-2xl text-white bg-orange  rounded-full py-2 px-4">
      {text}
    </button>
  )
}
