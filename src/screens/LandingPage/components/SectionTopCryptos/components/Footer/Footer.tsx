import React from "react";
import { useRouter } from "next/router";

import * as S from "./styles";
import { Button } from "@/components/Button/Button";
import { colors } from "@/styles/tokens/colors";

export const Footer: React.FC = () => {
  const { query, pathname, push } = useRouter();

  const handleViewMore = () => {
    if (query.limit) {
      const updatedQuery = query;
      delete updatedQuery.limit;

      push({
        pathname,
        query: { ...updatedQuery },
      });
    } else {
      push({
        pathname,
        query: { ...query, limit: 10 },
      });
    }
  };

  return (
    <S.Container>
      <Button
        css={{ color: `${colors["primary-500"]} !important` }}
        variant="text"
        color="primary"
        onClick={handleViewMore}
      >
        {query.limit ? "View less" : "View more"}
      </Button>
    </S.Container>
  );
};
