import PageLayout from "../../components/PageLayout/PageLayout";

const Installation = () => {
  return (
    <PageLayout>
      <h1>Installation</h1>
      <p>Run the following command to add Pulsewidth UI to your project:</p>
      <pre>
        <code>{`
pnpm install pulsewidth-ui --save
        `}</code>
      </pre>
      <h2>Peer Dependencies</h2>
      <p>
        Please note that react and react-dom are peer dependencies, meaning you
        should ensure they are installed before installing Pulsewidth UI.
      </p>
      <pre>
        <code>{`
"peerDependencies": {
    "react": "^17.0.0 || ^18.0.0",
    "react-dom": "^17.0.0 || ^18.0.0"
},`}</code>
      </pre>
    </PageLayout>
  );
};

export default Installation;
