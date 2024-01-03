import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MyNavLink extends Component {
  render() {
    // 使用 to 属性传递给 NavLink
    return <NavLink activeClassName="atguigu" className="list-group-item" {...this.props} />;
  }
}

