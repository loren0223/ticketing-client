const LandingPage = ({ currentuser }) => {
  console.log(currentuser);

  return currentuser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  );
};

// context === { req, res }
// LandingPage.getInitialProps = async (context) => {
LandingPage.getInitialProps = async (context, client, currentuser) => {
  return {};
};

export default LandingPage;
