import type { Preview } from "@storybook/react";


import '../lib/styles/index.css'
import '../lib/styles/variants.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
