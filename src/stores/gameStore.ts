import { create } from 'zustand'

type TGameStore = {
  firstPlayerMark: string
  board: ('' | 'X' | 'O')[]
  currentTurn: 'X' | 'O'

  changeTurn: () => void
  setBoard: (index: number) => void
  setFirstPlayerMark: (mark: string) => void
}

export const useGameStore = create<TGameStore>((set) => ({
  firstPlayerMark: 'X',
  currentTurn: 'X',
  board: ['', '', '', '', '', '', '', '', ''],

  setFirstPlayerMark: (mark: string) => set({ firstPlayerMark: mark }),
  setBoard: (index: number) =>
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
}))
