import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Classes from '../components/Classes';
import Stats from '../components/Stats';
import Leaderboard from '../components/Leaderboard';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Classes />
            <Stats />
            <Leaderboard />
            <Footer />
        </>
    );
}
