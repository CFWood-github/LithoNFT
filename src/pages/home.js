import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import moment from 'moment';
import { getApproveContract } from '../utils/contractFunctions';
import { developer_address } from '../contract/address';
import WhiteList from "../assets/json/whitelist.json"
import Gif from '../assets/img/effect.gif'
import Web3 from 'web3';

const web3 = new Web3(window.ethereum);

export default function Home({ account }) {

  const [data, setData] = useState(WhiteList);
  const [isIncluded, setIsIncluded] = useState(false);
  const [currentTime, setCurrentTime] = useState();
  const [members, setMembers] = useState(0);
  const startTime = 1663776000;
  const endTime = 1664553600;

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(moment().unix());
    }, 1000);
  }, [])

  const getInfo = () => {
    data.map((item) => {
      if (item.walletaddress === account) {
        setIsIncluded(true)
        setMembers(data.length)
      }
    })
  }

  const isDeveloper = () => {
    if (!account) return;
    let i = 0;
    developer_address.map((element) => {
      if (element.toUpperCase() === account.toUpperCase()) i++;
    })
    if (i == 0) return false;
    if (i > 0) return true;
  }

  useEffect(() => {
    getInfo();
  }, [account])

  const approveJoin = async () => {
    if (!account) {
      alert('Please connect wallet')
      return
    }
    // if (currentTime < startTime) {
    //   alert('The WhiteList has not stated yet')
    //   return
    // }
    // if (currentTime > endTime) {
    //   alert('You missed the WhiteList time')
    //   return
    // }

    const contract = await getApproveContract();
    await contract.methods.approve(account).send({ from: account });
  }

  const addPost = () => {
    if (!account) return
    // if (currentTime < startTime || currentTime > endTime) return

    let newPost = {
      "walletaddress": account
    }
    let posts = [...data, newPost];
    setData(posts);
    saveJson(posts);
    new web3.eth.personal.sign("Join the Official Finesse Genesis Warriors Whitelist", account)
  }

  const saveJson = (posts) => {
    const url = 'http://localhost:5000/write'
    axios.post(url, posts)
      .then(response => {
      });
  }

  const saveData = () => {
    const fileData = JSON.stringify(data);
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'WhiteList.json';
    link.href = url;
    link.click();
  }

  return (
    <div className='home'>

      <div className='title'><span style={{ color: 'red', fontStyle: 'Italic' }}>{25468 + members * 1799}&nbsp;</span> Whitelisted Wallets</div>
      <img src={Gif} alt='' className='gif'></img>
      <div className='date'>{moment.unix(currentTime).format('YYYY-DD-MM')}</div>
      <div className='time'>{moment.unix(currentTime).format('hh:mm:ss')}</div>
      <div className='description'>( Whitelist opens Sep 22 to Sep 30. )</div>
      {!isIncluded && <div className='join-button' onClick={async () => { await approveJoin(); addPost() }}>Join</div>}
      {isDeveloper() && <div className='download' onClick={() => saveData()}></div>}

    </div>
  )
}
