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

function filterArray(data: DataType[], search: string) {
  if (search === '') return data

  const filteredData = data.filter((item) => {
    let isFound = false
    const regex = new RegExp(search, 'i')
    const found = Object.values(item).some((value) => regex.test(value))
    if (found) {
      isFound = true
    }

    return isFound
  })
  return filteredData
}

function Array({ data, columnsWidth }: Props) {
  let propsError = false
  const referenceKeys = data.length > 0 ? Object.keys(data[0]) : []

  const [currentPage, setCurrentPage] = useState(1)
  const [entriesPerPage, setEntriesPerPage] = useState(10)
  const [sort, setSort] = useState<sortType>({ value: null, order: null })
  const [search, setSearch] = useState<string>('')

  if (search !== '') {
    data = filterArray(data, search)
  }

  const currentFirstItem = Math.min(
    (currentPage - 1) * entriesPerPage + 1,
    data.length
  )
  const currentLastItem = Math.min(currentPage * entriesPerPage, data.length)
  const maxPage = Math.ceil(data.length / entriesPerPage)

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

  if (columnsWidth.length !== referenceKeys.length) {
    propsError = true
  }

  return !propsError ? (
    <section className="array">
      <NumberOfEntries
        numberOfEntries={entriesPerPage}
        setNumberOfEntries={setEntriesPerPage}
        setPage={setCurrentPage}
      />
      <Search search={search} setSearch={setSearch} setPage={setCurrentPage} />
      <div className="array__container">
        <ArrayHeader
          referenceKeys={referenceKeys}
          columnsWidth={columnsWidth}
          sort={sort}
          setSort={setSort}
          setPage={setCurrentPage}
        />
        {currentData.length > 0 ? (
          currentData.map((item, index) => {
            return (
              <ArrayLine
                data={item}
                referenceKeys={referenceKeys}
                columnsWidth={columnsWidth}
                key={index}
              />
            )
          })
        ) : (
          <p className="array__no-data">No data</p>
        )}
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
        Error in props : ColumnsWidth length different from referenceKeys length
      </p>
    </section>
  )
}

export default Array
