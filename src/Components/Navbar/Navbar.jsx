import './Navbar.css';
import { useState, useContext, useEffect, useRef } from 'react';
import { BiSolidMessageRoundedDetail } from 'react-icons/bi';
import { FaBell } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/authContext';

const Navbar = () => {
    const { currentuser } = useContext(AuthContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setShowDropdown(true);
    };

    const handleLogout = () => {
        // Implement your logout logic here, such as clearing user session, etc.
        // For this example, we'll just simulate a logout by refreshing the page.
        window.location.reload();
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className='navbar'>
            <div className='container'>
                <div className='left'>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <span style={{ fontSize: '30px' }}>Connect.</span>
                    </Link>
                    <div className='search'>
                        <BiSearchAlt className='searchIcon' />
                        <input type='text' placeholder='Search here...' />
                    </div>
                </div>
                <div className='right'>
                    <Link to='/messenger'>
                        <BiSolidMessageRoundedDetail style={{ fontSize: '30px' }} />
                    </Link>
                    <FaBell style={{ fontSize: '30px' }} />
                    <div className='user' onClick={toggleDropdown} ref={dropdownRef}>
                        <img src={currentuser.profilePic} alt='' />
                        <span className='username'>{currentuser.username}</span>
                        {showDropdown && (
                            <div className='user-dropdown'>
                                <Link to='/profile'>Profile</Link>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
