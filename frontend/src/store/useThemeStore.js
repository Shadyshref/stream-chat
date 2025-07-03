import {create} from"zustand"

export const useThemeStore= create((set)=>({
   theme: localStorage.getItem("streamify-themes"||"coffee"),
   setTheme:(theme)=>{
      localStorage.setItem("streamify-themes",theme)
      set({theme})
   }
   
}))