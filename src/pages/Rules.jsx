import { useState } from 'react';
import Navbar from '../components/Navbar';
import PageHero from '../components/PageHero';
import Footer from '../components/Footer';
import './Rules.css';

const ruleCategories = [
    {
        title: 'General Rules',
        icon: '📜',
        color: '#f0c040',
        rules: [
            'Respect all players and staff members at all times.',
            'No exploiting bugs or glitches — report them immediately.',
            'Alt accounts are limited to 2 per player.',
            'Do not impersonate staff or other players.',
            'English only in global chat; other languages in private messages.',
        ],
    },
    {
        title: 'Chat Rules',
        icon: '💬',
        color: '#55ff55',
        rules: [
            'No spam, excessive caps, or character flooding.',
            'No advertising other servers or services.',
            'No toxic behavior, hate speech, or discrimination.',
            'Keep discussions appropriate — no NSFW content.',
            'Do not share personal information of others.',
        ],
    },
    {
        title: 'PvP Rules',
        icon: '⚔️',
        color: '#ff2a2a',
        rules: [
            'No combat logging — disconnecting during PvP is punishable.',
            'No using illegal modifications for PvP advantage.',
            'Spawn camping is prohibited within 100 blocks of spawn.',
            'Respect designated safe zones — no PvP in trading areas.',
            'Tournament fights must follow the posted bracket rules.',
        ],
    },
    {
        title: 'Building Rules',
        icon: '🏗️',
        color: '#55aaff',
        rules: [
            'No griefing or destroying other players\' builds.',
            'Builds must be at least 200 blocks from spawn.',
            'No lag machines, redstone clocks, or excessive entity farms.',
            'Offensive or inappropriate builds will be removed without warning.',
            'Claim your land — unclaimed builds are not protected.',
        ],
    },
    {
        title: 'Mod & Client Rules',
        icon: '🔧',
        color: '#cc88ff',
        rules: [
            'Only approved client mods are allowed (see approved list).',
            'No hacked clients, x-ray, fly hacks, or kill aura.',
            'Optifine, minimaps (without radar), and HUD mods are allowed.',
            'Macro mods are allowed for crafting only, not for combat.',
            'If unsure about a mod, ask staff before using it.',
        ],
    },
];

const punishments = [
    { offense: '1st Offense', action: 'Verbal Warning', duration: '—', severity: 'low' },
    { offense: '2nd Offense', action: 'Mute / Kick', duration: '1 Hour', severity: 'low' },
    { offense: '3rd Offense', action: 'Temporary Ban', duration: '24 Hours', severity: 'medium' },
    { offense: '4th Offense', action: 'Extended Ban', duration: '7 Days', severity: 'high' },
    { offense: '5th Offense', action: 'Permanent Ban', duration: 'Forever', severity: 'critical' },
];

const faqs = [
    {
        q: 'Can I appeal a ban?',
        a: 'Yes! Submit an appeal on our Discord server in the #ban-appeals channel. Include your username, ban reason, and why you believe it should be lifted.',
    },
    {
        q: 'What mods are approved?',
        a: 'Optifine, Sodium, Lithium, MiniMap (without entity radar), inventory sorting mods, and cosmetic shaders. When in doubt, ask a staff member.',
    },
    {
        q: 'How do I report a rule breaker?',
        a: 'Use /report <player> <reason> in-game, or post evidence in the Discord #reports channel. Screenshots and video proof are required for all reports.',
    },
    {
        q: 'Are there different rules for different game modes?',
        a: 'The general rules apply everywhere. PvP-specific and building rules only apply in their respective zones. Dungeons have their own loot rules posted at each entrance.',
    },
    {
        q: 'What happens if I find a bug?',
        a: 'Report it immediately via /bug <description> or in Discord #bug-reports. Exploiting bugs instead of reporting them will result in a ban, even on the first offense.',
    },
];

export default function Rules() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <>
            <Navbar />
            <main className="rules-page">
                <PageHero
                    title="Server Rules"
                    subtitle="Know the law of the Abyss before you descend"
                />

                <div className="section-container">
                    {/* Rule Categories */}
                    <div className="rules-grid">
                        {ruleCategories.map((cat) => (
                            <div key={cat.title} className="stone-panel rule-category">
                                <div className="rule-category-header">
                                    <span className="rule-cat-icon">{cat.icon}</span>
                                    <h3 className="mc-font rule-cat-title" style={{ color: cat.color }}>
                                        {cat.title}
                                    </h3>
                                </div>
                                <ol className="rule-list">
                                    {cat.rules.map((rule, i) => (
                                        <li key={i} className="rule-item cinzel">
                                            <span className="rule-number" style={{ color: cat.color }}>
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                            {rule}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        ))}
                    </div>

                    {/* Punishment Tiers */}
                    <div className="lava-divider" style={{ margin: '60px 0' }} />
                    <h2 className="mc-font mc-gold section-heading">Punishment Tiers</h2>
                    <p className="punishment-subtitle cinzel">Repeated violations escalate through these tiers</p>

                    <div className="stone-panel punishment-table-wrap">
                        <table className="punishment-table">
                            <thead>
                                <tr>
                                    <th className="mc-font">Offense</th>
                                    <th className="mc-font">Action</th>
                                    <th className="mc-font">Duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {punishments.map((p) => (
                                    <tr key={p.offense} className={`severity-${p.severity}`}>
                                        <td className="cinzel">{p.offense}</td>
                                        <td className="cinzel">{p.action}</td>
                                        <td className="cinzel">{p.duration}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* FAQ */}
                    <div className="lava-divider" style={{ margin: '60px 0' }} />
                    <h2 className="mc-font mc-gold section-heading">Frequently Asked</h2>

                    <div className="faq-list">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className={`stone-panel faq-item ${openFaq === i ? 'faq-open' : ''}`}
                            >
                                <button
                                    className="faq-question cinzel"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    <span>{faq.q}</span>
                                    <span className="faq-toggle mc-font">{openFaq === i ? '−' : '+'}</span>
                                </button>
                                {openFaq === i && (
                                    <div className="faq-answer">
                                        <p>{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <Footer />
            </main>
        </>
    );
}
