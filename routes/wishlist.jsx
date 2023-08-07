import Layout from '@/components/Layout.jsx';
import Wishlist from '@/islands/Wishlist.jsx';

export default function WhislistPage() {
  return (
    <Layout section="wishlist">
      <div class="wish list page page-fixed page-on">
        <notification-prompt hidden></notification-prompt>
        <div class="wish-content page-content">
          <h2><img src="/src/assets/icons/heart.svg" width="24" height="24" loading="lazy" decoding="async" /> Favoritos</h2>
          <Wishlist />
        </div>
      </div>
    </Layout>
  )
}
