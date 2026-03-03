import { useState } from 'react';
import './Hero.css';

export default function Hero() {
    const [copied, setCopied] = useState(false);

    const copyIP = () => {
        navigator.clipboard.writeText('play.abyssmc.net');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="hero">
            <div className="hero-overlay" />

            {/* Floating embers */}
            <div className="embers-container" aria-hidden="true">
                {[...Array(15)].map((_, i) => (
                    <div key={i} className="ember" style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${3 + Math.random() * 4}s`,
                    }} />
                ))}
            </div>

            <div className="hero-content">
                <h1 className="mc-font mc-gold hero-title">
                    EMBRACE THE<br />DARKNESS
                </h1>
                <p className="hero-tagline cinzel">
                    In the shadow of the great eclipse, only the hollowed survive.
                    Conquer the lava-scorched realms or be consumed by the void.
                </p>

                <div className="hero-buttons">
                    <a href="#features" className="mc-button mc-button-play">
                        PLAY NOW
                    </a>
                </div>

                <div className="ip-bar" onClick={copyIP}>
                    <span className="ip-dot" />
                    <span className="ip-online cinzel">ONLINE</span>
                    <span className="ip-address mc-font">play.abyssmc.net</span>
                </div>
            </div>
        </section>
    );
}
