import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className="main-container">
      <div className="black-background"></div>
			<div className='container'>
				<div className='opening'>
					<div className='headerLogo'>
						<div>Header logo</div>
						<div className='headers'>
							<div> link 1 </div>
							<div> link 2 </div>
							<div> link 3 </div>
						</div>
					</div>
				</div>
				<div className='introduction'>
					<div></div>
					<div>
						<h1>This app is about cats!</h1>
						<p>
							Cats are the most beautiful animals in the world. Lorem Ipsum is
							simply dummy text of the printing and typesetting industry. Lorem
							Ipsum has been the industry's standard dummy text ever since the
							1500s, when an unknown printer took a galley of type and scrambled
							it to make a type specimen book.
						</p>
						<button>Sign up</button>
					</div>
					<div className='image'>pictrue</div>
					<div></div>
				</div>
				<div className='images'></div>
				<div className='quote'></div>
				<div className='closing'></div>
			</div>
      <div className="black-background"></div>
		</div>
	);
}

export default App;
