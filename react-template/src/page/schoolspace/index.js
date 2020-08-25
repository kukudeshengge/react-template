
import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { AAA} from '@store/OBS/schoolspace/action'
import { Button } from 'antd';
import Header from '../headerschoolspace'
import Footer from '../footer'


const mapStateToProps = ({SCHOOLSPACE}) => {
    return {
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    
    };
}


export default connect(mapStateToProps, mapDispatchToProps) (class Schoolspace extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                Schoolspace
                <Footer/>
            </div>
        )
    }
})
