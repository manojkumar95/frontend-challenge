import React from 'react';

const Header = () => (
  <header>
    <div class="px-3 py-2 m-4">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <div class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <img src="/aylien-logo.svg" alt="Aylien Software" />
          </div>
          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li className="header_nav_item">
              <i className="fa fa-home home-icon"></i>Home
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

export default Header;