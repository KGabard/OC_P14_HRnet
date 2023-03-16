import React from 'react'
import Table from '@kgabard/react-data-table'
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
      <Table
        data={employeesList}
        columnsWidth={[1, 1, 0.85, 1, 0.85, 1, 1, 1, 0.7]}
        colors={{ primary: 'var(--highlight-primary)', secondary: 'var(--highlight-secondary)' }}
        enableNumberOfEntries={true}
        enableSearch={true}
        enableSort={true}
      />
    </section>
  )
}

export default Employees
