import React from 'react';
import { ThemeContext } from '../context';
function Column(props) {
  const theme = React.useContext(ThemeContext);
  const color = theme === 'light' ? 'text-dark' : 'text-white';
  const cls = 'col-md-' + props.size;
  return <div className={cls + ' ' + color}>{props.children}</div>;
}
export default Column;
