/* jshint esversion: 6 */
import React from 'react'
import NoAuthNav from '../NoAuth/NoAuthNav'
import NoAuthFooter from '../NoAuth/NoAuthFooter'

const LoginLayout = ({children, ...rest}) => {
  return (
    <div style={styles.LoginFlexContainer}>
      <div style={styles.header}>
        <NoAuthNav />
      </div>
      <div>
        <div>
          <div style={styles.childBox}>
            {children}
          </div>
        </div>
      </div>
      <div style={styles.footerContainer}>
        <div>
          <NoAuthFooter />
        </div>
      </div>
    </div>
  )
}

const styles = {
  LoginFlexContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  header: {
    height: '15vh',
    display: 'flex',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerContainer: {
    paddingBottom: '20px',
    paddingLeft: '20px',
    paddingRight: '20px',
    backgroundColor: 'white',
    width: '90%'
  },
  childBox: {
    minHeight: '80vh',
    minWidth: '75vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px'
  }
}

export default LoginLayout
