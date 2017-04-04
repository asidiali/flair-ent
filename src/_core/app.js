import React, {PropTypes} from 'react';
import { RouteTransition } from 'react-router-transition';
import {StyleRoot} from 'radium';
import styles from './styles';

const App = props => (
  <StyleRoot>
    <RouteTransition
      pathname={props.location.pathname}
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
    >
      <div style={styles.base}>
        {props.children}
      </div>
    </RouteTransition>
  </StyleRoot>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
