import axios, { AxiosInstance } from 'axios'
import { pick } from 'lodash'

import { API as config, app as App } from 'config'
import { toasts } from 'utils/toasts'

type Response = { success: boolean; status: number; data: Record<string, any> }
type DelParams = { endpoint: string; data?: Record<string, any> }
type GetParams = { endpoint: string; params?: Record<string, any> }
type PostParams = { endpoint: string; payload?: Record<string, any> }

interface HTTPProvider {
  get(_settings: GetParams): Promise<Response>
  post(_settings: PostParams): Promise<Response>
  put(_settings: PostParams): Promise<Response>
  patch(_settings: PostParams): Promise<Response>
}

export class HTTP implements HTTPProvider {
  private $axios: AxiosInstance

  constructor() {
    this.$axios = axios.create(config)
  }

  private async handle(req): Promise<Response> {
    try {
      const res = await req
      if (App.env !== 'production') console.log(res)
      return { success: true, status: res.status, data: res.data }
    } catch (ex) {
      if (App.env !== 'production') console.dir(ex)

      if (!ex.response) {
        toasts.generalFail()
        return { success: false, status: -1, data: ex }
      }

      if (ex.response.status === 500) toasts.generalFail()
      return { ...pick(ex.response, 'data', 'status'), success: false }
    }
  }

  async get({ endpoint, params = {} }: GetParams): Promise<Response> {
    const _params = Object.fromEntries(
      Object.keys(params)
        .filter(key => params[key])
        .map(key => [key, params[key]])
    )
    const req = this.$axios.get(endpoint, { params: _params })
    return await this.handle(req)
  }

  async post({ endpoint, payload = {} }: PostParams): Promise<Response> {
    const req = this.$axios.post(endpoint, payload)
    return await this.handle(req)
  }

  async put({ endpoint, payload = {} }: PostParams): Promise<Response> {
    const req = this.$axios.put(endpoint, payload)
    return await this.handle(req)
  }

  async patch({ endpoint, payload = {} }: PostParams): Promise<Response> {
    const req = this.$axios.patch(endpoint, payload)
    return await this.handle(req)
  }

  async delete({ endpoint, data }: DelParams): Promise<Response> {
    const req = this.$axios.delete(endpoint, { data })
    return await this.handle(req)
  }
}
