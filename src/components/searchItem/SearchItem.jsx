import "./searchItem.css";

const SearchItem = () => {
    return (
        <div className="serachitem">
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/square200/283176038.webp?k=9457d3e29c6037e3c8262836e2d7a8caeb2d547ff5c5303086294923b0746640&o="
                alt=""
                className="siImg" />
            <div className="siDec">
                <h1 className="siTitle">Grand View Apartments</h1>
                <span className="siDistance">0.7 km from centre</span>
                <span className="siTaxiop">Free airport taxi</span>
                <span className="siSubtitle">WiFi and air conditioning. </span>
                <span className="siFeatures">Standard Double Room with Bunk Bed</span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today.</span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailsTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes Taxes and fees</span>
                    <button className="siCheckButton">See Availability</button>
                </div>
            </div>
        </div>
        
    )
}

export default SearchItem