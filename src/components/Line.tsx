import React from 'react'
import { DataType } from '../layouts/Array'

type Props = {
  data: DataType
  referenceKeys: string[]
}

// Function that check if the keys of the current object are the same as the reference keys
function isKeysEqualsReferenceKeys(item: DataType, referenceKeys: string[]) {
  const currentKeys = Object.keys(item)
  
  return (
    currentKeys.length === referenceKeys.length &&
    currentKeys.every((key) => referenceKeys.includes(key))
  )
}

function Line({ data, referenceKeys }: Props) {
  const values = Object.values(data)

  return isKeysEqualsReferenceKeys(data, referenceKeys) ? (
    <ul className="array__line">
      {values.map((value, index) => {
        return (
          <li className="array__line__item" key={index}>
            {value}
          </li>
        )
      })}
    </ul>
  ) : (
    <ul className="array__line">
      <p className="array__line__error">Keys don't match reference keys</p>
    </ul>
  )
}

export default Line
