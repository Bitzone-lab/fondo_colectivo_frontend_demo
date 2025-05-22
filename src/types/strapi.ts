/* eslint-disable @typescript-eslint/no-namespace */
namespace Strapi {
  export interface StrapiResponse<T> {
    data: T;
    meta: {
      pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
      };
    };
  }

  export interface StrapiError {
    error: {
      status: number;
      name: string;
      message: string;
      details?: string;
    };
  }
  export interface StrapiUploadFile {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
      thumbnail: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        width: number;
        height: number;
        size: number;
        url: string;
      };
      small?: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        width: number;
        height: number;
        size: number;
        url: string;
      };
      medium?: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        width: number;
        height: number;
        size: number;
        url: string;
      };
      large?: {
        name: string;
        hash: string;
        ext: string;
        mime: string;
        width: number;
        height: number;
        size: number;
        url: string;
      };
    };
    hash?: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
  }
}
export default Strapi;
