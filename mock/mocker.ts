import { generateArticles } from './articleGenerator';
import jsonServer from 'json-server';
import { wrapResponse } from './responseWrapper';
import { Operational } from '~~/types/content';
import { generateTestimonials } from './testimonialsGenerator';

function startServer() {
  const server = jsonServer.create();
  const router = jsonServer.router(generateRoutes(), {
    foreignKeySuffix: 'ID',
  });

  server.use(jsonServer.defaults());
  server.use(router);
  server.listen(3001, () => {
    console.log('json server is running');
  });
}

function generateRoutes() {
  const articles = generateArticles(10);

  return {
    articles: wrapResponse(articles),

    article: articles.map((article, idx) =>
      wrapResponse(article, { id: idx + 1 })
    ),

    operasional: wrapResponse<Operational>({
      day: 'Senin - Jumat',
      hour: '06.00 - 22.00',
      price: 5000,
    }),

    testimoni: wrapResponse(generateTestimonials(3)),
  };
}

startServer();
