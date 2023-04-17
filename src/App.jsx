import reactLogo from './assets/react.svg'
import SideBar from './components/SideBar'
import Setting from './pages/Setting'
import Dashborad from './pages/Dashboard'
import ProductsList from './pages/ProductList'
import Products from './pages/Products'
import Order from './pages/Order'
import QRcode from './pages/QRcode'
import Table from './pages/Table'
import Customer from './pages/Customer'
import viteLogo from '/vite.svg'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
     <SideBar>
    <Routes>
     

     
      <Route path='/' element={<Dashborad/>}/>
      <Route path='/productlist' element={<ProductsList/>}/>
      <Route path='/product' element={<Products/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/table' element={<Table/>}/>
      <Route path='/qrcode' element={<QRcode/>}/>
      <Route path='/setting' element={<Setting/>}/>
      <Route path='/customer' element={<Customer/>}/>
      
      
      </Routes>
      </SideBar>
      </BrowserRouter>
 
  
  )
}

export default App
