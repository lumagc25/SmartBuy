import styled from "styled-components";

const RawFooter = ({className}) => 
{
    return (
        <footer className={className}>
            <div className="containerFooter">
                <p>Lucía Mariane Gutiérrez Castro</p>
                <p>Prueba Redegal</p>
            </div>
        </footer>
    )
}

const Footer = styled(RawFooter)`
    border-bottom: 1px solid #ccc;
    box-shadow: 1px 1px 5px #592A08;
    .containerFooter
    {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 20px 0;
    }
    .containerFooter>p
    {
        color: #1b3954;
        font-family: 'Solitreo', cursive;
        font-size: 24px;
        font-weight: bold;
        margin: 5px 0;
    }
`

export default Footer;