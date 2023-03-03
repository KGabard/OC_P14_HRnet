import React, { useState } from 'react'
import ArrayHeader from '../components/ArrayHeader'
import ArrayLine from '../components/ArrayLine'
import NumberOfEntries from '../components/NumberOfEntries'
import PageSelector from '../components/PageSelector'
import Search from '../components/Search'
import { sortData } from '../scripts/utils/SortLogic'

export type DataType = {
  [key: string]: string
}

export type sortType = {
  value: string | null
  order: 'asc' | 'desc' | null
}

type Props = {
  data: DataType[]
  columnsWidth: number[]
}

function Array({ data, columnsWidth }: Props) {
  let propsError = false
  const referenceKeys = data.length > 0 ? Object.keys(data[0]) : []

  const [currentPage, setCurrentPage] = useState(1)
  const [entriesPerPage, setEntriesPerPage] = useState(10)
  const [sort, setSort] = useState<sortType>({ value: null, order: null })

  const maxPage = Math.ceil(data.length / entriesPerPage)

  const currentFirstItem = (currentPage - 1) * entriesPerPage + 1
  const currentLastItem = Math.min(currentPage * entriesPerPage, data.length)

  if (sort.value !== null && sort.order !== null) {
    data = sortData(data, sort)
  }
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
      <NumberOfEntries
        numberOfEntries={entriesPerPage}
        setNumberOfEntries={setEntriesPerPage}
        setPage={setCurrentPage}
      />
      <Search />
      <div className="array__container">
        <ArrayHeader
          referenceKeys={referenceKeys}
          columnsWidth={columnsWidth}
          sort={sort}
          setSort={setSort}
          setPage={setCurrentPage}
        />
        {currentData.map((item, index) => {
          return (
            <ArrayLine
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
