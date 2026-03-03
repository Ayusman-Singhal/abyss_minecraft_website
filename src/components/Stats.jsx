import { useEffect, useRef, useState } from 'react';
import './Stats.css';

const stats = [
    { label: 'Total Players', value: 12450, suffix: '+', icon: '⚔' },
    { label: 'Discord Members', value: 8200, suffix: '+', icon: '💬' },
    { label: 'Server Uptime', value: 99.9, suffix: '%', icon: '⚡' },
    { label: 'Worlds', value: 15, suffix: '', icon: '🌍' },
];

function AnimatedNumber({ target, suffix, started }) {
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!started) return;
        let frame;
        const duration = 2000;
        const start = performance.now();
        const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setVal(Number.isInteger(target) ? Math.floor(eased * target) : +(eased * target).toFixed(1));
            if (progress < 1) frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, [started, target]);
    return <>{val.toLocaleString()}{suffix}</>;
}

export default function Stats() {
    const ref = useRef(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
            { threshold: 0.3 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    return (
        <section className="stats-section" ref={ref}>
            <div className="section-container">
                <div className="section-title">
                    <h2 className="mc-font mc-gold">Server Stats</h2>
                </div>
                <div className="stats-grid">
                    {stats.map((s) => (
                        <div key={s.label} className="stat-card stone-panel">
                            <div className="stat-icon">{s.icon}</div>
                            <div className="stat-value mc-font mc-gold">
                                <AnimatedNumber target={s.value} suffix={s.suffix} started={started} />
                            </div>
                            <div className="stat-label cinzel">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
