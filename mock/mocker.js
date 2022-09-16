const generateArticle = require('./articleSingle');

module.exports = () => ({
  article: {
    data: generateArticles(10),
  },
  articleSingle: generateArticleWrapped(10),
  operasional: {
    data: {
      hariOperasional: 'Senin - Jumat',
      jamOperasional: '06.00 - 22.00',
      harga: '5.000',
    },
  },
});

function generateArticles(count) {
  let articles = [];
  for (let i = 0; i < count; i++) {
    articles.push(generateArticle(i + 1));
  }
  return articles;
}

function generateArticleWrapped(count) {
  let articles = [];
  for (let i = 0; i < count; i++) {
    articles.push({ data: generateArticle(i + 1), id: i + 1 });
  }
  return articles;
}
