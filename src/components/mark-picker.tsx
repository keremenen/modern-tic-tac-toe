export default function MarkPicker() {
  return (
    <div className="flex flex-col items-center justify-center rounded-[15px] bg-navy-secondary px-6 py-6 shadow-[0_8px_#10212A]">
      <h1 className="mb-[24px] text-base font-bold">PICK PLAYER 1’S MARK</h1>

      <div className="mb-[17px] flex h-18 w-full rounded-xl bg-navy px-2 py-2">
        <button className="flex h-full flex-grow items-center justify-center rounded-xl bg-inherit">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            className="size-8"
          >
            <path
              d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
              className="fill-gray"
            />
          </svg>
        </button>
        <button className="flex h-full flex-grow items-center justify-center rounded-xl bg-gray">
          <svg
            width="64"
            height="64"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="size-8"
          >
            <path
              d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
              className="fill-navy"
            />
          </svg>
        </button>
      </div>

      <p className="text-sm font-medium">REMEMBER : X GOES FIRST</p>
    </div>
  );
}
