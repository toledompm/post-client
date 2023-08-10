import { config } from "@/config/config";
import Image from "next/image";

export function BlogImage({ url, alt }: { url: string; alt: string }) {
  enum ImageSource {
    WEB,
    BUCKET,
  }

  const imageSource = url.startsWith("https://")
    ? ImageSource.WEB
    : ImageSource.BUCKET;

  let imageSrc = url;
  if (imageSource === ImageSource.BUCKET) {
    const { bucketUri, bucketPrefix } = config().images;
    imageSrc = `${bucketUri}/${bucketPrefix}/${url}`;
  }

  return (
    <div className="rounded-xl mb-2 pb-40 sm:pb-80 md:pb-120 lg:pb-160 relative overflow-hidden">
      <Image fill src={imageSrc} alt={alt} style={{ objectFit: "cover" }} />
    </div>
  );
}
