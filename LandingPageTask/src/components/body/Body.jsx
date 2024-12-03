import './Body.css'
import Center from './center/Center';
import Leftbottom from './leftbottom/Leftbottom';
import Lefttop from './lefttop/Lefttop';
import RightBottom from './rightbottom/Rightbottom';
import RightCenter from './rightcenter/Rightcenter';
import Righttop from './Righttop/Righttop';
let Body = ()=>{
    return (
        <section>
            <div className='left'>
                <div className='lefttop'>
                    <Lefttop/>
                </div>
                <div className='leftbottom'>
                    <Leftbottom/>
                </div>
            </div>
            <div className='center'>
                <Center/>
            </div>
            <div className='rightside'>
                <div className='righttop'>
                    <Righttop/>
                </div>
                <div className='rightcenter'>
                    <RightCenter/>
                </div>
                <div>
                    <RightBottom/>
                </div>
            </div>
        </section>
    );
}
export default Body;