import React from 'react'

type Props = {
  currentPage: number
  maxPage: number
  nextPage: () => void
  previousPage: () => void
  setPage: (page: number) => void
}

export function pageArrayCreator(currentPage: number, maxPage: number) {
  let pageArray: string[] = []
  const maxPageArrayLength = 7

  if (currentPage < 1 || currentPage > maxPage) return []
  if (!Number.isInteger(currentPage) || !Number.isInteger(maxPage)) return []

  if (maxPage <= maxPageArrayLength) {
    for (let page = 1; page <= maxPage; page++) {
      pageArray.push(page.toString())
    }
  } else {
    if (currentPage <= 4) {
      pageArray = ['1', '2', '3', '4', '5', '...', maxPage.toString()]
    } else if (currentPage >= maxPage - 3) {
      pageArray = [
        '1',
        '...',
        (maxPage - 4).toString(),
        (maxPage - 3).toString(),
        (maxPage - 2).toString(),
        (maxPage - 1).toString(),
        maxPage.toString(),
      ]
    } else {
      pageArray = [
        '1',
        '...',
        (currentPage - 1).toString(),
        currentPage.toString(),
        (currentPage + 1).toString(),
        '...',
        maxPage.toString(),
      ]
    }
  }

  return pageArray
}

function PageSelector({
  currentPage,
  maxPage,
  nextPage,
  previousPage,
  setPage,
}: Props) {
  const pageArray = pageArrayCreator(currentPage, maxPage)

  const handleSetPage = (page: string) => {
    if (!Number.isInteger(parseInt(page))) return
    setPage(parseInt(page))
  }

  return (
    <div className="page-selector">
      <button className="page-selector__button" onClick={previousPage}>
        P
      </button>
      {pageArray.map((page, index) => (
        <button
          className={`page-selector__button ${
            page === currentPage.toString()
              ? 'page-selector__button--active'
              : ''
          }`}
          key={index}
          onClick={() => handleSetPage(page)}
          value={page}
        >
          {page}
        </button>
      ))}
      <button className="page-selector__button" onClick={nextPage}>
        N
      </button>
    </div>
  )
}

export default PageSelector
