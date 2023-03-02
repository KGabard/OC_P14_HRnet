import React from 'react'
import { useForm } from '../scripts/hooks/useForm'
import {
  departmentsList,
  initializeLocalStorage,
  statesList,
  subYears,
} from '../scripts/utils/Utils'
import DatePicker from 'react-datepicker'
import calendarIcon from '../assets/icons/calendar-icon.svg'

import 'react-datepicker/dist/react-datepicker.css'
import { employeeType } from '../scripts/types/Types'

function Home() {
  initializeLocalStorage()

  // defining the initial state for the form
  const initialState = {
    firstName: {
      value: '',
      error: '',
    },
    lastName: {
      value: '',
      error: '',
    },
    dateOfBirth: {
      value: '',
      error: '',
    },
    startDate: {
      value: '',
      error: '',
    },
    street: {
      value: '',
      error: '',
    },
    city: {
      value: '',
      error: '',
    },
    state: {
      value: '',
      error: '',
    },
    zipCode: {
      value: '',
      error: '',
    },
    department: {
      value: '',
      error: '',
    },
  }

  // getting the event handlers from our custom hook
  const { onChange, onDateChange, onSubmit, data } = useForm(
    addEmployeeCallback,
    initialState
  )

  // a submit function that will execute upon form submission
  function addEmployeeCallback() {
    const employeesList: employeeType[] = JSON.parse(
      localStorage.getItem('employeesList') || '[]'
    )

    const employee = {
      firstName: data.firstName.value,
      lastName: data.lastName.value,
      dateOfBirth: data.dateOfBirth.value,
      startDate: data.startDate.value,
      street: data.street.value,
      city: data.city.value,
      state: data.state.value,
      zipCode: data.zipCode.value,
      department: data.department.value,
    }

    employeesList.push(employee)

    localStorage.setItem('employeesList', JSON.stringify(employeesList))
  }

  return (
    <section className="home">
      <h1 className="home__title">Add Employee</h1>
      <form className="home__form" onSubmit={onSubmit}>
        <div className="home__form__input-container">
          <label
            className="home__form__input-container__label"
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className={`home__form__input-container__text-input ${
              data.firstName.error.length > 0
                ? `home__form__input-container__text-input--error`
                : ''
            }`}
            name="firstName"
            id="firstName"
            type="text"
            onChange={onChange}
            value={data.firstName.value}
          />
          {data.firstName.error.length > 0 && (
            <p className="home__form__input-container__error">
              {data.firstName.error}
            </p>
          )}
        </div>
        <div className="home__form__input-container">
          <label
            className="home__form__input-container__label"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className={`home__form__input-container__text-input ${
              data.lastName.error.length > 0
                ? `home__form__input-container__text-input--error`
                : ''
            }`}
            name="lastName"
            id="lastName"
            type="text"
            onChange={onChange}
            value={data.lastName.value}
          />
          {data.lastName.error.length > 0 && (
            <p className="home__form__input-container__error">
              {data.lastName.error}
            </p>
          )}
        </div>
        <div className="home__form__input-container">
          <label
            className="home__form__input-container__label"
            htmlFor="dateOfBirth"
          >
            Date of Birth
          </label>
          <div className="home__form__input-container__date-container">
            <DatePicker
              className={`home__form__input-container__date-input ${
                data.dateOfBirth.error.length > 0
                  ? `home__form__input-container__date-input--error`
                  : ''
              }`}
              name="dateOfBirth"
              id="dateOfBirth"
              autoComplete="off"
              selected={
                data.dateOfBirth.value === ''
                  ? null
                  : new Date(data.dateOfBirth.value)
              }
              onChange={(date) => {
                if (date) onDateChange('dateOfBirth', date)
              }}
              minDate={subYears(new Date(), 70)}
              maxDate={subYears(new Date(), 18)}
              showYearDropdown
              showMonthDropdown
              yearDropdownItemNumber={70}
              scrollableYearDropdown
            />
            <img
              src={calendarIcon}
              alt="Calendar icon"
              className="home__form__input-container__date-logo"
            />
          </div>
          {data.dateOfBirth.error.length > 0 && (
            <p className="home__form__input-container__error">
              {data.dateOfBirth.error}
            </p>
          )}
        </div>
        <div className="home__form__input-container">
          <label
            className="home__form__input-container__label"
            htmlFor="startDate"
          >
            Start Date
          </label>
          <div className="home__form__input-container__date-container">
            <DatePicker
              className={`home__form__input-container__date-input ${
                data.startDate.error.length > 0
                  ? `home__form__input-container__date-input--error`
                  : ''
              }`}
              name="startDate"
              id="startDate"
              autoComplete="off"
              selected={
                data.startDate.value === ''
                  ? null
                  : new Date(data.startDate.value)
              }
              onChange={(date) => {
                if (date) onDateChange('startDate', date)
              }}
              minDate={new Date('01/01/2006')}
              maxDate={new Date()}
              showYearDropdown
              showMonthDropdown
              yearDropdownItemNumber={20}
              scrollableYearDropdown
            />
            <img
              src={calendarIcon}
              alt="Calendar icon"
              className="home__form__input-container__date-logo"
            />
          </div>
          {data.startDate.error.length > 0 && (
            <p className="home__form__input-container__error">
              {data.startDate.error}
            </p>
          )}
        </div>
        <fieldset className="home__form__address-fieldset">
          <legend className="home__form__address-fieldset__legend">
            Address
          </legend>
          <div className="home__form__input-container">
            <label
              className="home__form__input-container__label"
              htmlFor="street"
            >
              Street
            </label>
            <input
              className={`home__form__input-container__text-input ${
                data.street.error.length > 0
                  ? `home__form__input-container__text-input--error`
                  : ''
              }`}
              name="street"
              id="street"
              type="text"
              onChange={onChange}
              value={data.street.value}
            />
            {data.street.error.length > 0 && (
              <p className="home__form__input-container__error">
                {data.street.error}
              </p>
            )}
          </div>
          <div className="home__form__input-container">
            <label
              className="home__form__input-container__label"
              htmlFor="city"
            >
              City
            </label>
            <input
              className={`home__form__input-container__text-input ${
                data.city.error.length > 0
                  ? `home__form__input-container__text-input--error`
                  : ''
              }`}
              name="city"
              id="city"
              type="text"
              onChange={onChange}
              value={data.city.value}
            />
            {data.city.error.length > 0 && (
              <p className="home__form__input-container__error">
                {data.city.error}
              </p>
            )}
          </div>
          <div className="home__form__input-container">
            <label
              className="home__form__input-container__label"
              htmlFor="state"
            >
              State
            </label>
            <select
              className={`home__form__input-container__select-input ${
                data.state.error.length > 0
                  ? `home__form__input-container__select-input--error`
                  : ''
              }`}
              name="state"
              id="state"
              onChange={onChange}
            >
              {statesList.map((state) => (
                <option
                  key={state.abbreviation}
                  className="home__form__input-container__select-input__option"
                  value={state.abbreviation}
                >
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div className="home__form__input-container">
            <label
              className="home__form__input-container__label"
              htmlFor="zipCode"
            >
              Zip Code
            </label>
            <input
              className={`home__form__input-container__text-input ${
                data.zipCode.error.length > 0
                  ? `home__form__input-container__text-input--error`
                  : ''
              }`}
              name="zipCode"
              id="zipCode"
              type="text"
              onChange={onChange}
              value={data.zipCode.value}
            />
            {data.zipCode.error.length > 0 && (
              <p className="home__form__input-container__error">
                {data.zipCode.error}
              </p>
            )}
          </div>
        </fieldset>
        <div className="home__form__input-container">
          <label
            className="home__form__input-container__label"
            htmlFor="department"
          >
            Department
          </label>
          <select
            className={`home__form__input-container__select-input ${
              data.department.error.length > 0
                ? `home__form__input-container__select-input--error`
                : ''
            }`}
            name="department"
            id="department"
            onChange={onChange}
          >
            {departmentsList.map((department) => (
              <option
                key={department.value}
                className="home__form__input-container__select-input__option"
                value={department.value}
              >
                {department.name}
              </option>
            ))}
          </select>
        </div>

        <button className="home__form__submit-button" type="submit">
          Save
        </button>
      </form>
    </section>
  )
}

export default Home
