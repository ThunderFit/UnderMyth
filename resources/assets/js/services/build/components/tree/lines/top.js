import React from 'react';

class TopLine extends React.Component {
    constructor(props) {
        super(props);
    }
    getClassName(one, first, last) {
        let className = 'sb-sl-top';

        if (!one) {
            className = className + ' sb-sl-b-left';
        }

        if (
            (one && !first && last)
            || (!one && first && !last)
            || (!first && !last)
        ) {
            className = className + ' sb-sl-b-top';
        }

        return className
    }
    render() {
        let first = parseInt(this.props.childkey) === 0;
        let last = parseInt(this.props.childCount) === (parseInt(this.props.childkey) + 1);
        return (
            <div className="sb-sl">
                <div className={this.getClassName(true, first, last)}> </div>
                <div className={this.getClassName(false, first, last)}> </div>
            </div>
        );
    }
}

export default TopLine;