import { SignUp } from '@components/pages';
import { seoDefualt } from '@constants';
import { tran } from '@utilities/i18n';

export default function Index({ locale, apiData }) {
  const { locale: trans } = tran(locale);
  return <SignUp locale={locale} trans={trans} apiData={apiData} />;
}

export async function getServerSideProps(ctx) {
  try {
    const apiEndpoint = process.env.NEXT_PUBLIC_SIGNUP_URL; // API endpoint for sign-up
    const response = await fetch(apiEndpoint);
    const apiData = await response.json();

    return {
      props: {
        locale: ctx.locale,
        seo: {
          ...seoDefualt,
          linkTo: '/signup',
        },
        apiData,
      },
    };
  } catch (error) {
    console.error('Error fetching data from sign-up API:', error);
    return {
      props: {
        locale: ctx.locale,
        seo: {
          ...seoDefualt,
          linkTo: '/signup',
        },
        apiData: null,
      },
    };
  }
}
