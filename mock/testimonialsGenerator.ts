import { faker } from '@faker-js/faker';
import { Testimonial } from '~~/types/content';

const generate = (): Testimonial => ({
  identitas: faker.name.fullName(),
  testimoni: faker.lorem.sentences(),
});

export const generateTestimonials = (count: number) => {
  const testimonials: Testimonial[] = [];
  for (let i = 0; i < count; i++) testimonials.push(generate());
  return testimonials;
};
