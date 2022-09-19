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

                <div className='line'>
                    <div className='title'>FINESSE</div>
                    <div className='emoji'>⛩️</div>
                    <div className='down'></div>
                </div>
                <div className='title'>𝓙JOT</div>
                <div className='title'>JOT ART</div>
                <div className='title'>NEWS</div>
                <div className='line'>
                    <div className='title'>DOCS</div>
                    <div className='down'></div>
                </div>
                <div className='zoom'></div>
                <WalletConnect account={account} setAccount={setAccount} />
                {/* <ConnectButton label="CONNECT WALLET" accountStatus={{smallScreen: 'none', largeScreen: 'address'}} /> */}

            </div>
        </div>
    )
}
