import buildClient from '../api/build-client';

const LandingPage = ({ currentuser }) => {
  console.log(currentuser);

  return currentuser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  );
};

// context === { req, res }
LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');
  // data = {currentuser: {email, id, idt}}
  return data;
};

export default LandingPage;
