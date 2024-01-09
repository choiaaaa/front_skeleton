import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      {/*

        html vs JSX 차이점 헤결..
        - html 주석 제거..
        - a 태그를 Link로 교체..
        - className -> classNameName..편집->바꾸기 메뉴를 이용해서
      */}
      {/* <!-- ======= Footer ======= --> */}
  <section className="section-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <div className="widget-a">
            <div className="w-header-a">
              <h3 className="w-title-a text-brand">EstateAgency</h3>
            </div>
            <div className="w-body-a">
              <p className="w-text-a color-text-a">
                Enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat duis
                sed aute irure.
              </p>
            </div>
            <div className="w-footer-a">
              <ul className="list-unstyled">
                <li className="color-a">
                  <span className="color-text-a">Phone .</span> contact@example.com
                </li>
                <li className="color-a">
                  <span className="color-text-a">Email .</span> +54 356 945234
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 section-md-t3">
          <div className="widget-a">
            <div className="w-header-a">
              <h3 className="w-title-a text-brand">The Company</h3>
            </div>
            <div className="w-body-a">
              <div className="w-body-a">
                <ul className="list-unstyled">
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <a href="#">Site Map</a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <a href="#">Legal</a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <a href="#">Agent Admin</a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <a href="#">Careers</a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <a href="#">Affiliate</a>
                  </li>
                  <li className="item-list-a">
                    <i className="bi bi-chevron-right"></i> <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 section-md-t3">
          <div className="widget-a">
            <div className="w-header-a">
              <h3 className="w-title-a text-brand">International sites</h3>
            </div>
            <div className="w-body-a">
              <ul className="list-unstyled">
                <li className="item-list-a">
                  <i className="bi bi-chevron-right"></i> <a href="#">Venezuela</a>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right"></i> <a href="#">China</a>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right"></i> <a href="#">Hong Kong</a>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right"></i> <a href="#">Argentina</a>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right"></i> <a href="#">Singapore</a>
                </li>
                <li className="item-list-a">
                  <i className="bi bi-chevron-right"></i> <a href="#">Philippines</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <nav className="nav-footer">
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link href="#">Home</Link>
              </li>
              <li className="list-inline-item">
                <Link href="#">About</Link>
              </li>
              <li className="list-inline-item">
                <Link href="#">Property</Link>
              </li>
              <li className="list-inline-item">
                <Link href="#">Blog</Link>
              </li>
              <li className="list-inline-item">
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="socials-a">
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link href="#">
                  <i className="bi bi-facebook" aria-hidden="true"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="#">
                  <i className="bi bi-twitter" aria-hidden="true"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="#">
                  <i className="bi bi-instagram" aria-hidden="true"></i>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="#">
                  <i className="bi bi-linkedin" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="copyright-footer">
            <p className="copyright color-text-a">
              &copy; Copyright
              <span className="color-a">EstateAgency</span> All Rights Reserved.
            </p>
          </div>
          <div className="credits">
            {/* <!--
            All the links in the footer should remain intact.
            You can delete the links only if you purchased the pro version.
            Licensing information: https://bootstrapmade.com/license/
            Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=EstateAgency
          --> */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* <!-- End  Footer --> */}
    </div>
  )
}

export default Footer