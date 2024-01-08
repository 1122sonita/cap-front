// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetchDataByGet, requestInit } from '@service/strapi';
import { getDomain } from '@utilities/dev';

export default async (req, res) => {
  try {
    const cloakingUrl = process?.env?.NEXT_PUBLIC_CLOAKING_LINK;
    const projectName = process?.env?.NEXT_PUBLIC_PROJECT_NAME;

    if (cloakingUrl && projectName) {
      await fetch(
        fetchDataByGet('/statistics'),
        requestInit({
          datetime: new Date(),
          domain: getDomain(),
          cloaking_url: cloakingUrl,
          project_name: projectName,
        })
      );
    }

    return res.status(200).json({ status: 'ok' });
  } catch (error) {
    return res.status(200).json({ status: 'error', msg: error.message.toString() });
  }
};
