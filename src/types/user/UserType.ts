import type { JobType } from "../jobs/jobTypes";

export type UserType = {
    id?:string,
  fullName: string;
  email: string;
  password: string;
  role: string;
  isFirstLogin: boolean;
  interestedCategories: string[];
  savedPosts?: JobType[];
    appliedPosts?: JobType[];
};
