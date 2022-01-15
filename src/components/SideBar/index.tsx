import { Link } from 'react-router-dom';
import './styles.scss';

export function SideBar (props: any) {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/home">
                        <span className="icon material-icons">home</span>
                        <span className="title">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/config">
                        <span className="icon material-icons">settings</span>
                        <span className="title">Settings</span>
                    </Link>
                </li>
                <li>
                    <Link to="/charts">
                        <span className="icon material-icons">analytics</span>
                        <span className="title">Charts</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );

}