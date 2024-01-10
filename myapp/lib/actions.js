import prisma from "@prisma/client"
import { NextResponse } from "next/server";
import getServerUser from "./getServerUser";


export const addExercise = async (formData) => {
    const user = await getServerUser()
    console.log("user " + user)
    const { name, desc, duration, mood, color, date } =
    Object.fromEntries(formData);
    try {
        
    } catch (error) {
        throw new Error("Failed To Create Exercise " + error)
    }
}