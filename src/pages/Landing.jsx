import HeroBanner from '../components/HeroBanner';
import Introduction from '../components/Introduction';
import GroupGallery from '../components/GroupGallery';
import RoadMap from '../components/RoadMap';
import MeetTeam from '../components/MeetTeam';


function Landing() {
  return (
    <div className="landing-page bg-[rgba(7,7,7)] inline-block">
      <HeroBanner />
      <Introduction />
      <GroupGallery />
      <RoadMap />
      <MeetTeam />
    </div>
  );
}

export default Landing;
