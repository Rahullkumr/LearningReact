import Body from "./body/Body";
import Heading from "./Heading";
import Navbar from "./navbar/Navbar";
import Subheading from "./Subheading";

let Bluebg = ()=>{
    return (
        <div id='blueme'>
            <Heading/>
            <Subheading/>
            <div id='banner'>
                <Navbar/>
                <Body/>
            </div>
        </div>
    )
}
export default Bluebg;