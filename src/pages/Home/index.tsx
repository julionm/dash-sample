import { Card } from '../../components/Card';
import './styles.scss';

export function HomePage() {
    return (
        <div className="home-content">
            <div className="welcome">Bem Vindo, Julio!</div>
            <div className="dashboard-container">
                <div className="dashboard-content">
                    <Card id={1} title="Titulo"></Card>
                    <Card id={2} title="Teste"></Card>
                    <Card id={3} title="TestTest"></Card>
                    <Card id={4} title="olutiT"></Card>
                </div>
            </div>
        </div>
    );
}