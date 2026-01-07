export interface SidebarItems {
  name: string;
  key: string;
  to?: string;
  icon: React.ReactNode;
  action?: string;
}

export interface UserInfo {
  name: string;
  email: string;
  jobPosition: string;
  followers: number;
  posts: number;
  following: number;
  avatar: string;
}

export interface UserInfoResponse {
  userInfo?: UserInfo;
}
