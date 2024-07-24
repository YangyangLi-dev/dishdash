'use server';

import { revalidatePath } from "next/cache";

export async function shareMeal(preState,formData){
    const meal = {

    };
    revalidatePath('/meals');
    redirect('/meals');
}