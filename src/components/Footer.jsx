function Footer() {
  return (
<div>
  <footer className="section footer">
    <ul className="footer-links" id="nav-links">
      <pagelinks parentclass="footer-links" itemclass="footer-link"></pagelinks>
    </ul>
    <ul className="footer-icons">
      <li>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
          className="footer-icon"
        >
          <i className="fab fa-facebook" />
        </a>
      </li>
      <li>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer"
          className="footer-icon"
        >
          <i className="fab fa-twitter" />
        </a>
      </li>
      <li>
        <a
          href="https://www.squarespace.com/"
          target="_blank"
          rel="noreferrer"
          className="footer-icon"
        >
          <i className="fab fa-squarespace" />
        </a>
      </li>
    </ul>
    <p className="copyright">
      copyright © travel tours company<span id="date">2025</span>. all rights
      reserved
    </p>
  </footer>
</div>

  );
}

export default Footer;
