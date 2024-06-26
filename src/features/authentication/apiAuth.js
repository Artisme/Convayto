import supabase from "../../services/supabase";

export async function signup({ email, password, fullname, username }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullname,
        username,
        bio: "Hay there, I'm using ConverseMe!",
      },
    },
  });

  if (error) {
    if (error.message === "Anonymous sign-ins are disabled") {
      throw new Error("Please provide your email address to sign up");
    } else {
      throw new Error(error.message);
    }
  }

  return data;
}

export async function signin({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    if (error.status === 400) {
      throw new Error(
        "Incorrect email or password. Please try again or click Forgot password to reset it.",
      );
    } else {
      throw new Error(error.message);
    }
  }

  return data;
}

export async function signout() {
  let { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getSession();

  if (error) throw new Error(error.message);
  return data;
}

////////////

export async function getUserById(friendUserId) {
  if (!friendUserId) return;

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", friendUserId);

  if (error) {
    throw new Error(error.message);
  }

  return data[0];
}
