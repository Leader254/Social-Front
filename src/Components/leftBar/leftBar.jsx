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
                        <FaUserFriends className='icon' />
                        <FaUserFriends className='icon' />
                        <FaUserFriends className='icon' />
                        <FaUserFriends className='icon' />
                        <FaUserFriends className='icon' />
                        <FaUserFriends className='icon' />
                        <span>You have 6 Friends</span>
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