const errFunc = (res, message, status) => {
    return res.status(status).json({
      message: message
    });
  };
  
  export default errFunc

