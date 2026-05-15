import './Activity1.css'
import groupPhoto from '../../../assets/group8photo.jpg';

const Activity1 = () => {
  return (
    <div>
      <nav className="act1navbar">
        <div className="act1navname">Group 8</div>
        <ul className="act1navigations">
          <li><a href="#HOMESECTION">Home</a></li>
          <li><a href="#ABOUTSECTION">About</a></li>
        </ul>
      </nav>

      <section id="HOMESECTION">
            <img       
                src={groupPhoto} 
                alt="Group Photo" 
                className="group-photo"
            />
      </section>

      <section id="ABOUTSECTION">
        <div className="act1text">
          <h1>Group Members:</h1>
          <ul>
            <li>Beronilla, Khenjan J.</li>
            <li>Del Rosario, Mark Lewis D.</li>
            <li>Deluyas, Vivian P.</li>
            <li>Deresma, Elisha Jane R.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Activity1;