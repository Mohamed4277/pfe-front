import React, { useEffect, useState } from 'react'
import { Cart3, Power, Person } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function NavBar() {
  const navigate = useNavigate()
  const [isExpand, setIsExpand] = useState(false)
  const [isExpandNav, setIsExpandNav] = useState(false)
  const [isExpandPerson, setIsExpandPerson] = useState(false)
  const { cart, user, category } = useSelector((state) => state)
  const [categorySelected, setCategorySelected] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'http://localhost:8080/api/category'
    const token = localStorage.getItem('access_token')
    const fetchData =
      token &&
      (async () => {
        try {
          const response = await fetch(url, {
            headers: {
              Authorization: `Bearer ${token}`,
              'content-Type': 'application/json',
            },
          })
          const json = await response.json()
          dispatch({ type: 'GET_CATEGORY', payload: json })
        } catch (error) {
          console.log('error', error)
        }
      })

    token && fetchData()
  }, [])

  useEffect(() => {
    const url = categorySelected
      ? 'http://localhost:8080/api/product/category/' + categorySelected
      : 'http://localhost:8080/api/product'
    const token = localStorage.getItem('access_token')
    const fetchDataByCategory =
      token &&
      (async () => {
        try {
          const response = await fetch(url, {
            headers: {
              Authorization: `Bearer ${token}`,
              'content-Type': 'application/json',
            },
          })
          const json = await response.json()
          dispatch({ type: 'GET_PRODUCTS', payload: json })
        } catch (error) {
          console.log('error', error)
        }
      })

    token && fetchDataByCategory()
  }, [categorySelected])

  const nbItem =
    cart &&
    cart.length > 0 &&
    cart.reduce((acc, currentvalue) => {
      return acc + parseInt(currentvalue.quantity, 10)
    }, 0)

    const isAdmin=user?.roles?.some(role=>role.name=="ROLE_ADMIN");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-bar-mb">
        <div className="container-fluid">

              {isAdmin && <a className="navbar-brand" href="/admin/products">
            <h6 className='text-danger fw-bold'>Administration</h6>
          </a>}
   
          <a className="navbar-brand" href="/home">
            <h3>MyBookStore.</h3>
          </a>
          <button
            onClick={() => setIsExpandNav(!isExpandNav)}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isExpandNav ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {user.isConnected && (
            <div
              className={
                isExpandNav
                  ? 'collapse navbar-collapse show'
                  : 'collapse navbar-collapse'
              }
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li
                  className="nav-item dropdown"
                  onClick={() => setIsExpand(!isExpand)}
                >
                  <a
                    className={
                      isExpand
                        ? 'nav-link dropdown-toggle show'
                        : 'nav-link dropdown-toggle'
                    }
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-expanded={isExpand}
                  >
                    Catalogue
                  </a>
                  <div
                    className={
                      isExpand
                        ? 'dropdown-menu show rounded-0'
                        : 'dropdown-menu'
                    }
                    aria-labelledby="navbarDropdown"
                  >
                    {category.map((cat) => (
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => {
                          setCategorySelected(cat.category)
                        }}
                      >
                        {cat.category}
                      </a>
                    ))}
                  </div>
                </li>
              </ul>
              <div className="form-inline my-2 my-lg-0">
                <div className="col">
                  <button className="btn btn-lg button-margin">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li
                        className="nav-item dropdown"
                        onClick={() => setIsExpandPerson(!isExpandPerson)}
                      >
                        <a
                          className={
                            isExpandPerson
                              ? 'nav-link dropdown-toggle show'
                              : 'nav-link dropdown-toggle'
                          }
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-expanded={isExpandPerson}
                        >
                          <Person size={20} />
                        </a>
                        <div
                          className={
                            isExpandPerson
                              ? 'dropdown-menu show rounded-0'
                              : 'dropdown-menu'
                          }
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item" href="/order">
                            Commandes
                          </a>
                          <a className="dropdown-item" href="/wishlist">
                            Liste de souhaits
                          </a>
                          <a
                            className="dropdown-item"
                            href="/person-information"
                          >
                            Information personnelle
                          </a>
                          <a className="dropdown-item" href="/adress">
                            Adresses
                          </a>
                          <a className="dropdown-item" href="/payment-mode">
                            Methodes de payements
                          </a>
                        </div>
                      </li>
                    </ul>
                  </button>
                  <button
                    id="cart"
                    onClick={() => navigate('/cart')}
                    className="btn btn-lg  button-margin"
                  >
                    <div className="d-inline ft-nb-item">{nbItem}</div>
                    <Cart3 size={20} />
                  </button>
                  <button
                    onClick={() => {
                      /*persistor.purge()*/
                      window.localStorage.clear()
                      dispatch({
                        type: 'IS_CONNECTED',
                        payload: { isConnected: false },
                      })
                      dispatch({ type: 'REMOVE_CART' })
                      dispatch({ type: 'REMOVE_WISH_LIST' })
                      navigate('/')
                    }}
                    className="btn btn-lg button-margin"
                  >
                    <Power size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default NavBar
