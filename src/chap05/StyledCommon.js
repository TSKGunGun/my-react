import styled from 'styled-components';
import PanelBase from './StyledCommon.css';

const MyPanel = styled.div`
  ${PanelBase}
  width: 300px;  
`

export default function StyledCommon() {
  return (
    <MyPanel><b>Styled JSX</b>は、JSX式にスタイル定義</MyPanel>
  )
}