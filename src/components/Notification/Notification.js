import React from 'react';
import css from './Notification.module.css';

export class Message extends React.Component {
  render() {
    return <span className={css.notification}>There is no feedback</span>;
  }
}
