import Hero3D from '../components/Hero3D';
import MissionSection from '../components/MissionSection';
import VideoSection from '../components/VideoSection';
import HowItWorks from '../components/HowItWorks';

/**
 * Home Page
 * 
 * Main landing page with:
 * - Hero (contentData.hero)
 * - Mission (contentData.mission)
 * - Video Section
 * - How It Works (contentData.process)
 */
export default function Home() {
    return (
        <>
            <Hero3D />
            <MissionSection />
            <VideoSection />
            <HowItWorks />
        </>
    );
}
