import React, { Component } from 'react'
import styles from './Body.module.css'
import ProductList from './ProductList'
export default class Body extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
                <ProductList/>
        </div>
      </div>
    )
  }
}
