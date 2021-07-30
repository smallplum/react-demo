import React, { PureComponent } from 'react';
// import HomeLogo from '@/assets/home-logo.png';
import styles from './index.scss';

class Index extends PureComponent {
  render() {
    return (
      <div className={styles.pageHeader}>
        <div className="header-left">
          <div className="header-logo">
            {/* <img style={{ width: '100%', height: '100%' }} className="img" alt="" src={HomeLogo} /> */}
          </div>
        </div>
        <div className="header-right" style={{ color: 'white', fontSize: '18px' }} />
      </div>
    );
  }
}

export default Index;
