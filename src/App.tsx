import Logo from './components/logo'

function App() {
	return (
		<section className="max-w-[327px] gap-8 flex flex-col w-full">
			<Logo />
			<div className="bg-navy-secondary flex justify-center items-center flex-col rounded-[15px] px-6 py-6 shadow-[0_8px_#10212A]">
				<h1 className="text-base font-bold mb-[24px]">PICK PLAYER 1’S MARK</h1>

				<div className="mb-[17px] bg-navy w-full h-18 px-2 py-2 flex rounded-xl ">
					<button className="flex-grow h-full bg-inherit rounded-xl flex items-center justify-center">
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
					<button className="flex-grow h-full bg-gray rounded-xl flex items-center justify-center">
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

				<p className="text-sm  font-medium">REMEMBER : X GOES FIRST</p>
			</div>

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
		</section>
	)
}

export default App
