import { useGameStore } from '../stores/gameStore'

export default function GameBoardFooter() {
  const marksAssignments = useGameStore((state) => state.marksAssignments)
  const scores = useGameStore((state) => state.scores)

  const scoreTabs = [
    {
      title: 'X',
      score: scores.x,
      variant: 'turquoise',
      mark: 'X',
      markAssignment: marksAssignments.x,
    },
    {
      title: 'TIES',
      score: scores.ties,
      variant: 'gray',
      mark: '',
      markAssignment: '',
    },
    {
      title: 'O',
      score: scores.o,
      variant: 'mango',
      mark: 'O',
      markAssignment: marksAssignments.o,
    },
  ]

  return (
    <div className="grid w-full grid-flow-row grid-cols-3 gap-5 text-navy">
      {scoreTabs.map((tab, index) => (
        <div
          key={index}
          className={`w-full rounded-xl ${tab.variant} py-3 text-center uppercase`}
        >
          <h3 className="text-[14px] font-medium">
            {tab.title} {tab.markAssignment && `(${tab.markAssignment})`}
          </h3>
          <p className="text-[20px] font-bold">{tab.score}</p>
        </div>
      ))}
    </div>
  )
}
