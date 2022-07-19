import React from 'react';
import { createComponent } from '@lit-labs/react';
import { DataGridWC } from '../wc/datagrid-wc';

export const DataGrid = createComponent(
    React,
    'data-grid-wc',
    DataGridWC,
    {}
)