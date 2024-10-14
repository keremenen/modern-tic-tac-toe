import { useGameStore } from '../stores/gameStore'
import Button from './button'

export default function GameWariants() {
  const setGameMode = useGameStore((state) => state.setGameMode)

  return (
    <div className="flex w-full flex-col gap-6">
      <Button color="mango">NEW GAME (VS CPU)</Button>
      <Button color="turquoise" onClick={() => setGameMode('versus-player')}>
        NEW GAME (VS PLAYER)
      </Button>
    </div>
  )
}
