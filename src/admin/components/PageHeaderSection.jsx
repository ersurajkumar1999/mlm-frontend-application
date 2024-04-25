import { Link } from 'react-router-dom';

const PageHeaderSection = ({ title }) => {
    return (
        <div className="pagetitle">
            <h1>{title}</h1>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={'/admin/dashboard'}>Home</Link>
                    </li>
                    <li className="breadcrumb-item active">{title}</li>
                </ol>
            </nav>
        </div>
    )
}

export default PageHeaderSection