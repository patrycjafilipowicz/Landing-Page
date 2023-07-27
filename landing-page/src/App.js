import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<div className='main-container'>
			<div className='black-background'></div>
			<div className='container'>
				<div className='headerLogo'>
					<div className="baby-cat">BabyCat</div>
					<div className='headers'>
						<div>Link Link Link</div>
						{/* <div>link 2</div>
						<div>link 3</div> */}
					</div>
				</div>
				<div className='introduction'>
				<div className="space-intro"></div>
					<div>
						<h1 className='about'>This app is about cats!</h1>
						<p>Cats are the most beautiful animals in the world.</p>
						<button className='button-1'>Sign up</button>
					</div>
					<div className='image'>pictrue</div>
					<div className="space-intro"></div>
				</div>
				<div className='images'>
					<div className='random-info'>
						<h1 className='sweet-cats'>Sweet cats</h1>
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
				<div className='quote'>
				<div className='author'></div>
					<div className='quote-text'>
						<p className="quote-1">“In nine lifetimes,<br/></p>
						<p className="quote-2">you’ll never know as much about your cat<br/></p>
						<p className="quote-3">as your cat knows about you.”</p>
					</div>
					<div className='author'>- Michel de Montaigne</div>
				</div>
				<div className='closing-sing-button'>
					<div className='blue-space'>
						<div className='button-text'>
							<div className="call-to-action">
								<p className="sign-up-text">Call to action! It's time!<br/></p>
								<p className="sign-up-text-2">Sign to our product by clicking sign up button</p>
							</div>
							<div className="">
							<button className="button-2">Sign up</button></div>
						</div>
					</div>
				</div>
				<div className='closing'>
					<div>Copyright℗ ThepatProject 2023</div>
				</div>
			</div>
			<div className='black-background'></div>
		</div>
	);
}

export default App;
