import { useState } from 'react';
import { Card } from '../../components/Card';
import './styles.scss';

export function HomePage() {

    const [cardsList, setCardsList] = useState<number[]>(() => {
        const list = localStorage.getItem('cards-order');

        return list !== null ? JSON.parse(list) : [];
    });

    return (
        <div className="home-content">
            <div className="welcome">Bem Vindo, Julio!</div>
            <div className="dashboard-container">
                <div className="dashboard-content">
                    {
                        cardsList.map((e,i) => (
                            <Card id={e} title={`Titulo ${e}`} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}