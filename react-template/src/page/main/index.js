
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA} from '@store/OBS/main/action'
import { Button } from 'antd';


const mapStateToProps = ({MAIN}) => {
    return {
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (class Main extends React.Component {
    render() {
        return (
            <div>   
                Main
            </div>
        )
    }
})
