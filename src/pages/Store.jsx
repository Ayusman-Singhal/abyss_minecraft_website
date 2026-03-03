import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Store.css';

const ranks = [
    {
        tier: 'Entry Tier',
        name: 'ABYSS',
        price: '$9.99',
        color: '#cc0000',
        popular: false,
        perks: [
            { icon: '★', text: 'A Discord Role' },
            { icon: '⚔', text: 'Access to Abyss Kits' },
            { icon: '⚡', text: '2x XP Multiplier' },
            { icon: '◆', text: 'Bronze Pet Tag' },
        ],
    },
    {
        tier: 'Veteran Tier',
        name: 'BLOOD',
        price: '$24.99',
        color: '#ff2a2a',
        popular: true,
        perks: [
            { icon: '★', text: 'All Abyss Perks' },
            { icon: '⚔', text: 'Access to Blood Kits' },
            { icon: '⚡', text: '5x XP Multiplier' },
            { icon: '◆', text: 'Silver Pet Tag' },
        ],
    },
    {
        tier: 'Elite Tier',
        name: 'SHADOW',
        price: '$49.99',
        color: '#ffaa00',
        popular: false,
        perks: [
            { icon: '★', text: 'All Blood Perks' },
            { icon: '⚔', text: 'Access to Shadow Kits' },
            { icon: '⚡', text: '10x XP Multiplier' },
            { icon: '✦', text: 'Legendary Wings' },
        ],
    },
];

const items = [
    { name: 'Cursed Chest', desc: 'Contains high-tier weapons & armor.', price: '$4.99', icon: '📦' },
    { name: 'XP Booster', desc: '1 hour of global server XP boost.', price: '$2.99', icon: '⚡' },
    { name: 'Void Key', desc: 'Unlocks a random dark cosmetic.', price: '$1.99', icon: '🔑' },
    { name: 'Key Bundle', desc: 'Pack of 5 keys for standard crates.', price: '$7.99', icon: '🗝' },
];

export default function Store() {
    return (
        <>
            <Navbar />
            <main className="store-page">
                <div className="store-hero">
                    <div className="store-hero-overlay" />
                    <div className="store-header">
                        <h1 className="mc-font mc-gold store-title">The Dark Armory</h1>
                        <p className="store-subtitle cinzel">
                            Power is forged in the depths of despair
                        </p>
                    </div>
                </div>

                <div className="store-container">
                    {/* Rank Cards */}
                    <div className="ranks-grid">
                        {ranks.map((r) => (
                            <div
                                key={r.name}
                                className={`rank-card stone-panel ${r.popular ? 'rank-popular' : ''}`}
                                style={{ '--rank-color': r.color }}
                            >
                                {r.popular && (
                                    <div className="rank-popular-tag cinzel">★ Most Popular ★</div>
                                )}
                                <span className="rank-tier cinzel">{r.tier}</span>
                                <h2 className="mc-font rank-name" style={{ color: r.color }}>
                                    {r.name}
                                </h2>
                                <div className="rank-price mc-font">{r.price}</div>
                                <ul className="rank-perks">
                                    {r.perks.map((perk, i) => (
                                        <li key={i} className="rank-perk cinzel">
                                            <span className="perk-icon">{perk.icon}</span>
                                            <span>{perk.text}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="mc-button mc-button-red rank-buy-btn">
                                    Purchase
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Item Shop */}
                    <div className="itemshop-section">
                        <div className="lava-divider" />
                        <h2 className="mc-font mc-gold section-heading">Item Shop</h2>
                        <div className="items-grid">
                            {items.map((item) => (
                                <div key={item.name} className="item-card stone-panel">
                                    <div className="item-icon">{item.icon}</div>
                                    <h4 className="mc-font mc-gold item-name">{item.name}</h4>
                                    <p className="item-desc cinzel">{item.desc}</p>
                                    <div className="item-footer">
                                        <span className="mc-font item-price">{item.price}</span>
                                        <button className="mc-button item-buy-btn">Add to Cart</button>
                                    </div>
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
