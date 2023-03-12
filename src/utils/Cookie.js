const Cookie=async ()=>{
    const autho=req.headers.cookie
    const token=autho.split('=')[1]
    return token;
}
export default Cookie