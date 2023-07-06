import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470732790.jpg?k=67946dfc9c6b479f75967db26807bea910eaf91d2e25b8247f17e2acb07d3e09&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470732768.jpg?k=142ffe09d793c818197c0f55b30c19ee11138cc1ab148e087c409b37df5c2acf&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470732802.jpg?k=390ab3cbcf4d8b5ed285ea68d64cb8339e989bae61640bc7045ced6be7767664&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470732748.jpg?k=78594e882d13e8dea32d4a21000c0e6b6f6666b5a8efd152a0ae5d6312f33022&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470732772.jpg?k=afba7edae44ee8442a36320c103058824a94b3ce58d8f225389bb9a2e6a1fe30&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/470732753.jpg?k=352250959d294f72a0aae9bf3041ac055f6025b45ba87eb1277b00d5f6642d42&o=&hp=1"
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTittle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="hotelDistance">Elton St 125 New York</span>
          </div>
          <span className="hotelPriceHighligh">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map(photo => (
              <div className="hotelImageWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTittle">Set in the centre of Madrid</h1>
              <p className="hotelDesc">
                less than 1 km from Plaza Mayor and a 12-minute walk from Mercado San Miguel, Loft en Centro de Madrid offers free WiFi. This apartment is 1.2 km from Atocha Train Station and 1.5 km from Royal Palace of Madrid.

                This air-conditioned apartment has 1 bedroom, a flat-screen TV, and a kitchen.

                Popular points of interest near the apartment include Puerta del Sol, Puerta de Toledo and Reina Sofia Museum. The nearest airport is Adolfo Suarez Madrid-Barajas Airport, 14 km from Loft en Centro de Madrid.

                This is our guests' favourite part of Madrid, according to independent reviews.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the centre of Madrid, less than 1 km from Plaza Mayor and a 12-minute walk from Mercado San Miguel.
              </span>
              <h2>
                <b>$945</b>(9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel