'use client'

import { useEffect } from 'react'
import { CONTENT } from './content'
import { initPage } from './init'

export default function Page() {
  useEffect(() => {
    initPage()
  }, [])

  return <div id="top" dangerouslySetInnerHTML={{ __html: CONTENT }} />
}
