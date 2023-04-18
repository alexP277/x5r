import React from 'react';
import Index from "../../components/Button";
import './../../App.css';
import Table from "../../components/Table";
import PlusIcon from "../../shared/images/plus.svg";
import Button from "../../components/Button";
import EditIcon from "../../shared/images/edit.svg";

interface GroupTableType {
    name: string;
    cluster: string;
    attribute: string;
    all: boolean;
}

const columns = [
    { key: 'name', title: 'Наименование групп' },
    { key: 'cluster', title: 'Кластер' },
    { key: 'attribute', title: 'Атрибут' },
    { key: 'attribute', title: 'Атрибут' },
    { key: 'all', title: 'Все' },
];

const data: GroupTableType[] = [
    { name: 'Группа 1', cluster:'кластер1', attribute: 'Атрибут 1', all: false },
    { name: 'Группа 2',  cluster:'кластер 2', attribute: 'Атрибут 2', all: true },
    { name: 'Группа 3',  cluster:'кластер 3', attribute: 'Атрибут 3', all: false },
    { name: 'Группа 4',  cluster:'кластер 4', attribute: 'Атрибут 4', all: false },
    { name: 'Группа 5',  cluster:'кластер 5', attribute: 'Атрибут 5', all: true },
];

const Groups = () => {
    return (
        <div className="container">
            <div className="head_block">
                <h1>
                    Группы
                </h1>
                <Button icon={<img src={PlusIcon}/>}
                        text={"Добавить группу"}
                        callback={()=>console.log('добавил')}
                        background={"#63A325"}
                />
            </div>
            <Table columns={columns} data={data}/>
            <div className="bottom_block">
                <span className="text_span">Изменения для выбранных товаров</span>
                <Button
                    icon={<img src={EditIcon}/>}
                    text={"Изменить кластер"}
                    callback={() => console.log('изменил')}
                    background={"#000000"}
                />
            </div>
        </div>
    );
};

export default Groups;
