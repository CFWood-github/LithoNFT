import React from 'react';
import { Link } from 'react-router-dom';
import WalletConnect from '../utils/WalletConnect';
import jotart from "../assets/img/jotart.png";


export default function Header({account, setAccount}) {
    return (
        <div className="header">
            <div className="left">
                <img src={jotart} />
            </div>

            <div className="right">
              <a className='menu' href='https://jotart.com/finesse-shadow-warriors/' >Menu</a>
              <WalletConnect account={account} setAccount={setAccount} />
            </div>
        </div>
    )
}
