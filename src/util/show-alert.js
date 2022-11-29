import {Alert} from 'react-native';

export default async function(opts) {
  return new Promise((resolve) => {
    Alert.alert(opts.title, opts.description, [
      {
        text: opts.button,
        onPress: () => resolve()
      }
    ]);
  });
}