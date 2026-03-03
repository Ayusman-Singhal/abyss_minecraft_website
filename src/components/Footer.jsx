import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="lava-divider" />
            <div className="footer-inner">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="mc-font mc-gold footer-logo">ABYSS SERVER</h3>
                        <p className="footer-tagline cinzel">
                            A cinematic dark fantasy experience. Forge your path. Survive or become part of the abyss.
                        </p>
                        <div className="footer-socials">
                            <a href="https://discord.com/invite/fakepixel" className="social-link" aria-label="Discord" target="_blank" rel="noopener noreferrer">
                                <img src="/images/discord.png" alt="Discord" className="social-icon-img" />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">@</a>
                            <a href="#" className="social-link" aria-label="YouTube">▶</a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="cinzel mc-gold footer-links-title">Navigation</h4>
                        <ul className="footer-links">
                            <li><Link to="/" className="cinzel">Home</Link></li>
                            <li><Link to="/store" className="cinzel">Server Store</Link></li>
                            <li><a href="#" className="cinzel">Vote For Us</a></li>
                            <li><a href="#" className="cinzel">Live Map</a></li>
                        </ul>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="cinzel mc-gold footer-links-title">Resources</h4>
                        <ul className="footer-links">
                            <li><a href="#" className="cinzel">Wiki & Lore</a></li>
                            <li><a href="#" className="cinzel">Rules</a></li>
                            <li><a href="#" className="cinzel">Support</a></li>
                            <li><a href="#" className="cinzel">Staff Applications</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="cinzel">Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.</p>
                </div>
            </div>
        </footer>
    );
}
