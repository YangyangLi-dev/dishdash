import { notFound } from "next/navigation";

export async function generateMetadata({params}){
    // const meal = getMeal(params.mealSlug);
    // if(!meal){
    //     notFound();
    // }
    // return {
    //     title:meal.title,
    //     discription:meal.summary,
    // }
}

export default function MealDetailsPage({params}){
    return (
        <>
            <header>

            </header>
            <main>
                
            </main>
        </>
    );
}