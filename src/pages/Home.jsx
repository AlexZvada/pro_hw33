import { useState } from "react";
import {getStory} from '../components/Stories'

const Home = () => {
  const [active, setActive] = useState(false);
  const story = getStory();
  const render = () => {
    return (
      <div>
        <h2 className="title">{story.name}</h2>
        <p className="home">{story.text}</p>
      </div>
    );
  };
  return (
    <div className="home-main">
      <img
        src="https://jenmulligandesign.com/wp-content/uploads/2017/04/pexels-beach-tropical-scene-free-stock-photo.jpg"
        alt="someimage"
        className="image"
      />
      <div className="home-greetings">
        <h2 className="title">Welcome home traveler!</h2>
      </div>
      <div>

          {!active?<p className="home">Have a sit and i'll tell u a story
          <span onClick={() => setActive(!active)} className="anker">
            ...
          </span></p>: ''}
        
        {active ? render() : ""}
      </div>
    </div>
  );
};
export default Home;
