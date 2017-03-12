import React from 'react';
import EmployerItem from './EmployerItem';

export default class EmployersList extends React.Component {
  render() {
    let employers = this.props.items.map((item) => {
      return <EmployerItem key={item.id} name={item.name} email={item.email} />
    });

    return (
      <ul className="contract-list">
        {employers}
      </ul>
    );
  }
  static propTypes = {
    items: React.PropTypes.array.isRequired
  }
}
