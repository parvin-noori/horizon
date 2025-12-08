import GeneralInfo from "./GeneralInfo";
import Notifications from "./Notifications";
import Projects from "./Projects";
import Storage from "./Storage";
import Uploader from "./Uploader";
import UserInfo from "./UserInfo";
import userProfile from "/imgs/userImg.png";

let userProfileInfo = {
  avatar: userProfile,
  name: "adela parkson",
  jobPosition: "product designer",
  posts: 17,
  followers: 9.7,
  following: 274,
};

let userInfo = {
  education: "stanford university",
  Languages: "English, Spanish,italian",
  department: "product design",
  workHistory: "google, facebook",
  organization: "simmmple web LLC",
  birthday: "20 July 1986",
};

const projects = [
  {
    name: "technology behind the blockchain",
    img: "/imgs/project1.png",
  },
  {
    name: "greatest way to good economy",
    img: "/imgs/project2.png",
  },
  {
    name: "most essential tips for burnout",
    img: "/imgs/project3.png",
  },
];

export default function Profile() {
  return (
    <div className="grid lg:grid-cols-12 gap-5">
      <div className="xl:col-span-5 col-span-6">
        <UserInfo user={userProfileInfo} />
      </div>
      <div className="xl:col-span-3 col-span-6">
        <Storage />
      </div>
      <div className="xl:col-span-4 col-span-6">
        <Uploader />
      </div>
      <div className="xl:col-span-4 col-span-6">
        <Projects projects={projects} />
      </div>
      <div className="xl:col-span-5 col-span-6">
        <GeneralInfo info={userInfo} />
      </div>
      <div className="xl:col-span-3 col-span-6">
        <Notifications />
      </div>
    </div>
  );
}
