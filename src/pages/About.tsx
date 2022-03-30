import React from 'react'
import isEqual from 'fast-deep-equal'
import { Link } from 'react-router-dom'

function About() {
  return <Link to="/">go home</Link>
}

export default React.memo(About, isEqual)
