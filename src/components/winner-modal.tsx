import Modal, { ModalControls, ModalDescription, ModalTitle } from './modal'
import IconO from '../assets/icons/icon-o'
import IconX from '../assets/icons/icon-x'
import Button from './button'
import { useGameStore } from '../stores/gameStore'

export default function WinnerModal() {
  const winner = useGameStore((state) => state.winner)
  const marksAssignments = useGameStore((state) => state.marksAssignments)
  const resetGame = useGameStore((state) => state.resetGame)
  const gotoNextRound = useGameStore((state) => state.gotoNextRound)

  let wonPlayer = null

  if (winner) {
    const winnerKey = winner.toLowerCase() as 'x' | 'o'
    wonPlayer = marksAssignments[winnerKey]
  }

  return (
    <Modal>
      {winner !== 'tie' && (
        <ModalTitle>
          {wonPlayer === 'P1' ? `Player 1` : 'Player 2'} wins!
        </ModalTitle>
      )}
      {winner === 'tie' ? (
        <ModalDescription>
          <span className="text-gray-base">It's a tie!</span>
        </ModalDescription>
      ) : (
        <ModalDescription>
          {winner === 'X' ? (
            <>
              <IconX className="size-7" />
              <span className="text-turquoise-base">Takes the round</span>
            </>
          ) : (
            <>
              <IconO className="size-7" />
              <span className="text-mango-base">Takes the round</span>
            </>
          )}
        </ModalDescription>
      )}
      <ModalControls>
        <Button className="gray" onClick={resetGame}>
          Quit
        </Button>
        <Button className="mango" onClick={gotoNextRound}>
          Next Round
        </Button>
      </ModalControls>
    </Modal>
  )
}
