import { useGameStore } from '../stores/gameStore'
import Button from './button'

export default function GameWariants() {
  const setGameMode = useGameStore((state) => state.setGameMode)

  return (
    <div className="flex w-full flex-col gap-4">
      <Button className="mango">NEW GAME (VS CPU)</Button>
      <Button
        className="turquoise"
        onClick={() => setGameMode('versus-player')}
      >
        NEW GAME (VS PLAYER)
      </Button>
    </div>
  )
}
