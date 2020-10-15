import React from 'react';
import { ReactComponent as Profile } from './assets/profile.svg'
import '../index.css';

export default function RegisterButton() {
  return (
    <button className="registeration-btn">
      <div>
        <Profile />
      </div>
      <p>Register</p>
    </button>
  )
}