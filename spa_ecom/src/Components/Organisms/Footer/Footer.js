import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Footer.css";
function Footer() {
  return (
    // <Nav className="me-auto">
    // <Nav.Link href="#"><h2 style={{margin:'0px auto'}}>
    <div className="footer-border">
      <div className="footer-content">
        <div>
          <div className="footer-pic">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-QE0Gj4g7Fhr51fdFekgrxUwmsrxItjYHg&usqp=CAU"
              alt="zensar"
              className="footer-icon"
            />
          </div>
          <p className="pic-text">
            ShopCart brings you the joy of discovery with a huge selection of
            original products from mobiles, fashion,home appliances, groceries,
            ...
          </p>
        </div>

        <div className=" Footer-Heading">
          <h2 className="Footer-Info">Contact Info</h2>
          <div>
            <ul className="Footer-details">
              <li className="flex items-center">
                {" "}
                please call us at 514-286-9228 or{" "}
              </li>
              <li className="flex items-center">at 1-800-663-9228</li>
            </ul>
          </div>
        </div>

        <div className=" Footer-Heading">
          <h2 className="Footer-Info">About US</h2>
          <div>
            <ul className="Footer-details">
              <p>
                The first thing to keep in mind is that your About Us page is
                not just about you – it's about what you can do for potential
                customers, and why you should be the one to do it. Therefore,
                you'll want to make sure you provide some background on both
                your products and your team.
              </p>
              {/* <li className='flex items-center'><ChevronRightIcon className='footer' />Online Fees Payment</li> */}
              {/* <li className='flex items-center'><ChevronRightIcon className='footer' />Sports</li> */}
            </ul>
          </div>
        </div>

        <div className=" Footer-Heading">
          <h2 className="Footer-Info">Services</h2>
          <div>
            <ul className="Footer-details">
              <li className="flex items-center">RPG Group of Engineering</li>
              <li className="flex items-center">RPG Group of Engineering</li>
              <li className="flex items-center">RPG Group of Engineering</li>
              <li className="flex items-center">RPG Group of Engineering</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    // </h2></Nav.Link>
    // </Nav>
  );
}
export default Footer;
