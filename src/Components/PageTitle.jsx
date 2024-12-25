
import { Helmet } from 'react-helmet';

const PageTitle = ({title}) => {
    return (
        <Helmet>
            {title}
        </Helmet>
    );
};

export default PageTitle;