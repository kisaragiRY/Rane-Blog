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
    padding: 4em 10% 1em 10%;
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
    }

    .navbar-menu-links a {
        margin: 0 2em;
    }

    @media (max-width:900px) {
        font-size: 1.7em;
        .navbar-menu-links{
            visibility: hidden;
            transition: visibility 0s, opacity 0.5s linear;
        }
        .navbar-menu-links.is-active{
            position: fixed;
            inset: 0 0 0 0;
            visibility: visible;
            display: flex;
            flex-direction: column;
            font-size: 1rem;
            font-size: 1.7em;
            text-align: right;
        }
        .navbar-menu-links.is-active a{
            padding: .5em;
        }
    }
`