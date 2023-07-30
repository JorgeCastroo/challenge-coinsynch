import React from "react";

import * as S from "./styles";
import Logo from "@/assets/Logo.svg";
import Image from "next/image";
import { PopoverUser } from "./components/PopoverUser/PopoverUser";

export const NavBar: React.FC = () => {
  return (
    <S.Navbar>
      <Image src={Logo} width={121} alt="Logo" />
      <PopoverUser />
    </S.Navbar>
  );
};
