import styled from "styled-components";
import { AutoComplete } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const RawSearchBar = ({className, podcastsByGet, setFilterPodcasts}) => 
{
    const filterByAutocomplete = (value) =>
    {
        if (value === "") 
        {
            setFilterPodcasts(podcastsByGet);
        }else 
        {
            let filter = podcastsByGet.filter(itemPodcast => 
                itemPodcast["im:name"].label.toUpperCase().includes(value.toUpperCase()) === true
                || 
                itemPodcast["im:artist"].label.toUpperCase().includes(value.toUpperCase()) === true
            ) 
            setFilterPodcasts(filter);
        }
        
    }

    return (
        <section className={className}>
            <AutoComplete
                className="autocomplete"
                placeholder={<div style={{display:'flex', alignItems:'center', height:'100%', alignContent:'center'}}><SearchOutlined style={{marginRight:'6px'}}/><p>Filter podcasts...</p></div>}
                onChange={filterByAutocomplete}
            />
        </section>
    )
}

const SearchBar = styled(RawSearchBar)`
    display: flex;
    justify-content: flex-end;

    .autocomplete
    {
        width: 370px;
        margin: 40px 76px 0 0;
        border-bottom: 1px solid #ccc;
        box-shadow: 4px 2px 8px #592a08;
    }
    .autocomplete .ant-select-selector
    {
        height: 40px;
        border-radius: 0;
    }
    .autocomplete .ant-select-selector .ant-select-selection-search>input
    {
        height: 100%;
        font-size: 18px;
    }
`
export default SearchBar;