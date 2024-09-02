"use client"

import { useEffect } from "react"

import React from 'react'

export default function Error({error,reset}) {

    useEffect(() => {
        console.log(error);

    }, [error]);

  return (
    <div>
      <h1 className="capitalize font-bold font-mono text-red-400 text-xl text-center"><span className="text-red-600 font-bold font-mono capitalize">Error:</span> error fetching data</h1>
      <button
        onClick={() => reset()}
      className="border-1 shadow-lg text-center" >try again</button>
    </div>
  )
}
