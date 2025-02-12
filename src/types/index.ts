import type { Nuxt } from 'nuxt/schema'
import type { WebSocketServer } from 'vite'
import type { ModuleOptions } from '../module'
import type {Response, StatusResult} from 'simple-git'

export interface ServerFunctions {
  getOptions(): ModuleOptions
  reset(): void

  // Git RPC
  gitStatus(): Response<StatusResult>
}

export interface ClientFunctions {
}

export interface DevtoolsServerContext {
  nuxt: Nuxt
  options: ModuleOptions
  wsServer: Promise<WebSocketServer>
}
