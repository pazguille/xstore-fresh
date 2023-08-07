import { Html5Entities } from "https://deno.land/x/html_entities/mod.js";

export default function News({ news, lazy = true }) {
  return (
    <article class="news-preview">
      <h2><a href={news.link}>{news.title}</a></h2>
      <img class="news-img" width="180" height="500" alt="" decoding="async" {...(lazy ? {loading: "lazy"} : {fetchpriority: "high"})} src={news.image} />
      <p>{Html5Entities.decode(news.description)}</p>
    </article>
  );
}
