import React, {FC} from 'react';
import './Table.css'
import FilerIcon from '../../shared/images/filter.svg'
import {Checkbox} from "../Checkbox";
import {Tooltip} from "../Tooltip";

interface Column {
    key: string;
    title: string;
}

interface TableProps {
    columns: Column[];
    data: Record<string, any>[];
}

export const Table: FC<TableProps> = ({columns, data}) => {
    return (
        <table>
            <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={column.key}>
                        <div className="header_container">

                            {
                                index < columns.length - 1 ?
                                    <>
                                        {column.title} <Tooltip key={column.key}
                                                                text={'Здесь будет возможность фильтрации'}>
                                        <img src={FilerIcon} alt={'icon'}/>
                                    </Tooltip>
                                    </>
                                    :
                                    <>
                                        <Checkbox/> {column.title}
                                    </>
                            }
                        </div>
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {columns.map((column, columnIndex) => (
                        <td key={column.key}>
                            {columnIndex === columns.length - 1 ? (
                                <Checkbox isChecked={row[column.key]}/>
                            ) : (
                                row[column.key]
                            )}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};
