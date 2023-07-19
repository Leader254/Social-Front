import { CgProfile } from "react-icons/fa";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import '../../CSS/leftBar.css'
import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";

const LeftBar = () => {
    const { currentuser } = useContext(AuthContext);
    return (
        <div className="leftbar">
            <div className="container1">
                <div className="menu">
                    <div className="user">
                        <img src={currentuser.profilePic} alt="" />
                        <span>{currentuser.username}</span>
                    </div>
                    <div className="item">
                        <BiSolidMessageRoundedDetail className="icon" />
                        <span>Messages</span>
                    </div>
                    <div className="item">
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <CgProfile className='icon' />
                        <span>Sam Kamotho</span>
                    </div>
                    <div className="item">
                        <CgProfile className='icon' />
                        <span>Jane Doe</span>
                    </div>
                    <div className="item">
                        <CgProfile className='icon' />
                        <span>Priscah P</span>
                    </div>
                    <div className="item">
                        <CgProfile className='icon' />
                        <span>Grace Doe</span>
                    </div>
                    <div className="item">
                        <CgProfile className='icon' />
                        <span>Ruth Mwai</span>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default LeftBar