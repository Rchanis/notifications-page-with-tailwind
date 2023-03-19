import avatar from "./images/avatar/avatar-angela-gray.webp"

function Notifications(props) {
  let Notifications = (
    <figure className="my-2 md:flex bg-slate-100 rounded-md py-4  dark:bg-slate-600 text-base">
      <img className="   h-12 w-auto m-auto rounded-full" src={avatar} alt="" width="384" height="512" />
      <div className=" my-auto text-center md:text-left  w-[90%]">
        <blockquote>
          <p className="text-lg ">
            <span className="font-semibold">Angela Gray</span> followed you
          </p>
        </blockquote>
        <figcaption className="">
          <div className="text-sky-500 dark:text-sky-400">
            5m ago
          </div>
        </figcaption>
      </div>
    </figure>
  )
  return (
    <div>{Notifications}{Notifications}</div>
  );
}

export default Notifications;
