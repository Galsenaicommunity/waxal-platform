import { Localized } from '@fluent/react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import { UserClient } from 'common';
import DataTable from 'react-data-table-component';

let data: any;
const API_HOST = location.origin + '/api/v1';
const data2 = fetch(API_HOST + '/language_stats')
  .then(response => response.json())
  .then(js_resp => {
    data = js_resp;
  });

const columns = [
  {
    name: 'Locale',
    selector: 'locale',
    sortable: true,
  },
  {
    name: 'Seconds',
    selector: 'seconds',
    sortable: true,
  },
  {
    name: 'Speakers',
    selector: 'speakers',
    sortable: true,
  },
];

import './language-stats.css';

export default function LanguageStats() {
  console.log('leaderB: ', data);
  return (
    <DataTable
      title="Language leaderborad"
      columns={columns}
      data={data.launched}
      fixedHeader
      fixedHeaderScrollHeight="50vh"
      striped
      pagination
    />
  );
}
