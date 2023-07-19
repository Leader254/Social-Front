import '../../CSS/ChatOnline.css'

const Online = () => {
    return (
        <div className='chatOnline'>
            <div className="onlineFriend">
                <div className="onlineImgContainer">
                    <img className='onlineImg' src="https://images.pexels.com/photos/13630259/pexels-photo-13630259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="onlineBadge">
                    </div>
                </div>
                <span className='onlineName'>Wairimu Mwai</span>

            </div>
            <div className="onlineFriend">
                <div className="onlineImgContainer">
                    <img className='onlineImg' src="https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="onlineBadge">
                    </div>
                </div>
                <span className='onlineName'>John Doe</span>

            </div>
            <div className="onlineFriend">
                <div className="onlineImgContainer">
                    <img className='onlineImg' src="https://images.pexels.com/photos/17645273/pexels-photo-17645273/free-photo-of-fashion-people-woman-relaxation.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="onlineBadge">
                    </div>
                </div>
                <span className='onlineName'>Priscah P</span>

            </div>

        </div>
    )
}

export default Online