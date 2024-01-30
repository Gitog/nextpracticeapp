'use client'

const error = (error) => {
  return (
    // <div>There was an error.....</div>
    <div>{error.error.message}</div>
  )
}

export default error