import styled from 'styled-components';

const DailyNasaImage = styled.img`
  position: relative;
  width: 100${({ viewport }) => viewport ? 'vw' : '%'};
  height: 100${({ viewport }) => viewport ? 'vh' : '%'};
`;

export default DailyNasaImage;
