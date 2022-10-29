import ImageUploader from 'quill-image-uploader';

export default defineNuxtPlugin((app) => ({
  provide: {
    quillModules: {
      name: 'ImageUploader',
      module: ImageUploader,
      options: {
        upload: useUploadImage,
      },
    },
  },
}));
