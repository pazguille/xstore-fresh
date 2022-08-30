/** @jsx h */
import { h } from 'preact';

import { useEffect, useRef } from 'preact/hooks';
import { getVideoURL, slugify } from '@/utils.js';

export default function Video({ game }) {
  const $video = useRef(null);

  useEffect(async () => {
    if (!window.matchMedia('(prefers-reduced-motion)').matches || (navigator.connection && !navigator.connection.saveData)) {
      const video = await fetch(getVideoURL(slugify(game.title))).then(res => res.json());
      if (video && video.full) {
        $video.current
          .addEventListener('loadedmetadata', function() {
            this.toggleAttribute('hidden');
          });
        $video.current.src = video.full;
      }
    }
    return () => {};
  }, []);

  return (
    <video ref={$video} class="hero game-preview-trailer" autoplay loop muted playsinline hidden />
  );
}
