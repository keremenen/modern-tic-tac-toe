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
  firstPlayerMark: 'X' | 'O' | null
  board: ('' | 'X' | 'O')[]
  currentTurn: 'X' | 'O'
  gameMode: 'versus-player' | 'versus-cpu' | null

  setGameMode: (mode: 'versus-player' | 'versus-cpu') => void
  changeTurn: () => void
  setBoard: (index: number) => void
  setFirstPlayerMark: (mark: 'X' | 'O') => void
}

export const useGameStore = create<TGameStore>((set) => ({
  firstPlayerMark: null,
  currentTurn: 'X',
  board: ['', '', '', '', '', '', '', '', ''],
  gameMode: null,

  setFirstPlayerMark: (mark) => set({ firstPlayerMark: mark }),
  setBoard: (index) =>
    set((state) => {
      state.changeTurn()
      return {
        board: state.board.map((mark, i) =>
          i === index ? state.currentTurn : mark,
        ),
      }
    }),
  changeTurn: () =>
    set((state) =>
      state.currentTurn === 'X' ? { currentTurn: 'O' } : { currentTurn: 'X' },
    ),
  setGameMode: (mode) => set({ gameMode: mode }),
}))
