import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className='main-container'>
			<div className='black-background'></div>
			<div className='container'>
				<div className='headerLogo'>
					<div>Header logo</div>
					<div className='headers'>
						<div> link 1 </div>
						<div> link 2 </div>
						<div> link 3 </div>
					</div>
				</div>
				<div className='introduction'>
					<div></div>
					<div>
						<h1 className='about'>This app is about cats!</h1>
						<p>Cats are the most beautiful animals in the world.</p>
						<button>Sign up</button>
					</div>
					<div className='image'>pictrue</div>
				</div>
				<div className='images'>
					<div className='random-info'>
						<h1>Sweet cats</h1>
					</div>
					<div className='random-pics'>
						<div className='pic-text'>
							<div className='random-pic'></div>
							<div className='text'>text</div>
						</div>
						<div className='pic-text'>
							<div className='random-pic'></div>
							<div className='text'>text</div>
						</div>
						<div className='pic-text'>
							<div className='random-pic'></div>
							<div className='text'>text</div>
						</div>
						<div className='pic-text'>
							<div className='random-pic'></div>
							<div className='text'>text</div>
						</div>
					</div>
				</div>
				<div className='quote'></div>
				<div className='closing'></div>
			</div>
			<div className='black-background'></div>
		</div>
	);
}

export default App;
