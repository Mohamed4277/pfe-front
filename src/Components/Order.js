import React, { useEffect, useState } from 'react'
import data from '../Data'
import Card from '../Components/Card'



function Order() {
  const [myOrders, setMyOrders] = useState([])
  const [isExpand, setIsExpand] = useState(false)
  const [idExpand, setIdExpand] = useState();
  useEffect(() => {
    const { user } = JSON.parse(localStorage.getItem('persist:root'))
    const userId = JSON.parse(user).id
    const url = 'http://localhost:8080/api/user/' + userId + '/orders'
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
        setMyOrders(json.flatMap((num) => num))
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [])
  let i = 0

  const order =
    myOrders &&
    myOrders.reduce((cum, ord) => {
      if (!cum[ord.order.id]) {
        cum[ord.order.id] = []
      }
      cum[ord.order.id].push({ ...ord.product, quantity: ord.quantity })
      return cum
    }, {})
  console.log('order', order)
  return (
    <>
      <div className="container">
        <div className="row text-center mb-5">
          <h4>Commandes</h4>
        </div>
        <div className="row rounded-0">
          <div className="col-12 rounded-0">
            <div
              className="accordion border-0 rounded-0"
              id="accordionPanelsStayOpenExample"
            >
              {order &&
                Object.keys(order).length > 0 &&
                Object.keys(order)
                  .sort((a, b) => b - a)
                  .map((ord) => {
                    i = i + 1
                    return (
                      <>
                        <div
                          className="accordion accordion-flush"
                          id="accordionFlushExample"
                          onClick={() => {setIsExpand(!isExpand); setIdExpand(ord)}}
                        >
                          <div className="accordion-item">
                            <h2
                              className="accordion-header"
                              id="flush-headingOne"
                            >
                              <button
                                className={
                                  isExpand && idExpand === ord
                                    ? 'accordion-button'
                                    : 'accordion-button collapsed'
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne"
                                aria-expanded={isExpand && idExpand === ord ? true : 'false'}
                                aria-controls="flush-collapseOne"
                              >
                                #Order {i}
                              </button>
                            </h2>
                            <div
                              id="flush-collapseOne"
                              className={
                                isExpand && idExpand === ord
                                  ? 'accordion-collapse collapse show'
                                  : 'accordion-collapse collapse'
                              }
                              aria-labelledby="flush-headingOne"
                              data-bs-parent="#accordionFlushExample"
                            >
                              <div className="accordion-body">
                                {order[ord].map((book) => (
                                  <>
                                    <Card product={book} />
                                  </>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Order
