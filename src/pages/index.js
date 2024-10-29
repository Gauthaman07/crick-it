import * as React from "react"
import Home from "../components/Home/Home"
import './global.scss'



const IndexPage = () => {
  return (
    <main >
      <Home />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
