import IconRestart from '../assets/icons/icon-restart'
import IconX from '../assets/icons/icon-x'
import Button from './button'
import Logo from './logo'

export default function GameBoardHeader() {
  return (
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
  )
}
