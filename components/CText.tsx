import React from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native-unistyles';

type CTextProps = {
  text: string
}

export const CText: React.FunctionComponent<CTextProps> = ({ text }) => {
   return (
      <Text style={styles.text}>
        {text}
      </Text>
   )
}

export const styles = StyleSheet.create(theme => ({
  text: {
    fontSize: 64,
    textAlign: 'center',
    color: theme.colors.accent
  }
}))