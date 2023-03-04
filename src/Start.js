import Vector from './Vector.svg';
import Vector2 from './Vector2.svg';
import Vector3 from './Vector3.svg';
import interests from './interests.svg';

import './circle.js';

function Start() {
    return (

        <div>

            <div className="Circle Circle1"></div>
            <div className="Circle Circle2"></div>
            <img src={require("./Sharat.png")} alt="Sharat" className="StarterImage" />
            <p className="Description">I am a 21-year-old college student pursuing my interests in the fields of UI/UX,
                content writing, software development, and machine learning,
                enthusiastic about building
                products that make a world of difference.</p>

        
            <div className="Circle interestcircle"></div>
            <div className="subheadsquare"></div>
            <p className="heading">INTERESTS</p>
            <p className="subheading">what I'm into, lol</p>
            <img src={Vector2} alt="prop" className="Vectors" style={{top:'476.22px'}}/>
            <img src={Vector3} alt="prop" className="Vectors" style={{top:'456.22px'}}/>
            <img src={Vector} alt="prop" className="Vectors" style={{top:'436.22px'}}/>

            <div className="pendulum3 pendulums"></div>
            <div className="pendulum2 pendulums"></div>
            <div className="pendulum1 pendulums"></div>

            <img src={interests} alt="prop" className="interests" />


            <div className="circle"></div>


            <div className="Circle" style={{ width: '230.87px', height: '230.87px', top: '1728.62px', background: '#920D0D' }}></div>
        </div>
    )

}

export default Start;