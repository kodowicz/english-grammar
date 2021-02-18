const fonts = {
  majorFamily: `'Playfair Display', serif`,
  minorFamily: 'Montserrat, sans-serif',
  regular: 400,
  medium: 500,
  bold: 600
};

export const lightTheme = {
  scrollThumb: '#cacaca',
  scrollTrack: '#303030',
  white: '#ffffff',
  black: '#111111',
  link: '#595959',
  hoverLink: '#111111',
  lightGray: '#757575',
  darkGray: '#303030',
  ...fonts
};

export const darkTheme = {
  scrollThumb: '#303030',
  scrollTrack: '#cacaca',
  white: '#111111',
  black: '#ffffff',
  link: '#d6d6d6',
  hoverLink: '#ffffff',
  lightGray: '#999999',
  darkGray: '#ffffff',
  ...fonts
};
