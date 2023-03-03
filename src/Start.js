import Vector from './Vector.svg';
import Vector2 from './Vector2.svg';
import Vector3 from './Vector3.svg';
import interests from './interests.svg';



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
            <p class="heading">INTERESTS</p>
            <p class="subheading">what I'm into, lol</p>
            <img src={Vector2} alt="prop" className="Vector2" />
            <img src={Vector3} alt="prop" className="Vector3" />
            <img src={Vector} alt="prop" className="Vector" />

            <div className="Circle pendulums pendulum3"></div>
            <div className="Circle pendulums pendulum2"></div>
            <div className="Circle pendulums pendulum1"></div>
            <img src={interests} alt="prop" className="interests" />

           
        </div>
    )

}

export default Start;