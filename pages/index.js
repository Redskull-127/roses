/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";
import playBarStyles from "../styles/Playbar.module.css";
import Button from "../Components/button";
import { useEffect, useRef, useState } from "react";
import { Howl, Howler } from 'howler';
import PlayBar from "../Components/playBar";
import preloader from "../styles/Preloader.module.css";

export default function Home() {
  const [clickRef, setClickRef] = useState(false);
  const [song, setSong] = useState([]);
  const [random, setRandom] = useState();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if(document.getElementById("sammygif")){
      const gif = document.getElementById("sammygif");
      console.log("gif.style.animation");
      // gif.addEventListener('animationstart', (e)=>{
      //   setInterval(()=>{
      //     gif.style.transform = "scaleX(-1)";
      //   }, 2500);
      // })
    }
    handleFetch();
  }, []);

  function handleRefClick(e) {
    //setstate snippet
    setClickRef(true);
  }

  function handleFetch() {
    fetch("/songsRes.json")
      .then((res) => res.json())
      .then((data) => {
        setSong(data.items);
        setRandom(Math.floor(Math.random() * data.items.length));
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
    <div id={`preloader`} className={preloader.preloader}>
          <h1>Please wait</h1>
        </div>
      <div className={styles.container}>
        <Head>
          <title>R O S E S</title>
          <meta name="description" content="Meer's Playlist bruh!" />
          <link rel="icon" href="https://img.icons8.com/cute-clipart/64/null/rose.png" />
        </Head>
        <Script src="https://kit.fontawesome.com/b601b88d20.js" crossOrigin="anonymous"></Script>
        
        <main className={styles.main}>
          <h1 className={styles.title}>
            Cause she don&apos;t like{" "}
            <a href="https://meertarbani.dev">Roses🌹</a>
          </h1>
          <div className={styles.sammy}>
            <div id="sammygif" className={styles.sammyGif}> 
              <img src="sammy.gif" alt="gsif"  />
            </div>
          </div>
          <p className={styles.description}>
            Start listening by clicking below button!
          </p>
          {song.length > 0 && song != null ?
            (<div onClick={() => {
              setClickRef(true);
              setRandom(Math.floor(Math.random() * song.length));
            }}>
              <Button />
            </div>) : null}
        </main>

      </div>
      <div className={playBarStyles.container}>
        <div className={playBarStyles.playbar}>
          {clickRef == false ? (
            <div style={{width: 100 + '%'}}>
            <h1 style={{textAlign: 'center'}}>Nothing to play</h1>
            </div>
          ) : song.length > 0 && song != null ? (
            <>
              <PlayBar song={{ ...song[random] }} />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
