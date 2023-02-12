import styled from "styled-components"
import Podcast from "../PodcastList/Podcast"
import SearchBar from "../PodcastList/SearchBar"
import { useState, useEffect } from "react";
import { getAllPodcasts } from "../services/podcast";

const RawHome = ({className}) => 
{
    const [filterPodcasts, setFilterPodcasts] = useState([]);
    const [podcastsByGet, setPodcastsByGet] = useState([]);
    
    useEffect(() => 
    {
        getAllPodcasts()
        .then((podcasts) => {
            setPodcastsByGet(podcasts);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    //console.log('podcast:', podcastsByGet);

    return (
        <section className={className}>
            <SearchBar
                podcastsByGet={podcastsByGet}
                setFilterPodcasts={setFilterPodcasts}
            />
            <Podcast
                podcastsByGet={podcastsByGet}
                filterPodcasts={filterPodcasts}
            />
        </section>
    )
}

const Home = styled(RawHome)`
    display: flex;
    flex-direction: column;
`

export default Home;