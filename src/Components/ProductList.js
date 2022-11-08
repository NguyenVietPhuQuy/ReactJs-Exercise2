import React, { Component } from 'react'
import styles from './ProductList.module.css'
import clsx from 'clsx'
import v1 from '../Asset/v1.png'
import v2 from '../Asset/v2.png'
import v3 from '../Asset/v3.png'
import v4 from '../Asset/v4.png'
import v5 from '../Asset/v5.png'
import v6 from '../Asset/v6.png'
import v7 from '../Asset/v7.png'
import v8 from '../Asset/v8.png'
import v9 from '../Asset/v9.png'
import Model from '../Asset/model.jpg'
export default class ProductList extends Component {
    products = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": v1,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": v2,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": v3,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": v4,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": v5,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": v6,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": v7,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": v8,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": v9,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]
    state = {
        productImg: v1,
        productName:"GUCCI G8850U",
        productDesc:"Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
    handleChangeDetail=(item) =>{
        this.setState({
        productImg: item.url,
        productName:item.name,
        productDesc:item.desc,
        })
    }
    renderProduct = () => {
        const html = this.products.map((item) => {
            return (
                <div className={styles.productList__col}>
                    <div className={clsx(styles.productList__item, styles.product__img)} onClick={(product) => { this.handleChangeDetail(item) }}>
                        <img alt='' src={item.url}></img>
                    </div>
                </div>
            )
        })
        console.log(html)
        return html;
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.productDetail}>
                    <div className={styles.productDetail__row}>
                        <div className={styles.productDetail__show}>
                            <img alt='' src={this.state.productImg} className={styles.imgDesign}></img>
                            <div className={styles.productDetail__content}>
                                <h3>{this.state.productName}</h3>
                                <h3>{this.state.productDesc}</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles.productDetail__row}>
                        <img alt='' src={Model}></img>
                    </div>
                </div>

                <div className={styles.productList__height}>
                    <div className={styles.productList}>
                        {this.renderProduct()}
                    </div>
                </div>
            </div>
        )
    }
}
