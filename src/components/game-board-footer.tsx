import { useGameStore } from '../stores/gameStore'

export default function GameBoardFooter() {
  const playersChoices = useGameStore((state) => state.playersChoices)
  const scores = useGameStore((state) => state.scores)
  return (
    <div className="grid w-full grid-flow-row grid-cols-3 gap-5 text-navy">
      <div className="w-full rounded-xl bg-turquoise-base py-3 text-center uppercase">
        <h3 className="text-[14px] font-medium leading-tight">
          X ({playersChoices.x})
        </h3>
        <p className="text-[20px] font-bold leading-tight">{scores.x}</p>
      </div>
      <div className="w-full rounded-xl bg-gray py-3 text-center uppercase">
        <h3 className="text-[14px] font-medium leading-tight">TIES</h3>
        <p className="text-[20px] font-bold leading-tight">{scores.ties}</p>
      </div>
      <div className="w-full rounded-xl bg-mango-base py-3 text-center uppercase">
        <h3 className="text-[14px] font-medium leading-tight">
          O ({playersChoices.o})
        </h3>
        <p className="text-[20px] font-bold leading-tight">{scores.o}</p>
      </div>
    </div>
  )
}
