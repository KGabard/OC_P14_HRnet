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
        data={
          //   [
          //   {
          //     firstName: 'Elijah',
          //     lastName: 'Larsen',
          //     startDate: '9/3/2006',
          //     department: 'Marketing',
          //     dateOfBirthTest: '12/26/1997',
          //     street: 'Chambers Alley',
          //     city: 'Bridgeport',
          //     state: 'Tennessee',
          //     zipCode: '53584',
          //   },
          //   {
          //     firstName: 'John',
          //     lastName: 'Donovan',
          //     startDate: '9/1/2006',
          //     department: 'Sales',
          //     dateOfBirth: '7/17/1976',
          //     street: 'Monroe Tunnel',
          //     city: 'San Antonio',
          //     state: 'Florida',
          //     zipCode: '10494',
          //   },
          // ]
          employeesList
        }
        columnsWidth={[1, 1, 0.85, 1, 0.85, 1, 1, 1, 0.7]}
        enableNumberOfEntries={true}
        enableSearch={true}
        enableSort={true}
      />
    </section>
  )
}

export default Employees
