import * as React from "react"
import Home from "../components/Home/Home"
import SEO from "../components/SEO/SEO"
import { organizationSchema, websiteSchema } from "../utils/schema"
import './global.scss'

const IndexPage = () => {
  return (
    <main>
      <Home />
    </main>
  )
}

export default IndexPage

export const Head = () => {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema]
  }

  return (
    <SEO
      title="Crickonnect - Cricket Match Booking & Team Management Platform"
      description="Cricket match booking and team management made simple. Request, accept, and schedule matches instantly. Organize tournaments with automated fixtures. Built for grassroots cricket teams and captains."
      keywords="cricket match booking, cricket team management, cricket tournament organization, grassroots cricket, cricket ground booking, cricket fixtures, cricket scheduling, local cricket matches, cricket captain app"
      url="/"
      image="/images/og-home.jpg"
      schema={combinedSchema}
    />
  )
}
