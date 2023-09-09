/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ReactComponent as MasterCard } from '../PaymentPage/icons/mastercardFormIcon.svg'
import './PaymentCorfimPage.scss'
import CartComponent from '../../Components/CartComponent/CartComponent'
import Button from '../../Components/Button/Button'

function PaymentCorfimPage() {
  const [isLoaderVisible, setLoaderVisible] = useState(true)
  const [isSuccessVisible, setSuccessVisible] = useState(false)
 const [subtotal, setSubtotal] = useState(0);

  const updateSubtotals = (newSubtotal) => {
    setSubtotal(newSubtotal);
  };
  
  const handleConfirmPayClick = () => {
    setLoaderVisible(false)
    setSuccessVisible(true)
  }
  useEffect(() => {
    if (isSuccessVisible) {
      setTimeout(() => {
        window.location.href = '/payment_success'
      }, 2000)
    }
  }, [isSuccessVisible])

  return (
    <section className="confirm-page">
      <div className="confirm">
        <Link to="/payment">
          <Button text="Cancle" btnStyles="confirm-btn__cancle" />
        </Link>
        <div className="confirm_bank">
          <p className="confirm_bank-name">Not Universal Bank</p>
          <MasterCard />
          <p className="confirm_bank-check">Id Check</p>
        </div>
        {isLoaderVisible && (
          <div className="loader">
            <div className="center loading" />
          </div>
        )}
        {isSuccessVisible && (
          <div className="swal-icon swal-icon--success">
            <span className="swal-icon--success__line swal-icon--success__line--long" />
            <span className="swal-icon--success__line swal-icon--success__line--tip" />
            <div className="swal-icon--success__ring" />
            <div className="swal-icon--success__hide-corners" />
          </div>
        )}
        <p className="confirm_payment">Press the button to confirm</p>
        <div className="confirm_info">
          <div className="confirm_info-store">
            <p>a store</p>
            <p>payment amount</p>
          </div>
          <div className="confirm_info-payment">
                <div className='none'><CartComponent updateSubtotals={updateSubtotals} cartStyles="none" /></div>
            <h4 className="confirm_info-payment_text">Good Wine</h4>
            <h4 className="confirm_info-payment_text">${parseFloat(subtotal)+15}</h4>
          </div>
        </div>
        <Button text="Confirm pay" btnClick={handleConfirmPayClick} btnStyles="confirm-btn__pay" />
      </div>
    </section>
  )
}

export default PaymentCorfimPage
