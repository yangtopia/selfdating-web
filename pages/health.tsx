const ENV = process.env.APP_ENV;

export default function() {
  const wrapStyles = {
    maxWidth: '400px',
    margin: '0 auto',
    paddingTop: '80px'
  };

  const h1Styles = {
    fontSize: '20px'
  };

  return (
    <div style={wrapStyles}>
      <h1 style={h1Styles}>Health OK (ENV: {ENV})</h1>
    </div>
  );
}
