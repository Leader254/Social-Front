/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../../CSS/Update.css'

const Update = ({ setOpenUpdate, user }) => {
    const [cover, setCover] = useState(null);
    const [profile, setProfile] = useState(null);

    const handleClick = async (e) => {
        e.preventDefault();
    };

    return (
        <div className="update">
            <div className="wrapper">
                <h1>Update Your Profile</h1>
                <form>
                    <div className="files">
                        <label htmlFor="cover">
                            <span>Cover Picture</span>
                            <div className="imgContainer">
                                <img
                                    src={cover ? URL.createObjectURL(cover) : (user.coverPic ? user.coverPic : "")}
                                    alt=""
                                />
                            </div>
                        </label>
                        <input
                            type="file"
                            id="cover"
                            style={{ display: 'none' }}
                            onChange={(e) => setCover(e.target.files[0])}
                        />
                        <label htmlFor="profile">
                            <span>Profile Picture</span>
                            <div className="imgContainer">
                                <img
                                    src={profile ? URL.createObjectURL(profile) : (user.profilePic ? user.profilePic : "")}
                                    alt=""
                                />
                            </div>
                        </label>
                        <input
                            type="file"
                            id="profile"
                            style={{ display: 'none' }}
                        />
                    </div>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                    />
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                    />
                    <label>Fullname</label>
                    <input
                        type="text"
                        name="fullname"
                    />
                    <label>Country</label>
                    <input
                        type="text"
                        name="country"
                    />
                    <button onClick={handleClick}>Update</button>
                </form>
                <button className="close" onClick={() => setOpenUpdate(false)}>
                    close
                </button>
            </div>
        </div>
    );
};

export default Update;
