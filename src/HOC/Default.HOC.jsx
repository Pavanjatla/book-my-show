import React from 'react';
import { Route } from 'react-router';
import DefaultLayout from '../layouts/Default.Layout';

const DefaultHoc = ({component:Component , ...rest}) =>{
    
    return(
        <>
            <Route {...rest} component = {(props) =>(
                <DefaultLayout>
                    <Component {...props} />
                </DefaultLayout>
            )}
            />

        </>

    );

};

export default DefaultHoc;