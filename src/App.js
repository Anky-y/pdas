import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
console.log(AlexaImage);
console.log(SiriImage);
function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard image={AlexaImage} title="Alexa" handle="@alexa99" description="Alexa helps you buy things" />
            </div>
            <div className="column is-4">
              <ProfileCard image={CortanaImage} title="Cortana" handle="@cortana32" description="Cortana was created by microsoft" />
            </div>
            <div className="column is-4">
              <ProfileCard image={SiriImage} title="Siri" handle="@siri01" description="Siri was made by apple" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
