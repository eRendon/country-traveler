import Auth from './request/auth'
import User from './request/user'
import Tour from './request/traveler/tour'
import Files from '@/api-client/request/traveler/file'
import Agency from "@/api-client/request/traveler/agency";

export const authRequest = new Auth()
export const userRequest = new User()
export const tourRequest = new Tour()
export const filesRequest = new Files()
export const agencyRequest = new Agency()