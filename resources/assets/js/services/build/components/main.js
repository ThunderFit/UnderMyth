import React from 'react';

import SchoolMenu from "../containers/menu/schoolMenu";
import MainTree from "../containers/tree/main";
import MainInfo from "../containers/info/main";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'sb-mt-base'}>
                <div className={'sb-mt-left'}>
                    <MainInfo/>
                </div>
                <div className={'sb-mt-right'}>
                    <SchoolMenu />
                    <MainTree/>
                </div>
            </div>
        )
    }
}

export default Main;