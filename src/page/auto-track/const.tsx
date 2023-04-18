import React from 'react';

export const columns = [
  {
    title: <div data-ts-column="No">No</div>,
    dataIndex: 'no',
    width: 160,
    key: 'No',
    render: (text: string, record: {no: string}) => <div>{record.no}</div>,
    fixed: 'left',
  },
  {
    title: <div data-ts-column="ColumnA">ColumnA</div>,
    dataIndex: 'ColumnA',
    width: 500,
    key: 'ColumnA',
  },
  {
    title: <div data-ts-column="ColumnB">ColumnB</div>,
    dataIndex: 'ColumnB',
    width: 500,
    key: 'ColumnB',
  },
  {
    title: <div data-ts-column="ColumnC">ColumnC</div>,
    dataIndex: 'ColumnC',
    width: 500,
    key: 'ColumnC',
  },
  {
    title: <div data-ts-column="ColumnD">ColumnD</div>,
    dataIndex: 'ColumnD',
    width: 500,
    key: 'ColumnD',
  },
  {
    title: <div data-ts-column="ColumnE">ColumnE</div>,
    dataIndex: 'ColumnE',
    width: 500,
    key: 'ColumnE',
  },
  {
    title: <div data-ts-column="ColumnF">ColumnF</div>,
    dataIndex: 'ColumnF',
    width: 500,
    key: 'ColumnF',
  },
  {
    title: <div data-ts-column="ColumnG">ColumnG</div>,
    dataIndex: 'ColumnG',
    width: 500,
    key: 'ColumnG',
  },
  {
    title: <div data-ts-column="Operation">Operation</div>,
    dataIndex: 'operation',
    width: 260,
    key: 'Operation',
    fixed: 'right',
  },
];

export const data = [
  {
    no: '1',
    ColumnA: '1',
    ColumnB: '1',
    ColumnC: '1',
    ColumnD: '1',
    ColumnE: '1',
    ColumnF: '1',
    ColumnG: '1',
    operation: '1',
  },
];
