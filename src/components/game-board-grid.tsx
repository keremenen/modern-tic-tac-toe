import IconO from '../assets/icons/icon-o'
import IconX from '../assets/icons/icon-x'

export default function GameBoardGrid() {
  const board = ['', 'X', 'O', 'X', 'O', 'X', '', 'O', 'X']

  return (
    <div className="grid grid-cols-3 gap-6">
      {board.map((mark, index) => (
        <button
          key={index}
          className="flex aspect-square h-[88px] w-24 items-center justify-center rounded-xl bg-navy-secondary shadow-[0_8px_#10212A]"
        >
          {mark === 'X' && <IconX className="size-10" />}
          {mark === 'O' && <IconO className="size-10" />}
        </button>
      ))}
    </div>
  )
}
