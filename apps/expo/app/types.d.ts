import { config } from '@my/config'

export type Conf = typeof config

declare module '../../packages/ui' {
  interface TamaguiCustomConfig extends Conf {}
}
