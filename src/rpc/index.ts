import type { DevtoolsServerContext, ServerFunctions } from '../types'
import { setupGitRPC } from './git'

export function setupRPC(ctx: DevtoolsServerContext): ServerFunctions {
  return {
    getOptions() {
      return ctx.options
    },

    ...setupGitRPC(ctx),

    async reset() {
      const ws = await ctx.wsServer
      ws.send('nuxt-mongoose:reset')
    },
  }
}
