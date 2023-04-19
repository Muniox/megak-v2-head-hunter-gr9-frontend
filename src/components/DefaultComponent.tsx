import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { UserDetails } from '@backendTypes';

export const DefaultComponent = (props: UserDetails) => {
  const {email, firstName} = props;
  return <>
    <div className="email">{email}</div>
    <div className="firstName">{firstName}</div>
  </>
}
