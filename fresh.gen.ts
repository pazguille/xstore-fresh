// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/__app.jsx";
import * as $1 from "./routes/_middleware.js";
import * as $2 from "./routes/collection/[collection].jsx";
import * as $3 from "./routes/game/[game].jsx";
import * as $4 from "./routes/gamepass/[collection].jsx";
import * as $5 from "./routes/gold/[collection].jsx";
import * as $6 from "./routes/index.jsx";
import * as $7 from "./routes/news.jsx";
import * as $8 from "./routes/search.jsx";
import * as $9 from "./routes/wishlist.jsx";
import * as $$0 from "./islands/CollectionList.jsx";
import * as $$1 from "./islands/GameListIsland.jsx";
import * as $$2 from "./islands/PageTransition.jsx";
import * as $$3 from "./islands/ShareButton.jsx";
import * as $$4 from "./islands/Video.jsx";
import * as $$5 from "./islands/VideoPlaylist.jsx";
import * as $$6 from "./islands/WishToggle.jsx";
import * as $$7 from "./islands/Wishlist.jsx";

const manifest = {
  routes: {
    "./routes/__app.jsx": $0,
    "./routes/_middleware.js": $1,
    "./routes/collection/[collection].jsx": $2,
    "./routes/game/[game].jsx": $3,
    "./routes/gamepass/[collection].jsx": $4,
    "./routes/gold/[collection].jsx": $5,
    "./routes/index.jsx": $6,
    "./routes/news.jsx": $7,
    "./routes/search.jsx": $8,
    "./routes/wishlist.jsx": $9,
  },
  islands: {
    "./islands/CollectionList.jsx": $$0,
    "./islands/GameListIsland.jsx": $$1,
    "./islands/PageTransition.jsx": $$2,
    "./islands/ShareButton.jsx": $$3,
    "./islands/Video.jsx": $$4,
    "./islands/VideoPlaylist.jsx": $$5,
    "./islands/WishToggle.jsx": $$6,
    "./islands/Wishlist.jsx": $$7,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
