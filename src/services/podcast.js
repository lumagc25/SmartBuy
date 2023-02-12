import axios from "axios";

export const getAllPodcasts = async () => 
{
    const podcasts = await axios.get('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
    return podcasts.data.feed.entry;
}

export const getPodcast = async (podcastId) => 
{
    const podcast = await axios.get(`https://itunes.apple.com/lookup?id=${podcastId}`)
    return podcast.data;
}