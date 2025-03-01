type PillProps = {
  text: string
  isActive: boolean
  setActivePopularCategory: React.Dispatch<React.SetStateAction<string>>
}

export default function Pill({ text, isActive, setActivePopularCategory }: PillProps) {
  return (
    <button
      className={`text-xl leading-6 font-semibold py-2 px-4 rounded-full ${isActive ? 'bg-blue text-white' : 'bg-none text-subTitle border border-borderStroke'}`}
      onClick={() => setActivePopularCategory(text)}
    >
      {text}
    </button>
  )
}

export function HighlightPill({ text }: { text: string | undefined }) {
  return (
    <button className="font-bold text-2xl text-white bg-orange  rounded-full py-2 px-4">
      {text}
    </button>
  )
}
