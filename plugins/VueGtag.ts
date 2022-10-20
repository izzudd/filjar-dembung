import VueGtag from 'vue-gtag';

/*
  Initialize vue-gtag
  Get measurment id from NUXT_PUBLIC_GA_MEASURMENT_ID env variable
  Set NUXT_PUBLIC_GA_MEASURMENT_ID with _DEV prefix for debug mode
*/
export default defineNuxtPlugin((nuxtApp) => {
  const unparsedId = useRuntimeConfig().public.gaMeasurmentId;
  const [measurmentId, env] = unparsedId.split('_');

  const gTagConfig: any = {
    config: {
      id: measurmentId,
      params: {
        anonymize_ip: true,
      },
    },
  };

  if (env === 'DEV') gTagConfig.config.params.debug_mode = true;

  nuxtApp.vueApp.use(VueGtag, gTagConfig);
});
