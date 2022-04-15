import { css } from 'react-emotion';

export const cssVideo = css({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  marginTop: 16,
  position: 'absolute',
  top: 0,
  left: 0,
});

export const videoContainer = css({
  position: 'relative',
  paddingBottom: '75%',
  height: 0,
  marginBottom: '1em',
});
