import { createUseStyles } from '@orca-fe/simple-jss';
import jssAutoPrefix from '@orca-fe/jss-plugin-auto-prefix';

const prefix = 'pdf-tooltip-painter';

export default createUseStyles(
  {
    root: {
      position: 'relative',
      height: '100%',
      pointerEvents: 'none',
      '& > *': {
        pointerEvents: 'initial',
      },
    },
  },
  {
    classNamePrefix: prefix,
    plugins: [jssAutoPrefix({ prefix })],
  },
);