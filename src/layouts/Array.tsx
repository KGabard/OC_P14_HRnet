import React from 'react'
import Line from '../components/Line'
import { convertCamelCaseToTitleCase } from '../scripts/utils/Utils'

export type DataType = {
  [key: string]: string
}

type Props = {
  data: DataType[]
}

function Array({ data }: Props) {
  const referenceKeys = Object.keys(data[0])

  return (
    <section className="array">
      <ul className="array__header">
        {referenceKeys.map((key, index) => (
          <li key={index}>{convertCamelCaseToTitleCase(key)}</li>
        ))}
      </ul>
      {data.map((item, index) => {
        return <Line data={item} referenceKeys={referenceKeys} key={index} />
      })}
    </section>
  )
}

export default Array
