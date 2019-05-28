import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderUl = styled.ul`
        position: fixed;
        list-style: none;
        top: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 45px;
        border: 1px solid;
        overflow: hidden;
        background-color: #333;
`;

const HeaderLi = styled.li`
        float: right;
        display: block;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        :hover:not(.active) {background-color: #111;}
`;

const NavText = styled.span`
    color: white;
`;

export default function Header() {
    return (
        <HeaderUl>
            <HeaderLi>
                <Link to="/about"><NavText>關於我</NavText></Link>
            </HeaderLi>
            <HeaderLi>
                <Link to="/"><NavText>Home</NavText></Link>
            </HeaderLi>
        </HeaderUl>
    );
}