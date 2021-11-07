import { getUserAccountInfo } from '../server/services/accounts-service';

const Portfolio = ({ accounts = {} }) => {
  return <div>{JSON.stringify(accounts)}</div>
}

const getServerSideProps = async (context) => {
  return {
    props: {
      accounts: await getUserAccountInfo({ context })
    },
  };
};

export { getServerSideProps };
export default Portfolio;

// Portfolio.auth = true;