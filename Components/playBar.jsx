/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from "react";
import styles from "../styles/Playbar.module.css";
export default function PlayBar({song}) {
    return(
        <>
            <img src={song.track.album.images[2].url} style={{ borderRadius: 7 + 'px' }} alt="name" />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <audio style={{height: 20+'px', width: 20+'px'}}
                onPlay={(e)=>{
                  console.log("Playing");
                  if(document.getElementById("progressBar")){
                    const progressBar = document.getElementById("progressBar");
                    progressBar.style.animationPlayState = "running";
                  }
                }} 
                onPause={(e)=>{
                  console.log("Paused");
                  if(document.getElementById("progressBar")){
                    const progressBar = document.getElementById("progressBar");
                    progressBar.style.animationPlayState = "paused";
                  }
                }} 
                onCanPlay={(e)=>{
                  console.log("Can Play");
                  if(document.getElementById("progressBar")){
                    const progressBar = document.getElementById("progressBar");
                    progressBar.style.display = "block";
                  }
                }} 
                src={song.track.preview_url} controls>Error Occured</audio>
                <p>{song.track.name} - {song.track.album.artists[0].name}</p>
                <div className={styles.progress}>
                  <div id="progressBar" className={styles.progressBar}></div>
                </div>
              </div>
              <a href={song.track.uri}> <i className="fa fa-spotify" style={{ fontSize: 30 + 'px' }} aria-hidden="true"></i> </a>
        </>
    )
}