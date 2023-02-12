import React, { useEffect, useState } from 'react'
import { Pen } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useLocation } from 'react-router-dom'

function PaymentValidate(props) {
  const dispatch = useDispatch()
  const [isOrdered, setIsOrdered] = useState(false)
  const { adress } = useSelector((state) => state)
  const { paymentMode } = useSelector((state) => state)
  const { cart } = useSelector((state) => state)
  const navigate = useNavigate()
  const { user } = JSON.parse(localStorage.getItem('persist:root'))
  const userId = JSON.parse(user).id
  const location = useLocation()

  useEffect(() => {
    const url = 'http://localhost:8080/api/user/user-by-id/' + userId
    const token = localStorage.getItem('access_token')
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            'content-Type': 'application/json',
          },
        })
        const json = await response.json()
        dispatch({ type: 'GET_ADRESSES', payload: json.adresses })
        dispatch({ type: 'GET_PAYMENT_MODE', payload: json.paymentMode })
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const url = 'http://localhost:8080/api/order/user/' + userId
    const token = localStorage.getItem('access_token')
    try {
      isOrdered &&
        fetch(url, {
          method: 'POST',
          headers: {
            'content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
          body: JSON.stringify({
            user: {
              id: userId,
            },
          }),
        })
          .then((response) => {
            return response.json()
          })
          .then((res) => {
            cart.map((product) => {
              fetch('http://localhost:8080/api/productOrder', {
                method: 'POST',
                headers: {
                  'content-Type': 'application/json',
                  Authorization: 'Bearer ' + token,
                },
                body: JSON.stringify({
                  id: {
                    orderId: res,
                    productId: product.id,
                  },
                  order: {
                    id: res,
                    testOrder: null,
                  },
                  product: product,
                  quantity: product.quantity,
                }),
              })
                .then((response) => {
                  dispatch({ type: 'REMOVE_CART' })
                  navigate('/ordered')
                  //return response.json();
                })
                .then((res) => {})
            })
          })
    } catch (error) {
      console.log('error', error)
    }
  }, [isOrdered])

  const paymentModeUnique = paymentMode.find(
    (card) => card.isCreditCardToUse === true && card,
  )
  const AdressInvoiceUnique = adress.find(
    (adress) => adress.isInvoiceAdress === true && adress,
  )
  const AdressDeliveryUnique = adress.find(
    (adress) => adress.isDeliveryAdress === true && adress,
  )

  console.log('kkkkkkkkkkkk', location)

  const total =
    cart &&
    cart.length > 0 &&
    cart.reduce((acc, currentvalue) => {
      return acc + currentvalue.price * currentvalue.quantity
    }, 0)

  return (
    <>
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            {cart.length > 0 && (
              <div className="order-pay row mb-5">
                <h5 className="col align-self-center total-purchase purchase">
                  <span className="fs-3">Total des achats: {total} €</span>
                </h5>
                <div className="col align-self-center button-order purchase text-end">
                  <button
                    type="button"
                    id="validate"
                    className="btn btn-dark btn-lg button-margin rounded-0"
                    onClick={() => {
                      setIsOrdered(true)
                    }}
                  >
                    Valider et payer la commande
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {
              <div className="row">
                <div className="col-12">
                  <div className="mb-3 mt-3 fs-4 fw-bold text-primary">
                    Carte bancaire
                  </div>
                  {paymentModeUnique ? (
                    <>
                      <div className="card card-lg bg-light mb-8 rounded-0 mb-3">
                        <div className="card-body ">
                          <div className="row">
                            <div className="col-6">
                              <h6 className="mb-6">Carte de payment</h6>
                            </div>
                            <div className="col-6 text-end">
                              <button className="btn btn-lg  button-margin">
                                <Link
                                  to={
                                    '/payment-mode-form/' + paymentModeUnique.id
                                  }
                                >
                                  <Pen size={20} />
                                </Link>
                              </button>
                            </div>
                          </div>
                          <div className="text-muted">
                            <div>
                              Nom de la carte:{' '}
                              <span className="fw-bold">
                                {paymentModeUnique.name}
                              </span>
                            </div>
                            <div>
                              Type de carte:{' '}
                              <span className="fw-bold">
                                {paymentModeUnique.cardType}
                              </span>{' '}
                            </div>
                            <div>
                              Numero de la carte:{' '}
                              <span className="fw-bold">
                                {paymentModeUnique.cardNumber}
                              </span>{' '}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link to={'/payment-mode-form'}>
                      <button className="col-2 btn btn-primary btn-lg rounded-0 mb-3">
                        Ajouter une carte
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            }
            <div className="row">
              <div className="mb-3 mt-3 fs-4 fw-bold text-primary">
                Adresses
              </div>
              <div className="col-6">
                {AdressDeliveryUnique && (
                  <>
                    <div className="card card-lg bg-light mb-8 rounded-0 mb-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6">
                            <h6 className="mb-6">
                              {AdressDeliveryUnique.isInvoiceAdress
                                ? 'Adresse de livraison'
                                : 'Adresse'}
                            </h6>
                          </div>
                          <div className="col-6 text-end">
                            <button className="btn btn-lg  button-margin">
                              <Link
                                className="text-decoration-none"
                                to={'/adress/' + AdressDeliveryUnique.id}
                                state={{ prevPath: location.pathname }}
                              >
                                <Pen size={20} />
                              </Link>
                            </button>
                          </div>
                        </div>
                        <div className="text-muted">
                          <div>
                            Nom et prénom:{' '}
                            <span className="fw-bold">
                              {AdressDeliveryUnique.nameAdress}{' '}
                              {AdressDeliveryUnique.lastNameAdress}
                            </span>
                          </div>
                          <div>
                            Adresse:{' '}
                            <span className="fw-bold">
                              {AdressDeliveryUnique.adressPartOne}
                            </span>{' '}
                          </div>
                          <div>
                            Adresse partie complémentaire:{' '}
                            <span className="fw-bold">
                              {AdressDeliveryUnique.adressPartTwo}
                            </span>
                          </div>
                          <div>
                            Code postal et ville:{' '}
                            <span className="fw-bold">
                              {AdressDeliveryUnique.zip}{' '}
                              {AdressDeliveryUnique.city}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="col-6">
                {AdressInvoiceUnique && (
                  <>
                    <div className="card card-lg bg-light mb-8 rounded-0 mb-3">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-6">
                            <h6 className="mb-6">
                              {AdressInvoiceUnique.isDeliveryAdress
                                ? 'Adresse de facturation'
                                : 'Adresse'}
                            </h6>
                          </div>
                          <div className="col-6 text-end">
                            <button className="btn btn-lg  button-margin">
                              <Link
                                className="text-decoration-none"
                                to={'/adress/' + AdressInvoiceUnique.id}
                              >
                                <Pen size={20} />
                              </Link>
                            </button>
                          </div>
                        </div>
                        <div className="text-muted">
                          <div>
                            Nom et prénom:{' '}
                            <span className="fw-bold">
                              {AdressInvoiceUnique.nameAdress}{' '}
                              {AdressInvoiceUnique.lastNameAdress}
                            </span>
                          </div>
                          <div>
                            Adresse:{' '}
                            <span className="fw-bold">
                              {AdressInvoiceUnique.adressPartOne}
                            </span>
                          </div>
                          <div>
                            Adresse partie complémentaire:{' '}
                            <span className="fw-bold">
                              {AdressInvoiceUnique.adressPartTwo}
                            </span>
                          </div>
                          <div>
                            Code postal et ville:{' '}
                            <span className="fw-bold">
                              {' '}
                              {AdressInvoiceUnique.zip}{' '}
                              {AdressInvoiceUnique.city}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentValidate
