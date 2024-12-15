import { Client, Account, ID } from "appwrite"; // importing all the service objects

import config from "../config/config.js"; // importing the .env variables

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(config.appwriteUrl).setProject(config.projectId); // connecting the database for client registration
    this.account = new Account(this.client); // creating new account using the client
  }

  // method to create new account a.k.a. Sign Up method
  async createAccount({ email, password, name }) {
    // why did we not created it directly like in appwrite documentation?
    // suppose you are now a Full Stack Developer and created your own database. And you want to shift authentication to your database. You will just change the try catch block and made some modification in the constructor and you will be set to go. You are not dependent on appwrite.
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      ); // this is an appwrite function to create an account. The first parameter should be a Unique ID.

      if (userAccount) {
        // call another method, which if the user has successfully sign up, then redirect it to log in
        return this.logIn({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      // if there is an error occured when creating the account, throw an error to the user.
      console.log("Appwrite service error :: createAccount :: error :", error);
    }
  }

  // method to open an existing account a.k.a. Log In Method
  async logIn({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite service error :: logIn :: error :", error);
    }
  }

  // method to check if the user is logged in or not a.k.a. GetUser method
  async getCurrentUser() {
    try {
      return await this.account.get(); // checks the user login status
    } catch (error) {
      console.log("Appwrite service error :: getCurrentUser :: error :", error);
    }

    return null; // returning null if there is a problem in the appwrite get service
  }

  // method to close the existing account a.k.a. Log out Method
  async logOut() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service error :: logOut :: error :", error);
    }
  }
}

const authService = new AuthService();

export default authService;
