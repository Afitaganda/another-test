import { Routes, Route } from 'react-router-dom';


import LandingPage from './pages/landingPage';
import CreateProduct from './pages/createProduct';
// import DetailProduct from './pages/detailProduct';

function App() {
  return (
        <div className="App">
          <Routes>
          <Route path="/" element={<LandingPage/>} /> 
          <Route path="/create-product" element={<CreateProduct/>} />
          {/* <Route path="/detail/:id" component={<DetailProduct productList={productList} />} />  */}
        </Routes>
        </div>
    
  );
}

export default App;
