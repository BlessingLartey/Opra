import About from "./about";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero-text">
                <h1>Opra A Luxury Hotel</h1>
                <p>
                  Here are the best hotel booking sites, including
                  recommendations for international travel and for finding
                  low-priced hotel rooms.
                </p>
                <a href="#" className="primary-btn">
                  Discover Now
                </a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
              <div className="booking-form">
                <h3>Booking Your Hotel</h3>
                <form action="#">
                  <div className="check-date">
                    <label for="date-in">Check In:</label>
                    {/* <input type="text" className="date-input" id="date-in"> */}
                    <i className="icon_calendar"></i>
                  </div>
                  <div className="check-date">
                    <label for="date-out">Check Out:</label>
                    {/* <input type="text" className="date-input" id="date-out"> */}
                    <i className="icon_calendar"></i>
                  </div>
                  <div className="select-option">
                    <label for="guest">Guests:</label>
                    <select id="guest">
                      <option value="">2 Adults</option>
                      <option value="">3 Adults</option>
                    </select>
                  </div>
                  <div className="select-option">
                    <label for="room">Room:</label>
                    <select id="room">
                      <option value="">1 Room</option>
                      <option value="">2 Room</option>
                    </select>
                  </div>
                  <button type="submit">Check Availability</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="hero-slider owl-carousel">
          <div
            className="hs-item set-bg"
            data-setbg="imghotel/aboutus.jpg"
          ></div>
          <div
            className="hs-item set-bg"
            data-setbg="imghotel/aboutus.jpg"
          ></div>
          <div
            className="hs-item set-bg"
            data-setbg="imghotel/aboutus.jpg"
          ></div>
        </div> */}
      </section>
      <About />
      {/* <!-- Home Room Section Begin --> */}
      <section className="hp-room-section">
        <div className="container-fluid">
          <div className="hp-room-items">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div
                  className="hp-room-item set-bg"
                  data-setbg="img/room/room-b1.jpg"
                >
                  <div className="hr-text">
                    <h3>Double Room</h3>
                    <h2>
                      199$<span>/Pernight</span>
                    </h2>
                    <table>
                      <tbody>
                        <tr>
                          <td className="r-o">Size:</td>
                          <td>30 ft</td>
                        </tr>
                        <tr>
                          <td className="r-o">Capacity:</td>
                          <td>Max persion 5</td>
                        </tr>
                        <tr>
                          <td className="r-o">Bed:</td>
                          <td>King Beds</td>
                        </tr>
                        <tr>
                          <td className="r-o">Services:</td>
                          <td>Wifi, Television, Bathroom,...</td>
                        </tr>
                      </tbody>
                    </table>
                    <a href="#" className="primary-btn">
                      More Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="hp-room-item set-bg"
                  data-setbg="img/room/room-b2.jpg"
                >
                  <div className="hr-text">
                    <h3>Premium King Room</h3>
                    <h2>
                      159$<span>/Pernight</span>
                    </h2>
                    <table>
                      <tbody>
                        <tr>
                          <td className="r-o">Size:</td>
                          <td>30 ft</td>
                        </tr>
                        <tr>
                          <td className="r-o">Capacity:</td>
                          <td>Max persion 5</td>
                        </tr>
                        <tr>
                          <td className="r-o">Bed:</td>
                          <td>King Beds</td>
                        </tr>
                        <tr>
                          <td className="r-o">Services:</td>
                          <td>Wifi, Television, Bathroom,...</td>
                        </tr>
                      </tbody>
                    </table>
                    <a href="#" className="primary-btn">
                      More Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="hp-room-item set-bg"
                  data-setbg="img/room/room-b3.jpg"
                >
                  <div className="hr-text">
                    <h3>Deluxe Room</h3>
                    <h2>
                      198$<span>/Pernight</span>
                    </h2>
                    <table>
                      <tbody>
                        <tr>
                          <td className="r-o">Size:</td>
                          <td>30 ft</td>
                        </tr>
                        <tr>
                          <td className="r-o">Capacity:</td>
                          <td>Max persion 5</td>
                        </tr>
                        <tr>
                          <td className="r-o">Bed:</td>
                          <td>King Beds</td>
                        </tr>
                        <tr>
                          <td className="r-o">Services:</td>
                          <td>Wifi, Television, Bathroom,...</td>
                        </tr>
                      </tbody>
                    </table>
                    <a href="#" className="primary-btn">
                      More Details
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div
                  className="hp-room-item set-bg"
                  data-setbg="img/room/room-b4.jpg"
                >
                  <div className="hr-text">
                    <h3>Family Room</h3>
                    <h2>
                      299$<span>/Pernight</span>
                    </h2>
                    <table>
                      <tbody>
                        <tr>
                          <td className="r-o">Size:</td>
                          <td>30 ft</td>
                        </tr>
                        <tr>
                          <td className="r-o">Capacity:</td>
                          <td>Max persion 5</td>
                        </tr>
                        <tr>
                          <td className="r-o">Bed:</td>
                          <td>King Beds</td>
                        </tr>
                        <tr>
                          <td className="r-o">Services:</td>
                          <td>Wifi, Television, Bathroom,...</td>
                        </tr>
                      </tbody>
                    </table>
                    <a href="#" className="primary-btn">
                      More Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Home Room Section End --> */}

      <footer class="footer-section">
        <div class="container">
          <div class="footer-text">
            <div class="row">
              <div class="col-lg-4">
                <div class="ft-about">
                  <div class="logo">
                    <a href="#">
                      {/* <img src="img/footer-logo.png" alt=""> */}
                    </a>
                  </div>
                  <p>
                    We inspire and reach millions of travelers
                    <br /> across 90 local websites
                  </p>
                  <div class="fa-social">
                    <a href="#">
                      <i class="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-tripadvisor"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i class="fa fa-youtube-play"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 offset-lg-1">
                <div class="ft-contact">
                  <h6>Contact Us</h6>
                  <ul>
                    <li>(12) 345 67890</li>
                    <li>info.colorlib@gmail.com</li>
                    <li>856 Cordia Extension Apt. 356, Lake, United State</li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-3 offset-lg-1">
                <div class="ft-newslatter">
                  <h6>New latest</h6>
                  <p>Get the latest updates and offers.</p>
                  <form action="#" class="fn-form">
                    {/* <input type="text" placeholder="Email"> */}
                    <button type="submit">
                      <i class="fa fa-send"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright-option">
          <div class="container">
            <div class="row">
              <div class="col-lg-7">
                <ul>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Terms of use</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Environmental Policy</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-5">
                <div class="co-text">
                  <p>
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>{" "}
                    All rights reserved | This template is made with{" "}
                    <i class="fa fa-heart" aria-hidden="true"></i> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
