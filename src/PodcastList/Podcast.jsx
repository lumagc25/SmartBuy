import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RawPodcastList = ({className, podcastsByGet, filterPodcasts}) => 
{
    const [podcastsToShow, setPodcastsToShow] = useState([]);

    useEffect(() =>
    {
        setPodcastsToShow(podcastsByGet);
    },[podcastsByGet]);

    useEffect(() => 
    {
        !filterPodcasts.length ? setPodcastsToShow(podcastsByGet) : setPodcastsToShow(filterPodcasts);
        
    },[filterPodcasts]);

    return (
        <section className={className}>
            {podcastsToShow.length ?
            podcastsToShow.map((itemPodcast) => (    
                <Link className="container-podcast" key={itemPodcast.id.attributes["im:id"]} to={`podcast-details/${itemPodcast.id.attributes["im:id"]}`} >
                    <div 
                        className="container-name-author"
                    >
                        <p> {itemPodcast["im:name"].label} </p>
                        <p> Author: {itemPodcast["im:artist"].label} </p>
                    </div>
                    {
                    itemPodcast["im:image"]
                    .filter(itemImage => itemImage.attributes.height >= 170)
                    .map((filterImage, index) => (
                        <div key={index} className="container-image">
                            <img
                                className="container-image__image"
                                src={filterImage.label}
                                alt="image_error" 
                            />
                        </div>
                    ))  
                    }
                </Link>
            ))
            : <></>
            }
        </section>
    )
}

const PodcastList = styled(RawPodcastList)`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 30px 50px;

    .container-podcast
    {
        border: 1px solid #ccc;
        box-shadow: 7px 7px 15px #592A08; 
        position: relative;
        height: 220px;
        width: 300px;
        display: flex;
        justify-content: end;
        flex-direction: column;
        align-items: center;
        margin: 72px 34px;
        padding: 0px 15px;
    }
    .container-name-author
    {
        //border: 1px solid black;
        display: flex;
        justify-content: end;
        align-items: center;
        flex-direction: column;
        margin-bottom: 10px;
    }
    .container-name-author>p 
    {
        text-align: center;
    }
    .container-name-author>p:first-child
    {
        font-weight: bold;
        font-size: 14px;
        margin: 0;
    }
    .container-name-author>p:last-child
    {
        font-size: 13px;
    }
    .container-image 
    {
        //border: 1px solid blue;
        width: 140px;
        height: 140px;
        position: absolute;
        bottom: 52%;
    }
    .container-image  .container-image__image 
    {
        width: 100%;
        height: auto;
        border-radius: 140px;
    }
    @supports(object-fit: cover)
    {
        .container-image .container-image__image 
        {
            height: 100%;
            object-fit: cover;
            object-position: center center;
        }
    }
`

export default PodcastList;
