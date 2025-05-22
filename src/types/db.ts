import Strapi from "./strapi";

/* eslint-disable @typescript-eslint/no-namespace */
namespace DB {
  export interface StrapiBaseDb {
    id: number;
    created_at: string;
    updated_at: string;
    published_at: string;
    locale: string;
  }

  export interface Question extends StrapiBaseDb {
    title: string;
    description: string;
    group: string;
  }
  export interface Design extends StrapiBaseDb {
    hero_title: string;
    hero_slogan: string;
    hero_background: Strapi.StrapiUploadFile;
    who_we_are_title: string;
    who_we_are_info: string;
    who_we_are_card_1_title?: string;
    who_we_are_card_1_info?: string;
    who_we_are_card_2_title?: string;
    who_we_are_card_2_info?: string;
    who_we_are_card_3_title?: string;
    who_we_are_card_3_info?: string;
    who_we_are_card_4_title?: string;
    who_we_are_card_4_info?: string;
    our_products_title: string;
    out_products_info: string;
    our_products_item_1_title?: string;
    our_products_item_1_info?: string;
    our_products_item_2_title?: string;
    our_products_item_2_info?: string;
    our_products_item_3_title?: string;
    our_products_item_3_info?: string;
    testimonials_title: string;
    testimonials_info: string;
    question_title: string;
    question_info: string;
    call_to_action_title: string;
    call_to_action_info: string;
  }
  export interface Testimonial extends StrapiBaseDb {
    comment: string;
    persona: string;
    charge: string;
  }
}

export default DB;
