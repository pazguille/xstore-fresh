/** @jsx h */
import { h } from 'preact';
import { Html5Entities } from "https://deno.land/x/html_entities/mod.js";

export default function News({ news }) {
  return (
    <article class="news-preview">
      <h2><a href={news.link}>{news.title}</a></h2>
      <img class="news-img" width="180px" height="500px" alt="" decoding="async" loading="lazy" src={news.image} />
      <p>{Html5Entities.decode(news.description)}</p>
    </article>
  );
}
