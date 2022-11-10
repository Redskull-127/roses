/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from "react";
export default function PlayBar({song}) {
    return(
        <>
            <img src={song.track.album.images[2].url} style={{ borderRadius: 7 + 'px' }} alt="name" />
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <audio style={{height: 20+'px', width: 20+'px'}} src={song.track.preview_url} controls>Error Occured</audio>
                <p>{song.track.name} - {song.track.album.artists[0].name}</p>
              </div>
              <a href={song.track.uri}> <i className="fa fa-spotify" style={{ fontSize: 30 + 'px' }} aria-hidden="true"></i> </a>
        </>
    )
}