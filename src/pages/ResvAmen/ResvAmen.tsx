import React, { useState } from "react";

import TopBar from "../../components/TopBar/TopBar";
import UserTopBar from "../../components/UserTopBar/UserTopBar";
import { S } from './style';
import CalendarComponent from "../../components/Calendar/Calendar";

const PeoplePickerComponent = () => {
    // 인원 선택 컴포넌트 구현
    return <div>인원 선택</div>;
}

const RoomType = () => {
    // 객실 유형 선택 컴포넌트 구현
    return <div>객실 유형 선택</div>;
}

const ResvAmen: React.FC = () => {
    const [Calendar, setCalendar] = useState(false);
    const [NoP, setNoP] = useState(false);
    const [room, setRoom] = useState(false);

    return (
        <S.Container>
            <TopBar pageName="홈페이지" />
            <UserTopBar />
            <S.BlueLine />
            <S.Layout>
                <S.Contents onClick={() => setCalendar(!Calendar)}>
                    <S.Title>부대/복리시설 유형 선택</S.Title>
                    <S.SubTitle>어떤 시설을 선택할까요</S.SubTitle>
                </S.Contents>
                <S.Contents onClick={() => setNoP(!NoP)}>
                    <S.Title>일정</S.Title>
                    <S.SubTitle>시설이용일은 언제인가요</S.SubTitle>
                </S.Contents>
                <S.Contents onClick={() => setRoom(!room)}>
                    <S.Title>인원</S.Title>
                    <S.SubTitle>구성원은 어떻게 되나요</S.SubTitle>
                </S.Contents>
            </S.Layout>
                {Calendar && <CalendarComponent />} {/* 캘린더 컴포넌트 */}
                {NoP && <PeoplePickerComponent />} {/* 인원 선택 컴포넌트 */}
                {room && <RoomType />} {/* 인원 선택 컴포넌트 */}
            <S.BodyArea>
            </S.BodyArea>
        </S.Container>
        
    );
}

export default ResvAmen;