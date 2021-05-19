import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';


import './styles.css';

interface PageHeaderProps {
    title: string;
    description?: string;
};

const image = "https://fontmeme.com/permalink/210519/cc60a60136b60e8ba050acc5c78a3d8d.png";

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/admin/start">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={image} alt="Cline" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p> }
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;