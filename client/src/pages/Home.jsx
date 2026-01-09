import Hero3D from '../components/Hero3D';
import VideoSection from '../components/VideoSection';
import HowItWorks from '../components/HowItWorks';

/**
 * Home Page
 * 
 * Main landing page with Hero, Video, and How It Works sections
 */
export default function Home() {
    return (
        <>
            <Hero3D />
            <VideoSection />
            <HowItWorks />
        </>
    );
}
