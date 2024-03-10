"use server";

import { signup, signIn } from "../auth";
import { AuthError } from "next-auth";

export async function authenticate(formData: FormData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function addUserAction(formData: FormData) {
  try {
    console.log("formData:", formData);
    await signup(formData);
  } catch (error) {
    throw error;
  }
}