import React, {FC, useEffect, useState} from 'react';
import {withExpoSnack} from 'nativewind';
import {View, Text, Image} from 'react-native';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const imageUri = 'https://www.baidu.com/img/PCfb_5bf082d29588c07f842ccde3f97243ea.png';

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
      <Image source={{uri: imageUri}} blurRadius={3} />
    </StyledView>
  );
};

export default withExpoSnack(Demo);
