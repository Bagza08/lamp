import axios from 'axios';

const YOUTUBE_API_KEY = 'YOUR_YOUTUBE_API_KEY';

export const fetchVideoUrl = async (videoId: string): Promise<string | null> => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${YOUTUBE_API_KEY}&part=snippet`
    );

    // Extract the video URL from the response
    return `https://www.youtube.com/watch?v=${videoId}`;
  } catch (error) {
    console.error('Error fetching video link:', error);
    return null;
  }
};
