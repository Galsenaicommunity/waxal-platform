import { Localized } from '@fluent/react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import { UserClient } from 'common';
import { User } from '../../../stores/user';
import StateTree from '../../../stores/tree';
import URLS from '../../../urls';
import DataTable from 'react-data-table-component';

// The row data is composed into your custom expandable component via the data prop
const ExpandableComponent = (data: any) => (
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia unde eum
    alias possimus esse non odio ad vero dignissimos nesciunt? Cupiditate omnis
    laudantium facilis sunt, temporibus laboriosam ad iste eaque.
  </div>
);

let data: [any];
const API_HOST = 'http://localhost:9000/api/v1';
const data2 = fetch(API_HOST + '/all_users')
  .then(response => response.json())
  .then(js_resp => {
    data = js_resp;
  });
const columns = [
  {
    name: 'Username',
    selector: 'username',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
  },
  {
    name: 'Age',
    selector: 'age',
    sortable: true,
  },
  {
    name: 'Gender',
    selector: 'gender',
    sortable: true,
    right: true,
  },
  {
    name: 'Locale',
    selector: 'locale',
    sortable: true,
  },
  {
    name: 'Accent',
    selector: 'accent',
    sortable: true,
  },
];

import './admin.css';

export default function Admin() {
  return (
    <DataTable
      title="Utilisateurs"
      columns={columns}
      data={data}
      expandableRows
      expandableRowsComponent={<ExpandableComponent />}
    />
  );
}
