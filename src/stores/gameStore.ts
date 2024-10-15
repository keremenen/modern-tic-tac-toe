import { create } from 'zustand'

const WINNING_COMBINATIONS = [
  [0, 1, 2], // Horizontal
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Vertical
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Diagonal
  [2, 4, 6],
]

type TGameStore = {
  firstPlayerMark: 'X' | 'O'
  board: ('' | 'X' | 'O')[]
  currentTurn: 'X' | 'O'
  gameMode: 'versus-player' | 'versus-cpu' | null
  winner: 'X' | 'O' | 'tie' | null
  marksAssignments: { x: 'P1' | 'P2'; o: 'P1' | 'P2' }
  scores: { x: number; o: number; ties: number }

  checkWinner: () => void
  setGameMode: (mode: 'versus-player' | 'versus-cpu' | null) => void
  changeTurn: () => void
  setBoard: (index: number) => void
  setFirstPlayerMark: (mark: 'X' | 'O') => void
  handleMove: (index: number) => void
  reverseMarkAssignments: () => void
  pickFirstPlayerMark: (value: 'X' | 'O') => void
  resetGame: () => void
  gotoNextRound: () => void
  checkIfBoardIsFull: () => void
}

export const useGameStore = create<TGameStore>((set, get) => ({
  firstPlayerMark: 'X',
  currentTurn: 'X',
  board: ['', '', '', '', '', '', '', '', ''],
  gameMode: null,
  winner: null,
  scores: { x: 0, o: 0, ties: 0 },
  marksAssignments: { x: 'P1', o: 'P2' },

  setFirstPlayerMark: (mark) => set({ firstPlayerMark: mark }),
  setBoard: (index) =>
    set((state) => ({
      board: state.board.map((mark, i) =>
        i === index && !mark ? state.currentTurn : mark,
      ),
    })),
  changeTurn: () =>
    set((state) =>
      state.currentTurn === 'X' ? { currentTurn: 'O' } : { currentTurn: 'X' },
    ),
  checkWinner: () => {
    const { board } = get()
    for (const combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        set({
          winner: board[a],
          scores: {
            ...get().scores,
            [board[a].toLowerCase() as 'x' | 'o']:
              get().scores[board[a].toLowerCase() as 'x' | 'o'] + 1,
          },
        })
        return
      }
    }
  },
  setGameMode: (mode) => set({ gameMode: mode }),
  reverseMarkAssignments: () => {
    set((state) => ({
      marksAssignments: {
        x: state.marksAssignments.o,
        o: state.marksAssignments.x,
      },
    }))
  },
  handleMove: (index) => {
    const {
      setBoard,
      changeTurn,
      checkWinner,
      checkIfBoardIsFull,
      board,
      winner,
    } = get()
    if (board[index] || winner) return
    setBoard(index)
    changeTurn()
    checkWinner()
    checkIfBoardIsFull()
  },
  resetGame: () => {
    const { setGameMode, setFirstPlayerMark } = get()
    setGameMode(null)
    setFirstPlayerMark('X')
    set({
      board: ['', '', '', '', '', '', '', '', ''],
      winner: null,
      scores: { x: 0, o: 0, ties: 0 },
    })
  },
  gotoNextRound: () => {
    set({ board: ['', '', '', '', '', '', '', '', ''], winner: null })
  },
  pickFirstPlayerMark: (mark) => {
    const { setFirstPlayerMark, reverseMarkAssignments } = get()
    setFirstPlayerMark(mark)
    reverseMarkAssignments()
  },
  checkIfBoardIsFull: () => {
    const { board } = get()
    if (board.every((mark) => mark)) {
      set({
        winner: 'tie',
        scores: { ...get().scores, ties: get().scores.ties + 1 },
      })
    }
  },
}))
