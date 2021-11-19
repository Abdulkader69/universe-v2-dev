import HeroBanner from '../components/HeroBanner';
import Introduction from '../components/Introduction';
import GroupGallery from '../components/GroupGallery';
import RoadMap from '../components/RoadMap';
import MeetTeam from '../components/MeetTeam';
import AccordionTab from '../components/AccordionTab';
import VideoCarousel from '../components/VideoCarousel';


function Landing() {
  return (
    <div className="landing-page">
      <HeroBanner />
      <Introduction />
      <VideoCarousel />
      <GroupGallery />
      <RoadMap />
      <MeetTeam />
      <AccordionTab />
    </div>
  );
}

export default Landing;
