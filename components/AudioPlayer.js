import React, { useState, useRef, useEffect } from 'react';
import ReactHowler from 'react-howler';
import { ImVolumeMedium } from 'react-icons/im';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';

export default function AudioPlayer() {
  const tracks = [
    {
      id: 1,
      title: 'Track 1',
      artist: 'Artist 1',
      file: '/track1.mp3',
      thumbnail: '/track1.jpg',
    },
    {
      id: 2,
      title: 'Track 2',
      artist: 'Artist 2',
      file: '/track2.mp3',
      thumbnail: '/track2.jpg',
    },
    {
      id: 3,
      title: 'Track 3',
      artist: 'Artist 3',
      file: '/track3.mp3',
      thumbnail: '/track3.jpg',
    },
    {
      id: 4,
      title: 'Track 4',
      artist: 'Artist 4',
      file: '/track4.mp3',
      thumbnail: '/track4.jpg',
    },
    {
      id: 5,
      title: 'Track 5',
      artist: 'Artist 5',
      file: '/track5.mp3',
      thumbnail: '/track5.jpg',
    },
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true); // Autoplay the first song
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef(null);

  const track = tracks[currentTrackIndex];

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const playPause = () => {
    setIsPlaying(!isPlaying);
  };

  const previousTrack = () => {
    if (currentTrackIndex > 0) {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
  };

  const nextTrack = () => {
    if (currentTrackIndex < tracks.length - 1) {
      setCurrentTrackIndex(currentTrackIndex + 1);
    }
  };

  const handleTimestampClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = percentage * audioRef.current.duration;
    audioRef.current.seek(newTime);
  };

  useEffect(() => {
    // Autoplay the first song
    setIsPlaying(true);
  }, [currentTrackIndex]);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.seek());
  };

  return (
    <>
    <div className="bg-gray-900 p-4 rounded-md shadow-lg text-white text-center" id="audioplayer">
      <h1 className="text-3xl font-bold text-center p-10 border my-3">Audio Player</h1>
      <div className="mb-4">
        <img src={track.thumbnail} alt={track.title} className="w-64 h-64 mx-auto rounded-lg" />
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">{track.title}</h2>
        <p className="text-sm text-gray-400">{track.artist}</p>
      </div>
      <div className="mb-4 flex justify-center items-center space-x-4">
        <FaBackward className="text-2xl cursor-pointer" onClick={previousTrack} />
        {isPlaying ? (
          <FaPause className="text-4xl cursor-pointer" onClick={playPause} />
        ) : (
          <FaPlay className="text-4xl cursor-pointer" onClick={playPause} />
        )}
        <FaForward className="text-2xl cursor-pointer" onClick={nextTrack} />
      </div>
      <div className="mb-4" onClick={handleTimestampClick}>
        <span className="text-gray-400">{formatTime(currentTime)}</span> / {formatTime(audioRef.current ? audioRef.current.duration : 0)}
      </div>
      <div className="mb-4">
        <ImVolumeMedium className="text-2xl" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          className="w-full"
        />
      </div>
      <ReactHowler
        src={track.file}
        playing={isPlaying}
        volume={volume}
        ref={audioRef}
        onEnd={nextTrack}
        onLoad={handleTimeUpdate}
        onPlay={handleTimeUpdate}
      />
    </div>
    </>
  );
}
