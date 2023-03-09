const myCookie=(res)=>{
    const cookie = res.getHeaders()["set-cookie"].split(";")[0].split("=")[1];
    return (cookie);
}

export default myCookie;