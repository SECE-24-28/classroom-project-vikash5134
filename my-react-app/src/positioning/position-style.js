import styled from "styled-components";
export const PostionStyle = styled.div`
  position: absolute;
  .element {
    width: 300px;
    height: 300px;
    background-color: blue;
    position: relative;
    top: 100px;
  }
  .element__one {
    width: 300px;
    height: 300px;
    background-color: red;
    margin-top: 20px;
  }
  .square {
    width: 1100px;
    height: 1100px;
    background-color: pink;
    position: relative;
    
  }
  .square__element {
    background-color: white;
    width: 500px;
    height: 500px;
    position: absolute;
    left: 50px;
    top: 50px;
    transform: translate(+50%, +50%);
    
  }
`;