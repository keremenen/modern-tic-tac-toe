import IconO from '../assets/icons/icon-o'
import IconX from '../assets/icons/icon-x'
import { useGameStore } from '../stores/gameStore'

export default function GameBoardGrid() {
  const board = useGameStore((state) => state.board)
  const handleMove = useGameStore((state) => state.handleMove)

  return (
    <div className="grid w-full grid-cols-3 grid-rows-3 justify-items-center gap-4">
      {board.map((mark, index) => (
        <button
          key={index}
          onClick={() => handleMove(index)}
          className="flex aspect-square w-full items-center justify-center rounded-xl bg-navy-secondary shadow-[0_4px_#10212A]"
        >
          {mark === 'X' && <IconX className="size-10 sm:size-16" />}
          {mark === 'O' && <IconO className="size-10 sm:size-16" />}
        </button>
      ))}
    </div>
  )
}
