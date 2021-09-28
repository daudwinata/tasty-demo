// import {Fragment} from 'react';

// import {useRouter} from 'next.router';
// import { getEventById } from '../../data-recipe';

// function RecipeDetail () {
//     const router = useRouter();

//     const recipeId = router.query.eventId;
//     const recipe = getEventById(recipeId);

//     if(!recipe){
//         return <p>No Recipe found!</p>
//     }

//     return (
//             <Fragment>
//                 <h1>The recipe detail page</h1>
//                 <p>{recipe.category}</p>
//             </Fragment>
//     )
// }

// export default RecipeDetail;