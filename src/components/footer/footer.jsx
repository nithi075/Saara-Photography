import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="brand-name">SAARA PHOTOGRAPHY</h2>
        <a href="mailto:hello@saaraphotography.com" className="footer-contact">
          HELLO@SAARAPHOTOGRAFY.COM
        </a>
        <div className="social-links">
          <a href="#">INSTAGRAM</a>
          <a href="#">PINTEREST</a>
          <a href="#">VIMEO</a>
        </div>
        <p className="copyright">© 2026 SAARA PHOTOGRAPHY. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
