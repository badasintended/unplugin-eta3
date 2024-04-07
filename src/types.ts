import type { EtaConfig } from "eta/dist/types/config";

export interface Options {
  /**
   * What files to include.
   * @default [/.eta$/]
   */
  include?: RegExp[]

  /**
   * The Eta config to use.
   */
  eta?: Partial<EtaConfig>
}

