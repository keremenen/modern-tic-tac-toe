export default function GameWariants() {
	return (
		<div className="flex flex-col gap-6">
			<button
				className="bg-mango-base text-navy rounded-2xl py-3 font-bold 
        shadow-[0_8px_#CC8B13]"
			>
				NEW GAME (VS CPU)
			</button>
			<button className="bg-turquoise-base text-navy rounded-2xl py-3 font-bold shadow-[0_8px_#118C87]">
				NEW GAME (VS PLAYER)
			</button>
		</div>
	)
}
