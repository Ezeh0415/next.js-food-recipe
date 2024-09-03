"use client"

import { useEffect } from "react"

import React from 'react'

export default function Error({error,reset}) {

    useEffect(() => {
        console.log(error);

    }, [error]);

  return (
    <div>
      <h1 className="capitalize font-bold font-mono text-red-400 text-center"><span className="text-red-600 font-bold font-mono capitalize">Error:</span> something went wrong</h1>
      <button
        onClick={() => reset()}
      >try again</button>
    </div>
  )
}
