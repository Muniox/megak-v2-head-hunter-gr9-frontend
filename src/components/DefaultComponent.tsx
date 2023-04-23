import {UserDetails} from '@backendTypes';
import React from 'react';

export const DefaultComponent = (props: UserDetails) => {
  const {email, firstName} = props;
  return <>
    <div className="email">{email}</div>
    <div className="firstName">{firstName}</div>
  </>
}
