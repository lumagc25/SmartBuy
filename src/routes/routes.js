import { Home, ChapterPodcastDetails, PodcastDetails} from "../pages/MainPages";

const routes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/podcast-details/:id",
        element: <PodcastDetails/>
    },
    {
        path: "/chapterpodcast-details",
        element: <ChapterPodcastDetails/>
    },
];

export default routes;