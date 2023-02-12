import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo";

const RawHeader = ({className}) => 
{
    return (
        <header className={className}>
            <div> 
                <Link to='/'>
                    <div className="container-logo">
                        <Logo/>
                        <p className="container-logo__title">PODCASTER</p>
                    </div>
                </Link>
            </div>
        </header>
    )
}

const Header = styled(RawHeader)`
    border-bottom: 1px solid #ccc;
    box-shadow: 1px 1px 5px #592A08; 

    .container-logo 
    {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-left: 30px;
    }
    .container-logo__title
    {
        color: #1b3954;
        font-family: 'Solitreo', cursive;
        font-size: 24px;
        font-weight: bold;
        text-decoration: solid underline #fda049 2px;
    }
`

export default Header;