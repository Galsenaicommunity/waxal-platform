import * as React from 'react';
import { LocaleLink } from '../locale-helpers';

export default (props: { reverse?: boolean }) => {
  const imgSrc = require('./galsen-ai.png');
  const corpBuilder = require('./logo_baamtu_web.png');

  return (
    <LocaleLink className="main-logo" to="">
      <img className="main-mozilla-logo" src={imgSrc} />
      <img className="main-mozilla-logo" src={corpBuilder} />
    </LocaleLink>
  );
};
