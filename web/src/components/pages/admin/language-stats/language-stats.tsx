import * as React from 'react';
import DataTable from 'react-data-table-component';

let data: any;
const API_HOST = location.origin + '/api/v1';
const data2 = fetch(API_HOST + '/language_leaderboard')
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
    name: 'Clips',
    selector: 'clip_count',
    sortable: true,
  },
  {
    name: 'Votes',
    selector: 'vote_count',
    sortable: true,
  },
];

import './language-stats.css';

export default function LanguageStats() {
  return (
    <DataTable
      title="Language leaderborad"
      columns={columns}
      data={data}
      fixedHeader
      fixedHeaderScrollHeight="50vh"
      striped
      pagination
    />
  );
}
