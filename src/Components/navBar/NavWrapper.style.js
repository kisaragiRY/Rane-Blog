import styled from 'styled-components';

export const NavWrapper = styled.div`
    top: 0;
    width: 100%;
    background-color: #FFFAF8;
    display: flex;
    position: ${(props) => (props.isHomePage ? 'static' : 'sticky')};
    justify-content: space-between;
    list-style: none;
    z-index: 1000;
    align-items: center;
    font-size: 1.5rem;
    padding: ${(props) => (props.isHomePage ? '4em 10% 1em 10%': '1em 10% .5em 10%') };
    border-bottom: ${(props) => (props.isHomePage ? 'none': 'solid 2px black') };
    font-weight: bold;
    
    a {
        position: relative;
    }
    a::after {
        content: " ";
        position: absolute;
        background-color: #BC3E2F;
        height: .1em;
        width: 0;
        left: 0;
        bottom: -10%;
        transition: 0.3s
    }
    a:hover::after {
        width: 100%;
    }

    .navbar-menu-links {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 40%
    }

    @media (max-width:900px) {
        font-size: 1.7em;
        .navbar-menu-links{
            width: 100%;
            display: none;
        }
        .navbar-menu-links.is-active{
            position: fixed;
            inset: 0 0 0 0;
            display: flex;
            flex-direction: column;
            font-size: 1rem;
            font-size: 1.7em;
            text-align: center;
            justify-content: space-around;
            padding: 3em 0;

            background-color: #FFFAF8;
        }
    }
`