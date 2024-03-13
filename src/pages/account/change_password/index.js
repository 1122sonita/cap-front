import ChangePassword from '@components/pages/Account/change_password';
import EditCard from '@components/pages/Account/change_password';
import OrderHistory from '@components/pages/Account/order_history';
import { seoDefualt } from '@constants';
import { tran } from '@utilities/i18n';

export default function Index({ locale }) {
  const { locale: trans } = tran(locale);

  return <ChangePassword locale={locale} trans={trans}   />;
}

export async function getServerSideProps(ctx) {
  const accessToken = ctx.req.cookies.token;
  return {
    props: {
      locale: ctx.locale,
      seo: {
        ...seoDefualt,
        linkTo: '/account/change_password',
      },
    },
  };
}
