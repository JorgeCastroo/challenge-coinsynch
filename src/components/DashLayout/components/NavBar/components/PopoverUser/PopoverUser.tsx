import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import * as S from "./styles";
import Popover from "@/components/Popover/Popover";
import Avatar from "@/assets/avatar.png";
import Paragraph from "@/components/Typography/Paragraph/Paragraph";
import { Icon } from "@/components/Icon/Icon";

export const PopoverUser: React.FC = () => {
  const { query, pathname, push } = useRouter();

  const handleDelete = () => {
    const updatedQuery = query;
    delete updatedQuery.popoverUser;

    push({ pathname, query: { ...query } });
  };

  const handleLogout = () => {
    push("/");
  };

  return (
    <S.Container>
      <Popover
        open={!!query.popoverUser}
        onEscapeKeyDown={handleDelete}
        onCloseAutoFocus={handleDelete}
        onFocusOutside={handleDelete}
        onPointerDownOutside={handleDelete}
        trigger={
          <S.ContainerTrigger
            onClick={() =>
              push({ pathname, query: { ...query, popoverUser: true } })
            }
          >
            <Image src={Avatar} width={32} height={32} alt="avatar" />
            <Paragraph>Aulus</Paragraph>
            <S.AnimationIcon rotate={!!query.popoverUser}>
              <Icon name="arrowUp" size={8} color="#ACABB7" />
            </S.AnimationIcon>
          </S.ContainerTrigger>
        }
        content={
          <S.ContainerContent onClick={handleLogout}>
            <Icon name="logout" size={16} color="#ACABB7" />

            <Paragraph>Logout</Paragraph>
          </S.ContainerContent>
        }
      />
    </S.Container>
  );
};
