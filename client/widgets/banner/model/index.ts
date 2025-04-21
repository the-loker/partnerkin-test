import type { ExtractPropTypes } from 'vue';

export const bannerProps = {
  width: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  closable: {
    type: Boolean,
    default: false,
  },
} as const;
export type TBannerProps = ExtractPropTypes<typeof bannerProps>;
