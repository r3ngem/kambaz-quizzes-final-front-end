/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button, FormSelect } from "react-bootstrap";
import * as client from "../client";
export default function Signup() {
  const [user, setUser] = useState<any>({});
  const dispatch = useDispatch();
  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    redirect("/Profile");
  };

  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <FormControl placeholder="username" id="wd-username" className="mb-2" value={user.username} 
      onChange={(e) => setUser({ ...user, username: e.target.value })} />
      <FormControl placeholder="password" type="password" id="wd-password" className="mb-2" value={user.password}
       onChange={(e) => setUser({ ...user, password: e.target.value })} /> <br />
       <h5>User Role</h5>
      <FormSelect id="wd-group">
            <option defaultChecked>
            STUDENT</option>
            <option>
            FACULTY</option>
      </FormSelect><br />
      <button   onClick={signup} className="wd-signup-btn btn btn-primary mb-2 w-100"> Sign up </button>
      <br />
      <Link  href="/Account/Signin" className="wd-signin-link"> Sign in </Link>
    </div>
);}
