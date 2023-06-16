import './css/AddPostAndOrder.css';
import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
const Web3 = require('web3');

function AddPost(props) {
    const [departureCounty, setDepartureCounty] = useState('台中');
    const [destinationCounty, setDestinationCounty] = useState('台北');
    const [departureDetail, setDepartureDetail] = useState('台中火車站');
    const [destinationDetail, setDestinationDetail] = useState('台北轉運站');
    const [time, setTime] = useState('2023-07-25 12:00:00');
    const [price, setPrice] = useState('0.01');
    const [remainPerson, setRemainPerson] = useState('3');
    const [licensePlate, setLicensePlate] = useState('CBA-7777');
    const [carModel, setCarModel] = useState('白');

    return (
        <>
            {/* fixed_button */}
            <a className='add_post_btn' href='/#add_post'>
                <p>po文</p>
                <FontAwesomeIcon icon={faPenToSquare} size='xl'/>  
            </a>
            {/* Add Post*/}
            <div id='add_post' className='modal'>
                <div className='modal__content'>
                    <div className='add_post_container'>
                        <form>
                                <label htmlFor='chk' aria-hidden='true'>
                                    我要找乘客
                                </label>
                                <h5>乘車時間</h5>
                                <input type='' name='time' placeholder='2023-07-25 12:00:00' required onChange={e=>setTime(e.target.value)} />
                                <h5 className='text_1'>出發縣市</h5>
                                <div className='dropdown_select'>
                                    <select value={departureCounty} onChange={e=>setDepartureCounty(e.target.value)}>
                                        <option>台中</option>
                                        {/* <option>出發縣市:</option> */}
                                        <option value='基隆市'>基隆市</option>
                                        <option value='台北市'>台北市</option>
                                        <option value='新北市'>新北市</option>
                                        <option value='桃園市'>桃園市</option>
                                        <option value='新竹市'>新竹市</option>
                                        <option value='新竹縣'>新竹縣</option>
                                        <option value='苗栗縣'>苗栗縣</option>
                                        <option value='台中市'>台中市</option>
                                        <option value='彰化縣'>彰化縣</option>
                                        <option value='南投縣'>南投縣</option>
                                        <option value='雲林縣'>雲林縣</option>
                                        <option value='嘉義市'>嘉義市</option>
                                        <option value='嘉義縣'>嘉義縣</option>
                                        <option value='台南市'>台南市</option>
                                        <option value='高雄市'>高雄市</option>
                                        <option value='屏東縣'>屏東縣</option>
                                        <option value='台東縣'>台東縣</option>
                                        <option value='花蓮縣'>花蓮縣</option>
                                        <option value='宜蘭縣'>宜蘭縣</option>
                                        <option value='澎湖縣'>澎湖縣</option>
                                        <option value='金門縣'>金門縣</option>
                                        <option value='連江縣'>連江縣</option>
                                    </select>
                                </div>

                                <h5 className='text_2'>出發地</h5>
                                <input
                                    type='departure'
                                    name='departure'
                                    placeholder='台中火車站'
                                    required onChange={e=>setDepartureDetail(e.target.value)}
                                />

                                <h5 className='text_1'>目的縣市</h5>
                                <div className='dropdown_select'>
                                <select value={destinationCounty} onChange={e=>setDestinationCounty(e.target.value)}>
                                        <option>台北</option>
                                        {/* <option>目的縣市:</option> */}
                                        <option value='基隆市'>基隆市</option>
                                        <option value='台北市'>台北市</option>
                                        <option value='新北市'>新北市</option>
                                        <option value='桃園縣'>桃園市</option>
                                        <option value='新竹市'>新竹市</option>
                                        <option value='新竹縣'>新竹縣</option>
                                        <option value='苗栗縣'>苗栗縣</option>
                                        <option value='台中市'>台中市</option>
                                        <option value='彰化縣'>彰化縣</option>
                                        <option value='南投縣'>南投縣</option>
                                        <option value='雲林縣'>雲林縣</option>
                                        <option value='嘉義市'>嘉義市</option>
                                        <option value='嘉義縣'>嘉義縣</option>
                                        <option value='台南市'>台南市</option>
                                        <option value='高雄市'>高雄市</option>
                                        <option value='屏東縣'>屏東縣</option>
                                        <option value='台東縣'>台東縣</option>
                                        <option value='花蓮縣'>花蓮縣</option>
                                        <option value='宜蘭縣'>宜蘭縣</option>
                                        <option value='澎湖縣'>澎湖縣</option>
                                        <option value='金門縣'>金門縣</option>
                                        <option value='連江縣'>連江縣</option>
                                    </select>
                                </div>

                                <h5 className='text_2'>目的地</h5>
                                <input
                                    type='destination'
                                    name='destination'
                                    placeholder='台北轉運站'
                                    required onChange={e=>setDestinationDetail(e.target.value)}
                                />
                                
                                <h5>行程價碼</h5>
                                <input
                                    type='price'
                                    name='price'
                                    // placeholder='0.00000000000001'
                                    placeholder='0.01'
                                    required onChange={e=>setPrice(e.target.value)}
                                />
                                
                                <h5>載客人數</h5>
                                <input
                                    type='remain_person'
                                    name='remain_person'
                                    placeholder='3'
                                    required onChange={e=>setRemainPerson(e.target.value)}
                                />                                
                                <p>車牌及車型 將會在乘客訂購完成時提供</p>

                                <h5>車牌</h5>
                                <input
                                    type='license_plate'
                                    name='license_plate'
                                    placeholder='CBA-7777'
                                    required onChange={e=>setLicensePlate(e.target.value)}
                                />

                                <h5>車型外觀</h5>
                                <input
                                    type='car_shape'
                                    name='car_shape'
                                    placeholder='白'
                                    required onChange={e=>setCarModel(e.target.value)}
                                />
                                <Link to="/add_post/payment"
                                    state={{
                                        type: "find_customer",
                                        // id:null,
                                        // departure_county:"台中",
                                        // destination_county:"台北",
                                        // departure_detail:"台中火車站",
                                        // destination_detail:"台北轉運站",
                                        // time:"2023-07-25 12:00:00",
                                        // price:"0.00000000000001",
                                        // // price:"0.01",
                                        // driver_information:{
                                        //     license_plate:"CBA-7777",
                                        //     car_model:"Discovery Sport 白",
                                        //     remain_person:"3",
                                        //     total_person:"3"
                                        // },
                                        id:null,
                                        departure_county:departureCounty,
                                        destination_county:destinationCounty,
                                        departure_detail:departureDetail,
                                        destination_detail:destinationDetail,
                                        time:time,
                                        price:price,
                                        driver_information:{
                                            license_plate:licensePlate,
                                            car_model:carModel,
                                            remain_person:remainPerson,
                                            total_person:remainPerson
                                        },
                                        walletAddress: props.walletAddress,
                                 }} className="addPost_btn" >發文</Link>
                            </form>
                    </div>
                    <a href='/' className='modal__close'>
                        &times;
                    </a>
                </div>
            </div>
        </>
    );
}

export default AddPost;
