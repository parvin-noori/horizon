export interface Project {
  name: string;
  img: string;
}

export interface UserInfoProps {
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
}
export interface UserInfoType {
  user?: UserInfoProps | undefined;
  info?: UserInfoProps | undefined;
}
