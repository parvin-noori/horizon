import GeneralInfo from "./GeneralInfo";
import Notifications from "./Notifications";
import Projects from "./Projects";
import Storage from "./Storage";
import Uploader from "./Uploader";
import UserInfo from "./UserInfo";
import userProfile from "/imgs/userImg.png";

let user = {
  avatar: userProfile,
  name: "adela parkson",
  jobPosition: "product designer",
  posts: 17,
  followers: 9.7,
  following: 274,
};

export default function Profile() {
  return (
    <div className="grid lg:grid-cols-12 gap-5">
      <div className="xl:col-span-5 col-span-6">
        <UserInfo user={user}/>
      </div>
      <div className="xl:col-span-3 col-span-6">
        <Storage />
      </div>
      <div className="xl:col-span-4 col-span-6">
        <Uploader />
      </div>
      <div className="xl:col-span-4 col-span-6">
        <Projects />
      </div>
      <div className="xl:col-span-5 col-span-6">
        <GeneralInfo />
      </div>
      <div className="xl:col-span-3 col-span-6">
        <Notifications />
      </div>
    </div>
  );
}
