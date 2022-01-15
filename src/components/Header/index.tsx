import './styles.scss';

export function Header(props: any) {

    return (
        <header>
            <span className="logo">DASH SAMPLE</span>

            <div className="actions">
                <div className="user-action">
                <button className="reset-button material-icons">face</button>
                <span>Julio Negri</span>
                </div>
                
                <button className="reset-button material-icons">settings</button>
            </div>
        </header>
    );

}