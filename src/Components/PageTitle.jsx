import React from 'react';
import { Helmet } from 'react-helmet';

const PageTitle = ({title}) => {
    return (
        <Helmet>
            <h1>{title}</h1>
        </Helmet>
    );
};

export default PageTitle;