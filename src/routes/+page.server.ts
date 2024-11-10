export const actions = {

    default: async ({request}:any) =>{
        const formData = Object.fromEntries(await request.formData());
        console.log(formData)
    }
}



