/** @jsx h */
/** @jsxFrag Fragment */
import { h } from 'preact';

import { useEffect, useState } from 'preact/hooks';
import { getVideoURL, slugify } from '@/utils.js';

export default function GameListIsland({ game }) {
  const [video, setVideos] = useState(null);

  useEffect(async () => {
    const videos = await fetch(getVideoURL(slugify(game.title))).then(res => res.json());
    setVideos(videos);
  }, []);

  return (
    <div>
      {video && video.playlist && video.playlist.length > 0 && video.playlist.map((id) => <lite-youtube foo autoload key={id} videoid={id}></lite-youtube>)}
    </div>
  );
}
