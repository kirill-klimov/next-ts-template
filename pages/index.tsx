import type { NextPage } from 'next'
import VercelIcon from '../assets/vercel.svg'

interface IProps {
  api?: string
}

const Home: NextPage = (props: IProps) => {
  return (
    <div>
      <p>everything is fine</p>
      <p>loaded api env: {props.api}</p>
      <VercelIcon class="w-20" />
    </div>
  )
}

export async function getServerSideProps() {
  const api = process.env.API;
  return {
    props: {
      api
    }, // will be passed to the page component as props
  }
}

export default Home
