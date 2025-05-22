import DB from "@/types/db";
import { createContext } from "react";

const LandingPageDataContext = createContext<DB.Design>({
  hero_title: "",
  hero_slogan: "",
  who_we_are_title: "",
  who_we_are_info: "",
  who_we_are_card_1_title: "",
  who_we_are_card_1_info: "",
  who_we_are_card_2_title: "",
  who_we_are_card_2_info: "",
  who_we_are_card_3_title: "",
  who_we_are_card_3_info: "",
  who_we_are_card_4_title: "",
  who_we_are_card_4_info: "",
  our_products_title: "",
  out_products_info: "",
  our_products_item_1_title: "",
  our_products_item_1_info: "",
  our_products_item_2_title: "",
  our_products_item_2_info: "",
  our_products_item_3_title: "",
  our_products_item_3_info: "",
  testimonials_title: "",
  testimonials_info: "",
  question_title: "",
  question_info: "",
  call_to_action_title: "",
  call_to_action_info: "",
});

export default LandingPageDataContext;
