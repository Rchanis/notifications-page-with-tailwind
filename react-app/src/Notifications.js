function Notifications(props) {
  const notifications_jsx = [];

  props.notifications.forEach(element => {
    const name = element.user.toLowerCase().split(" ");
    const avatar = require(`./images/avatar/avatar-${name[0]}-${name[1]}.webp`);
    let message = "";
    const time = element.time + " ago"
    let private_message = "";
    let post = "";
    const dot = (
      <span className="text-Red font-extrabold">&#x2022;</span>
    )

    const showMessage = (message) => {
      return (<button href="#" className="text-Dark-grayish-blue ml-16 mt-[-0.9rem] p-5 h-auto text-left hover:bg-Light-grayish-blue-1 border-[0.1rem] rounded-[0.3rem] border-Light-grayish-blue-1">
        {message}
      </button>);
    }

    switch (element.action) {
      case "react":
        message = <p className="inline">reacted to your recent post <a className="font-bold text-Dark-grayish-blue inline hover:text-Blue" onClick={() => { console.log("no link") }}>{element.content}</a></p>;
        break;
      case "follow":
        message = `followed you`;
        break;
      case "join":
        message = <p className="inline">has joined your group <button className="font-bold text-Dark-grayish-blue  hover:text-Blue" href="#">{element.content}</button></p>;
        break;
      case "message":
        message = `sent your a private message`;
        private_message = showMessage(element.content)
        break;
      case "commented":
        const image = require("./images/image-chess.webp");
        post = <img className="h-12 ml-[-3rem]" src={image} alt={element.content} />
        message = <p className="inline">commented on your picture <button href="#"></button></p>
        break;
      case "left":
        message = <p className="inline">reacted to your recent post <button className="font-bold text-Dark-grayish-blue  hover:text-Blue" href="#">{element.content}</button></p>
        break;
      default:
        message = element.content
    }

    notifications_jsx.push(<div>
      <figure className={`my-2 md:flex ${element.readed ? "bg-White" : "bg-Very-light-grayish-blue"} rounded-md py-4 text-base`}>
        <img className="h-12 w-auto m-auto rounded-full" src={avatar} alt="avatar" />
        <div className=" my-auto text-center text-Dark-grayish-blue md:text-left  w-[90%]">

          <p className="">
            <button className="font-bold text-Very-dark-blue  hover:text-Blue " href="#">{element.user}</button> {message} {element.readed ? "" : dot}
          </p>


          <div className="text-Grayish-blue">
            {time}
          </div>

        </div>
        {post}
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
