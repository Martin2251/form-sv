import {z} from 'zod'


const registerSchema = z.object({
    name: z.string().min(1).max(64).trim(),
    email: z.string().min(1).max(64).email(),
    password:z.string().min(6).max(12),
})



export const actions = {

    default: async ({request}:any) =>{
        const formData = Object.fromEntries(await request.formData());
  


        try {
            const result = registerSchema.parse(formData)
            console.log('success')
            console.log(result)
        } catch (err) {
            console.log(err)
        }
    }
}



