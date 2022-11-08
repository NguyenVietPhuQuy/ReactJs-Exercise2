import React, { Component } from 'react'
import styles from'./Header.module.css'
import clsx from 'clsx'
export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
            <div className={clsx(styles.container,styles.headerContent)}>
                <div>TRY GLASSES APP ONLINE</div>
            </div>
      </div>
    )
  }
}
