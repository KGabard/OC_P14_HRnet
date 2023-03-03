import React, { useState } from 'react'
import Line from '../components/Line'
import NumberOfEntries from '../components/NumberOfEntries'
import PageSelector from '../components/PageSelector'
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
  const [entriesPerPage, setEntriesPerPage] = useState(10)

  const maxPage = Math.ceil(data.length / entriesPerPage)

  const currentFirstItem = (currentPage - 1) * entriesPerPage + 1
  const currentLastItem = Math.min(currentPage * entriesPerPage, data.length)

  const currentData = data.slice(currentFirstItem - 1, currentLastItem)

  const nextPage = () => {
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  if (columnsWidth.length !== referenceKeys.length || data.length === 0) {
    propsError = true
  }

  return !propsError ? (
    <section className="array">
      <NumberOfEntries numberOfEntries={entriesPerPage} setNumberOfEntries={setEntriesPerPage} setPage={setCurrentPage} />
      <div className="array__container">
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
      </div>
      <p className="array__page-indicator">{`Showing ${currentFirstItem} to ${currentLastItem} of ${data.length} entries`}</p>
      <PageSelector
        currentPage={currentPage}
        maxPage={maxPage}
        nextPage={nextPage}
        previousPage={previousPage}
        setPage={setCurrentPage}
      />
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
