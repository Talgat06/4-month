import React from 'react';

const List = ({lists}) => {
    return (
        <ul>
            {lists.map(list => (
                <li key={list.id}>
                    {list.title}
                </li>
            ))}
        </ul>
    );
};

export default List;