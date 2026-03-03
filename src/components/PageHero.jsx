import './PageHero.css';

export default function PageHero({ title, subtitle }) {
    return (
        <div className="page-hero">
            <div className="page-hero-overlay" />
            <div className="page-hero-content">
                <h1 className="mc-font mc-gold page-hero-title">{title}</h1>
                {subtitle && <p className="cinzel page-hero-subtitle">{subtitle}</p>}
            </div>
            <div className="lava-divider" />
        </div>
    );
}
