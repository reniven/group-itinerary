"use server";

import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


export async function signUp(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if(error) {
    // Handle error, e.g., show an error message
    console.error("Sign up error: ", error.message);
  } else {
    // Redirect to a confirmation page or show a success message 
    redirect("/auth/confirm")
  }
}

export async function signUpOAuth() {

}

export async function loginPassword(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string;

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    // Handle error, e.g., show an error message
    console.error("Login error: ", error.message);
  } else {
    // Redirect
    redirect("/");
  }
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();

  return redirect("/login");
}