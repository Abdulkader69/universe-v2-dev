import Team1 from '../components/assets/images/team1.jpg';
import Team2 from '../components/assets/images/team2.jpeg';
import Team3 from '../components/assets/images/team3.jpg';
function MeetTeam() {
    return (
      <div className="road-map-section relative z-10 lg:mb-40 md:mb-32 mb-20 overflow-hidden">
        <div className="w-full max-w-container m-auto px-4">
            <h2 className="xl:text-5xl lg:text-4xl sm:text-3xl text-2xl uppercase text-center text-white w-full lg:max-w-md md:max-w-sm m-auto md:-mb-10 sm:mb-24 mb-14">Meet The Team</h2>
        </div>
        <div className="w-full max-w-container m-auto px-4 flex flex-wrap">
            <div className="team-item md:w-4/12 w-full group sm:px-10 px-0 md:mb-0 mb-16">
                <div className="team-item-inner bg-white rounded-xl lg:mb-14 mb-8">
                  <img className="transition-all transform md:-rotate-6 -rotate-3 group-hover:rotate-0 rounded-xl w-full" src={Team1} alt="" />
                </div>
                <h3 className="text-white text-center lg:text-3xl text-xl">John Doe</h3>
            </div>
            <div className="team-item md:w-4/12 w-full group sm:px-10 px-0 md:mb-0 mb-16 xl:mt-40 lg:mt-28 md:mt-24">
                <div className="team-item-inner bg-white rounded-xl lg:mb-14 mb-8">
                  <img className="transition-all transform md:-rotate-6 -rotate-3 group-hover:rotate-0 rounded-xl w-full" src={Team3} alt="" />
                </div>
                <h3 className="text-white text-center lg:text-3xl text-xl">John Doe</h3>
            </div>
            <div className="team-item md:w-4/12 w-full group sm:px-10 px-0 mb-0">
                <div className="team-item-inner bg-white rounded-xl lg:mb-14 mb-8">
                  <img className="transition-all transform md:-rotate-6 -rotate-3 group-hover:rotate-0 rounded-xl w-full" src={Team2} alt="" />
                </div>
                <h3 className="text-white text-center lg:text-3xl text-xl">John Doe</h3>
            </div>
        </div>
      </div>
    );
}

export default MeetTeam;