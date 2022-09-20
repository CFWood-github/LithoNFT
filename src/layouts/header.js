import React from 'react';
import { Link } from 'react-router-dom';
import jotart from "../assets/img/jotart.png";
import {ConnectWallet} from "../components/connect-button"

export default function Header() {
    return (
        <div className="header">
            <div className="left">
                <img src={jotart} />
            </div>

            <div className="right">
              <a className='menu' href='https://jotart.com/finesse-shadow-warriors/' >Menu</a>
              <ConnectWallet />
            </div>
        </div>
    )
}
