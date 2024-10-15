import IconO from '../assets/icons/icon-o'
import IconX from '../assets/icons/icon-x'
import { useGameStore } from '../stores/gameStore'
import IconOOutline from '../assets/icons/icon-o-outline'
import IconXOutline from '../assets/icons/icon-x-outline'

export default function GameBoardGrid() {
  const board = useGameStore((state) => state.board)
  const handleMove = useGameStore((state) => state.handleMove)
  const currentTurn = useGameStore((state) => state.currentTurn)

  return (
    <div className="grid w-full grid-cols-3 grid-rows-3 justify-items-center gap-4">
      {board.map((mark, index) => (
        <button
          key={index}
          onClick={() => handleMove(index)}
          className="group flex aspect-square w-full items-center justify-center rounded-xl bg-navy-secondary shadow-[0_4px_#10212A]"
        >
          {mark === 'X' && <IconX className="size-10 sm:size-16" />}
          {mark === 'O' && <IconO className="size-10 sm:size-16" />}
          {mark === '' && currentTurn === 'X' && (
            <IconXOutline className="absolute size-10 opacity-0 transition duration-500 ease-in-out group-hover:opacity-100 sm:size-16" />
          )}
          {mark === '' && currentTurn === 'O' && (
            <IconOOutline className="absolute size-10 opacity-0 transition duration-500 ease-in-out group-hover:opacity-100 sm:size-16" />
          )}
        </button>
      ))}
    </div>
  )
}
