import { useState } from 'react';
import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import './Wiki.css';

const classes = [
    {
        id: 'knight',
        name: 'Abyss Knight',
        subtitle: 'The Unyielding Shield',
        image: '/images/character01.png',
        color: '#55aaff',
        lore: 'Forged in the deepest trenches of the Abyss, these warriors have traded their humanity for impenetrable defenses. Their armor, fused with corrupted bedrock, absorbs the darkness itself. Legends say the first Abyss Knight was a fallen paladin who descended into the void seeking redemption — and found only power.',
        abilities: [
            { name: 'Void Shield', desc: 'Absorbs 80% of incoming damage for 5 seconds. 30s cooldown.', type: 'defensive' },
            { name: 'Dark Slam', desc: 'Ground pound dealing AoE damage in a 5 block radius.', type: 'offensive' },
            { name: 'Abyss Anchor', desc: 'Roots yourself and nearby enemies for 3 seconds.', type: 'utility' },
            { name: 'Undying Will', desc: 'Passive: Survive a killing blow once per life with 2 hearts.', type: 'passive' },
        ],
        stats: { strength: 60, defense: 95, speed: 30, magic: 40, hp: 90 },
    },
    {
        id: 'reaper',
        name: 'Blood Reaper',
        subtitle: 'The Crimson Harvest',
        image: '/images/character02.png',
        color: '#ff2a2a',
        lore: 'Blood Reapers are cursed warriors who draw power from the blood of their fallen enemies. Each kill feeds their growing hunger, making them more dangerous as the battle rages on. They move through shadows, striking with scythes forged from crystallized blood. Their initiation rite requires draining the life force of 100 hostile mobs in a single night.',
        abilities: [
            { name: 'Blood Drain', desc: 'Lifesteal attack that heals 30% of damage dealt.', type: 'offensive' },
            { name: 'Crimson Dash', desc: 'Teleport behind your target. 10s cooldown.', type: 'utility' },
            { name: 'Hemorrhage', desc: 'Apply bleed DoT dealing 2 hearts over 6 seconds.', type: 'offensive' },
            { name: 'Blood Frenzy', desc: 'Passive: Each kill increases attack speed by 5%, stacking 10x.', type: 'passive' },
        ],
        stats: { strength: 85, defense: 35, speed: 80, magic: 50, hp: 55 },
    },
    {
        id: 'berserker',
        name: 'Shadow Berserker',
        subtitle: 'The Void Breaker',
        image: '/images/character03.png',
        color: '#cc88ff',
        lore: 'Shadow Berserkers exist between dimensions, their bodies partially merged with the void. They channel raw chaos energy through their weapons, delivering devastating attacks that tear through both armor and enchantments. Their rage is endless, their destruction absolute. The transformation is irreversible — once you embrace the shadow, the shadow embraces you back.',
        abilities: [
            { name: 'Void Rage', desc: 'Enter berserk mode: +50% damage, -25% defense. 15s duration.', type: 'offensive' },
            { name: 'Shadow Slash', desc: 'Ranged shadow wave dealing heavy damage in a line.', type: 'offensive' },
            { name: 'Phase Shift', desc: 'Become briefly intangible, dodging the next attack.', type: 'defensive' },
            { name: 'Chaos Aura', desc: 'Passive: Nearby enemies take 0.5 hearts/sec from void energy.', type: 'passive' },
        ],
        stats: { strength: 95, defense: 25, speed: 70, magic: 65, hp: 45 },
    },
    {
        id: 'guardian',
        name: 'Infernal Guardian',
        subtitle: 'The Ember Warden',
        image: '/images/character04.png',
        color: '#ff8800',
        lore: 'Infernal Guardians are ancient protectors bound to the Nether\'s eternal flames. They wield fire as both weapon and armor, surrounding themselves in walls of magma that scorch any who dare approach. Unlike other classes, Guardians grow stronger in heated environments. Standing in lava fully heals them, and fire-based attacks are absorbed as energy.',
        abilities: [
            { name: 'Magma Wall', desc: 'Summon a wall of fire blocking projectiles and dealing contact damage.', type: 'defensive' },
            { name: 'Inferno Blast', desc: 'Massive AoE fire explosion, 8 block radius. 45s cooldown.', type: 'offensive' },
            { name: 'Ember Shield', desc: 'Reflect 40% of melee damage back as fire for 8 seconds.', type: 'defensive' },
            { name: 'Flame Born', desc: 'Passive: Immune to fire and lava. Heals 1 heart/sec while in fire.', type: 'passive' },
        ],
        stats: { strength: 70, defense: 75, speed: 40, magic: 85, hp: 70 },
    },
];

const abilityColors = {
    offensive: '#ff2a2a',
    defensive: '#55aaff',
    utility: '#55ff55',
    passive: '#cc88ff',
};

function StatBar({ label, value, color }) {
    return (
        <div className="stat-bar-row">
            <span className="stat-bar-label cinzel">{label}</span>
            <div className="stat-bar-track">
                <div
                    className="stat-bar-fill"
                    style={{ width: `${value}%`, background: color }}
                />
            </div>
            <span className="stat-bar-value mc-font">{value}</span>
        </div>
    );
}

export default function Wiki() {
    const [selectedClass, setSelectedClass] = useState(classes[0]);

    return (
        <>
            <Navbar />
            <main className="wiki-page">
                <PageHero
                    title="The Grimoire"
                    subtitle="Ancient knowledge of the four dark paths"
                />

                <div className="section-container">
                    {/* Class Selector */}
                    <div className="class-selector">
                        {classes.map((cls) => (
                            <button
                                key={cls.id}
                                className={`stone-panel class-select-btn ${selectedClass.id === cls.id ? 'class-selected' : ''}`}
                                onClick={() => setSelectedClass(cls)}
                                style={{ '--cls-color': cls.color }}
                            >
                                <img
                                    src={cls.image}
                                    alt={cls.name}
                                    className="class-select-img"
                                />
                                <span className="class-select-name mc-font">{cls.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Class Detail */}
                    <div className="class-detail">
                        <div className="class-detail-top">
                            {/* Left: Image */}
                            <div className="class-detail-image-wrap stone-panel">
                                <img
                                    src={selectedClass.image}
                                    alt={selectedClass.name}
                                    className="class-detail-img"
                                />
                            </div>

                            {/* Right: Info */}
                            <div className="class-detail-info">
                                <h2 className="mc-font class-detail-name" style={{ color: selectedClass.color }}>
                                    {selectedClass.name}
                                </h2>
                                <span className="cinzel class-detail-subtitle" style={{ color: selectedClass.color }}>
                                    {selectedClass.subtitle}
                                </span>

                                <div className="lava-divider" style={{ margin: '20px 0' }} />

                                <h4 className="mc-font mc-gold lore-heading">Lore</h4>
                                <p className="class-lore">{selectedClass.lore}</p>

                                {/* Stats */}
                                <div className="lava-divider" style={{ margin: '20px 0' }} />
                                <h4 className="mc-font mc-gold stats-heading">Attributes</h4>
                                <div className="stat-bars">
                                    <StatBar label="Strength" value={selectedClass.stats.strength} color="#ff2a2a" />
                                    <StatBar label="Defense" value={selectedClass.stats.defense} color="#55aaff" />
                                    <StatBar label="Speed" value={selectedClass.stats.speed} color="#55ff55" />
                                    <StatBar label="Magic" value={selectedClass.stats.magic} color="#cc88ff" />
                                    <StatBar label="HP" value={selectedClass.stats.hp} color="#ff8800" />
                                </div>
                            </div>
                        </div>

                        {/* Abilities Grid */}
                        <div className="lava-divider" style={{ margin: '40px 0' }} />
                        <h3 className="mc-font mc-gold section-heading">Abilities</h3>

                        <div className="abilities-grid">
                            {selectedClass.abilities.map((ability) => (
                                <div key={ability.name} className="stone-panel ability-card">
                                    <div className="ability-header">
                                        <span
                                            className="ability-type-badge cinzel"
                                            style={{ color: abilityColors[ability.type], borderColor: abilityColors[ability.type] }}
                                        >
                                            {ability.type}
                                        </span>
                                    </div>
                                    <h4 className="mc-font ability-name" style={{ color: selectedClass.color }}>
                                        {ability.name}
                                    </h4>
                                    <p className="ability-desc cinzel">{ability.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Class Comparison Table */}
                    <div className="lava-divider" style={{ margin: '50px 0' }} />
                    <h3 className="mc-font mc-gold section-heading">Class Comparison</h3>

                    <div className="stone-panel comparison-table-wrap">
                        <table className="comparison-table">
                            <thead>
                                <tr>
                                    <th className="mc-font">Class</th>
                                    <th className="mc-font">STR</th>
                                    <th className="mc-font">DEF</th>
                                    <th className="mc-font">SPD</th>
                                    <th className="mc-font">MAG</th>
                                    <th className="mc-font">HP</th>
                                    <th className="mc-font">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classes.map((cls) => (
                                    <tr
                                        key={cls.id}
                                        className={selectedClass.id === cls.id ? 'comparison-active' : ''}
                                    >
                                        <td className="cinzel" style={{ color: cls.color }}>{cls.name}</td>
                                        <td className="mc-font">{cls.stats.strength}</td>
                                        <td className="mc-font">{cls.stats.defense}</td>
                                        <td className="mc-font">{cls.stats.speed}</td>
                                        <td className="mc-font">{cls.stats.magic}</td>
                                        <td className="mc-font">{cls.stats.hp}</td>
                                        <td className="cinzel comparison-role">{cls.subtitle}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <Footer />
            </main>
        </>
    );
}
