import './Rightbottom.css'
import twitter from './twitter.png'
import whatsapp from './whatsapp.png'
import facebook from './facebook.png'
import instagram from './instagram.png'

let RightBottom = ()=>{
    return (
        <main className='rightbottom'>
            <img src={twitter} alt="twitter logo" />
            <img src={whatsapp} alt="whatsapp logo" />
            <img src={facebook} alt="facebook logo" />
            <img src={instagram} alt="instagram logo" />
        </main>
    );
}
export default RightBottom;