import GameWariants from './components/game-wariants'
import Logo from './components/logo'
import MarkPicker from './components/mark-picker'

function App() {
	return (
		<section className="max-w-[327px] gap-8 flex flex-col w-full">
			<Logo />
			<MarkPicker />
			<GameWariants />
		</section>
	)
}

export default App
