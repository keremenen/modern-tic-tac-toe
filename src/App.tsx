import GameBoard from './components/game-board'
import SettingsBoard from './components/settings-board'
import { useGameStore } from './stores/gameStore'

function App() {
  const gameMode = useGameStore((state) => state.gameMode)
  return (
    <section className="flex w-full max-w-[327px] flex-col items-center gap-8 py-4">
      {gameMode ? <GameBoard /> : <SettingsBoard />}
    </section>
  )
}

export default App
