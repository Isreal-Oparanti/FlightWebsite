import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #222;
  padding: 8px;
  box-shadow: 0px 1px 2px rgb(67, 197, 95);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #eee;
  ul {
    list-style: none;
    display: flex;
    align-items: center;

    li.logo-box {
      margin-right: 100px;

      #logo {
        margin-left: 12px;
        border-radius: 50px;
        width: 30px;
        height: 30px;
        border: 2px solid #dedede;
        color: #dedede;
        font-family: sans-serif;
        font-size: 1rem;
      }
    }

    li {
      margin-right: 16px;

      a {
        text-decoration: none;
        display: inline-block;

        color: inherit;
      }
    }
  }
`;
