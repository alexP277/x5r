import React from 'react';
import './../../App.css';
import Index from "../../components/Button";
import PlusIcon from "../../shared/images/plus.svg";

const Clusters = () => {
    return (
        <div className="container">
            <div className="head_block">
                <h1>
                    Кластеры
                </h1>
                <Index icon={<img src={PlusIcon}/>} text={"Добавить кластер"} callback={()=>console.log('добавил')} background={"#63A325"}></Index>
            </div>
        </div>
    );
};

export default Clusters;
