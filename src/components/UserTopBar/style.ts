import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    margin: 0 auto;
    width: 100%;
    height: 92px;
    background-color: #FFFFFF;
    border-bottom: 1px solid #C6BCBC;
`;

const ResvRoomBtn = styled.div`
    margin-left: 88px;
    padding: 31px 34px;
    color: black;
    font-size: 20px;
    font-family: Inter;
    font-weight: 700;
    line-height: 30px;
    word-wrap: break-word
`;

const ResvAmenBtn = styled.div`
    margin-left: 11px;
    padding: 31px 34px;
    color: black;
    font-size: 20px;
    font-family: Inter;
    font-weight: 700;
    line-height: 30px;
    word-wrap: break-word
`;

const ResvTrafBtn = styled.div`
    margin-left: 11px;
    padding: 31px 34px;
    color: black;
    font-size: 20px;
    font-family: Inter;
    font-weight: 700;
    line-height: 30px;
    word-wrap: break-word
`;

const StyledLink = styled(Link)`
	box-sizing: border-box;
	text-align: center;
    text-decoration: none;
`;

export const S = {
    Container,
    ResvRoomBtn,
    ResvAmenBtn,
    ResvTrafBtn,
    StyledLink,
};