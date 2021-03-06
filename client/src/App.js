import HeroImg from "./components/atoms/HeroImg";
import InfoWrapper from "./components/atoms/InfoWrapper";


function App() {
	return (
		<>
			<HeroImg url="./images/pexels-ryutaro-tsukata-6249462.jpg">
				<p>Texto</p>
				<p>Texto</p>
				<p>Texto</p>
				<p>Texto</p>
				<p>Texto</p>
				<p>Texto</p>
				<p>Texto</p>
			</HeroImg>
			<InfoWrapper>
				<p>otro texto</p>
			</InfoWrapper>
			<HeroImg url="./images/pexels-flo-maderebner-623919.jpg">
				<p>Texto</p>
				<p>Texto</p>
				<p>Texto</p>
				<p>Texto</p>
				<p>Texto</p>
				<p>Texto</p>
				<p>Texto</p>
			</HeroImg>
		</>
	);
}

export default App;
