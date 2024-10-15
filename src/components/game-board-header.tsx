import IconO from '../assets/icons/icon-o'
import IconRestart from '../assets/icons/icon-restart'
import IconX from '../assets/icons/icon-x'
import { useGameStore } from '../stores/gameStore'
import Button from './button'
import Logo from './logo'

export default function GameBoardHeader() {
  const currentTurn = useGameStore((state) => state.currentTurn)
  const resetGame = useGameStore((state) => state.resetGame)

  return (
    <div className="mb-4 grid w-full grid-flow-row grid-cols-3 items-center gap-2">
      <Logo />
      <div className="flex items-center justify-center gap-2 rounded-md bg-navy-secondary px-4 py-2 text-sm font-bold uppercase shadow-[0_4px_#10212A]">
        {currentTurn === 'X' ? (
          <IconX className="fill-gray-base size-4" />
        ) : (
          <IconO className="fill-gray-base size-4" />
        )}
        turn
      </div>
      <Button
        onClick={resetGame}
        className="gray size-10 justify-self-end rounded-md !shadow-none"
      >
        <IconRestart className="scale-[2]" />
      </Button>
    </div>
  )
}
