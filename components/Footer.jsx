/** @jsx h */
import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { AppContext } from '@/components/Layout.jsx';

export default function Footer() {
  const { section } = useContext(AppContext);

  return (
    <footer data-active={section}>
      <nav>
        <ul>
          <li>
            <a id="home" href="/" class="home-btn footer-btn" aria-label="Inicio">
              <svg width="32" height="32" fill="none" viewBox="0 -2 24 28" aria-hidden="true"><path opacity=".12" d="M13.551 5h-3.102c-2.625 0-3.9374 0-4.9675.4974a5 5 0 0 0-2.1621 2.0132c-.5696.9921-.6631 2.3012-.8501 4.9194l-.246 3.4445C2.1026 17.5634 3.4403 19 5.1334 19c.8659 0 1.687-.3846 2.2413-1.0498L7.75 17.5c.3432-.4118.5147-.6177.7101-.7841a3.0001 3.0001 0 0 1 1.4355-.6723C10.1485 16 10.4165 16 10.9526 16h2.0948c.5361 0 .8041 0 1.057.0436a3.0002 3.0002 0 0 1 1.4355.6723c.1954.1664.367.3723.7101.7841l.3752.4502A2.9174 2.9174 0 0 0 18.8665 19c1.6933 0 3.0309-1.4366 2.9102-3.1255l-.246-3.4445c-.187-2.6182-.2805-3.9273-.8501-4.9194a4.9992 4.9992 0 0 0-2.1621-2.0132C17.4884 5 16.1759 5 13.551 5Z" fill="#9AA495"/><path d="m21.5307 12.43-.9974.0713.9974-.0713Zm.246 3.4445.9975-.0712-.9975.0712Zm-5.1515 2.0757-.7683.6402.7683-.6402ZM16.25 17.5l.7682-.6402-.7682.6402Zm-8.5 0 .7682.6402L7.75 17.5Zm-.3752.4502-.7682-.6402.7682.6402Zm-5.1515-2.0757-.9975-.0712.9975.0712Zm.246-3.4445.9974.0713-.9974-.0713Zm7.4263 3.6136.1699.9855-.1699-.9855Zm-1.4355.6723.6483.7614-.6483-.7614Zm7.0798 0-.6483.7614.6483-.7614Zm-1.4355-.6723-.1699.9855.1699-.9855Zm4.4141-10.5462.4349-.9005-.4349.9005Zm2.1621 2.0132.8673-.4979-.8673.4979ZM5.4815 5.4974l.4348.9005-.4348-.9005ZM3.3194 7.5106l-.8673-.4979.8673.4979ZM6 10c-.5523 0-1 .4477-1 1s.4477 1 1 1v-2Zm4 2c.5523 0 1-.4477 1-1s-.4477-1-1-1v2ZM9 9c0-.5523-.4477-1-1-1s-1 .4477-1 1h2Zm-2 4c0 .5523.4477 1 1 1s1-.4477 1-1H7Zm8-2c-.5523 0-1 .4477-1 1s.4477 1 1 1v-2Zm.01 2c.5523 0 1-.4477 1-1s-.4477-1-1-1v2ZM18 9c-.5523 0-1 .4477-1 1s.4477 1 1 1V9Zm.01 2c.5523 0 1-.4477 1-1s-.4477-1-1-1v2Zm-7.561-5h3.102V4h-3.102v2Zm10.0843 6.5013.246 3.4445 1.9949-.1425-.246-3.4445-1.9949.1425ZM17.3934 17.31l-.3752-.4502-1.5364 1.2804.3751.4502 1.5365-1.2804ZM13.0474 15h-2.0948v2h2.0948v-2Zm-6.0656 1.8598-.3752.4502 1.5365 1.2804.3751-.4502-1.5364-1.2804Zm-3.761-.914.246-3.4445-1.995-.1425-.246 3.4445 1.995.1425ZM5.1334 18c-1.113 0-1.992-.9442-1.9128-2.0542l-1.995-.1425C1.0639 18.071 2.86 20 5.1336 20v-2Zm1.4731-.69c-.3643.4372-.904.69-1.4731.69v2a3.9176 3.9176 0 0 0 3.0096-1.4096L6.6066 17.31Zm4.346-2.31c-.5013 0-.8699-.0034-1.2268.0581l.3397 1.971c.1488-.0257.3163-.0291.8871-.0291v-2Zm-2.4344 3.1402c.3654-.4385.4752-.565.5902-.6629l-1.2966-1.5227c-.2758.2348-.5091.5201-.83.9052l1.5364 1.2804Zm1.2076-3.0821a4.0002 4.0002 0 0 0-1.914.8965l1.2966 1.5227a2 2 0 0 1 .9571-.4482l-.3397-1.971Zm7.2924 1.8017c-.3209-.3851-.5542-.6704-.83-.9052l-1.2966 1.5227c.1149.0979.2248.2244.5902.6629l1.5364-1.2804ZM13.0474 17c.5708 0 .7383.0034.8871.0291l.3397-1.971c-.3569-.0615-.7255-.0581-1.2268-.0581v2Zm3.1408-1.0454a4.0003 4.0003 0 0 0-1.914-.8965l-.3397 1.971c.3535.0609.684.2157.9571.4482l1.2966-1.5227ZM18.8665 18a1.9175 1.9175 0 0 1-1.4731-.69l-1.5365 1.2804A3.9178 3.9178 0 0 0 18.8665 20v-2Zm1.9128-2.0542c.0793 1.11-.7999 2.0542-1.9128 2.0542v2c2.2736 0 4.0697-1.929 3.9077-4.1967l-1.9949.1425ZM13.551 6c1.3284 0 2.2665.0007 3.0029.059.7241.0574 1.1717.166 1.5298.339l.8697-1.801c-.6721-.3246-1.3958-.4647-2.2416-.5317C15.8782 3.9993 14.8476 4 13.551 4v2Zm8.9772 6.3588c-.0924-1.2933-.1651-2.3213-.2904-3.148-.127-.839-.3184-1.5509-.6899-2.198l-1.7345.9957c.198.3449.3382.7836.447 1.5018.1107.7303.1782 1.666.2729 2.991l1.9949-.1425Zm-4.4445-5.9609a4.0003 4.0003 0 0 1 1.7297 1.6106l1.7345-.9958a6.0002 6.0002 0 0 0-2.5945-2.4158l-.8697 1.801ZM10.449 4c-1.2966 0-2.3272-.0007-3.1608.0653-.8458.067-1.5695.2071-2.2416.5316l.8697 1.801c.3581-.1729.8057-.2815 1.5299-.3388C8.1824 6.0007 9.1205 6 10.449 6V4Zm-6.9823 8.5013c.0947-1.325.1623-2.2607.2729-2.991.1088-.7182.249-1.157.447-1.5018l-1.7345-.9958c-.3715.6472-.5629 1.3591-.69 2.198-.1252.8268-.1979 1.8548-.2903 3.1481l1.995.1425Zm1.58-7.9044A6 6 0 0 0 2.452 7.0127l1.7345.9958a4 4 0 0 1 1.7297-1.6106l-.8697-1.801ZM6 12h4v-2H6v2Zm1-3v4h2V9H7Zm8 4h.01v-2H15v2Zm3-2h.01V9H18v2Z" fill="#9AA495" /></svg>
              Inicio
            </a>
          </li>
          <li>
            <a id="wishlist" href="/wishlist" class="link wish-btn footer-btn" aria-label="Favoritos">
              <svg width="32" height="32" fill="none" viewBox="0 -5 24 32" aria-hidden="true"><path opacity=".12" d="M16.111 3C19.633 3 22 6.353 22 9.48 22 15.814 12.178 21 12 21c-.178 0-10-5.186-10-11.52C2 6.352 4.367 3 7.889 3 9.91 3 11.233 4.024 12 4.924 12.767 4.024 14.089 3 16.111 3Z" fill="#9AA495"/><path d="m12 4.924-.761.648a1 1 0 0 0 1.522 0L12 4.924ZM16.111 4C18.924 4 21 6.734 21 9.48h2C23 5.971 20.342 2 16.111 2v2ZM21 9.48c0 1.321-.513 2.64-1.368 3.915-.854 1.273-2.013 2.447-3.21 3.456a28.537 28.537 0 0 1-3.31 2.39c-.458.282-.839.5-1.106.644a8.052 8.052 0 0 1-.337.172l-.012.006.009-.003a.55.55 0 0 1 .1-.032c.02-.005.112-.028.234-.028v2c.125 0 .221-.024.246-.03a1.098 1.098 0 0 0 .186-.063 10.016 10.016 0 0 0 .524-.262c.304-.164.719-.401 1.208-.704a30.511 30.511 0 0 0 3.547-2.561c1.281-1.08 2.589-2.39 3.582-3.87C22.285 13.03 23 11.324 23 9.48h-2ZM12 20a.895.895 0 0 1 .334.06l.01.003-.013-.005a22.257 22.257 0 0 1-1.442-.817 28.536 28.536 0 0 1-3.311-2.39c-1.197-1.009-2.356-2.183-3.21-3.456C3.513 12.121 3 10.801 3 9.48H1c0 1.845.715 3.55 1.707 5.03.993 1.48 2.3 2.79 3.582 3.87a30.516 30.516 0 0 0 3.547 2.561c.49.303.904.54 1.208.704.151.081.28.147.379.195a3.157 3.157 0 0 0 .24.103c.02.007.052.017.091.027.025.006.121.03.246.03v-2ZM3 9.48C3 6.734 5.076 4 7.889 4V2C3.658 2 1 5.971 1 9.48h2ZM7.889 4c1.641 0 2.708.818 3.35 1.572l1.522-1.297C11.871 3.23 10.292 2 7.89 2v2Zm4.872 1.572C13.404 4.818 14.47 4 16.111 4V2c-2.403 0-3.981 1.23-4.872 2.275l1.522 1.297Z" fill="#9AA495"/></svg>
              Favoritos
            </a>
          </li>
          <li>
            <a id="news" href="/news" class="link news-btn footer-btn" aria-label="Noticias">
              <svg width="32" height="32" fill="none" viewBox="0 -5 24 32" aria-hidden="true"><path opacity=".12" d="M2 6.2c0-1.12 0-1.68.22-2.1a2 2 0 0 1 .87-.88C3.52 3 4.08 3 5.2 3h.4c2.24 0 3.36 0 4.22.44a4 4 0 0 1 1.74 1.74c.44.86.44 1.98.44 4.22V21l-.1-.15c-.7-1.04-1.04-1.56-1.5-1.94a4 4 0 0 0-1.38-.74C8.45 18 7.82 18 6.57 18H5.2c-1.12 0-1.68 0-2.1-.22a2 2 0 0 1-.88-.87C2 16.48 2 15.92 2 14.8V6.2Z" fill="#9AA495"/><path d="m12 21-.83.55a1 1 0 0 0 1.66 0L12 21Zm-.1-.15-.83.55.83-.55Zm-1.5-1.94-.64.77.64-.77Zm-1.38-.74-.29.96.3-.96Zm-6.8-1.26.89-.46-.9.46Zm.87.87.46-.89-.46.9ZM9.82 3.44l-.46.89.46-.9Zm1.74 1.74-.89.46.9-.46ZM3.1 3.22l.46.89-.46-.9Zm-.87.87.89.46-.9-.46Zm9.88 16.76.83.55-.83-.55Zm1.5-1.94.64.77-.64-.77Zm1.38-.74.29.96-.3-.96Zm6.8-1.26-.89-.46.9.46Zm-.87.87-.46-.89.46.9ZM14.18 3.44l.46.89-.46-.9Zm-1.74 1.74.89.46-.9-.46Zm8.47-1.96-.46.89.46-.9Zm.87.87-.89.46.9-.46ZM5.2 4h.4V2h-.4v2ZM3 14.8V6.2H1v8.6h2Zm9.83 5.65-.1-.15-1.66 1.1.1.15 1.66-1.1ZM6.57 17H5.2v2h1.37v-2Zm6.16 3.3c-.66-1-1.1-1.67-1.7-2.16l-1.27 1.54c.32.26.58.63 1.3 1.72l1.67-1.1ZM6.57 19c1.32 0 1.77.01 2.16.13l.58-1.91c-.74-.23-1.55-.22-2.74-.22v2Zm4.46-.86a5 5 0 0 0-1.72-.92l-.58 1.91a3 3 0 0 1 1.03.55l1.27-1.54ZM1 14.8c0 .54 0 1.01.03 1.4.03.39.1.78.3 1.16l1.78-.9a1.14 1.14 0 0 1-.09-.43A17 17 0 0 1 3 14.8H1ZM5.2 17c-.58 0-.95 0-1.23-.02a1.14 1.14 0 0 1-.42-.09l-.91 1.78c.38.2.77.27 1.16.3.39.03.86.03 1.4.03v-2Zm-3.87.36a3 3 0 0 0 1.3 1.31l.92-1.78a1 1 0 0 1-.44-.44l-1.78.91ZM5.6 4c1.14 0 1.93 0 2.55.05.6.05.95.14 1.21.28l.91-1.79c-.6-.3-1.23-.42-1.96-.48C7.59 2 6.7 2 5.6 2v2ZM13 9.4c0-1.1 0-2-.06-2.7a5.13 5.13 0 0 0-.48-1.97l-1.79.9c.14.27.23.62.28 1.22.05.62.05 1.41.05 2.55h2ZM9.36 4.33a3 3 0 0 1 1.31 1.3l1.79-.9a5 5 0 0 0-2.19-2.19l-.9 1.79ZM5.2 2c-.54 0-1.01 0-1.4.03-.39.03-.78.1-1.16.3l.9 1.78c.06-.03.16-.06.43-.09A17 17 0 0 1 5.2 4V2ZM3 6.2c0-.58 0-.95.02-1.23.03-.27.06-.37.09-.42l-1.78-.91c-.2.38-.27.77-.3 1.16C1 5.2 1 5.66 1 6.2h2Zm-.36-3.87a3 3 0 0 0-1.31 1.3l1.78.92a1 1 0 0 1 .44-.44l-.91-1.78ZM18.8 2h-.4v2h.4V2ZM11 9.4V21h2V9.4h-2Zm12 5.4V6.2h-2v8.6h2Zm-10.17 6.75.1-.15-1.66-1.1-.1.15 1.66 1.1Zm4.6-2.55h1.37v-2h-1.37v2Zm-4.5 2.4c.73-1.09.99-1.46 1.3-1.72l-1.26-1.54c-.6.5-1.04 1.17-1.7 2.16l1.66 1.1Zm4.5-4.4c-1.2 0-2-.01-2.74.22l.58 1.91c.4-.12.84-.13 2.16-.13v-2Zm-3.2 2.68a3 3 0 0 1 1.04-.55l-.58-1.91a5 5 0 0 0-1.72.92l1.27 1.54ZM21 14.8c0 .58 0 .95-.02 1.23-.03.27-.06.37-.09.42l1.78.91c.2-.38.27-.77.3-1.16.03-.39.03-.86.03-1.4h-2ZM18.8 19c.54 0 1.01 0 1.4-.03.39-.03.78-.1 1.16-.3l-.9-1.78c-.06.03-.16.06-.43.09-.28.02-.65.02-1.23.02v2Zm2.1-2.55a1 1 0 0 1-.45.44l.91 1.78a3 3 0 0 0 1.31-1.3l-1.78-.92ZM18.4 2c-1.1 0-2 0-2.7.06-.74.06-1.38.18-1.97.48l.9 1.79a3.2 3.2 0 0 1 1.22-.28C16.47 4 17.26 4 18.4 4V2ZM13 9.4c0-1.14 0-1.93.05-2.55.05-.6.14-.95.28-1.21l-1.79-.91c-.3.6-.42 1.23-.48 1.96C11 7.41 11 8.3 11 9.4h2Zm.73-6.86a5 5 0 0 0-2.19 2.19l1.79.9a3 3 0 0 1 1.3-1.3l-.9-1.79ZM18.8 4c.58 0 .95 0 1.23.02.27.03.37.06.42.09l.91-1.78c-.38-.2-.77-.27-1.16-.3C19.8 2 19.34 2 18.8 2v2ZM23 6.2c0-.54 0-1.01-.03-1.4-.03-.39-.1-.78-.3-1.16l-1.78.9c.03.06.06.16.09.43.02.28.02.65.02 1.23h2Zm-2.55-2.1a1 1 0 0 1 .44.45l1.78-.91a3 3 0 0 0-1.3-1.31l-.92 1.78Z" fill="#9AA495" /></svg>
              Noticias
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
