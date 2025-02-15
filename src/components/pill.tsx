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
