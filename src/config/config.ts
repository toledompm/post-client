type Config = {
  api: {
    url: string;
  };
  images: {
    bucketUri: string;
    bucketPrefix: string;
  };
};

export function config(): Config {
  return {
    api: {
      url: process.env.POST_API_URL || "http://localhost:3030",
    },
    images: {
      bucketPrefix: process.env.BUCKET_PREFIX || "n/zzzzzzzzz/b/xxxxxxx/o/",
      bucketUri:
        process.env.BUCKET_URI ||
        "https://objectstorage.sa-saopaulo-1.oraclecloud.com",
    },
  };
}
