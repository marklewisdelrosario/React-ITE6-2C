import './Homepage.css'
import groupPhoto from '../../../assets/group8photo.jpg';
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <nav className="homenavbar">
        <div className="homenavname">Group 8</div>
        <ul className="homenavigations">
          <li><a href="#homeHOMESECTION">Home</a></li>
          <li><a href="#ACTIVITYSECTION">Activities</a></li>
        </ul>
      </nav>

      <section id="homeHOMESECTION">
        <div className="members">
          <img 
            src={groupPhoto} 
            alt="Group Photo" 
            className="group8"
          />
    
          <div className="hometext">
            <h2>Group Members:</h2>
            <ul>
              <li>Beronilla, Khenjan J.</li>
              <li>Del Rosario, Mark Lewis D.</li>
              <li>Deluyas, Vivian P.</li>
              <li>Deresma, Elisha Jane R.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="ACTIVITYSECTION">
        <div className="activities">
          <p>Lab Activities</p>
          <div className="labActivities">
            <Link to="/activity1">Activity 1 <span>Landing page</span></Link>
            <Link to="/activity2">Activity 2 <span>useState & useRef</span></Link>
            <Link to="/activity3">Activity 3 <span>useEffect and conditional if else</span></Link>
            <Link to="/activity4">Activity 4<span>conponents & json</span></Link>
            <Link to="/activity5">Activity 5<span>APIs</span></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage;