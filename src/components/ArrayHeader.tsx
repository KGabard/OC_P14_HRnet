import React from 'react'
import { sortType } from '../layouts/Array'
import { convertCamelCaseToTitleCase } from '../scripts/utils/Utils'
import triangleIcon from '../assets/icons/triangle-icon.svg'

type Props = {
  referenceKeys: string[]
  columnsWidth: number[]
  sort: sortType
}

function ArrayHeader({ referenceKeys, columnsWidth, sort }: Props) {
  return (
    <ul className="array-header">
      {referenceKeys.map((key, index) => (
        <li
          className="array-header__item"
          key={index}
          style={{ flex: columnsWidth[index] }}
        >
          <p className="array-header__item__title">
            {convertCamelCaseToTitleCase(key)}
          </p>
          <div className="array-header__item__sort-container">
            <button
              className={`array-header__item__sort-container__button ${
                sort.value === key && sort.order === 'asc'
                  ? 'array-header__item__sort-container__button--active'
                  : ''
              }`}
            >
              <img
                src={triangleIcon}
                alt="Ascending sort"
                className="array-header__item__sort-container__button__up-icon"
              />
            </button>
            <button
              className={`array-header__item__sort-container__button ${
                sort.value === key && sort.order === 'desc'
                  ? 'array-header__item__sort-container__button--active'
                  : ''
              }`}
            >
              <img
                src={triangleIcon}
                alt="Descending sort"
                className="array-header__item__sort-container__button__down-icon"
              />
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ArrayHeader
