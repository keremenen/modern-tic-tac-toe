import GameBoardHeader from './game-board-header'
import GameBoardGrid from './game-board-grid'
import GameBoardFooter from './game-board-footer'
import { useGameStore } from '../stores/gameStore'
import WinnerModal from './winner-modal'

export default function GameBoard() {
  const winner = useGameStore((state) => state.winner)

  return (
    <>
      <GameBoardHeader />
      <GameBoardGrid />
      <GameBoardFooter />

      {winner && <WinnerModal />}
    </>
  )
}
