import HeroBanner from '../components/HeroBanner';
import Introduction from '../components/Introduction';
import GroupGallery from '../components/GroupGallery';
import RoadMap from '../components/RoadMap';
import MeetTeam from '../components/MeetTeam';
import AccordionTab from '../components/AccordionTab';


function Landing() {
  return (
    <div className="landing-page">
      <HeroBanner />
      <Introduction />
      <GroupGallery />
      <RoadMap />
      <MeetTeam />
      <AccordionTab />
    </div>
  );
}

export default Landing;
