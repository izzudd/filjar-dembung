const devRobots = `User-agent: *
Disallow: /`;

const prodRobots = `User-Agent: *
Allow: /
Disallow: /artikel
`;

export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  event.res.setHeader('content-type', 'text/plain; charset=utf-8');
  return config.siteState === 'production' ? prodRobots : devRobots;
});
