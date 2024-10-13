# **Pulsewidth UI**

A lightweight and customizable React UI component library built with styled-components for consistent design and ease of use.

## **Features**

- 📦 **Pre-built Components**: Includes a range of commonly used components like buttons, modals, cards, and forms.
- 🎨 **Customizable**: Easily theme components using styled-components and props.
- ⚙️ **Fully Typed**: Written in TypeScript for better developer experience and type safety.
- 📱 **Responsive**: Components are responsive by default with customizable breakpoints.
- 🔌 **Easy Integration**: Designed to work seamlessly with any React project.

---

## Documentation

To view a more in-depth usage and installation guide, visit https://pulsewidthlabs.com/pulsewidth-ui

API available at https://pulsewidthlabs.com/pulsewidth-ui/docs

---

## **Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

---

## **Installation**

To install the library, run:

```bash
npm install pulsewidth-ui styled-components
```

---

## **Usage**

```jsx
import React from "react";
import { Button, Card, ThemeProvider } from "pulsewidth-ui";
import { myCustomTheme } from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={myCustomTheme}>
      <div>
        <Card>
          <h2>Welcome to Pulsewidth UI</h2>
          <p>This is a customizable card component.</p>
          <Button onClick={() => alert("Hello world!")}>Click Me</Button>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default App;
```

---

## **Customization**

### Theming

All components support theming using styled-components. You can provide your own theme to override default styles and colors.

To create a custom theme:

```js
// theme.js
export const myCustomTheme = {
  colors: {
    primary: "#3498db",
    secondary: "#2ecc71",
    background: "#f5f5f5",
    text: "#333",
  },
  fontSizes: {
    small: "12px",
    medium: "16px",
    large: "20px",
  },
};
```

To apply the theme in your app:

```jsx
import { ThemeProvider } from "styled-components";
import { myCustomTheme } from "./theme";

<ThemeProvider theme={myCustomTheme}>
  {/* Your components here */}
</ThemeProvider>;
```

### Styled Props

You can customize components directly via props. For example, the Button component can accept variant, size, and disabled props:

```jsx
<Button variant="secondary" size="large">
  Secondary Button
</Button>
```

---

## **Contributing**

We welcome contributions from the community! Here’s how you can help:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Write your code and tests.
4. Submit a pull request with a detailed explanation of your changes.

Please make sure to adhere to our Code of Conduct.

### Running Locally

To run the project locally for development:

1.  Clone the repo:
    ```bash
    git clone https://github.com/samphelan/pulsewidth-ui.git
    cd pulsewidth-ui
    ```
2.  Install dependencies:
    ```bash
    pnpm install
    ```
3.  Run the development server:
    ```bash
    pnpm start
    ```
4.  Open your browser to http://localhost:5173/ to see the example app.

---

## **License**

MIT

---

## **Contact**

For any issues or questions, feel free to open an issue or reach out via email at samphelan7@gmail.com.
