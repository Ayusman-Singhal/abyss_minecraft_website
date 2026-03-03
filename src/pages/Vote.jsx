import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import './Vote.css';

const rewards = [
    {
        streak: '1 Vote',
        icon: '🎁',
        items: ['1x Vote Key', '500 Gold', '15 min XP Boost'],
        color: '#55ff55',
    },
    {
        streak: '5-Day Streak',
        icon: '🔥',
        items: ['3x Vote Keys', '2,500 Gold', '1 Hour XP Boost', 'Random Cosmetic'],
        color: '#f0c040',
    },
    {
        streak: '10-Day Streak',
        icon: '⚡',
        items: ['5x Vote Keys', '10,000 Gold', '24h XP Boost', 'Legendary Crate Key', 'Exclusive Vote Pet'],
        color: '#ff2a2a',
    },
    {
        streak: '30-Day Streak',
        icon: '👑',
        items: ['10x Vote Keys', '50,000 Gold', '7-Day XP Boost', 'Exclusive Vote Title', 'Unique Vote Wings', 'Monthly Vote Champion Tag'],
        color: '#cc88ff',
    },
];

const voteSites = [
    {
        name: 'MC Server List',
        url: '#',
        description: 'The largest Minecraft server directory. Vote once every 24 hours.',
        cooldown: '24h',
    },
    {
        name: 'Planet Minecraft',
        url: '#',
        description: 'Community-driven server listing with project showcase.',
        cooldown: '24h',
    },
    {
        name: 'TopG Servers',
        url: '#',
        description: 'Top gaming server rankings across all platforms.',
        cooldown: '12h',
    },
    {
        name: 'Minecraft MP',
        url: '#',
        description: 'Multiplayer server tracker with real-time stats.',
        cooldown: '24h',
    },
];

const topVoters = [
    { name: 'DarkKnight', votes: 342, skin: 'Technoblade' },
    { name: 'InfernoBruh', votes: 298, skin: 'Herobrine' },
    { name: 'UndeadSteve', votes: 276, skin: 'Steve' },
    { name: 'CreepyAlex', votes: 251, skin: 'Alex' },
    { name: 'BloodMage', votes: 230, skin: 'Notch' },
];

export default function Vote() {
    return (
        <>
            <Navbar />
            <main className="vote-page">
                <PageHero
                    title="Vote For Abyss"
                    subtitle="Support the server and earn dark riches"
                />

                <div className="section-container">
                    {/* How It Works */}
                    <div className="vote-how-it-works">
                        <h2 className="mc-font mc-gold section-heading">How It Works</h2>
                        <div className="vote-steps">
                            <div className="vote-step stone-panel">
                                <span className="step-number mc-font">01</span>
                                <h4 className="cinzel step-title">Choose a Site</h4>
                                <p className="step-desc">Pick any voting site below and click to open it.</p>
                            </div>
                            <div className="vote-step stone-panel">
                                <span className="step-number mc-font">02</span>
                                <h4 className="cinzel step-title">Cast Your Vote</h4>
                                <p className="step-desc">Enter your username and submit your vote.</p>
                            </div>
                            <div className="vote-step stone-panel">
                                <span className="step-number mc-font">03</span>
                                <h4 className="cinzel step-title">Claim Rewards</h4>
                                <p className="step-desc">Rewards are delivered instantly in-game. Build streaks for bonuses!</p>
                            </div>
                        </div>
                    </div>

                    {/* Vote Sites */}
                    <div className="lava-divider" style={{ margin: '50px 0' }} />
                    <h2 className="mc-font mc-gold section-heading">Voting Sites</h2>

                    <div className="vote-sites-grid">
                        {voteSites.map((site) => (
                            <div key={site.name} className="stone-panel vote-site-card">
                                <div className="vote-site-info">
                                    <h3 className="cinzel mc-gold vote-site-name">{site.name}</h3>
                                    <p className="vote-site-desc">{site.description}</p>
                                    <span className="vote-cooldown cinzel">
                                        ⏱ Cooldown: {site.cooldown}
                                    </span>
                                </div>
                                <a
                                    href={site.url}
                                    className="mc-button vote-site-btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Vote Now
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Reward Tiers */}
                    <div className="lava-divider" style={{ margin: '50px 0' }} />
                    <h2 className="mc-font mc-gold section-heading">Streak Rewards</h2>
                    <p className="rewards-subtitle cinzel">Vote daily to unlock increasingly powerful rewards</p>

                    <div className="rewards-grid">
                        {rewards.map((r) => (
                            <div key={r.streak} className="stone-panel reward-card">
                                <div className="reward-header">
                                    <span className="reward-icon">{r.icon}</span>
                                    <h3 className="mc-font reward-streak" style={{ color: r.color }}>
                                        {r.streak}
                                    </h3>
                                </div>
                                <ul className="reward-items">
                                    {r.items.map((item, i) => (
                                        <li key={i} className="reward-item cinzel">
                                            <span className="reward-bullet" style={{ color: r.color }}>◆</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Top Voters */}
                    <div className="lava-divider" style={{ margin: '50px 0' }} />
                    <h2 className="mc-font mc-gold section-heading">Top Voters This Month</h2>

                    <div className="stone-panel top-voters-panel">
                        {topVoters.map((v, i) => (
                            <div key={v.name} className="voter-row">
                                <span className="voter-rank mc-font">#{i + 1}</span>
                                <img
                                    src={`https://mc-heads.net/avatar/${v.skin}/40`}
                                    alt={v.name}
                                    className="voter-avatar"
                                />
                                <span className="voter-name cinzel">{v.name}</span>
                                <span className="voter-votes mc-font">{v.votes}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <Footer />
            </main>
        </>
    );
}
