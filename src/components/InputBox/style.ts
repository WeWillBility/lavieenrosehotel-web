import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13px;
  width: 294px;
  margin-right: 18px;
`;

const Text = styled.div`
    margin-right: auto;
    color: rgba(0, 0, 0, 0.44);
    font-size: 18px;
    font-family: Inter;
    font-weight: 500;
    line-height: 37.50px;
    word-wrap: break-word
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 18px;
  left: 10px;
  font-size: 16px;
  padding: 10px;
  resize: none;
  background-color: transparent;
  border-radius: 10px;
  border: 2px solid black;
`;

const Counter = styled.div`
  position: absolute;
  color: #696969;
  bottom: 10px;
  right: 10px;
  text-align: right;
  font-family: sans-serif;
  font-size: 16px;
  margin-top: 5px;
`;

export const S = {
  Container,
  Text,
  Textarea,
  Counter,
};