import React, { FC } from "react"

import { Card } from "components/UIKit"
import { CardMode } from "../UIKit/Card/Card"
import { ExtensionModel } from "api/extensions-api"

interface ExtensionListProps {
  data: ExtensionModel[]
  mode: CardMode
}

const ExtensionList: FC<ExtensionListProps> = ({ data, mode }) => {
  return (
    <ul className="extension-list">
      {data.map(item => (
        <li key={item.id}>
          <Card mode={mode} extension={item} />
        </li>
      ))}
    </ul>
  )
}

export default ExtensionList
