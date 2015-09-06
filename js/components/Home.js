import React, {findDOMNode, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Button } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';

class Home extends Component {
  render() {
    const {title} = this.props;
    return (
      <main>
        <PageHeader className={styles.text}>Welcome {title}!</PageHeader>
        <input type='text' ref='input' />
        <Button bsStyle='info' onClick={(e) => this.handleClick(e)}>
          Change
        </Button>
      </main>
    );
  }

  handleClick(e) {
    const {dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    const node = findDOMNode(this.refs.input);
    const text = node.value.trim();
    actions.changeTitle(text);
    node.value = '';
  }

}

export default connect(state => state.Sample)(Home)
