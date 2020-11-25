import * as React from 'react';
import { LocaleLink } from '../locale-helpers';

export default (props: { reverse?: boolean }) => {
  const imgSrc = require('./galsen-ai.png');

  return (
    <LocaleLink className="main-logo" to="">
      <img className="main-mozilla-logo" src={imgSrc} />
    </LocaleLink>
  );
};
