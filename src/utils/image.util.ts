export function isImageUrlValid(url: string) {
  const pattern = /\.(jpeg|jpg|gif|png|bmp|webp|svg)$/i;

  return pattern.test(url);
}
