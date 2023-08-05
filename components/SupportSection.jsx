export default function SupportSection({ store }) {
  return (
    <section class="cafecito">
      <h2>¡Apoyá el crecimiento de XStoreGames!</h2>
      <ul>
        {store === 'ar' ?
        <>
          <li>
            <a href="https://cafecito.app/pazguille" rel="noopener" target="_blank">
              <img
                src="/src/assets/cafecito.svg"
                alt="Invitame un café en cafecito.app"
                width="192"
                height="40"
                decoding="async"
                loading="lazy"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/compose/tweet?text=📣%20Ya%20podés%20explorar%20el%20catálogo%20de%20juegos%20de%20la%20tienda%20de%20Xbox%20Argentina%20con%20los%20precios%20finales%20incluidos%20los%20impuestos%20🎮🇦🇷✨%20https://xstoregames.com/" rel="noopener" target="_blank">
              <img
                src="/src/assets/twitter.svg"
                alt=""
                width="35"
                height="35"
                decoding="async"
                loading="lazy"
              />
              <span>Compartir en Twitter</span>
            </a>
          </li>
        </>
        :
        <>
          <li>
            <a href="https://www.paypal.com/paypalme/pazguille" rel="noopener" target="_blank">
              <img
                src="/src/assets/paypal.svg"
                alt="Doná en Paypal"
                width="118"
                height="35"
                decoding="async"
                loading="lazy"
              />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/compose/tweet?text=📣%20Explorá%20el%20catálogo%20de%20juegos%20de%20la%20tienda%20de%20Xbox%20en%20https://xstoregames.com/${store}-store/%20🎮✨" rel="noopener" target="_blank">
              <img
                src="/src/assets/twitter.svg"
                alt=""
                width="35"
                height="35"
                decoding="async"
                loading="lazy"
              />
              <span>Compartir en Twitter</span>
            </a>
          </li>
        </>
        }
      </ul>
    </section>
  )
}
