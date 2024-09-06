// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Drawer: {
      // Define custom styles here
      parts: ['dialog', 'overlay', 'header', 'body', 'footer'],
      baseStyle: {
        dialog: {
          bg: 'gray.100',
        },
        overlay: {
          bg: 'rgba(0, 0, 0, 0.5)',
        },
        header: {
          fontSize: 'lg',
          fontWeight: 'bold',
        },
        body: {
          fontSize: 'md',
        },
      },
    },
  },
});

export default theme;
