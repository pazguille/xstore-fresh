import * as Fresh from '$fresh/runtime.ts';

export default function Head() {
  return (
    <Fresh.Head>
      <meta charset="utf-8" />
      <meta name="HandheldFriendly" content="True" />
      {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover" /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
      {/* <base href="http://192.168.0.148:8000/" /> */}
      {/* <base href="http://localhost:8000/" /> */}
      {/* <base href="https://fresh.xstoregames.com/" /> */}

      <link rel="stylesheet" href={Fresh.asset("/src/styles.css")} />

      {/* <link rel="preconnect" href="https://api.xstoregames.com" /> */}
      <link rel="preconnect" href="https://xbox-games-api.vercel.app" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <link rel="preload" as="font" href="/src/assets/bahnschrift.woff2" crossorigin="anonymous" />
      <link rel="preload" as="font" href="https://fonts.gstatic.com/s/inter/v7/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2" crossorigin="anonymous" />

      <link rel="modulepreload" href={Fresh.asset("/src/js/web-components.js")} />

      <title>XStore: La tienda argenta de Xbox</title>

      <link rel="shortcut icon" href={Fresh.asset("/src/assets/favicon.png")} />
      <link rel="apple-touch-icon" href={Fresh.asset("/src/assets/favicon.png")} />

      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="XStore" />
      <meta name="theme-color" content="#072523" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-2048-2732.jpg" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1668-2388.jpg" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1536-2048.jpg" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1668-2224.jpg" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1620-2160.jpg" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1290-2796.jpg" media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1179-2556.jpg" media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1284-2778.jpg" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1170-2532.jpg" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1125-2436.jpg" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1242-2688.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-828-1792.jpg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-1242-2208.jpg" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-750-1334.jpg" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
      <link rel="apple-touch-startup-image" href="./src/assets/apple-splash-640-1136.jpg" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />

      <meta name="description" content="Explora la amplia colecci??n de t??tulos de videojuegos en el cat??logo de juegos de Xbox. Busca los ??xitos de taquilla favoritos, las ofertas y nuevos lanzamientos en precios argentinos." />
      <meta name="keywords" content="Xbox Series X, Xbox One, xbox live, ofertas con gold, juegos con gold, pr??ximos juegos de xbox, nuevos juegos en xbox, nuevos juegos, videojuegos, cat??logo de juegos de xbox, pr??ximos juegos de xbox, nuevos juegos en xbox, nuevos juegos, videojuegos" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://fresh.xstoregames.com" />
      <meta property="og:title" content="XStore: La tienda argenta de Xbox" />
      <meta property="og:description" content="Explora la amplia colecci??n de t??tulos de videojuegos en el cat??logo de juegos de Xbox. Busca los ??xitos de taquilla favoritos, las ofertas y nuevos lanzamientos en precios argentinos." />
      <meta property="og:image" content="https://fresh.xstoregames.com/src/assets/xstore-og.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="fresh.xstoregames.com" />
      <meta property="twitter:url" content="https://fresh.xstoregames.com" />
      <meta name="twitter:title" content="XStore: La tienda argenta de Xbox" />
      <meta name="twitter:description" content="Explora la amplia colecci??n de t??tulos de videojuegos en el cat??logo de juegos de Xbox. Busca los ??xitos de taquilla favoritos, las ofertas y nuevos lanzamientos en precios argentinos." />
      <meta name="twitter:image" content="https://fresh.xstoregames.com/src/assets/xstore-og.jpg" />

      <link rel="manifest" href={Fresh.asset("/manifest.json")} />
    </Fresh.Head>
  );
}
