import copyImg from '../../assets/images/copy.svg';

import { RoomCodeStyled } from './styles';

type RoomCodeProps = {
  code: string,
}

export function RoomCode(props: RoomCodeProps) {
function copyRoomCodeToClipboard() {
  navigator.clipboard.writeText(props.code)
}

  return (
    <RoomCodeStyled className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </RoomCodeStyled>
  );
}