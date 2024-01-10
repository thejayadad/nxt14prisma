'use server'
import getServerUser from "./getServerUser";
import prisma from "@/lib/connect"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export const addExercise = async (formData) => {
    const user = await getServerUser()
    const email = user.email
    console.log("user " + email)
    const { name, desc, duration, mood, color, date } =
    Object.fromEntries(formData);
    
    try {
        const newExercise = await prisma.exercise.create({
            data: {
              name,
              desc,
              mood,
              duration,
              color,
              date,
              userEmail: email, 
            },
          });
          return newExercise;
    } catch (error) {
        throw new Error("Failed To Create Exercise " + error)
    }
    revalidatePath("/")
    redirect("/")
}