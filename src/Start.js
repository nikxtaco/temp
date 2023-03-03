import Vector from './Vector.svg';


function Start() {
    return (

        <div>
            <div className="Circle Circle1"></div>
            <div className="Circle Circle2"></div>
            <img src={require("./Sharat.png")} alt="Sharat" width="500px" className="StarterImage" />
            <p className="Description">I am a 21-year-old college student pursuing my interests in the fields of UI/UX,
                content writing, software development, and machine learning, 
                enthusiastic about building
                products that make a world of difference.</p>
            <img src={Vector} alt="prop" className="Vector" />
            <div className="Circle Circle3"></div>
            <p className="heading">INTERESTS</p>
            <p className="subheading">what I do, lol</p>
        </div>
    )

}

export default Start;