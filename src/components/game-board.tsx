import Button from "./button";
import Logo from "./logo";
import IconX from "../assets/icons/icon-x";

export default function GameBoard() {
  return (
    <>
      <div className="grid grid-flow-row grid-cols-3 items-center gap-2">
        <Logo />
        <div className="flex min-h-16 items-center gap-2 rounded-md bg-navy-secondary px-4 py-2 text-sm font-bold uppercase shadow-[0_4px_#10212A]">
          <IconX className="size-4 fill-green-500" />
          turn
        </div>
        <Button
          color="gray"
          variant="secondary"
          className="size-[40px] justify-self-end"
        >
          <svg
            width="15"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M19.524 0h-1.88a.476.476 0 0 0-.476.499l.159 3.284A9.81 9.81 0 0 0 9.835.317C4.415.317-.004 4.743 0 10.167.004 15.597 4.406 20 9.835 20a9.796 9.796 0 0 0 6.59-2.536.476.476 0 0 0 .019-.692l-1.348-1.349a.476.476 0 0 0-.65-.022 6.976 6.976 0 0 1-9.85-.63 6.987 6.987 0 0 1 .63-9.857 6.976 6.976 0 0 1 10.403 1.348l-4.027-.193a.476.476 0 0 0-.498.476v1.881c0 .263.213.476.476.476h7.944A.476.476 0 0 0 20 8.426V.476A.476.476 0 0 0 19.524 0Z"
              fill="#1F3641"
            ></path>
          </svg>
        </Button>
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
