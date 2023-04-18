import React, {useCallback, useState} from 'react';
import './../../App.css';
import PlusIcon from "../../shared/images/plus.svg";
import ClusterTable from "./components/ClusterTable";
import {Button} from "../../components";

interface ClusterTableType {
    name: string;
    attribute: string;
    attribute1: string;
    attribute2: string;
    delete: boolean;
}

const columns = [
    {key: 'name', title: 'Наименование товара'},
    {key: 'attribute', title: 'Атрибут'},
    {key: 'attribute1', title: 'Атрибут'},
    {key: 'attribute2', title: 'Атрибут'},
    {key: 'delete', title: 'Удалить'},
];

const Clusters = () => {

    const [clusterTableState, setClusterTableState] = useState<ClusterTableType[]>([
        {name: 'Кластер 1', attribute: 'Атрибут 1', attribute1: 'Атрибут 2', attribute2: 'Атрибут 3', delete: false},
        {name: 'Кластер 2', attribute: 'Атрибут 4', attribute1: 'Атрибут 5', attribute2: 'Атрибут 6', delete: false},
        {name: 'Кластер 3', attribute: 'Атрибут 7', attribute1: 'Атрибут 8', attribute2: 'Атрибут 9', delete: false},
        {name: 'Кластер 4', attribute: 'Атрибут 10', attribute1: 'Атрибут 11', attribute2: 'Атрибут 12', delete: false},
        {name: 'Кластер 5', attribute: 'Атрибут 13', attribute1: 'Атрибут 14', attribute2: 'Атрибут 15', delete: false},
    ])

    const deleteClusterHandler = useCallback((name: string) => {
        const actualState = clusterTableState.filter(element => element.name !== name);
        setClusterTableState(actualState);
    },[clusterTableState])

    const addClusterHandler = useCallback(() => {
        const random = Math.floor(Math.random() * 100);
        setClusterTableState([...clusterTableState, {name: `Кластер ${random}`, attribute: 'Атрибут 16', attribute1: 'Атрибут 17', attribute2: 'Атрибут 18', delete: false},]);
    },[clusterTableState])

    return (
        <div className="container">
            <div className="head_block">
                <h1>
                    Кластеры
                </h1>
                <Button icon={<img src={PlusIcon} alt="icon"/>}
                        text={"Добавить кластер"}
                        callback={addClusterHandler}
                        background={"#63A325"}
                />
            </div>
            <ClusterTable deleteHandler={deleteClusterHandler} columns={columns} data={clusterTableState}/>
        </div>
    );
};

export default Clusters;
