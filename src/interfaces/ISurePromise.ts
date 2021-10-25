export interface ISurePromise <T, P> {
  success: boolean
  data: T
  status: number
  headers?: {
    [key in string]: string
  }
}
