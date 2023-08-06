type Config = {
  api: {
    url: string;
  };
};

export function config(): Config {
  return {
    api: {
      url: process.env.POST_API_URL || 'http://localhost:3030',
    },
  };
}
