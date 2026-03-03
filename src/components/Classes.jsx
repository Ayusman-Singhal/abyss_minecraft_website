import './Classes.css';
import char01 from '../assets/character01.png';
import char02 from '../assets/character02.png';
import char03 from '../assets/character03.png';
import char04 from '../assets/character04.png';

const classes = [
    {
        name: 'ABYSS KNIGHT',
        subtitle: 'Vanguard of the Void',
        desc: 'The stalwart protector, mastering heavy armor and physical resilience to withstand the darkest blows.',
        img: char01,
    },
    {
        name: 'BLOOD REAPER',
        subtitle: 'Crimson Executioner',
        desc: 'A swift executioner who thrives on life-steal and chaotic agility. The more blood spilled, the stronger they become.',
        img: char02,
    },
    {
        name: 'SHADOW BERSERKER',
        subtitle: 'Aspect of Chaos',
        desc: 'Unleashes high DPS through raw fury and shadow-infused strikes.',
        img: char03,
    },
    {
        name: 'INFERNAL GUARDIAN',
        subtitle: 'Eternal Sentinel',
        desc: 'A sentinel of hellfire, utilizing flame for area denial and ultimate protection of the weak.',
        img: char04,
    },
];

export default function Classes() {
    return (
        <section className="classes-section">
            <div className="lava-divider" />
            <div className="section-container">
                <div className="section-title">
                    <h2 className="mc-font mc-gold">Choose Your Path</h2>
                </div>

                <div className="classes-grid">
                    {classes.map((c) => (
                        <div key={c.name} className="class-card stone-panel">
                            <div className="class-img-wrap">
                                <img src={c.img} alt={c.name} className="class-img" />
                                <div className="class-img-overlay" />
                            </div>
                            <div className="class-info">
                                <h3 className="mc-font mc-gold class-name">{c.name}</h3>
                                <span className="class-subtitle cinzel">{c.subtitle}</span>
                                <p className="class-desc">{c.desc}</p>
                                <button className="mc-button class-btn">View Abilities</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
