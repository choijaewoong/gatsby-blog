import React from "react"
import { Link } from "gatsby"

export default function Header(props) {
return (
    <header>
      <h1>{props.headerTitle}</h1>
      <Link to="https://github.com/choijaewoong/gatsby-blog">Github</Link>
    </header>
  )
}