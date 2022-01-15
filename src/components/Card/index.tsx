import './styles.scss';

type CardProps = {
    id: number;
    title?: string;
}

export function Card({ id, title }: CardProps) {

    return (
        <div className="component">
            <span>{title} {id}</span>
            <div className="chart"></div>
        </div>
    );
}