import React, { useState } from "react";
import { S } from "./style";
import Button from "../../components/Button/Button";

const CatNotFound: React.FC = () => {
  return (
    <>
        <S.NotFoundContainer>
          <S.NotFoundText>현재 객실 카테고리가 없습니다.</S.NotFoundText>
        </S.NotFoundContainer>
    </>
  );
};

export default CatNotFound;