import LeftSection from "./leftsection/Leftsection";
import MainContent from "./maincontent/Maincontent";
import './Home.css'

let Home = ()=>{
    return (
        <div className="home">
            <LeftSection/>
            <MainContent/>
        </div>
    );
}
export default Home;