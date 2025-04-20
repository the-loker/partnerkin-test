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
} as const;
export type TBannerProps = ExtractPropTypes<typeof bannerProps>;
