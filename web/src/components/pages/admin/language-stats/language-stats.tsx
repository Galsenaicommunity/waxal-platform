import * as React from 'react';
import DataTable from 'react-data-table-component';

let data: any, data_speakers: any;
const API_HOST = location.origin + '/api/v1';
const data2 = fetch(API_HOST + '/language_leaderboard')
  .then(response => response.json())
  .then(js_resp => {
    data = js_resp;
  });

const data3 = fetch(API_HOST + '/language_stats')
  .then(response => response.json())
  .then(js_resp => {
    data_speakers = js_resp.launched;
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
  {
    name: 'Speakers',
    selector: 'speakers',
    sortable: true,
  },
];

import './language-stats.css';

export default function LanguageStats() {
  data_speakers.forEach((v: any) => {
    delete v.seconds;
  });
  const data_outputs = data.map((item: any, i: any) =>
    Object.assign({}, item, data_speakers[i])
  );
  return (
    <DataTable
      title="Language leaderborad"
      columns={columns}
      data={data_outputs}
      fixedHeader
      fixedHeaderScrollHeight="50vh"
      striped
      pagination
    />
  );
}
