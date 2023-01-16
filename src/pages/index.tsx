import React, { useState } from "react"

import ExtensionList from "components/ExtensionList/ExtensionList"
import { useGetExtensions } from "api/hooks"
import { useDebounce } from "helpers/hooks/useDebounced"
import { Input } from "components/UIKit"

const Homepage = () => {
  const [title, setTitle] = useState("")
  const debouncedTitle = useDebounce(title, 1000)

  const { data = [] } = useGetExtensions(debouncedTitle)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setTitle(value)
  }
  return (
    <>
      <h1>Get Started With Purlin Extensions</h1>
      <Input
        value={title}
        onChange={handleChange}
        placeholder="Search"
        search={true}
      />
      {!!data.length ? (
        <ExtensionList data={data} mode="user" />
      ) : (
        <h2>Nothing found</h2>
      )}
    </>
  )
}

export default Homepage
