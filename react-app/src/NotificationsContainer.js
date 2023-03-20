import './index.css';
import Notifications from './Notifications';
import React, { useState } from 'react';

function NotificationsContainer() {
    const [notification, setNotification] = useState(notifications)

    function mark_all() {
        setNotification((notification) => {
            notification.forEach(not => {
                not.readed = true;
            });
        })
    }

    return (
        <div className="p-8 container mx-auto w-1/2">
            <button onClick={mark_all}>mark_all</button>
            <Notifications notifications={notification} />
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