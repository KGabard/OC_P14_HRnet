import React from 'react'
import Array from '../layouts/Array'
import { employeeType } from '../scripts/types/Types'

function Employees() {
  let employeesList: employeeType[] = []

  // check if employeesList is in localStorage
  if (localStorage.getItem('employeesList')) {
    // get employeesList from localStorage
    employeesList = JSON.parse(localStorage.getItem('employeesList') || '[]')
  }

  return (
    <section className="employees">
      <h1 className="employees__title">Employees List</h1>
      <Array
        data={employeesList}
        columnsWidth={[1, 1, 0.85, 1, 0.85, 1, 1, 1, 0.7]}
        enableNumberOfEntries={true}
        enableSearch={true}
        enableSort={true}
      />
    </section>
  )
}

export default Employees
