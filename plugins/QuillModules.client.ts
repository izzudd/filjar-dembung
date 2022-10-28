import ImageUploader from 'quill-image-uploader';
import { APIResponse } from '~~/types/content';

export default defineNuxtPlugin((app) => ({
  provide: {
    quillModules: {
      name: 'ImageUploader',
      module: ImageUploader,
      options: {
        upload: uploadImage,
      },
    },
  },
}));

async function uploadImage(file) {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('deskripsi', '');

  interface ImageUploadResponse extends APIResponse<null> {
    linkImage: string;
  }

  const { data, error } = await useFetch<ImageUploadResponse>('/picture', {
    baseURL: useRuntimeConfig().public.apiEndpoint,
    method: 'POST',
    body: formData,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem('admin_token')}`,
    },
    initialCache: false,
  });

  if (error.value || !data.value.success)
    throw new Error(data.value.error || 'Error uploading image');
  return data.value.linkImage;
}
