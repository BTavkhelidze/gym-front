'use client';
import React from 'react';
import { createColumnHelper, useReactTable } from '@tanstack/react-table';

const columHelper = createColumnHelper();
const columns = [
  columHelper.accessor('id', {
    cell: (info) => info.getValue(),
    header: () => (
      <span>
        <p> user id: </p>
      </span>
    ),
  }),
];

function TableSchadule() {
  const data = [
    { id: 1, name: 'beqa' },
    { id: 2, name: 'beqa' },
    { id: 3, name: 'beqa' },
    { id: 4, name: 'beqa' },
  ];

  const table = useReactTable({ data, columns });

  return <div>tableSchadule</div>;
}

export default TableSchadule;
