import * as Realm from "realm-web";
import { environments } from "../environments/environments";

const { API_KEY, APP_ID } = environments;

const app = new Realm.App(APP_ID);

export async function getValidAccessToken() {
  if (!app.currentUser) {
    const credentials = Realm.Credentials.apiKey(API_KEY);
    await app.logIn(credentials);
  } else {
    //await app.currentUser.refreshCustomData();
  }
  console.log("getvalid içinde accessToken", app.currentUser.accessToken);
  return app.currentUser.accessToken;
}
