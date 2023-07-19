import { FaUserFriends } from "react-icons/fa";
import { MdOutlineGroups } from "react-icons/md";
// import { IoGameController } from 'react-icons/io'
import { FaGamepad } from "react-icons/fa";
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
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <FaUserFriends className='icon' />
                        <span>Sam Kamotho</span>
                    </div>
                    <div className="item">
                        <FaUserFriends className='icon' />
                        <span>Jane Doe</span>
                    </div>
                    <div className="item">
                        <FaUserFriends className='icon' />
                        <span>Priscah P</span>
                    </div>
                    <div className="item">
                        <FaUserFriends className='icon' />
                        <span>Grace Doe</span>
                    </div>
                    <div className="item">
                        <FaUserFriends className='icon' />
                        <span>Ruth Mwai</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Your Friends</span>
                    <div className="item">
                        <CgProfile className="icon" />
                        <span>Messages</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBar