import React from 'react';
import ProductService from '../services/ProductService';
import Product from '../components/Product';

class ProductList extends React.Component {
  state = { plist: [] };
  componentDidMount() {
    this.getData();
  }
  getData() {
    ProductService.getProducts()
      .then((res) => {
        // console.log('Response', res);
        this.setState({ plist: res.data });
        // this.state.plist = res.data;
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
  render() {
    return (
      <div>
        <h3>ProductList</h3>
        {this.state.plist.map((item) => (
          <Product
            pdata={item}
            key={item.productId}
            btnClick={(id, lbl) => console.log('Id', id, 'Label', lbl)}
          />
        ))}
      </div>
    );
  }
}
export default ProductList;
