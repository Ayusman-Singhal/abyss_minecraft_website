import './Leaderboard.css';

const players = [
    { name: 'DarkKnight', rank: 'ABYSS LV.69', kills: 2460, skin: 'Technoblade' },
    { name: 'InfernoBruh', rank: 'ABYSS LV.68', kills: 1960, skin: 'Herobrine' },
    { name: 'UndeadSteve', rank: 'STEEL LV.67', kills: 1950, skin: 'Steve' },
    { name: 'CreepyAlex', rank: 'ABYSS LV.62', kills: 1700, skin: 'Alex' },
    { name: 'BloodMage', rank: 'SHADOW LV.55', kills: 1500, skin: 'Notch' },
];

export default function Leaderboard() {
    return (
        <section className="leaderboard-section">
            <div className="lava-divider" />
            <div className="section-container">
                <div className="leaderboard-layout">
                    {/* Discord CTA */}
                    <div className="discord-panel stone-panel">
                        <div className="discord-content">
                            <img src="/images/discord.png" alt="Discord" className="discord-icon-img" />
                            <h3 className="cinzel mc-gold discord-heading">Join The</h3>
                            <h2 className="mc-font discord-title">DARK LEGION</h2>
                            <p className="discord-desc cinzel">
                                Coordinate raids, trade loot, and survive the abyss. New recruits get a starter kit!
                            </p>
                            <a
                                href="https://discord.com/invite/fakepixel"
                                className="mc-button mc-button-red discord-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Join Discord
                            </a>
                        </div>
                    </div>

                    {/* Leaderboard */}
                    <div className="leaderboard-panel stone-panel">
                        <h3 className="mc-font mc-gold leaderboard-title">Top Slayers</h3>
                        <div className="leaderboard-list">
                            {players.map((p, i) => (
                                <div key={p.name} className="leaderboard-row stone-panel">
                                    <span className="lb-rank mc-font">{`#${i + 1}`}</span>
                                    <img
                                        src={`https://mc-heads.net/avatar/${p.skin}/40`}
                                        alt={p.name}
                                        className="lb-avatar"
                                    />
                                    <div className="lb-info">
                                        <span className="lb-name cinzel">{p.name}</span>
                                        <span className="lb-rank-tag cinzel">{p.rank}</span>
                                    </div>
                                    <div className="lb-kills">
                                        <span className="lb-kills-icon">💀</span>
                                        <span className="lb-kills-count mc-font">{p.kills.toLocaleString()}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="mc-button leaderboard-view-btn">View Full Leaderboard</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
