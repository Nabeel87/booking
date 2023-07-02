import "./featuredProperties.css";

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
                    alt=""
                    className="fpImg" />
                <span className="fpName">7Seasons Apartments Budapest</span>
                <span className="fpCity">06. Terézváros, Hungary, Budapest</span>
                <span className="fpPrice">Starting fromPKR 37,890</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Fabulous</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o="
                    alt=""
                    className="fpImg" />
                <span className="fpName">Oriente Palace Apartments</span>
                <span className="fpCity">Centro, Spain, Madrid</span>
                <span className="fpPrice">Starting fromPKR 31,732</span>
                <div className="fpRating">
                    <button>8.1</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=c4092495705eab3fad626e8e1a43b1daf7c623e4ea41daf26a201b4417a71709&o="
                    alt=""
                    className="fpImg" />
                <span className="fpName">RAMBLA BEACH Barcelonastuff Apartments</span>
                <span className="fpCity">Sant Martí, Spain, Barcelona</span>
                <span className="fpPrice">Starting fromPKR 76,593</span>
                <div className="fpRating">
                    <button>8.6</button>
                    <span>Fabulous</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/287103884.webp?k=b88fb9e29c6f7b4f2642d8d4b96aa43ac28637d0415a17c5df65cbe8a0f346f2&o="
                    alt=""
                    className="fpImg" />
                <span className="fpName">P&J Luxury Apartments</span>
                <span className="fpCity">Old Town, Poland, Kraków</span>
                <span className="fpPrice">Starting fromPKR 28,211</span>
                <div className="fpRating">
                    <button>8.2</button>
                    <span>Fabulous</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/126708403.webp?k=a137138b895d53d9c0cd31f99f272b833b605441d0670a40c24007fdbb45bb70&o="
                    alt=""
                    className="fpImg" />
                <span className="fpName">6 Continents Apartments by Prague Residences</span>
                <span className="fpCity">Prague 1, Czech Republic, Prague</span>
                <span className="fpPrice">Starting fromPKR 48,163</span>
                <div className="fpRating">
                    <button>8.3</button>
                    <span>Very good</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties