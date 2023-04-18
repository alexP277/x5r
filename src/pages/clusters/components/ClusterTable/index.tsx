import React, {FC} from 'react';
import './ClusterTable.css'
import DeleteIcon from '../../../../shared/images/delete.svg'

interface ClusterColumn {
    key: string;
    title: string;
}

interface ClusterTableProps {
    columns: ClusterColumn[];
    data: Record<string, any>[];
    deleteHandler: (name: string) => void;
}

const ClusterTable: FC<ClusterTableProps> = ({columns, data,deleteHandler}) => {
    return (
        <table>
            <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={column.key}>
                        <div className="header_container">
                            {column.title}
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
                                <img onClick={(e)=> deleteHandler(data[rowIndex].name)} style={{cursor: "pointer"}} src={DeleteIcon} alt="delete icon"/>
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

export default ClusterTable;
