import React from 'react'
import { useForm } from '../scripts/hooks/useForm'
import { departmentsList, statesList } from '../scripts/utils/Utils'

function Home() {
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
  const { onChange, onSubmit, data } = useForm(
    addEmployeeCallback,
    initialState
  )

  // a submit function that will execute upon form submission
  function addEmployeeCallback() {
    console.log(data)
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
            className="home__form__input-container__text-input"
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
            className="home__form__input-container__text-input"
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
          <input
            className="home__form__input-container__date-input"
            name="dateOfBirth"
            id="dateOfBirth"
            type="date"
            onChange={onChange}
            value={data.dateOfBirth.value}
          />
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
          <input
            className="home__form__input-container__date-input"
            name="startDate"
            id="startDate"
            type="date"
            onChange={onChange}
            value={data.startDate.value}
          />
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
              className="home__form__input-container__text-input"
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
              className="home__form__input-container__text-input"
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
              className="home__form__input-container__select-input"
              name="state"
              id="state"
              // value={data.state.value}
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
              className="home__form__input-container__text-input"
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
            className="home__form__input-container__select-input"
            name="department"
            id="department"
            // value={data.department.value}
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
