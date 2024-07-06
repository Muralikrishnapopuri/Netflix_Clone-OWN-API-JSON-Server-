import React from 'react'
import './footer.css';
export default function Footer() {
  return (
    <div>
      <section class="footer">
      <div class="footer-row">
        <div class="footer-col">
          <h4>Info</h4>
          <ul class="links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Compressions</a></li>
            <li><a href="#">Prices</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Promotions</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Explore</h4>
          <ul class="links">
            <li><a href="#">Only on Netflix</a></li>
            <li><a href="#">Latest Promo's</a></li>
            <li><a href="#">Neiflix Plans</a></li>
            <li><a href="#">Popular movies</a></li>
            <li><a href="#">UpComing</a></li>
            <li><a href="#">Old TV Shows</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Legal</h4>
          <ul class="links">
            <li><a href="#">Customer Agreement</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Netflix Support Team</a></li>
            <li><a href="#">Yearly plans</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our any plan for a weekly dose
            of news, updates, favorite's, and
            exclusive offers.
          </p>
          <form action="#">
            <input type="text" placeholder="Your email" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div class="icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </section>
  
    </div>
  )
}
