import { S } from "./style";

interface Props {
  value: string;
  label: string;
  onChange: (value: string) => void;
  width: string | number;
}

const ViewBox: React.FC<Props> = ({ label, value, width="500px" }) => {
  return (
    <S.Container style={{ width: `${width}`}}>
      <S.Text>{label}</S.Text>
      <S.Textarea
        value={value}
      />
    </S.Container>
  );
};

export default ViewBox;
