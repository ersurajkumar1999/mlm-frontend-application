import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <Link to={'/admin/dashboard'} className="nav-link ">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#user-list" data-bs-toggle="collapse" href="#">
                        <i className="bi bi-menu-button-wide"></i><span>Users</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="user-list" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <Link to={'/admin/user-list'}>
                                <i className="bi bi-circle"></i><span>User List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/admin/manager-list'}>
                                <i className="bi bi-circle"></i><span>Manager List</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                {/* <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                        <i className="bi bi-journal-text"></i><span>Forms</span><i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <a href="forms-elements.html">
                                <i className="bi bi-circle"></i><span>Form Elements</span>
                            </a>
                        </li>
                        <li>
                            <a href="forms-layouts.html">
                                <i className="bi bi-circle"></i><span>Form Layouts</span>
                            </a>
                        </li>
                        <li>
                            <a href="forms-editors.html">
                                <i className="bi bi-circle"></i><span>Form Editors</span>
                            </a>
                        </li>
                        <li>
                            <a href="forms-validation.html">
                                <i className="bi bi-circle"></i><span>Form Validation</span>
                            </a>
                        </li>
                    </ul>
                </li> */}
            </ul>
        </aside>
    )
}

export default Sidebar