import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct } from '../redux/ProductListSlice';

import '../App.css'

import dataArticle from '../data.js'
import {v4 as uuid} from 'uuid';

function CreateProduct() {
  // Define state variables for form inputs
  const [welcome, setWelcome] = useState(true);
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [selectedFreshness, setSelectedFreshness] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [productPriceError, setProductPriceError] = useState('');
  const [imageError, setImageError] = useState('');
  const [freshnessError, setFreshnessError] = useState('');
  
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

   // Fungsi onChange untuk setiap input
   const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value);
  };

  const validateImage = () => {
    if (!selectedImage) {
      setImageError('Please select an image.');
      return false;
    }
    setImageError('');
    return true;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleProductPriceChange = (e) => {
    const value = e.target.value;
    setProductPrice(value);
  
    const priceRegex = /^\d+(\.\d{1,2})?$/;
    if (!priceRegex.test(value)) {
      setProductPriceError('Please enter a valid product price.');
    } else {
      setProductPriceError('');
    }
  };
  

  const handleFreshnessChange = (e) => {
    setSelectedFreshness(e.target.value);
  };

  const handleDeleteConfirmation = (productId) => {
    setDeleteConfirmation(true);
    setProductToDelete(productId); 
  };

  const handleDelete = () => {
    dispatch(deleteProduct(productToDelete));
    setDeleteConfirmation(false);
  };
  
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWelcome(false);
    }, 5000);
    return () => clearTimeout(timer); //menampilkan welcome dengan waktu 5 detik
  }, []);

  const checkRealTime = (e) => {
    const value = e.target.value;
    const symbolRegex = /[@#{}]/;
  
    if (value.length > 25) {
      const message = document.getElementById("validation1");
      message.innerText = "Product name exceeds 25 characters. Please enter a shorter name.";
      message.classList.remove("invisible");
    } else if (value.length === 0) {
      const message = document.getElementById("validation1");
      message.innerText = "Please enter a valid product name.";
      message.classList.remove("invisible");
    } else if (value.length < 10) {
      const message = document.getElementById("validation1");
      message.innerText = "Product name less than 10 characters. Please enter a longer name.";
      message.classList.remove("invisible");
    } else if (symbolRegex.test(value)) {
      const message = document.getElementById("validation1");
      message.innerText = "Product Name must not contain symbols.";
      message.classList.remove("invisible");
    } else {
      // Jika validasi berhasil, hapus pesan kesalahan
      const message = document.getElementById("validation1");
      message.innerText = "";
      message.classList.add("invisible");
    }
  };  

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const isImageValid = validateImage();

    if (!selectedFreshness) {
      const message = document.getElementById("validation2");
      message.innerText = "Please select a product freshness option.";
      message.classList.remove("invisible");
      return;
    } else {
      setFreshnessError('');
    }

    // If all validations pass, create a new product object
    const newProduct = {
      id: uuid(),
      name: productName,
      category: productCategory,
      price: parseFloat(productPrice).toFixed(2),
      freshness: selectedFreshness,
      image: selectedImage,
    };

    // Dispatch action to add product to Redux store
    dispatch(addProduct(newProduct));

    // Clear form inputs
    setProductName('');
    setProductCategory('');
    setProductPrice('');
    setSelectedFreshness('');
    setSelectedImage(null);

    setProductPriceError('');
    setImageError('');
    setFreshnessError('');
  };

  return (

    <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Create Product</title>
    <link rel="stylesheet" href="../css/style2.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
      crossOrigin="anonymous"
    />

    <nav>
        <div className="h-20vh flex justify-between z-50 text-white bg-blue-500">
            <div className="flex items-center flex-1">
                <span className="text-3xl font-semi-bold">Logo</span>
            </div>
            <div>
                <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px]">
                        <li
                        className="my-2 py-2 bg-blue-800 hover:bg-white hover:text-blue-600">Home</li>
                        <li
                        className="my-2 py-2 hover:bg-white hover:text-blue-600">Features</li>
                        <li
                        className="my-2 py-2 hover:bg-white hover:text-blue-600">Pricing</li>
                        <li
                        className="my-2 py-2 hover:bg-white hover:text-blue-600">FAQs</li>
                        <li
                        className="my-2 py-2 hover:bg-white hover:text-blue-600">About</li>
                    </ul>
                </div>
            </div>
        </div>
      </nav>
    <div>
      {welcome && <div className="welcome-message">Welcome!</div>}
    </div>
    
    <div>
      <div className="text-center">
        <div className="row">
          <div className="col-3" />
          <div className="col-6">
            <div>
              <img src="Bootstrap_logo.svg.png" alt="Logo Bootstrap" />
            </div>
            <h1>{dataArticle.title.en}</h1>
            <p>
              {dataArticle.description.en}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        {/* <div>
          <button onClick={() => generateRandomNumber()}>
            Randomize Number
          </button>
        </div> */}
      </div>
      <div className="container">
        <div className="row justify-content-md-left">
          <div className="col-4" />
          <div className="col-4">
            <div>
              <h3 className="text-md-left">Detail Product</h3>
            </div>
            <form action="" className="needs-validation" noValidate="">
              <div id="productName">
                <label htmlFor="product-name" id="edit-label">
                  Product Name{" "}
                </label>
                <br />
                <input
                  className="form-control"
                  type="text"
                  id="pname"
                  name="productname"
                  aria-label="default input"
                  required=""
                  value={productName}
                  onChange={(e) => { checkRealTime(e); handleProductNameChange(e); }}
                />
                <div
                  id="validation1"
                  className="invinsible text-danger"
                >
                  Please enter a valid product name.
                </div>
              </div>
              <div>
                <label htmlFor="productcategory" id="edit-label">
                  Product Category{" "}
                </label>
                <br />
                <select
                  className="form-select"
                  name="pcategory"
                  id="pcategory"
                  aria-label="select"
                  required=""
                  onChange={handleProductCategoryChange}
                >
                  <option selected>Choose...</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Kitchenware">Kitchenware</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div>
                <label htmlFor="productimage" id="edit-label">
                  Image of Product
                </label>
                <input
                  className={`form-control border-primary bs-blue ${
                    imageError ? 'is-invalid' : ''
                  }`}
                  type="file"
                  id="form-file"
                  name="imagename"
                  onChange={handleImageChange}
                  accept="image/*"
                />
                {imageError && <div className="invalid-feedback">{imageError}</div>}
              </div>
              <div className="form-check" id="pfreshness">
                <label
                  className={`form-check-label ${freshnessError ? 'text-danger' : ''}`}
                  htmlFor="freshness"
                  id="edit-label"
                >
                  Product Freshness
                </label>
                <br />
                <input
                  className="form-check-input"
                  type="radio"
                  id="brandnew"
                  name="freshness"
                  value="Brand New"
                  checked={selectedFreshness === "Brand New"}
                  onChange={handleFreshnessChange}
                />
                Brand New
                <br />
                <input
                  className="form-check-input"
                  type="radio"
                  id="secondhank"
                  name="freshness"
                  value="Second Hank"
                  checked={selectedFreshness === "Second Hank"}
                  onChange={handleFreshnessChange}
                />
                Second Hank
                <br />
                <input
                  className="form-check-input"
                  type="radio"
                  id="refurbished"
                  name="freshness"
                  value="Refurbished"
                  checked={selectedFreshness === "Refurbished"}
                  onChange={handleFreshnessChange}
                />
                Refurbished
                <br />
                {freshnessError && (
                  <div id="Validation2" className="invinsible invalid-feedback">{freshnessError}</div>
                )}
              </div>
              <div>
                <label htmlFor="description" id="edit-label">
                  Additional Description
                </label>
                <br />
                <textarea
                  className="form-control"
                  id="pdescription"
                  rows={5}
                  cols={30}
                  required=""
                  defaultValue={""}
                />
                <div
                  id="validationServerDescriptionFeedback"
                  className="invalid-feedback"
                >
                  Please enter a valid product description.
                </div>
                <div id="validationSymbolDesc" />
              </div>
              <div>
                <label htmlFor="price" id="edit-label">
                  Product price{" "}
                </label>
                <br />
                <input
                  className={`form-control ${productPriceError ? 'is-invalid' : ''}`}
                  type="number"
                  id="price"
                  name="price"
                  placeholder="$100"
                  required=""
                  onChange={handleProductPriceChange}
                  value={productPrice}
                />
                {productPriceError && (
                  <div className="invalid-feedback">{productPriceError}</div>
                )}
              </div>
              <button
                className="btn btn-primary col-12"
                id="edit-button"
                type="submit"
                onClick={(e)=> handleSubmit(e)}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div></div>
    </div>
    <div>
    <div>
      <h2 className="text-center">List Product</h2>
    </div>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Product Name</th>
          <th scope="col">Product Category</th>
          <th scope="col">Product Freshness</th>
          <th scope="col">Product Price</th>
          <th scope="col">Product Image</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody id="productTableBody">
      {productList.map((product) => (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.category}</td>
          <td>{product.freshness}</td>
          <td>{product.price}</td>
          <td>
            {product.image && (
              <img src={URL.createObjectURL(product.image)} alt={`Image for ${product.name}`} />
            )}
          </td>
          <td>
            <button onClick={() => handleDeleteConfirmation(product.id)}>Hapus</button>
            <Link to={`/detail/${product.id}`}>Lihat Detail</Link>
          </td>
        </tr>
      ))}
        
      </tbody>
    </table>
    {/* Konfirmasi Hapus */}
    {deleteConfirmation && (
      <div className="delete-confirmation">
        <p>Apakah Anda yakin ingin menghapus produk ini?</p>
        <button onClick={handleDelete}>Hapus</button>
      </div>
    )}
  </div>

</>

  )
}

export default CreateProduct;
