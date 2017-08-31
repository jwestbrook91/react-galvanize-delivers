import React from 'react';

export default function OrderPageLayout(props) {
  return (
    <div>
      <header>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper grey darken-3">
              <h4 className="brand-logo center-on-small-only orange-text text-darken-1">Galvanize Delivers</h4>
              <ul id="nav-mobile" className="right hide-on-small-only">
                <li className="orange-text text-darken-1 right">Order Delivery</li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <div className="OrderPageLayout">
        <div className="row">
          <div id="cards" className="col s12 m8 l7">
            {props.children[0]}
          </div>

          <div className="col s12 m5 l5">
            {props.children[1]}

            {props.children[2]}
          </div>
        </div>
      </div>

      <footer className="page-footer grey darken-3">
        <div className="container">
          <div className="row">
            <div className="col l6 s8 orange-text text-darken-1">
              <h5>Galvanize Delivers</h5>
              <p className="orange-text text-darken-1">Fine Dining, Delivered</p>
            </div>

            <div className="col s4">
              <p>
                <a href="index.html" className="orange-text text-darken-1">
                  Home
                </a>
                <br />
                <a href="order.html" className="orange-text text-darken-1">
                  Order Delivery
                </a>
              </p>
            </div>
            <div className="footer-copyright grey darken-4">
              <div className="container">
                <div className="row">
                  <div className="col l6 s8">
                    <p className="orange-text text-darken-1">&copy; 2016 Galvanize Delivers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
