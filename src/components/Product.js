import React from 'react';

class Product extends React.Component {
  renderStock() {
    if (this.props.pdata.productStock > 0) {
      return <button>Add to cart</button>;
    }
    return <p>Out of stock</p>;
  }
  render() {
    // console.log('.before...Product......', this.props.pdata);
    const data = this.props.pdata;
    // console.log('..after..Product......', data);
    return (
      <div>
        <h3>Product</h3>
        <img src={data.productImage} />
        <h3>{data.productName}</h3>
        <h4>{data.productPrice}</h4>
        {data.productStock > 0 ? (
          <button onClick={() => this.props.btnClick(data.productId)}>
            {this.props.buyNow ? 'Buy Now' : 'Add to Cart'}
          </button>
        ) : null}
        {this.renderStock()}
      </div>
    );
  }
}
export default Product;
