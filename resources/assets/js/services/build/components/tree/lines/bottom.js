import React from 'react';

class BottomLine extends React.Component {
    constructor(props) {
        super(props);
    }
    getClassName(one, left, right) {
        let className = 'sb-sl-bottom';
        if (!one) {
            className = className + ' sb-sl-b-left';
        }

        if (
            (one && left)
            || (!one && right)
        ) {
            className = className + ' sb-sl-b-bottom';
        }

        return className
    }
    render() {
        let left = this.props.bottom.left || false;
        let right = this.props.bottom.right || false;
        return (
            <div className="sb-sl">
                <div className={this.getClassName(true, left, right)}> </div>
                <div className={this.getClassName(false, left, right)}> </div>
            </div>
        );
    }
}

export default BottomLine;