import { config } from '@/config/config';

const { bucketUri, bucketPrefix } = config().images;

export function buildImageUri(imagePath: string): string {
  return `${bucketUri}/${bucketPrefix}/${imagePath}`;
}