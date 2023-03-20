import './index.css';
import Notifications from './Notifications';
import React, { useState } from 'react';

function NotificationsContainer() {
    const [notification, setNotification] = useState(notifications)

    //mark all notification as read
    function notification_all_read() {
        return notification.map(value => {
            value.readed = true;
            return value
        })
    }

    const setCounter = () => {
        const count = notifications.reduce((total, notification) => (notification.readed ? total : total + 1), 0)
        if (count) return (
            <div className="h-6 w-8 rounded-md text-center font-bold text-White self-center bg-Blue mx-3">
                {count}
            </div>);
    }


    return (
        <div className="bg-Very-light-grayish-blue w-screen h-screen grid place-items-center">
            <div className="p-8 container mx-auto w-1/2 rounded-2xl bg-White">
                <div className="container w-full h-8 grid grid-flow-col mb-8">
                    <div className="flex">
                        <h1 className="font-bold text-Very-dark-blue text-2xl">Notifications</h1>
                        {setCounter()}
                    </div>
                    <button className="text-Dark-grayish-blue hover:text-Blue place-self-start text-end justify-self-end"
                        onClick={() => setNotification(notification_all_read())}>Mark all as read</button>
                </div>
                <Notifications notifications={notification} />
            </div>
        </div>
    );
}
//https://react.dev/learn/managing-state

const notifications = [{ user: "Mark Webber", action: "react", time: "1m", readed: false, content: "My first tournament today!" },
{ user: "Angela Gray", action: "follow", time: "5m", readed: false, content: "" },
{ user: "Jacob Thompson", action: "join", time: "1day", readed: false, content: "Chess Club" },
{ user: "Rizky Hasanuddin", action: "message", time: "5days", readed: true, content: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeeks now and I'm already having lots of fun and improving my game." },
{ user: "Kimberly Smith", action: "commented", time: "1week", readed: true, content: "./images/image-chess.webp" },
{ user: "Nathan Peterson", action: "react", time: "2week", readed: true, content: "5 end-game strategies to increase your win rate" },
{ user: "Anna Kim", action: "left", time: "2week", readed: true, content: "Chess Club" },
]

export default NotificationsContainer;