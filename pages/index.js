import NextAuth from '../components/NextAuth'
import { getSupportedCryptos } from '../server/services/cryptos-service'

const Home = ({ cryptos }) => {
  return (
    <div>
      <NextAuth />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', width: '768px', flexWrap: 'wrap', margin: '0 auto' }}>
        {cryptos.map(({ id, name, value }) => (
          <div key={id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '1rem', padding: '1rem', border: '1px solid #000', borderRadius: '.25rem', width: '256px' }}>
            <div style={{ display: 'flex' }}>
              <p>{id} - {name}</p>
            </div>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  return {
    props: {
      cryptos: await getSupportedCryptos()
    }
  }
}

export default Home
