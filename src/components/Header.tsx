import * as React from "react";
import { HeaderCSS } from "./Header.styles";

type props = {
  heading: string;
};

const Header: React.FC<props> = ({ heading }) => (
  <HeaderCSS>
    <h1 className="header">{heading}</h1>
  </HeaderCSS>
);

export default Header;
