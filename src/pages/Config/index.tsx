import { CardSort } from '../../components/CardSort';
import './styles.scss';

export function ConfigPage() {
    return (
        <div className="config-content">
            <div className="page-title">Gestão da Aplicação</div>

            <CardSort />
        </div>
    );
}