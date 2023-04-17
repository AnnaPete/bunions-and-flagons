// '/'

import Image from "next/image";
import image from '../Components/Images/dungeons-and-dragons-lede.jpg'
import styles from "./page.module.css";
// import imageStyles from "./styles/images.module.css";
// import Link from "next/link";
import Header from '../Components/Header/Header'


export default function Home() {
  return (
    <main className='main'>
      <Header />
      <div className="about-section">
        <h1 className="tagline">Let the dice decide</h1>
        <div className="about-description">
          <div className="about-text">
            <div className="about-text">
              <h2>What exactly IS Dungeons & Dragons?</h2>
              <p>Dungeons & Dragons (D&D) is a fantasy tabletop role-playing game where players create their own characters and go on adventures guided by a storyteller, called the Dungeon Master (DM).</p>
              <p>The game involves rolling dice to determine the outcome of various actions and decisions made by the players. D&D allows for a great deal of creativity and imagination as players work together to solve puzzles, fight monsters, and explore fantastical worlds.</p>
              <p>It's a collaborative storytelling experience where anything can happen and the possibilities are endless.</p>
            </div>
            <Image className="intro" src={image} alt="adventurers fighting a dragon" />
          </div>
        </div>
      </div>
    </main>
  )
}