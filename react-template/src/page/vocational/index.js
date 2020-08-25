
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA} from '@store/OBS/vocational/action'
import { Button } from 'antd';


const mapStateToProps = ({VOCATIONAL}) => {
    return {
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (class Vocational extends React.Component {
    render() {
        return (
            <div>   
                Vocational
            </div>

        )
    }
})
