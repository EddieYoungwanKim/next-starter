import { NextPage } from 'next'

interface Props {
  name: string
}
const IndexPage: NextPage<Props> = () => {
  return (
    <main>
      <h1>Hello world!</h1>
    </main>
  )
}
export default IndexPage
