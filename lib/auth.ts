"use server";

import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


export async function signUp(formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if(error) {

  } else {

  }
}

export async function signUpOAuth() {

}

export async function loginPassword(formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function loginOAuth(formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithOAuth({
    email,
    password,
  });
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
}