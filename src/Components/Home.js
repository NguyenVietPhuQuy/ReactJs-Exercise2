import React, { Component } from 'react'
import styles from './Home.module.css'
import Header from './Header.js'
import Body  from './Body'
export default class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <Header/>
        <Body/>
      </div>
    )
  }
}
