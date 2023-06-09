import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
import glyphMap from '../assets/fonts/iconfont.json';

const IconFont = createIconSet(glyphMap, 'iconfont', 'iconfont.ttf');

export default props => (
  <IconFont
    style={{
      fontSize: 26,
    }}
    {...props}
  />
);
