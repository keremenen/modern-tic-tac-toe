import Logo from './logo'
import IconX from '../assets/icons/icon-x'
import IconO from '../assets/icons/icon-o'
import IconRestart from '../assets/icons/icon-restart'
import Button from './button'

const board = ['', 'X', 'O', 'X', 'O', 'X', '', 'O', 'X']

export default function GameBoard() {
  return (
    <>
      <div className="mb-9 grid w-full grid-flow-row grid-cols-3 items-center gap-2">
        <Logo />
        <div className="flex items-center gap-2 rounded-md bg-navy-secondary px-4 py-2 text-sm font-bold uppercase shadow-[0_4px_#10212A]">
          <IconX className="size-4 fill-gray" />
          turn
        </div>
        <Button
          color="gray"
          className="flex h-9 w-10 items-center justify-center justify-self-end rounded-md"
        >
          <IconRestart className="size-4" />
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {board.map((mark, index) => (
          <button
            key={index}
            className="flex aspect-square h-[88px] w-24 items-center justify-center rounded-xl bg-navy-secondary shadow-[0_8px_#10212A]"
          >
            {mark === 'X' && <IconX className="size-10" />}
            {mark === 'O' && <IconO className="size-10" />}
          </button>
        ))}
      </div>

      <div className="grid w-full grid-flow-row grid-cols-3 gap-5 text-navy">
        <div className="w-full rounded-xl bg-turquoise-base py-3 text-center uppercase">
          <h3 className="text-[14px] font-medium leading-tight">X (you)</h3>
          <p className="text-[20px] font-bold leading-tight">14</p>
        </div>
        <div className="w-full rounded-xl bg-gray py-3 text-center uppercase">
          <h3 className="text-[14px] font-medium leading-tight">TIES</h3>
          <p className="text-[20px] font-bold leading-tight">32</p>
        </div>
        <div className="w-full rounded-xl bg-mango-base py-3 text-center uppercase">
          <h3 className="text-[14px] font-medium leading-tight">O (CPU)</h3>
          <p className="text-[20px] font-bold leading-tight">11</p>
        </div>
      </div>
    </>
  )
}
