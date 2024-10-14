import GameBoard from './components/game-board'
// import Modal from './components/modal'
import SettingsBoard from './components/settings-board'
import { useGameStore } from './stores/gameStore'

function App() {
  const gameMode = useGameStore((state) => state.gameMode)
  return (
    <section className="flex w-full max-w-[327px] flex-col items-center gap-8">
      {/* <div className="flex w-full max-w-[327px] flex-col items-center gap-8"> */}
      {gameMode ? <GameBoard /> : <SettingsBoard />}

      {/* </div> */}
      {/* <Modal /> */}
    </section>
  )
}

export default App
