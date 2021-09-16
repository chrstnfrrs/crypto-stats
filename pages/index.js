import { $fetch } from 'ohmyfetch'

const Home = ({ priceBTC }) => {
  return (
    <div>
      <strong>Bitcoin</strong>
      <p>{priceBTC}</p>
    </div>
  )
}

export const getServerSideProps = async () => {
  const {data: priceBTC} = await $fetch('http://localhost:3000/api/coins/btc')

  return {
    props: {
      priceBTC
    }
  }
}

export default Home
