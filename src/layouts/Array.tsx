import React, { useState } from 'react'
import Line from '../components/Line'
import { convertCamelCaseToTitleCase } from '../scripts/utils/Utils'

export type DataType = {
  [key: string]: string
}

type Props = {
  data: DataType[]
  columnsWidth: number[]
}

// function stringLengthOverArrayTotalLength(
//   currentString: string,
//   stringArray: string[]
// ) {
//   const stringArrayTotalLength = stringArray.reduce(
//     (acc, string) => acc + string.length,
//     0
//   )

//   return Math.round((currentString.length / stringArrayTotalLength) * 100)
// }

// function calculateColumnsWidth(referenceKeys: string[]) {
//   const columnsWidth = referenceKeys.map((key) =>
//     stringLengthOverArrayTotalLength(key, referenceKeys)
//   )

//   return columnsWidth
// }

function Array({ data, columnsWidth }: Props) {
  let propsError = false
  const referenceKeys = data.length > 0 ? Object.keys(data[0]) : []
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [maxPage, setMaxPage] = useState(Math.ceil(data.length / itemsPerPage))

  console.log(maxPage);
  

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  if (columnsWidth.length !== referenceKeys.length || data.length === 0) {
    propsError = true
  }

  return !propsError ? (
    <section className="array">
      <ul className="array__header">
        {referenceKeys.map((key, index) => (
          <li
            className="array__header__item"
            key={index}
            style={{ flex: columnsWidth[index] }}
          >
            {convertCamelCaseToTitleCase(key)}
          </li>
        ))}
      </ul>
      {currentData.map((item, index) => {
        return (
          <Line
            data={item}
            referenceKeys={referenceKeys}
            columnsWidth={columnsWidth}
            key={index}
          />
        )
      })}
    </section>
  ) : (
    <section className="array">
      <p className="array__error">
        Error in props : No data or columnsWidth length different from
        referenceKeys length
      </p>
    </section>
  )
}

export default Array
