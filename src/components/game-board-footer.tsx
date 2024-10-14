export default function GameBoardFooter() {
  return (
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
  )
}
