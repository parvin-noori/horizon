import GeneralInfo from "../../features/profile/GeneralInfo";
import Notifications from "../../features/profile/Notifications";
import Projects from "../../features/profile/Projects";
import Storage from "../../features/profile/Storage";
import Uploader from "../../features/profile/Uploader";
import UserInfo from "../../features/profile/UserInfo";
import { useGetData } from "../../hooks/useGetData";

export type Project = {
  name: string;
  img: string;
};

export type UserInfo = {
  email: string;
  avatar: string;
  name: string;
  jobPosition: string;
  posts: number;
  followers: number;
  following: number;
  education: string;
  languages: string;
  department: string;
  workHistory: string;
  organization: string;
  birthday: string;
  projects: Project[];
};

export interface UseGetDataResult {
  data?: { userInfo?: UserInfo };
}

export default function Profile() {
  const { data }: UseGetDataResult = useGetData();
  const { userInfo } = data ?? {};

  return (
    <div className="grid lg:grid-cols-12 gap-5">
      <div className="xl:col-span-5 col-span-6">
        <UserInfo user={userInfo} />
      </div>
      <div className="xl:col-span-3 col-span-6">
        <Storage />
      </div>
      <div className="xl:col-span-4 col-span-6">
        <Uploader />
      </div>
      <div className="xl:col-span-4 col-span-6">
        <Projects userInfo={userInfo} />
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
