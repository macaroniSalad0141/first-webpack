import * as React from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  background-color: green;
  color: #fff;
  padding: 1em;
`;

const Alert: React.FC<{ message: string }> = (props) => {
  const { message } = props;
  return (
    // <div style={({ backgroundColor: 'green', color: '#fff', padding: '1em' })}>
    <AlertContainer>
      alert {message}
    </AlertContainer>
  )
}

export default Alert;