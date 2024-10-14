import Logo from "./logo";
import IconX from "../assets/icons/icon-x";
import IconRestart from "../assets/icons/icon-restart";

export default function GameBoard() {
  return (
    <>
      <div className="grid grid-flow-row grid-cols-3 items-center gap-2">
        <Logo />
        <div className="flex min-h-16 items-center gap-2 rounded-md bg-navy-secondary px-4 py-2 text-sm font-bold uppercase shadow-[0_4px_#10212A]">
          <IconX className="size-4 fill-green-500" />
          turn
        </div>
        <button className="flex size-[40px] items-center justify-center justify-self-end rounded-md bg-gray">
          <IconRestart className="size-4" />
        </button>
      </div>
      <div>playboard</div>
      <div className="grid grid-cols-3 gap-2">
        <button className="flex aspect-square items-center justify-center rounded-xl bg-navy-secondary">
          <IconX className="size-10" />
        </button>
      </div>
    </>
  );
}
