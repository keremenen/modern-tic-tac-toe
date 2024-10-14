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
  winner: 'X' | 'O' | null
  playersChoices: { x: string; o: string }

  checkWinner: () => void
  setGameMode: (mode: 'versus-player' | 'versus-cpu') => void
  changeTurn: () => void
  setBoard: (index: number) => void
  setFirstPlayerMark: (mark: 'X' | 'O') => void
  handleMove: (index: number) => void
  revesePlayersChoices: () => void
  pickFirstPlayerMark: (value: 'X' | 'O') => void
}

export const useGameStore = create<TGameStore>((set, get) => ({
  firstPlayerMark: 'X',
  currentTurn: 'X',
  board: ['', '', '', '', '', '', '', '', ''],
  gameMode: null,
  winner: null,
  scores: { x: 0, o: 0, ties: 0 },
  playersChoices: { x: 'P1', o: 'P2' },

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
        console.log('Winner:', board[a])
        set({ winner: board[a] })
        return
      }
    }
  },
  setGameMode: (mode) => set({ gameMode: mode }),
  revesePlayersChoices: () => {
    set((state) => ({
      playersChoices: {
        x: state.playersChoices.o,
        o: state.playersChoices.x,
      },
    }))
  },
  handleMove: (index) => {
    const { setBoard, changeTurn, checkWinner, board, winner } = get()
    if (board[index] || winner) return
    setBoard(index)
    changeTurn()
    checkWinner()
  },
  pickFirstPlayerMark: (mark) => {
    const { setFirstPlayerMark, revesePlayersChoices } = get()
    setFirstPlayerMark(mark)
    revesePlayersChoices()
  },
}))
