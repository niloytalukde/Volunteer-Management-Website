
import { Helmet } from 'react-helmet';

const Halmet = ({title}) => {
    return (
        <div>
        <Helmet>
        <h1>{title}</h1>
        </Helmet>
            
        </div>
    );
};

export default Halmet;