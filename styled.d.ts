import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {    
    colors: {
      body: string;
      sidebar: string;
      primary: string;
      primaryLight: string;
      toggle: string;
      text: string;
      info: string;
      error: string;
      warning: string;
      success: string;
    },
    transition:{
      tran02: string
      tran03: string
      tran04: string
      tran05: string
    },
    boxShadow:{
      shadow01: string;
      shadow02: string;
    },
    borderRadius:{
      radius01: string
    }
  }
}
