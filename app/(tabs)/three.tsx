import React, {FC, useEffect, useState} from 'react';
import {withExpoSnack} from 'nativewind';
import {View, Text} from 'react-native';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const Demo: FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <StyledView>
      <StyledText className="text-red-600">{count}</StyledText>
    </StyledView>
  );
};

export default withExpoSnack(Demo);
