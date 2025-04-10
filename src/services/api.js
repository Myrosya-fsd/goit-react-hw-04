import axios from "axios";

const accessKey = "wDJrbgc-60N-AInSrRu3zVgvzFFQFzf7dDE5aFukdrc";

export const fetchImages = async (query, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query,
      page,
      client_id: accessKey,
    },
  });

  return {
    images: response.data.results,
    totalPages: response.data.total_pages,
  };
};
