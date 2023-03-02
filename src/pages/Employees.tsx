import React from 'react'
import Array from '../layouts/Array'
import { employeeType } from '../scripts/types/Types'

function Employees() {
  // get employeesList from localStorage
  const employeesList: employeeType[] = JSON.parse(
    localStorage.getItem('employeesList') || '[]'
  )

  return (
    <section className="employees">
      <h1 className="employees__title">Employees List</h1>
      <Array
        data={employeesList}
      />
    </section>
  )
}

export default Employees
