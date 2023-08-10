import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import SalesSlider from './Components/SalesSlider/SalesSlider'
import ProductList from './Components/ProductList'
import Footer from './Components/Footer/Footer'
import ProductPage from './Pages/ProductPage'
import NotFoundPage from './Pages/404Page/404Page'
import CartPage from './Pages/CartPage/CartPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
          <Route
              index
              element={
                <>
                  <SalesSlider />
                  <h2>Home page</h2>
                </>
              }
            />
            <Route path="shop" element={<ProductList />} />
            <Route
              path={'shop/*'}
              element={<ProductPage id={window.location.href.substr(window.location.href.indexOf('/shop/') + 6)} />}
            />            <Route path="delivery" element={<DeliveryPage />} />
            <Route path={'*' || '404'} element={<NotFoundPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="payment_confirm" element={<PaymentConfirmPage/>} />
             <Route path="payment_success" element={<PaymentSuccessPage/>} />
            <Route path="cart" element={<CartPage/>} />
          </Route>
        </Routes>
        <Footer catalogTitle="Collections" clientTitle="Clients" />
      </BrowserRouter>
    </div>
  )
}

export default App
