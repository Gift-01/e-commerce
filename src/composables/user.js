// import store from "@/store";

export function useUser() {
  return JSON.parse(localStorage.getItem("loggedInUser"));
}
