export interface Member {
  name: string;
  role: string;
  avatar: string;
}

export interface TeamMembersResponse {
  teamMembers?: Member[];
}
