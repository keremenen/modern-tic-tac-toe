import Button from './button'

export default function GameWariants() {
	return (
		<div className="flex flex-col gap-6">
			<Button
				className="bg-mango-base   
        shadow-[0_8px_#CC8B13]"
			>
				NEW GAME (VS CPU)
			</Button>
			<Button className="bg-turquoise-base   shadow-[0_8px_#118C87]">
				NEW GAME (VS PLAYER)
			</Button>
		</div>
	)
}
