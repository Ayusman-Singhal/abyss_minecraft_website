import { useState } from 'react';
import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import './LeaderboardPage.css';

const tabs = [
    { key: 'pvp', label: 'PVP Kills', icon: '⚔️' },
    { key: 'playtime', label: 'Playtime', icon: '⏱️' },
    { key: 'dungeons', label: 'Dungeons', icon: '🏰' },
    { key: 'bosses', label: 'Boss Kills', icon: '💀' },
];

const skins = ['Technoblade', 'Herobrine', 'Steve', 'Alex', 'Notch', 'Dream', 'Philza', 'Sapnap', 'Jeb_', 'Dinnerbone',
    'TommyInnit', 'Tubbo', 'Ranboo', 'Arhenniuss', 'BadBoyHalo', 'Skeppy', 'Punz', 'Foolish', 'CaptainSparklez', 'AntVenom'];

const leaderboardData = {
    pvp: Array.from({ length: 20 }, (_, i) => ({
        name: ['DarkKnight', 'InfernoBruh', 'UndeadSteve', 'CreepyAlex', 'BloodMage', 'VoidWalker', 'IronWraith', 'DeathBringer', 'ShadowFang', 'EmberLord',
            'NightSlayer', 'CursedBlade', 'AbyssHunter', 'CrimsonKing', 'GhostReaper', 'StormBlade', 'DarkPriest', 'BoneCrusher', 'FrostDemon', 'AshGolem'][i],
        value: Math.floor(2460 - i * 95 + Math.random() * 30),
        rank: ['ABYSS LV.69', 'ABYSS LV.68', 'STEEL LV.67', 'ABYSS LV.62', 'SHADOW LV.55', 'BLOOD LV.50', 'SHADOW LV.48', 'STEEL LV.45', 'BLOOD LV.42', 'ABYSS LV.40',
            'STEEL LV.38', 'BLOOD LV.35', 'ABYSS LV.33', 'SHADOW LV.30', 'STEEL LV.28', 'BLOOD LV.25', 'SHADOW LV.23', 'STEEL LV.20', 'BLOOD LV.18', 'STEEL LV.15'][i],
        skin: skins[i],
        unit: 'kills',
    })),
    playtime: Array.from({ length: 20 }, (_, i) => ({
        name: ['VoidWalker', 'DarkKnight', 'EmberLord', 'InfernoBruh', 'AbyssHunter', 'CrimsonKing', 'BloodMage', 'ShadowFang', 'CreepyAlex', 'UndeadSteve',
            'NightSlayer', 'DeathBringer', 'IronWraith', 'GhostReaper', 'StormBlade', 'DarkPriest', 'BoneCrusher', 'FrostDemon', 'AshGolem', 'CursedBlade'][i],
        value: Math.floor(1200 - i * 52 + Math.random() * 20),
        rank: ['ABYSS LV.69', 'ABYSS LV.68', 'SHADOW LV.55', 'ABYSS LV.62', 'ABYSS LV.33', 'SHADOW LV.30', 'SHADOW LV.55', 'SHADOW LV.48', 'ABYSS LV.62', 'STEEL LV.67',
            'STEEL LV.38', 'STEEL LV.45', 'BLOOD LV.50', 'STEEL LV.28', 'BLOOD LV.25', 'SHADOW LV.23', 'STEEL LV.20', 'BLOOD LV.18', 'STEEL LV.15', 'BLOOD LV.35'][i],
        skin: skins[i],
        unit: 'hours',
    })),
    dungeons: Array.from({ length: 20 }, (_, i) => ({
        name: ['AbyssHunter', 'DarkKnight', 'BloodMage', 'VoidWalker', 'CrimsonKing', 'InfernoBruh', 'ShadowFang', 'DeathBringer', 'EmberLord', 'GhostReaper',
            'UndeadSteve', 'CreepyAlex', 'IronWraith', 'NightSlayer', 'StormBlade', 'DarkPriest', 'CursedBlade', 'BoneCrusher', 'FrostDemon', 'AshGolem'][i],
        value: Math.floor(580 - i * 25 + Math.random() * 10),
        rank: ['ABYSS LV.33', 'ABYSS LV.68', 'SHADOW LV.55', 'ABYSS LV.69', 'SHADOW LV.30', 'ABYSS LV.62', 'SHADOW LV.48', 'STEEL LV.45', 'SHADOW LV.55', 'STEEL LV.28',
            'STEEL LV.67', 'ABYSS LV.62', 'BLOOD LV.50', 'STEEL LV.38', 'BLOOD LV.25', 'SHADOW LV.23', 'BLOOD LV.35', 'STEEL LV.20', 'BLOOD LV.18', 'STEEL LV.15'][i],
        skin: skins[i],
        unit: 'cleared',
    })),
    bosses: Array.from({ length: 20 }, (_, i) => ({
        name: ['DeathBringer', 'DarkKnight', 'VoidWalker', 'BloodMage', 'InfernoBruh', 'ShadowFang', 'AbyssHunter', 'CrimsonKing', 'EmberLord', 'UndeadSteve',
            'NightSlayer', 'GhostReaper', 'IronWraith', 'CreepyAlex', 'StormBlade', 'CursedBlade', 'DarkPriest', 'BoneCrusher', 'FrostDemon', 'AshGolem'][i],
        value: Math.floor(340 - i * 15 + Math.random() * 8),
        rank: ['STEEL LV.45', 'ABYSS LV.68', 'ABYSS LV.69', 'SHADOW LV.55', 'ABYSS LV.62', 'SHADOW LV.48', 'ABYSS LV.33', 'SHADOW LV.30', 'SHADOW LV.55', 'STEEL LV.67',
            'STEEL LV.38', 'STEEL LV.28', 'BLOOD LV.50', 'ABYSS LV.62', 'BLOOD LV.25', 'BLOOD LV.35', 'SHADOW LV.23', 'STEEL LV.20', 'BLOOD LV.18', 'STEEL LV.15'][i],
        skin: skins[i],
        unit: 'slain',
    })),
};

const personalStats = {
    name: 'YourName',
    pvpRank: '#42',
    kills: 487,
    playtime: '312h',
    dungeons: 89,
    bosses: 34,
};

export default function LeaderboardPage() {
    const [activeTab, setActiveTab] = useState('pvp');
    const data = leaderboardData[activeTab];

    return (
        <>
            <Navbar />
            <main className="lb-page">
                <PageHero
                    title="Top Slayers"
                    subtitle="Only the strongest survive the depths of the Abyss"
                />

                <div className="section-container">
                    {/* Personal Stats */}
                    <div className="stone-panel personal-stats-panel">
                        <h3 className="mc-font mc-gold personal-stats-title">Your Stats</h3>
                        <div className="personal-stats-grid">
                            <div className="personal-stat">
                                <span className="personal-stat-label cinzel">PVP Rank</span>
                                <span className="personal-stat-value mc-font">{personalStats.pvpRank}</span>
                            </div>
                            <div className="personal-stat">
                                <span className="personal-stat-label cinzel">Total Kills</span>
                                <span className="personal-stat-value mc-font">{personalStats.kills}</span>
                            </div>
                            <div className="personal-stat">
                                <span className="personal-stat-label cinzel">Playtime</span>
                                <span className="personal-stat-value mc-font">{personalStats.playtime}</span>
                            </div>
                            <div className="personal-stat">
                                <span className="personal-stat-label cinzel">Dungeons</span>
                                <span className="personal-stat-value mc-font">{personalStats.dungeons}</span>
                            </div>
                            <div className="personal-stat">
                                <span className="personal-stat-label cinzel">Bosses Slain</span>
                                <span className="personal-stat-value mc-font">{personalStats.bosses}</span>
                            </div>
                        </div>
                    </div>

                    {/* Tab Buttons */}
                    <div className="lb-tabs">
                        {tabs.map((t) => (
                            <button
                                key={t.key}
                                className={`mc-button lb-tab-btn ${activeTab === t.key ? 'lb-tab-active' : ''}`}
                                onClick={() => setActiveTab(t.key)}
                            >
                                <span className="lb-tab-icon">{t.icon}</span> {t.label}
                            </button>
                        ))}
                    </div>

                    {/* Leaderboard Table */}
                    <div className="stone-panel lb-table-panel">
                        <div className="lb-table-header">
                            <span className="lb-col-rank mc-font">Rank</span>
                            <span className="lb-col-player mc-font">Player</span>
                            <span className="lb-col-tier mc-font">Tier</span>
                            <span className="lb-col-score mc-font">Score</span>
                        </div>

                        <div className="lb-table-body">
                            {data.map((player, i) => (
                                <div
                                    key={player.name}
                                    className={`lb-row ${i < 3 ? `lb-top-${i + 1}` : ''}`}
                                >
                                    <span className="lb-col-rank">
                                        {i < 3 ? ['🥇', '🥈', '🥉'][i] : (
                                            <span className="lb-rank-num mc-font">#{i + 1}</span>
                                        )}
                                    </span>
                                    <div className="lb-col-player">
                                        <img
                                            src={`https://mc-heads.net/avatar/${player.skin}/32`}
                                            alt={player.name}
                                            className="lb-avatar"
                                        />
                                        <span className="lb-player-name cinzel">{player.name}</span>
                                    </div>
                                    <span className="lb-col-tier cinzel">{player.rank}</span>
                                    <span className="lb-col-score mc-font">
                                        {player.value.toLocaleString()}
                                        <span className="lb-unit">{player.unit}</span>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Footer />
            </main>
        </>
    );
}
