

export const sendEmail = async (formData: FormData)=>{
    const email = formData.get('email');

    const message = formData.get('message');

    let data;

    try {
        data = await fetch('localhost:8080/api/contact/',{})
    }catch(e){
        console.error(e)
    }

}