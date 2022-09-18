import { PostData } from '../types/content';
import articleSingle from './articleSingle';

export const generateArticles = (count: number) => {
  return generate(count);
};

function generate(count: number) {
  const articles: PostData[] = [];
  for (let i = 0; i < count; i++) {
    articles.push(articleSingle(i + 1));
  }
  return articles;
}
