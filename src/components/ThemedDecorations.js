// Code ThemedDecoration Component Here
import React from 'react';

class ThemedDecorations extends React.Component {
  render() {
    const currentTheme = this.props.theme;
    const childrenWithClassNameTheme = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        className: currentTheme
      });
    });
    
    return (
      <div className="decorations">
        {childrenWithClassNameTheme}
      </div>
    );
  }
}

export default ThemedDecorations;