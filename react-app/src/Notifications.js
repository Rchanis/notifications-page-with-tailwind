
function Notifications(props) {
  const notifications_jsx = [];
  console.log(props.notifications)

  props.notifications.forEach(element => {
    const name = element.user.toLowerCase().split(" ");
    const avatar = require(`./images/avatar/avatar-${name[0]}-${name[1]}.webp`);
    let message = "";
    const time = element.time + " ago"
    let private_message = "";

    const showMessage = (message) => {
      return (<button href="#" className="ml-16 p-6 h-auto text-left hover:bg-[#dde7ee]">
        {message}
      </button>);
    }

    switch (element.action) {
      case "react":
        message = <div className="inline">reacted to your recent post <button className="font-semibold" href="#">{element.content}</button></div>;
        break;
      case "follow":
        message = `followed you`;
        break;
      case "join":
        message = <div className="inline">has joined your group <button className="font-semibold" href="#">{element.content}</button></div>;
        break;
      case "message":
        message = `sent your a private message`;
        private_message = showMessage(element.content)
        break;
      case "commented":
        message = <div className="inline">commented on your picture <button href="#"><img alt="commented"></img></button></div>
        break;
      case "left":
        message = <div className="inline">reacted to your recent post <button className="font-semibold" href="#">{element.content}</button></div>
        break;
      default:
        message = element.content
    }

    notifications_jsx.push(<div>
      <figure className={`my-2 md:flex ${element.readed ? "bg-[#ffffff]" : "bg-Light-grayish-blue-1"} rounded-md py-4 text-base`}>
        <img className="h-12 w-auto m-auto rounded-full" src={avatar} alt="avatar" width="384" height="512" />
        <div className=" my-auto text-center md:text-left  w-[90%]">
          <blockquote>
            <p className="text-lg ">
              <button className="font-semibold hover:text-blue" href="#">{element.user}</button> {message}
            </p>
          </blockquote>
          <figcaption className="">
            <div className="text-sky-500 dark:text-sky-400">
              {time}
            </div>
          </figcaption>
        </div>
      </figure>
      {private_message}
    </div>
    )
  });
  return (
    <div>{notifications_jsx}</div>
  );
}

export default Notifications;
