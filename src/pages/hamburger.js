/* import React, { useState, useEffect } from "react"
import styled, { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  body {
    margin: 0;
  }
`

const MenuIcon = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;

  div {
    width: 1.5rem;
    height: 0.2rem;
    background: black;
    border-radius: 5px;
    transform origin: 1px;
    position: realtive;
  }
`

const MenuLinks = styled.nav`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
   height: 100vh;
   width: 100%;
   position: absolute;
   top: 0;
   right: 0;
   transform: ${({ nav }) => (nav ? "translateX(0)": "translateX(100%)")};


   ul {
     list-style-type: none;
   }

   li {
    margin-top: 1rem;
   }

   a {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    transition: color 300ms;

    :hover {
        color: #6ab4ff
    }
   }
`

const hamburger = () => {
  const [nav, showNav] = useState(false)

    return (
        <div>
        <Global />
        <MenuIcon onClick={() => showNav(!nav)}>
           <div />
           <div />
           <div />
        </MenuIcon>
        <MenuLinks nav={nav}>
         <ul>
            <li>
             <a href="#">Home</a>
            </li>
            <li>
             <a href="#">Characters</a>
            </li>
            <li>
             <a href="#">Weapons</a>
            </li>
            <li>
             <a href="#">Ships</a>
            </li>
            <li>
             <a href="#">Planets</a>
            </li>
            <li>
             <a href="#">Timeline</a>
            </li>
        </ul> 
        </MenuLinks>
        </div>
    )
}

export default hamburger */