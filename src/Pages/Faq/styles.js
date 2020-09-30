import styled from "styled-components";

export const Container = styled.div`
  ul {
    list-style: none;

    li {
      padding: 0.5em 0;
      border-bottom: solid #ccc 1px;
      .li_mainDiv {
        position: relative;

        .add_remove_icon {
          color: rgb(80, 155, 245);
          position: absolute;
          left: 0;
          top: -0.05em;
          font-size: 1.5em;
        }

        h3 {
          margin-left: 1.5em;
        }

        p {
          margin: 1em;
          color: #333;
        }
      }
    }
  }
`;
