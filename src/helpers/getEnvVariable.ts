
export const getEnvVariables = () => {

  // import.meta.env;

  return {
    // ...import.meta.env
    VITE_API_TOKEN: import.meta.env.VITE_API_TOKEN,
    VITE_API_URL: import.meta.env.VITE_API_URL,
    VITE_IMG_PATH: import.meta.env.VITE_IMG_PATH
  }
}