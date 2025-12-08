/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { redirect } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { Button, FormControl, FormSelect } from "react-bootstrap";
import * as client from "../client";
import { RootState } from "../../store";
export default function Profile() {
   const [profile, setProfile] = useState<any>({});
 const dispatch = useDispatch();
 const { currentUser } = useSelector((state: RootState) => state.accountReducer);
 const updateProfile = async () => {
    const updatedProfile = await client.updateUser(profile);
    dispatch(setCurrentUser(updatedProfile));
  };

 const fetchProfile = () => {
   if (!currentUser) return redirect("/Account/Signin");
   setProfile(currentUser);
 };
 const signout = async () => {
  await client.signout();
   dispatch(setCurrentUser(null));
   redirect("/Account/Signin");
 };
 
 useEffect(() => {
  const fetchUser = async () => {
    try {
      const user = await client.profile();
      dispatch(setCurrentUser(user));
    } catch (error: any) {
      // 401 means not logged in - this is normal, don't treat it as an error
      if (error.response?.status === 401) {
        console.log("User not logged in");
        dispatch(setCurrentUser(null));
      } else {
        // Other errors should be logged
        console.error("Error fetching user profile:", error);
      }
    }
  };
  fetchUser();
}, [dispatch]);

  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      {profile && (
       <div>
      <FormControl placeholder="username" id="wd-username" className="mb-2"
      defaultValue={profile.username}
           onChange={(e) => setProfile({ ...profile, username: e.target.value }) }/>
      <FormControl placeholder="password" type="password"
             id="wd-password" className="mb-2"
             defaultValue={profile.password}
           onChange={(e) => setProfile({ ...profile, password: e.target.value }) }/>
      <FormControl placeholder="First Name" id="wd-firstname" className="mb-2"
      defaultValue={profile.firstName}
           onChange={(e) => setProfile({ ...profile, firstName: e.target.value }) }/>
      <FormControl placeholder="Last Name" id="wd-lastname" className="mb-2"
      defaultValue={profile.lastName}
           onChange={(e) => setProfile({ ...profile, lastName: e.target.value }) }/>
      <FormControl type="date" id="wd-dob" className="mb-2"
       defaultValue={profile.dob}
           onChange={(e) => setProfile({ ...profile, dob: e.target.value })}/>
      <FormControl type="email" id="wd-email" className="mb-2"
      defaultValue={profile.email}
           onChange={(e) => setProfile({ ...profile, email: e.target.value })}/>
      <FormSelect defaultValue="FACULTY" id="wd-role" className="mb-2"
      onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
        <option defaultValue="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </FormSelect>
      <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </button>
      <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
           Sign out
         </Button>
      </div>
     )}
    </div>
);}
