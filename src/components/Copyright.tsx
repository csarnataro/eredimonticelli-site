import React from 'react'
import Link from 'next/link'

const getRevision = () => {
  const rev = process.env.COMMIT_SHA
    ? process.env.COMMIT_SHA.toString().substr(0, 7)
    : 'dev'

  return (<small className="float-right">rev:{rev}</small>)
}

export default function Copyright () {
  return (
    <div className="text-gray-600 text-center w-full">
      {'Copyright '}
      {new Date().getFullYear()}
      {' © - '}
      <Link href='/index' as='/'>
        www.eredimonticelli.it
      </Link>
      {' - '}
      <Link
        href='/it/privacy-policy'
      >
        <a>Privacy policy</a>
      </Link>
      <div className="w-full">
        {getRevision()}
      </div>
    </div>
  )
}
