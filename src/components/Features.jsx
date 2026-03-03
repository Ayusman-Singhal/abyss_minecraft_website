import './Features.css';

const features = [
    {
        icon: '/images/Survival.png',
        title: 'SURVIVAL',
        subtitle: 'Hardcore Difficulty',
        desc: 'Custom biomes, perma-death elements, and a dynamic resource economy designed for the elite survivors.',
    },
    {
        icon: '/images/Dungeons.png',
        title: 'DUNGEONS',
        subtitle: 'Epic Loot Drops',
        desc: 'Multi-level raids featuring complex boss mechanics. Face the horrors of the Deep Void and claim your rewards.',
    },
    {
        icon: '/images/Events.png',
        title: 'EVENTS',
        subtitle: 'Blood Moon Cycles',
        desc: 'Global world boss encounters that require server-wide cooperation to survive the encroaching darkness.',
    },
];

export default function Features() {
    return (
        <section className="features-section" id="features">
            <div className="lava-divider" />
            <div className="section-container">
                <div className="section-title">
                    <h2 className="mc-font mc-gold">Server Features</h2>
                    <p className="section-subtitle cinzel">Survive the eternal darkness with hardcore mechanics</p>
                </div>

                <div className="features-grid">
                    {features.map((f) => (
                        <div key={f.title} className="stone-panel feature-card">
                            <div className="feature-card-content">
                                <img src={f.icon} alt={f.title} className="feature-icon-img" />
                                <h3 className="mc-font mc-gold feature-title">{f.title}</h3>
                                <span className="feature-subtitle cinzel">{f.subtitle}</span>
                                <p className="feature-desc">{f.desc}</p>
                                <button className="mc-button feature-btn">Learn More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
