import IconX from '../assets/icons/icon-x'
import Button from './button'

export default function Modal() {
  return (
    <div className="absolute left-0 top-0 flex min-h-screen w-full items-center justify-center bg-black/50">
      <div className="flex w-full flex-col items-center bg-navy-secondary pb-12 pt-10 text-center">
        <p className="mb-4 text-sm uppercase">Player 2 wins!</p>
        <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold uppercase text-turquoise-base">
          <IconX className="size-7" /> Takes the round
        </h3>

        <div className="flex gap-4">
          <Button color="gray" className="rounded-xl">
            quit
          </Button>
          <Button
            color="mango"
            className="rounded-lg bg-mango-base shadow-[0_4px_#CC8B13]"
          >
            next round
          </Button>
        </div>
      </div>
    </div>
  )
}
