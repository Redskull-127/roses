/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "../Components/button";
import { useRef, useState } from "react";

export default function Home() {
  const [clickRef, setClickRef] = useState(false);
  const [song, setSong] = useState([]);
  const [random, setRandom] = useState(0);

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
      <div className={styles.container}>
        <Head>
          <title>R O S E S</title>
          <meta name="description" content="Meer's Playlist bruh!" />
          <link rel="icon" href="https://img.icons8.com/cute-clipart/64/null/rose.png" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Cause she don&apos;t like{" "}
            <a href="https://meertarbani.dev">Roses🌹</a>
          </h1>

          <p className={styles.description}>
            Start listening by clicking below button!
          </p>

          {clickRef == false ? (
            <div
              onClick={(e) => {
                handleRefClick();
                handleFetch();
              }}
              className={styles.card}
            >
              <Button />
            </div>
          ) : song.length > 0 && song != null ? (
            <div className={styles.grid}>
              <a href={song[random].track.uri} className={styles.card}>
                <h2>NOW PLAYING &rarr;</h2>
                <div style={{ display: "flex" }}>
                  <img
                    src={song[random].track.album.images[2].url}
                    height={135}
                    alt=""
                  />
                  <a
                    
                    target="_blank"
                    style={{ marginLeft: "20px" }}
                    rel="noreferrer"
                  >
                    <h2>{song[random].track.name}</h2> <br /> by{" "}
                    {song[random].track.album.artists[0].name}
                  </a>
                </div>
              </a>
              <a className={styles.card}>
                <div
                  onClick={() => {
                    setRandom(Math.floor(Math.random() * song.length));
                  }}
                >
                  <Button />
                </div>
              </a>
            </div>
          ) : null}
        </main>

        <footer className={styles.footer}>
          <a
            href="https://meertarbani.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developed by Meer Tarbani
          </a>
        </footer>
      </div>
    </>
  );
}
