import React from 'react';
import './Dashboard.css';
import {
    CircularProgressbarWithChildren, buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Walked from './Walked';
import ReactMinimal from './ReactMinimal';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, increments, decrements } from '../features/counter/counterSlice'

const DashBoard = () => {
    const count = useSelector((state) => state.counter.value);
    const counts = useSelector((states) => states.counter.value);
    const dispatch = useDispatch()
    const users = [
        {
            "userId": "62e0086759521efff1c47190",
            "picture": "../public/user.png",
            "name": "Glenna Nguyen",
            "email": "glennanguyen@bicol.com",
            "stepsWalked": 2039,
            "stepsTarget": "4k",
            "performedDate": "9",
            "scheduledDate": "28",
            "calorieIntake": 3002,
            "calorieTarget": 4000,
            "proteinConsumed": 2006,
            "proteinTarget": 4000,
            "carbConsumed": 2641,
            "carbTarget": 4000,
            "fatConsumed": 2858,
            "fatTarget": 4000,
            "feedback":true,
        },
        {
            "userId": "62e0086708dfed5878c92ac5",
            "picture": "../public/user.png",
            "name": "Charlotte Barlow",
            "email": "charlottebarlow@bicol.com",
            "stepsWalked": 2434,
            "stepsTarget": "4k",
            "performedDate": "20",
            "scheduledDate": "15",
            "calorieIntake": 2861,
            "calorieTarget": 4000,
            "proteinConsumed": 2195,
            "proteinTarget": 4000,
            "carbConsumed": 3932,
            "carbTarget": 4000,
            "fatConsumed": 2912,
            "fatTarget": 4000,
            "feedback":false
        },
        {
            "userId": "62e00867eda34d02a954ef59",
            "picture": "process.env.PUBLIC_URL + '/user.png'",
            "name": "Good Waller",
            "email": "goodwaller@bicol.com",
            "stepsWalked": 2003,
            "stepsTarget": "4k",
            "performedDate": "12",
            "scheduledDate": "28",
            "calorieIntake": 3527,
            "calorieTarget": 4000,
            "proteinConsumed": 3329,
            "proteinTarget": 4000,
            "carbConsumed": 2369,
            "carbTarget": 4000,
            "fatConsumed": 3575,
            "fatTarget": 4000,
            "feedback":true,
        }
    ]
    if(users.performedDate === 12){
        console.log("12")
    }
    else{
        console.log('not 12')
    }
    return (
        <>
            {users.map((user) => <div className='singleUser'>
                <div className='userImg'>
                    <img src={process.env.PUBLIC_URL + "/user.png"} alt="" />
                </div>

                <div className='userInfo'>
                    <h4 className='m-0'>{user.name}</h4>
                    <span>{user.email}</span>
                </div>

                <div className='userSteps flex items-center justify-around'>
                    <Walked>
                        <CircularProgressbarWithChildren strokeWidth={7} styles={buildStyles({
                            textColor: "red",
                            pathColor: "#7FD18C",
                            rotation: 20 + (0 - 70 / 100) / .85
                        })} value={70}>
                            <div className='text-center' style={{ fontSize: 11 }}>
                                <strong>{user.stepsWalked}</strong>
                                <br /> Walked
                            </div>
                        </CircularProgressbarWithChildren>
                    </Walked>
                    <div>
                        <button type='button' onClick={() => dispatch(increment())} className='userIcons'>+</button>
                        <div className='text-center py'>
                            <h4 className='m-0'>{count}</h4>
                            <span>target</span>
                        </div>
                        <button type='button' onClick={() => dispatch(decrement())} className='userIcons'>-</button>
                    </div>
                </div>

                <div className='userData flex items-center justify-center'>
                    <div className='pr'>
                        <div className='flex items-center pb'>
                            <img src={process.env.PUBLIC_URL + "/vector2.png"} alt="" className='pr' />
                            <h4 className='m-0'>{user.performedDate} oct</h4>
                        </div>
                        {user.scheduledDate == new Date().getDate() ?  <div className='flex items-center'>
                            <img src={process.env.PUBLIC_URL + "/vector3.png"} alt="" className='pr' />
                             <h4 className='m-0'>{user.scheduledDate} oct</h4>
                        </div> :  <div className='flex items-center' style={{backgroundColor: '#CC3838', borderRadius: '10px',padding: '5px 10px'}}>
                            <img src={process.env.PUBLIC_URL + "/vector3.png"} alt="" className='pr' />
                             <h4 className='m-0'>{user.scheduledDate} oct</h4>
                        </div>}
                       
                    </div>
                    <div className='userDataArrow'>
                        
                        {user.feedback ? <img style={{backgroundColor: '#CC3838'}} src={process.env.PUBLIC_URL + "/vector4.png"} alt="" /> :<img src={process.env.PUBLIC_URL + "/vector.png"} alt="" />}
                    </div>
                </div>

                <div className='userCalories flex items-center justify-around'>
                    <div style={{ width: '30%' }} className="tooltip">
                        <ReactMinimal />
                        <div className="tooltiptext">
                            <div className='singleToolTipContent'>
                                <div className='flex justify-between'>
                                    <span>Protein</span>
                                    <span>70g</span>
                                </div>
                                <div className="progress">
                                    <div className="bar bar1" style={{ width: '45%' }}>
                                        <p className="percent">45g</p>
                                    </div>
                                </div>
                            </div>
                            <div className='singleToolTipContent'>
                                <div className='flex justify-between'>
                                    <span>Fats</span>
                                    <span>70g</span>
                                </div>
                                <div className="progress">
                                    <div className="bar bar2" style={{ width: '30%' }}>
                                        <p className="percent">30g</p>
                                    </div>
                                </div>
                            </div>
                            <div className='singleToolTipContent'>
                                <div className='flex justify-between'>
                                    <span>Carbs</span>
                                    <span>70g</span>
                                </div>
                                <div className="progress">
                                    <div className="bar bar3" style={{ width: '50%' }}>
                                        <p className="percent">50g</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='pr'>
                            <button type='button' onClick={() => dispatch(increments())} className='userIcons'>+</button>
                            <div className='text-center py'>
                                <h4 className='m-0'>{counts}</h4>
                                <span>target</span>
                            </div>
                            <button type='button' onClick={() => dispatch(decrements())} className='userIcons'>-</button>
                        </div>
                        <div className='userDataArrow'>
                            <img src={process.env.PUBLIC_URL + "/vector.png"} alt="" />
                        </div>
                    </div>

                </div>

                <div className='message'>

                    <img src={process.env.PUBLIC_URL + "/vector1.png"} alt="" />

                </div>

            </div>)}
        </>
    );
};

export default DashBoard;