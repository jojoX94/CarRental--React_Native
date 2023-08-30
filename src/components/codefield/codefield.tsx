import React from 'react';
import {Text, View} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import styles from './codefieldStyle';

const CELL_COUNT = 4;

type CodeTextfieldProps = {
  value: string;
  setValue: (value: string) => void;
  error: boolean;
  helperText: string;
};

const CodeTextfield = ({
  value,
  setValue,
  error,
  helperText,
}: CodeTextfieldProps) => {
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={styles.container}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFiledRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      {error && <Text style={styles.error}>{helperText}</Text>}
    </View>
  );
};

export default CodeTextfield;
