'use client'

const IMGIX_BASE_URL='https://toledompm-804264211.imgix.net'

export default function buildImgixURL({ src, width, quality }) {
  const params = new URLSearchParams({
    fit: 'cover',
    w: width,
    q: quality || 75,
  });
  return `${IMGIX_BASE_URL}/${src}?${params}`;
}
