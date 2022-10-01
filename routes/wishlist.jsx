import Layout from '@/components/Layout.jsx';
import Island from '@/components/Island.jsx';
import Wishlist from '@/is-lands/Wishlist.jsx';

export default function WhislistPage() {
  return (
    <Layout section="wishlist">
      <div class="wish list page page-fixed page-on">
        <notification-prompt hidden></notification-prompt>
        <div class="wish-content page-content">
          <h2><img src="/src/assets/icons/heart.svg" width="24" height="24" /> Favoritos</h2>
          <Island whenVisible>
            <Wishlist />
          </Island>
        </div>
      </div>
    </Layout>
  )
}
