import React, { useState } from "react";
import { S } from "./style";
import TopBar from "../../components/TopBar/TopBar";
import SidebarUser from "../../components/Sidebar/SidebarUser";
import BodyTitle from "../../components/BodyTitle/BodyTitle";
import CatBox from "./CatBox";
import CatNotFound from "./CatNotFound";

type CatData = {
    name: string;
};

const AdminCheckAmenCat: React.FC = () => {
    const [CatData, setCatData] = useState<CatData[]>([
        // dummy 데이터
        {
            name : "스키장",
        },
        {
            name : "워터파크",
        },
    ]);
  
    return (
        <>
            <S.Container>
                <TopBar pageName="부대/복리 시설 관리"/>

                <S.MainBody>
                    <SidebarUser />

                    <S.RightBody>
                        <BodyTitle bodyName="부대/복리 시설 카테고리 확인"/>
                        
                        {CatData.length === 0 ? (
                                <CatNotFound /> // 예약이 없으면 없다는 메세지와 예약 바로가기 랜더링
                            ) : (
                                // 예약이 있으면 예약 리스트 랜더링
                                <S.CatList> 
                                    {CatData.map((Cat, index) => (
                                        <CatBox key={index} CatData={Cat} />
                                    ))}
                                </S.CatList>
                            )}
                    </S.RightBody>
                </S.MainBody>
            </S.Container>
        </>
    );
};

export default AdminCheckAmenCat;