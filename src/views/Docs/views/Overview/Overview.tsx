import PageLayout from "../../components/PageLayout/PageLayout";

const Overview = () => {
  return (
    <PageLayout>
      <h1>PulsewidthUI - Overview</h1>
      <p>
        Pulsewidth UI is an open-source, flexible & intuitive UI library for
        React.
      </p>
      <h2>Why Pulsewidth UI?</h2>
      <p>
        The Pulsewidth UI library was built to support the proprietary
        applications developed by Pulsewidth Labs. Other UI libraries were too
        rigid or lacked certain features that were needed for these specific
        projects, so we decided to make our own that prioritized flexibility and
        developer experience.
      </p>
      <h3>Customization</h3>
      <p>
        Pulsewidth components are intended to <i>extend</i> the features of
        basic html tags. The simpler components that correspond directly to
        these tags often do exactly that -- they extend the ComponentProps of
        the underlying html tag so that it can be used in the same way it would
        be without a library, but with additional features and styling.
      </p>
      <h3>Polymorphic Components</h3>
      <p>
        Many components are also polymorphic, meaning the root element can be
        overridden with another React component or an html element. Want the
        styling of a button but the behavior and accessibility features of an
        anchor tag (or a react-router &lt;Link&gt; component)? Just use the
        Button component with the "as" prop.
      </p>
      <h3>Lightweight</h3>
      <p>
        Theming and styling is done with CSS modules and global CSS with CSS
        variables - no external libraries. It is fast, lightweight, and
        reliable, and it doesn't require you to download any libraries other
        than React itself.
      </p>
      <h3>Accessibility</h3>
      <p>
        We strive to make all components accessible to end users who require
        assistive technology, and offer recommendations for optimizing
        accessibility throughout our documentation. Our development process
        includes automated a11y accessibility checks to guarantee usability for
        everyone.
      </p>
    </PageLayout>
  );
};

export default Overview;
