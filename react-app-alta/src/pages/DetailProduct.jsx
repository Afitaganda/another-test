import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function DetailProduct({ product }) {
  // const { id } = useParams();
  // const product = productList.find((product) => product.id === id);

  DetailProduct.propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      freshness: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      // Sesuaikan jenis prop dengan data produk Anda
    }).isRequired,
  };
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Detail Produk</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossOrigin="anonymous"
      />
      <h1>Detail Product</h1>
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">{product.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Category</th>
              <td>{product.category}</td>
            </tr>
            <tr>
              <th scope="row">Product Freshness</th>
              <td>{product.freshness}</td>
            </tr>
            <tr>
              <th scope="row">Product Price</th>
              <td>{product.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DetailProduct;
