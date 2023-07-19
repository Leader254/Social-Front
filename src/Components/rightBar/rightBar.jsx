import '../../CSS/rightBar.css'

const RightBar = () => {
  return (
    <div className='rightbar'>
      <div className="container3">
        <div className="item">
          <span style={{ color: "lightgray" }}>Suggested for you</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/16122334/pexels-photo-16122334/free-photo-of-man-standing-on-a-deck-near-a-bridge-with-the-view-of-istanbul-across-the-bosphorus-strait.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <span>Samuel Wachira</span>
            </div>
            <div className="action-btns">
              <button className='follow'>Follow</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/864994/pexels-photo-864994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Janet Wamuyu</span>
            </div>
            <div className="action-btns">
              <button className='follow'>Follow</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/17344139/pexels-photo-17344139/free-photo-of-man-in-hat-and-shirt-posing-by-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
              <span>Sam Kamotho</span>
            </div>
            <div className="action-btns">
              <button className='follow'>Follow</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1250643/pexels-photo-1250643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Roseline Doe</span>
            </div>
            <div className="action-btns">
              <button className='follow'>Follow</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <span>Kevin Comba</span>
            </div>
            <div className="action-btns">
              <button className='follow'>Follow</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span style={{ color: "lightgray" }}>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/864994/pexels-photo-864994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online" />
              <span>Samuel Wachira</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar