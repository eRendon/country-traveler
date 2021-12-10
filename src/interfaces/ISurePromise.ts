export interface ISurePromise <T> {
  success: boolean
  data: T
  status: number
  headers?: {
    [key in string]: string
  }
}
