import React from 'react'
import { DataType } from '../layouts/Array'

type Props = {
  data: DataType
  referenceKeys: string[]
  columnsWidth: number[]
}

// Function that check if the keys of the current object are the same as the reference keys
function isKeysEqualsReferenceKeys(item: DataType, referenceKeys: string[]) {
  const currentKeys = Object.keys(item)

  return (
    currentKeys.length === referenceKeys.length &&
    currentKeys.every((key) => referenceKeys.includes(key))
  )
}

function ArrayLine({ data, referenceKeys, columnsWidth }: Props) {
  const values = Object.values(data)

  return isKeysEqualsReferenceKeys(data, referenceKeys) ? (
    <ul className="array-line">
      {values.map((value, index) => {
        return (
          <li
            className="array-line__item"
            key={index}
            style={{ flexGrow: columnsWidth[index] }}
          >
            {value}
          </li>
        )
      })}
    </ul>
  ) : (
    <ul className="array-line">
      <p className="array-line__error">Keys don't match reference keys</p>
    </ul>
  )
}

export default ArrayLine
