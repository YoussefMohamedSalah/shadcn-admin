import Header from './_components/Header';
import AsSeenOn from './_components/AsSeenOn ';
import Hero from './_components/Hero';
import OurProducts from './_components/OurProducts';
import SecondaryCarousel from './_components/SecondaryCarousel';
import SuccessStories from './_components/SuccessStories';
import VoiceOfRoyal from './_components/VoiceOfRoyal';
import WeAreRoyal from './_components/WeAreRoyal';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AsSeenOn />
      <div className="py-16">
        <SecondaryCarousel />
      </div>
      <OurProducts />
      <WeAreRoyal />
      <SuccessStories />
      <VoiceOfRoyal />
    </div>
  )
}

export default LandingPage
