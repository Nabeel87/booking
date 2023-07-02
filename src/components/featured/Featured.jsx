import React from 'react';
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
        <div className="featureditem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/106548982.webp?k=6464bb1807bbc9f4f9c408328c8df98bdfb5a885f7fc51712fcefc417b8472f7&o=" alt="" className="featuredImg" />
          <div className="featuredTitles">
            <h1>Auberge La</h1>
            <h2>Canada</h2>
          </div>
        </div>
        <div className="featureditem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/101174831.webp?k=35631b861f880bd876d85402d34b43f272c9032780bcc9008b3f0f70b6c2a56d&o=" alt="" className="featuredImg" />
          <div className="featuredTitles">
            <h1>Valcartier</h1>
            <h2>de-Valcartier</h2>
          </div>
        </div>
        <div className="featureditem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/233408040.webp?k=58ac272077157d63788e80a7768de99c757971d42df43b886d5622029f32a66f&o=" alt="" className="featuredImg" />
          <div className="featuredTitles">
            <h1>Seigneurie</h1>
            <h2>Saint-Gabriel</h2>
          </div>
        </div>
        <div className="featureditem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/373453325.webp?k=1c2fae202f7e6bb3c5e572ddfdf6a44157b52cd4a281e9eba6ca64ddd1b57cd9&o=" alt="" className="featuredImg" />
          <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 Properties</h2>
          </div>
        </div>
        
    </div>
  )
}

export default Featured