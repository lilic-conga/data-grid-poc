import { LitElement, html, css } from "lit";
import { DataGrid } from "../wcWrappers/DataGrid";

const DEFAULT_MIN_COL_WIDTH = 150;
const DEFAULT_MAX_COL_WIDTH = '1fr';

export class DataGridWC extends LitElement {
    static get properties() {
        return {
            columns: {
                type: Array
            },
            rows: {
                type: Array
            }
        }
    }

    constructor() {
        super();
        this.columns = [];
        this.rows = [];
    }

    static get styles() {
        return css`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
        * {
            box-sizing: border-box;
        }
    
        html,
        body {
            padding: 0;
            margin: 0;
        }
    
        body {
            font-family: 'Open Sans', sans-serif;
        }
    
        table {
            min-width: 100%;
            width: auto;
            flex: 1;
            display: grid;
            border-collapse: collapse;
        }
    
        thead,
        tbody,
        tr {
            display: contents;
        }
    
        th,
        td {
            padding: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    
        th {
            position: sticky;
            top: 0;
            background: #4caf50;
            text-align: center;
            font-weight: 600;
            font-size: 1.1rem;
            color: white;
            position: relative;
        }
    
        th:last-child {
            border: 0;
        }
    
        td {
            padding-top: 10px;
            padding-bottom: 10px;
            color: #808080;
        }
    
        tr:nth-child(even) td {
            background: #c8e6c9 ;
        }
        `
    }

    thChunk(column) {
        return html`<th>${column.columnName}</th>`;
    }

    tdRowChunks(row) {
        return html`${this.columns.map((column) => html`<td>${row?.[column?.dataFieldName]}</td>`)}`;
    }

    render() {
        return html`
        <style>
            #data-grid {
                grid-template-columns: repeat(${this.columns.length}, minmax(${DEFAULT_MIN_COL_WIDTH}px, ${DEFAULT_MAX_COL_WIDTH}))
            }
        </style>
        <table id='data-grid'>
            <thead>
                <tr>
                    ${this.columns?.map(column => this.thChunk(column))}
                </tr>
            </thead>
            <tbody>
                ${this.rows.map((row) => html`
                    <tr>
                        ${this.tdRowChunks(row)}
                    </tr>
                `)}
            </tbody>
        </table>`
    }
}

customElements.define('data-grid-wc', DataGridWC)