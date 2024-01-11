'use server'
import getServerUser from "./getServerUser";
import prisma from "@/lib/connect"

export const getExercises = async() => {
    try {
        const exercises = await prisma.exercise.findMany({})
        return exercises
    } catch (error) {
        throw new Error("Failed to fetch workouts! " + error);

    }
}