import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColors = {
  blackColor: "#121212",
  pointColor: "#CDE990",
};

export const GlobalStyled = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}

body{
    background-color: ${mainColors.blackColor};
    color: white;
    letter-spacing: -1px;
    word-break: break-all
    /* 단어 별로 줄바꿈 처리 */
}

ul,li{
    list-style: none;
}

a{
    text-decoration: none;
    color: "white";
}
`;
