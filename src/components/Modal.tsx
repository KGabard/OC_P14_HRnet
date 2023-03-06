import React from 'react'
import closeIcon from '../assets/icons/close-icon.svg'

type Props = {
  text: string
  isActive: boolean
  setIsActive: (value: boolean) => void
}

function Modal({ text, isActive, setIsActive }: Props) {

  const closeModal = () => {
    setIsActive(false)
  }

  return (
    <div className={`modal ${isActive && 'modal--active'}`}>
      <div className="modal__window">
        <div className="modal__window__header">
          <h2 className="modal__window__title">Message</h2>
          <img
            src={closeIcon}
            alt="Close modal"
            className="modal__window__close-button"
            onClick={closeModal}
          />
        </div>
        <div className="modal__window__content">
          <p className="modal__window__content__text">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal
