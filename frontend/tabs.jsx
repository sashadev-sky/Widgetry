import React from 'react';
import TabParts from './tabParts';

class Tabs extends React.Component{
  constructor(props){
    super(props);
      this.state = { selectedPane: 0 };

      this.selectTab = this.selectTab.bind(this);
  }

  selectTab(tabText) {
    const num = parseInt(tabText) - 1;
    this.setState({ selectedPane: num });
  }

  render(){
    const panes = this.props.panes; 
    const { selectedPane } = this.state;
    return <div>
        <h1>Tabs</h1>
        <TabParts panes={panes} clickHandler={this.selectTab} value={selectedPane} />
      </div>;
  }
}

export default Tabs;