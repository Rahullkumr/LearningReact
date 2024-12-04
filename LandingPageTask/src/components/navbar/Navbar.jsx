import logo from './logo.png'
import search from './search.png'
import './Navbar.css'
let Navbar = ()=>{
    return (
        <>
            <nav>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div className='menu'>
                    <div>
                        <h4>Home </h4>
                    </div>
                    <div>
                        <h4>Campaign </h4>
                    </div>
                    <div>
                        <h4>About </h4>
                    </div>
                    <div>
                        <h4>Contact </h4>
                    </div>
                </div>
                <div className='search'>
                    <img src={search} alt="" />
                    <input type="text" />
                </div>
            </nav>
        </>
    );
}
export default Navbar;