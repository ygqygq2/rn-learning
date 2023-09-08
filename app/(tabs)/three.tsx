import React, {FC, useEffect, useState} from 'react';
import {View, Text} from 'react-native';

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
    <View>
      <Text>{count}</Text>
    </View>
  );
};

export default Demo;
