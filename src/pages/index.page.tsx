import { NextPage } from 'next'

interface Props {
  name: string
}
const IndexPage: NextPage<Props> = (props) => {
  return (
    <main>
      <h1>Hello world! {props.name}</h1>
    </main>
  )
}
export default IndexPage
