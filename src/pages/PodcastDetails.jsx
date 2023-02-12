import { Table } from "antd";
import styled from "styled-components";
import { getPodcast } from "../services/podcast";
import { useEffect, useState } from "react";

const RawPodcastDetails = ({className}) => {

    const [podcastByGet, setPodcastByGet] = useState(null);

    // useEffect(() => {
    //     getPodcast()
    // .then((podcast) => {
    //     setPodcastByGet(podcast);
    // })
    // .catch((error) => {
    //     console.log(error);
    // })
    // }, [])

    return (
        <section className={className}>
            <div className="container-podcast-detail">
                <div className="container-podcast-detail__container-image">
                    <img 
                        src="" 
                        alt="image_error" 
                    />
                </div>
                <div>
                    <p>Song Exploder</p>
                    <p>by Song Exploder</p>
                </div>
                <div>
                    <p>Description:</p>
                    <p>lalalalalallalalalaa</p>
                    
                </div>
            </div>
            <div className="container-podcast-episodes">
                <div className="container-podcast-episodes__episodes">

                </div>
                <Table 
                    className="container-podcast-episodes__table-episodes"
                />
            </div>
        </section>
    )
}

const PodcastDetails = styled(RawPodcastDetails)`
    display: flex;
    flex-wrap: wrap;

    .container-podcast-detail 
    {
        width: 20%;
    }
    .container-podcast-episodes 
    {
        width: 40%;
    }
`

export default PodcastDetails;