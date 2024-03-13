import { Account } from '@components/pages';
import { seoDefualt } from '@constants';
import { tran } from '@utilities/i18n';
import cookie from 'cookie';
import Cookies from 'js-cookie';

export default function Index({ locale, apiData, accessToken }) {
  const { locale: trans } = tran(locale);

  return <Account locale={locale} trans={trans} apiData={apiData} accessToken={accessToken} />;
}

export async function getServerSideProps(ctx) {
  try {
    const accessToken = ctx.req.cookies.token;
    const apiEndpoint = process.env.NEXT_PUBLIC_GET_USER_PROFILE_API;
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },}
    );
    const apiData = await response.json();

    return {
      props: {
        locale: ctx.locale,
        seo: {
          ...seoDefualt,
          linkTo: '/account',
        },
        apiData,
        accessToken
      },
    };
  } catch (error) {
    console.error('Error fetching data from API:', error);
    return {
      props: {
        locale: ctx.locale,
        seo: {
          ...seoDefualt,
          linkTo: '/account',
        },
        apiData: null,
      },
    };
  };
}
