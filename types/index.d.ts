import Vue from "vue";

interface APICloud {
  toast(params: { msg: string; duration?: number; location?: string });
}

interface $APICloud {}

declare module "vue/types/vue" {
  interface Vue {
    api: APICloud;
    $api: $APICloud;
  }
}
