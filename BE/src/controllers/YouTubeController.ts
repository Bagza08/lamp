import { Request, Response } from 'express';
import axios from 'axios';
import { fetchVideoUrl } from '../services/youtube.service';

const YOUTUBE_API_KEY = 'AIzaSyA5KYQwUCELxKLhddVDX8ybnBLV8l24ylg';

export const getVideoLink = async (req: Request, res: Response) => {
  try {
    const videoId = req.params.videoId; 

    const videoUrl = await fetchVideoUrl(videoId);

    if (videoUrl) {
      res.status(200).json({ videoUrl });
    } else {
      res.status(500).json({ error: 'Error fetching video link.' });
    }
  } catch (error) {
    console.error('Error fetching video link:', error);
    res.status(500).json({ error: 'Error fetching video link.' });
  }
};
