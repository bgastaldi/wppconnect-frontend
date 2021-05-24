import styled from "styled-components";

export const Layout = styled.aside`
  display: flex;
  flex-direction: column;
  background: #fff;
  //padding: 2em;

  height: 100%;
  width: 35rem;
  min-width: 20%;
  overflow: hidden auto;

  position: relative;
  transition-duration: 200ms;

  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #929090;
    transition-duration: 200ms;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #a5a5a5;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-left: 1em;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    //padding: 1em;

    li {
      //margin-top: 1em;
      border-bottom: 1px solid rgba(0, 0, 0, .1);
    }

    .active {
      background: aliceblue;

    }
  }
`;

export const SearchComponent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 2em;
  transition-duration: 200ms;
  position: sticky;
  top: 0;
  padding: 2em;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  z-index: 1;

  svg {
    width: 15px;
    height: 15px;
  }

  input {
    border: 0;
    width: 100%;
    margin-left: .5em;
    outline: 0;
  }

  :hover {
    input {
      //cursor: pointer;
    }

    svg {
      color: #47a7f6;
    }
  }
`;

export const ContactInfo = styled.label`
  input[type=radio] {
    display: none;
  }

  input[type=radio]:checked + .contact-info {
    background: #F4F6F9;
  }
`;

export const UserData = styled.div`
  display: flex;
  cursor: pointer;

  padding: 20px 10px;
  border-radius: 7px;

  //border: 1px solid #F4F6F9;
  transition-duration: 200ms;

  :hover {
    //transform: scale(1.03);
    background: aliceblue;
  }

  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
  }

  .principal-info {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .contact-name {
    font-weight: 500;
    font-size: 1rem;
  }

  .contact-message {
    display: flex;
    position: relative;
    width: 100%;

    .left {
      color: #333;
      font-size: 1rem;
      font-weight: 400;
      position: relative;
      flex-grow: 1;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 140px;
    }

    .unread-message {
      position: absolute;
      right: 0;
      margin-left: 10px;

      width: 20px;
      height: 20px;
      background: #299559;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;

      p {
        font-weight: 600;
      }
    }
  }
`;