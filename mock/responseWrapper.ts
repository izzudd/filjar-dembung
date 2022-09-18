import { APIResponse } from '../types/content';

export const wrapResponse = <T, A = null>(
  data: T,
  additional?: A
): APIResponse<T, A> => {
  return {
    data: data,
    success: true,
    statusCode: 200,
    message: 'request demo mock',
    ...additional,
  };
};
