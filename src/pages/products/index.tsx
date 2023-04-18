import React, {useCallback, useState} from 'react';
import './../../App.css';
import PlusIcon from '../../shared/images/plus.svg'
import EditIcon from '../../shared/images/edit.svg'
import {Button, Table} from "../../components";

interface ProductTableType {
    name: string;
    group: string;
    cluster: string;
    attribute: string;
    all: boolean;
}

const columns = [
    {key: 'name', title: 'Наименование товара'},
    {key: 'group', title: 'Группа'},
    {key: 'cluster', title: 'Кластер'},
    {key: 'attribute', title: 'Атрибут'},
    {key: 'all', title: 'Все'},
];

const Products = () => {

    const [productsState, setProductsState] = useState<ProductTableType[]>( [
        {name: 'Товар 1', group: 'Группа 1', cluster: 'кластер 1', attribute: 'Атрибут 1', all: true},
        {name: 'Товар 2', group: 'Группа 2', cluster: 'кластер 2', attribute: 'Атрибут 2', all: false},
        {name: 'Товар 3', group: 'Группа 3', cluster: 'кластер 3', attribute: 'Атрибут 3', all: true},
        {name: 'Товар 4', group: 'Группа 4', cluster: 'кластер 4', attribute: 'Атрибут 4', all: false},
        {name: 'Товар 5', group: 'Группа 5', cluster: 'кластер 5', attribute: 'Атрибут 5', all: true},
    ])
    const addHandler = useCallback(() => {
        const random = Math.floor(Math.random() * 100);
        setProductsState([...productsState, {name: `Товар ${random}`,group: 'Группа 1', cluster: "кластер 12", attribute: `Атрибут ${random}`, all: true},]);
    },[productsState])

    return (
        <div className="container">
            <div className="head_block">
                <h1>
                    Список товаров
                </h1>
                <Button icon={<img src={PlusIcon} alt="icon"/>}
                        text={"Добавить товар"}
                        callback={addHandler}
                        background={"#63A325"}
                />
            </div>
            <Table columns={columns} data={productsState}/>
            <div className="bottom_block">
                <span className="text_span">Изменения для выбранных товаров</span>
                <Button icon={<img src={EditIcon} alt="icon"/>}
                        text={"Изменить группу"}
                        callback={() => console.log('изменил')}
                        background={"#000000"}
                />
                <Button icon={<img src={EditIcon} alt="icon"/>}
                        text={"Изменить кластер"}
                        callback={() => console.log('изменил')}
                        background={"#000000"}
                />
            </div>
        </div>
    );
};

export default Products;
