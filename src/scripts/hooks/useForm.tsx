import { useState } from 'react'

type DataType = {
  [key: string]: {
    value: string
    error: string
  }
}

export const useForm = (callback: any, initialState = {}) => {
  const [data, setData] = useState<DataType>(initialState)

  function isInputValid() {
    const newData = { ...data }
    let validity = true

    for (let key of Object.keys(newData)) {
      switch (key) {
        case 'firstName':
          if (/^[a-zA-Z0-9]{2,15}$/.test(newData[key].value)) {
            newData[key].error = ''
          } else {
            newData[key].error =
              'Please enter a first name containing between 2 and 15 characters.'
            validity = false
          }
          break
        case 'lastName':
          if (/^[a-zA-Z0-9]{2,15}$/.test(newData[key].value)) {
            newData[key].error = ''
          } else {
            newData[key].error =
              'Please enter a last name containing between 2 and 15 characters.'
            validity = false
          }
          break
        case 'dateOfBirth':
          if (
            /^([1-9]|1[012])\/([1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/.test(
              newData[key].value
            )
          ) {
            newData[key].error = ''
          } else {
            newData[key].error =
              'Please enter a correct date in the format mm/dd/yyyy.'
            validity = false
          }
          break
        case 'startDate':
          if (
            /^([1-9]|1[012])\/([1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/.test(
              newData[key].value
            )
          ) {
            newData[key].error = ''
          } else {
            newData[key].error =
              'Please enter a correct date in the format mm/dd/yyyy.'
            validity = false
          }
          break
        case 'street':
          if (/^[a-zA-Z0-9]{2,20}$/.test(newData[key].value)) {
            newData[key].error = ''
          } else {
            newData[key].error =
              'Please enter a street name containing between 2 and 20 characters.'
            validity = false
          }
          break
        case 'city':
          if (/^[a-zA-Z0-9]{2,20}$/.test(newData[key].value)) {
            newData[key].error = ''
          } else {
            newData[key].error =
              'Please enter a city name containing between 2 and 20 characters.'
            validity = false
          }
          break
        case 'zipCode':
          if (/^[0-9]{5}(?:-[0-9]{4})?$/.test(newData[key].value)) {
            newData[key].error = ''
          } else {
            newData[key].error =
              'Please enter a correct zip code in the format 12345 or 12345-1234.'
            validity = false
          }
          break
      }
    }

    setData(newData)

    return validity
  }

  // onChange
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let currentValue = event.target.value

    setData({
      ...data,
      [event.target.name]: {
        ...data[event.target.name],
        value: currentValue,
      },
    })
  }

  // onDateChange
  const onDateChange = (targetName: string, date: Date) => {
    setData({
      ...data,
      [targetName]: {
        ...data[targetName],
        value: date.toLocaleDateString('en-US'),
      },
    })
  }

  // onSubmit
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log(data)

    if (isInputValid()) {
      await callback() // triggering the callback
    }
  }

  // return values
  return {
    onChange,
    onDateChange,
    onSubmit,
    data,
  }
}
