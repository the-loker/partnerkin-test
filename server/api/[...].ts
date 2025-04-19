import { joinURL } from 'ufo';

export default defineEventHandler((event) => {
  const { API_URI, API_KEY } = useRuntimeConfig();
  const path = event.path.replace(/^\/api\//, '');
  const url = new URL(joinURL(API_URI, path));

  url.searchParams.set('api_key', API_KEY);

  return proxyRequest(event, url.toString());
});
