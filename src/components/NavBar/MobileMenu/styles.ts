import styled from "styled-components";

export const NavMobile = styled.nav`
display: flex;

.menu {
    display: none;
  }

   .menuOpen {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    list-style: none;
    box-sizing: border-box;
    margin: 0;
    z-index: 5;
    background-color: #374267;

    a {
      text-decoration: none;
      font-size: 32px;
      font-weight: 700;
      color: white;
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      text-align: center;

      li {
        justify-content: space-between;
      }
    }
  }

  .icon,
  .close {
    border: none;
    background-color: transparent;
    position: absolute;
    z-index: 4;
    right: 1%;
    top: 1%;
    cursor: pointer;
    color: #374267;

  }

  .close {
    visibility: hidden;
    position: fixed;
  }

  .close.closeActive {
    visibility: visible;
    z-index: 6;
    color: white;
    right: 1%;
    top: 1%;
    position: fixed;
  }
`